import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import PAHORcandidates from '../PAHORcandidates';
import I18n from '../../locale';
import {connect} from 'react-redux';

class ProvincialAssembly extends Component {
  
  render() {
    let title = this.props.activeDistrict.enLabel;
    if(this.props.locale === 'np' && this.props.activeDistrict.label){
        title = this.props.activeDistrict.label? this.props.activeDistrict.label : this.props.activeDistrict.enLabel
    }
	return (
	<Grid>
		<Row size={7}>
			<Text style={style.title}>{title} - {I18n.t('provincial_assembly', {locale: this.props.locale})}</Text>
		</Row>
		<Row size={73}>
			<PAHORcandidates candidateType={'provinceAssemblyCandidates'}/> 
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

export default connect(mapStateToProps)(ProvincialAssembly);