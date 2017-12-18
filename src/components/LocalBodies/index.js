import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Header from '../UI/header';
import Footer from '../UI/footer';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class LocalBodies extends Component {
  render() {
    return (
         <Grid>
            <Header/>
            <Row size={80} style={style.districtsContainer}>
               <Text>This is localbody page</Text>   
            </Row>
         </Grid>  
    );
  }
}

export default LocalBodies;