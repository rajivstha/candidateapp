import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator, PermissionsAndroid, Platform} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import {Header, Footer} from '../UI';
import {provinces, geoQuery}  from '../GQL';
import { graphql, compose } from 'react-apollo';
import {connect} from 'react-redux';
import ProvinceItem from './ProvinceItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import apolloClient from '../../setup/apolloClient';
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

                        // let location = {
                        //         lat: position.coords.latitude,
                        //         lng: position.coords.longitude
                        //     }
                        // apolloClient.query({
                        //     query: geoQuery,
                        //     variables: {
                        //         location: location
                        //     }
                        // }).then((data)=>{
                        //     console.log(data);
                        // })
                        
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
		console.log(this.state.location);
		return (
			<Grid>
        {this.props.data.loading &&
          <View style={style.loading}>
            <ActivityIndicator size="large" color="#036cae" />
          </View>
        }
        <Header/>
				<Row size={8}>
					<TouchableOpacity onPress={this.requestLocationPermission.bind(this)}>
						<View style={style.candidatesByLocationContainer}>
							<Text>
								<Icon name="location-arrow" size={24}/>
							</Text>
							<Text>Find Candidates On My Location</Text>
						</View>
					</TouchableOpacity>
				</Row>
				<Row size={70} style={style.provinceContainer}>
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