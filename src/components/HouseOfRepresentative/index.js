import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class HouseOfRepresentative extends Component {
  render() {
    return (
         <Grid>
            <Row size={80} style={style.districtsContainer}>
               <Text>This is house of representative page</Text>   
            </Row>
         </Grid>  
    );
  }
}

export default HouseOfRepresentative;