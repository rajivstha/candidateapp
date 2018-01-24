import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {View, TouchableOpacity, Text} from 'react-native';
import { Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import I18n from '../../locale';
import style from './style';
class Footer extends Component {
  render() {
	return (
		<Row size={7} style={style.footerContainer}>
			<TouchableOpacity onPress={() => Actions.aboutUs()}>
				<View style={style.footerContainer}>
					<Text style={style.footerText}>{I18n.t('about_us', {locale: this.props.locale})}</Text>
				</View>
			</TouchableOpacity>   
		</Row>
	);
  }
}
const mapStateToProps = (state) => {
  return {
		locale: state.locale
  }
};
export default connect(mapStateToProps)(Footer);