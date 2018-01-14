import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import PAHORcandidates from '../PAHORcandidates'
import I18n from '../../locale';

class HouseOfRepresentative extends Component {
	render() {
		return (
			<Grid>
				<Row size={7}>
					<Text style={style.title}>{I18n.t('hor', {locale: this.props.locale})}</Text>
				</Row>
				<Row size={73}>
					<PAHORcandidates candidateType={'houseOfRepresentativeCandidates'}/> 
				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		locale: state.locale,
		activeDistrict: state.activeDistrict
	}
};

export default HouseOfRepresentative;