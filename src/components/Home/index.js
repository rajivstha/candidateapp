import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import {Header, Footer} from '../UI';
import {provinces}  from '../GQL';
import { graphql, compose } from 'react-apollo';
import {connect} from 'react-redux';
import ProvinceItem from './ProvinceItem';
import style from './style';

class Home extends Component {
	_provinceKeyExtractor(item, index) {
		return item._id; 
	}
	render() {
		return (
			<Grid>
				<Header/>
				<Row size={78} style={style.provinceContainer}>
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