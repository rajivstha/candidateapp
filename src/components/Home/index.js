import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator, PermissionsAndroid, Platform} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import {Header, Footer} from '../UI';
import {provinces, geoQuery}  from '../GQL';
import { graphql, compose } from 'react-apollo';
import {connect} from 'react-redux';
import ProvinceItem from './ProvinceItem';
import Icon from 'react-native-vector-icons/Ionicons';

import style from './style';

class Home extends Component {
	state = {
		location: {
			lat: null,
			lng: null
		}
	}

	_provinceKeyExtractor(item, index) {
		return item._id; 
	}

	async requestLocationPermission (){
		if(Platform.OS === 'android'){
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
				  'title': 'Access to Location.',
				  'message': 'CandidateApp needs access to your Location ' +
				  'to show candidates at your location.'
				}
			)
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				navigator.geolocation.getCurrentPosition(
				  (position) => {
                        // this.setState({
                        // 	location: {
                        // 		lat: position.coords.latitude,
                        // 		lng: position.coords.longitude
                        // 	}
                        // });

                        let latLng = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            }
                        // apolloClient.query({
                        //     query: geoQuery,
                        //     variables: {
                        //         location: location
                        //     }
                        // }).then((data)=>{
                        //     console.log(data);
                        // })
                        Actions.geoLocate({latLng: latLng});
                        
				  },
				  (error) => {
					  console.log(error);
				  }
				);
			}
		}else{
			navigator.geolocation.getCurrentPosition(
				(position) => {
				  this.setState({
					  location: {
						  lat: position.coords.latitude,
						  lng: position.coords.longitude
					  }
				  });
				},
				(error) => {
					console.log(error);
				}
			  );
		}
		
		
	}

	render() {
		return (
			<Grid>
        {this.props.data.loading &&
          <View style={style.loading}>
            <ActivityIndicator size="large" color="#036cae" />
          </View>
        }
        <Header/>
				<Row size={10}>
          <View style={{padding: 15, flex: 1}}>
					<TouchableOpacity style={style.candidatesByLocationButton} onPress={this.requestLocationPermission.bind(this)}>
							<Text>
								<Icon name="ios-pin" size={25} color="#FFF"/>
							</Text>
							<Text style={{fontSize: 16, paddingLeft: 15, color: '#FFF'}}>Geo Locate Elected Candidates</Text>
          </TouchableOpacity>
          </View>
				</Row>
				<Row size={70} style={style.provinceContainer}>
          <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', padding: 10}}>Provinces</Text>
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
				<Footer/>
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