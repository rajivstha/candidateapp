import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import LocalBodiesList from './LocalBodiesList';
import I18n from '../../locale';

class LocalBodies extends Component {

	render() {
		let provinceTitle = this.props.activeProvince.enLabel;
		if(this.props.locale === 'np' && this.props.activeProvince.label){
			provinceTitle = this.props.activeDistrict.label? this.props.activeProvince.label : this.props.activeProvince.enLabel
		}
		let title = this.props.activeDistrict.enLabel;
		if(this.props.locale === 'np' && this.props.activeDistrict.label){
			title = this.props.activeDistrict.label? this.props.activeDistrict.label : this.props.activeDistrict.enLabel
		}
		return (
			<Grid>
				<Row size={10}>
					<View>
						<Text style={style.title}>{provinceTitle} - {title}</Text>
					</View>
				</Row>
				<Row size={90}>
					<LocalBodiesList locale={this.props.locale} activeDistrict={this.props.activeDistrict} activeProvince={this.props.activeProvince} />
				</Row>
			</Grid>  
		);
	}
}

const mapStateToProps = (state) => {
	return {
		locale: state.locale,
		activeDistrict: state.activeDistrict,
		activeProvince: state.activeProvince
	}
};

export default connect(mapStateToProps)(LocalBodies);

