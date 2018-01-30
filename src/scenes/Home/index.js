import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  PermissionsAndroid,
  Platform
} from 'react-native';
import {graphql, compose} from 'react-apollo';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import {provinces} from '../../GQL';
import ProvinceItem from './ProvinceItem';
import style from './style';
import I18n from "../../locale";

class Home extends Component {
  state = {
    locating: false,
    locationError: null
  }
  _provinceKeyExtractor(item, index) {
    return item._id;
  }

  async requestLocationPermission() {
    this.setState({
      locating: true,
      locatingError: null
    });
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Access to Location.',
          'message': 'CandidateApp needs access to your Location ' +
          'to show candidates at your location.'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              locating: false,
              locatingError: null
            });
            let location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            Actions.geoLocate({location: location});
          },
          (error) => {
            console.log(error);
            this.setState({
              locating: false,
              locatingError: error
            });
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000 },
        );
      }
    } else {
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            locating: false,
            locatingError: null
          });
          let location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
          Actions.geoLocate({location: location});
        },
        (error) => {
          console.log(error);
          this.setState({
            locating: false,
            locatingError: error
          });
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000 },
      );
    }
  }

  render() {
    return (
      <Grid>
        {this.props.data.loading &&
          <View style={style.loading}>
            <ActivityIndicator size="large" color="#036cae"/>
          </View>
        }
        <Row size={10}>
          <View style={{padding: 15, flex: 1}}>
            <TouchableOpacity style={style.candidatesByLocationButton}
                              onPress={this.requestLocationPermission.bind(this)}>
              {!this.state.locating && <Icon name="ios-pin" size={25} color="#FFF"/>}
              {this.state.locating && <ActivityIndicator color="#FFFFFF" />}
              <Text style={{fontSize: 16, paddingLeft: 15, color: '#FFF'}}>{I18n.t('geoLocateLabel', {locale: this.props.locale})}</Text>
            </TouchableOpacity>
            {this.state.locatingError && <Text style={{alignSelf: 'center'}}>Unable to get location</Text>}
          </View>
        </Row>
        <Row size={70} style={style.provinceContainer}>
          <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', padding: 10}}>{I18n.t('provinces', {locale: this.props.locale})}</Text>
          {this.props.data.error &&
            <Text>Something went wrong!</Text>
          }
          {this.props.data.provinces &&
            <FlatList
              data={this.props.data.provinces}
              keyExtractor={this._provinceKeyExtractor}
              extraData={this.props.locale}
              renderItem={({item}) => {
                return (
                  <ProvinceItem locale={this.props.locale}
                                item={item}/>
                )
              }}
            />
          }
        </Row>
        <Row size={7} style={style.footerContainer}>
          <TouchableOpacity onPress={() => Actions.aboutUs()}>
            <View style={style.footerContainer}>
              <Text style={style.footerText}>{I18n.t('about_us', {locale: this.props.locale})}</Text>
            </View>
          </TouchableOpacity>
        </Row>
      </Grid>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
};

export default compose(
  graphql(provinces)
)(connect(mapStateToProps)(Home));