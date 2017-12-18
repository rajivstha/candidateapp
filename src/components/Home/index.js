import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import Header from '../UI/header';
import Footer from '../UI/footer';
import style from './style';
let provinces = [
  {
    id: '00001',
    name: 'province 1',
    image: require('../../assets/img/00001.png')
  },
  {
    id: '00002',
    name: 'province 2',
    image: require('../../assets/img/00001.png')
  },
  {
    id: '00003',
    name: 'province 3',
    image: require('../../assets/img/00001.png')
  },
  {
    id: '00004',
    name: 'province 4',
    image: require('../../assets/img/00001.png')
  },
  {
    id: '00005',
    name: 'province 5',
    image: require('../../assets/img/00001.png')
  },
  {
    id: '00006',
    name: 'province 6',
    image: require('../../assets/img/00001.png')
  },
  {
    id: '00007',
    name: 'province 7',
    image: require('../../assets/img/00001.png')
  },
  
]
class Home extends Component {
  state = {
    provinces: provinces,
  };
  _provinceKeyExtractor(item, index) {
    return item.id; 
  }
  _renderProvince({item}) {
    return (
        <TouchableOpacity onPress={() => Actions.districts()}>
            <View style={style.provinceItem}>
                <View style={style.provinceImageContainer}><Image source={item.image}/></View>
                <View style={style.provinceTextContainer}><Text style={style.provinceText}>{item.name}</Text></View>
            </View>
        </TouchableOpacity>
    )
  }
  render() {
    return (
         <Grid>
              <Header/>
             <Row size={78} style={style.provinceContainer}>
                  <FlatList
                  data={this.state.provinces}
                  keyExtractor={this._provinceKeyExtractor}
                  renderItem={this._renderProvince}
                  />
             </Row>
             <Footer/>
         </Grid>  
    );
  }
}

export default Home;