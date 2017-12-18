import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Header from '../UI/header';
import Footer from '../UI/footer';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
let province = {
    id: '00001',
    name: 'Province 1',
    image: require('../../assets/img/00001.png')
};
class Districts extends Component {

  render() {
   state = {
        province : province
   };
  
   
    return (
        
         <Grid>
            <Header/>
            <Row size={80} style={style.districtsContainer}>
                <View style={style.provinceContainer}>
                    <View style={style.provinceImageContainer}><Image source={require('../../assets/img/00001.png')}/></View>
                    <View style={style.provinceTextContainer}>
                        <Text style={style.provinceText}>Province 1</Text>
                        <Text style={style.provinceSubText}>Districts Under Province 1 State</Text>
                    </View>
                </View>
                <View style={style.districtsListContainer}>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                        
                </View>
            </Row>
         </Grid>  
    );
  }
}

export default Districts;