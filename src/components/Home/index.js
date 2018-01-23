import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator, PermissionsAndroid, Platform} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import {Header, Footer} from '../UI';
import {provinces}  from '../GQL';
import { graphql, compose } from 'react-apollo';
import {connect} from 'react-redux';
import ProvinceItem from './ProvinceItem';
import style from './style';

class Home extends Component {
	state = {
		loading: true,
		location: {
			lat: null,
			lng: null
		}
	}
	_provinceKeyExtractor(item, index) {
		return item._id; 
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.provinces.provinces){
			this.setState({
				loading: false
			})
		}
	}
	
	async requestLocationPermission (){
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
				{this.state.loading && 
				<View style={style.loading}>
					<ActivityIndicator size="large" color="#036cae" />
				</View>	
				}
				<Header/>
				<Row size={8}>
					<View>
						<TouchableOpacity onPress={this.requestLocationPermission.bind(this)}>
							<Text>Find Candidates On My Location</Text>
						</TouchableOpacity>
					</View>
				</Row>
				<Row size={70} style={style.provinceContainer}>
					<FlatList
					data={this.props.provinces.provinces}
					keyExtractor={this._provinceKeyExtractor}
					extraData = {this.props.locale}
					renderItem={({item}) => {
						return (
							<ProvinceItem locale={this.props.locale} 
							item={item}/>
						)
					}}
					/>
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
  graphql(provinces, {name : 'provinces'})
)(connect(mapStateToProps)(Home));