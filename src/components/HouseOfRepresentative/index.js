import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import PAHORcandidates from '../PAHORcandidates'

class HouseOfRepresentative extends Component {
  
  render() {
	return (
       <PAHORcandidates candidateType={'houseOfRepresentativeCandidates'}/> 
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