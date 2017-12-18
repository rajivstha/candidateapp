import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import Header from '../UI/header';
import Footer from '../UI/footer';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
let province = {
    id: '00001',
    name: 'Province 1',
    image: require('../../assets/img/00001.png')
};
let districts = [{
    id: '01',
    name: 'Taplejung',
},
{
    id: '02',
    name: 'Panchthar',
},
{
    id: '03',
    name: 'Illam',
},
{
    id: '04',
    name: 'Jhapa',
},
{
    id: '05',
    name: 'Sankhuwasabha',
},
{
    id: '06',
    name: 'Terhathum',
},
{
    id: '07',
    name: 'Bhojpur',
},
{
    id: '08',
    name: 'Dhankuta',
},
];
class Districts extends Component {
state = {
        province : province,
        districts: districts
};
  render() {
    return (
         <Grid>
            <Header/>
            <Row size={80} style={style.districtsContainer}>
                <View style={style.provinceContainer}>
                    <View style={style.provinceImageContainer}><Image source={this.state.province.image}/></View>
                    <View style={style.provinceTextContainer}>
                        <Text style={style.provinceText}>{this.state.province.name}</Text>
                        <Text style={style.provinceSubText}>Districts Under {this.state.province.name} State</Text>
                    </View>
                </View>
                <ScrollView>
                <View style={style.districtsListContainer}>
                {console.log(this.state.districts)}
                {this.state.districts.length > 0 &&
                        <TouchableOpacity onPress={() => Actions.localbodies()}><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                    
                    // this.state.districts.map((district,index)=>{ 
                    //     <TouchableOpacity><View style={style.districtItem}><Text style={style.districtText}>Taplejung</Text></View></TouchableOpacity>
                    // }) 
                }      
                </View>
                </ScrollView>        
            </Row>
         </Grid>  
    );
  }
}

export default Districts;