import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class Wards extends Component {
  render() {
    return (
         <Grid>
            <Row size={80} style={style.districtsContainer}>
               <Text>This is ward page</Text>   
            </Row>
         </Grid>  
    );
  }
}

export default Wards;