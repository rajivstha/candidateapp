import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {View, TouchableOpacity, Text} from 'react-native';
import { Actions} from 'react-native-router-flux';
import style from './style';
class Header extends Component {
  render() {
    return (
            <Row size={15} style={style.headerContainer}>
                <View style={style.logoContainer}>
                    <TouchableOpacity onPress={() => Actions.home()}>
                        <Text style={style.logo}>Candidates.Onnepal</Text>
                    </TouchableOpacity>   
                </View>
                <View style={style.languageContainer}>
                    <View style={style.languageItem}>
                    <TouchableOpacity>
                        <Text style={style.language}>EN</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={style.languageItem}>
                    <TouchableOpacity>
                        <Text style={style.language}>NP</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Row>
        
    );
  }
}

export default Header;