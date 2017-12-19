import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HeaderAbout} from '../UI'

class AddDetails extends Component {
  
  render() {
    return (
         <Grid>
           <HeaderAbout/>
            <Row size={80} style={style.addDetails}>
                <View style={style.addDetailsRow}><Text style={style.title}>Candidate Information</Text></View>
                <View style={style.addDetailsRow}>
                    <View style={style.formLabelContainer}><Text style={style.formLabel}>Email:</Text></View>
                    <View style={style.inputContainer}><TextInput style={style.inputStyle} underlineColorAndroid='transparent' /></View>
                </View>
                <View style={style.addDetailsRow}>
                    <View style={style.formLabelContainer}><Text style={style.formLabel}>PhoneNo:</Text></View>
                    <View style={style.inputContainer}><TextInput style={style.inputStyle} underlineColorAndroid='transparent' /></View>
                </View>
                <View style={style.addDetailsRow}>
                    <View style={style.formLabelContainer}><Text style={style.formLabel}>Address:</Text></View>
                    <View style={style.inputContainer}><TextInput style={style.inputStyle} underlineColorAndroid='transparent' /></View>
                </View>
                <View style={style.addDetailsRow}>
                    <View style={style.formLabelContainer}><Text style={style.formLabel}>Bio:</Text></View>
                    <View style={style.inputContainer}><TextInput style={style.inputStyle} underlineColorAndroid='transparent' /></View>
                </View>
                <View style={style.addDetailsRow}><Text style={style.title}>Social Links</Text></View>
                <View style={style.addDetailsRow}>
                    <View style={style.formLabelContainer}><Text style={style.formLabel}>Facebook:</Text></View>
                    <View style={style.inputContainer}><TextInput style={style.inputStyle} underlineColorAndroid='transparent' /></View>
                </View>
                <View style={style.addDetailsRow}>
                    <View style={style.formLabelContainer}><Text style={style.formLabel}>Twitter:</Text></View>
                    <View style={style.inputContainer}><TextInput style={style.inputStyle} underlineColorAndroid='transparent' /></View>
                </View>
            </Row>
             
         </Grid>  
    );
  }
}

export default AddDetails;