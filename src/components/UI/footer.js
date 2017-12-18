import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {View, TouchableOpacity, Text} from 'react-native';
import { Actions} from 'react-native-router-flux';
import style from './style';
class Footer extends Component {
  render() {
    return (
        <Row size={7} style={style.footerContainer}>
        <TouchableOpacity onPress={() => Actions.aboutUs()}>
            <View style={style.footerContainer}>
                    <Text style={style.footerText}>About Us</Text>
            </View>
        </TouchableOpacity>   
        </Row>
    );
  }
}

export default Footer;