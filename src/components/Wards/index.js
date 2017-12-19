import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MyList}  from '../UI';

let localbodies = [
  {
    id: '00001',
    name: 'Ward No 1',
  },
  {
    id: '00001',
    name: 'Ward No 2',
  },
  {
    id: '00001',
    name: 'Ward No 3',
  },
  {
    id: '00001',
    name: 'Ward No 4',
  },
  {
    id: '00001',
    name: 'Ward No 5',
  },
  {
    id: '00001',
    name: 'Ward No 6',
  },
  {
    id: '00001',
    name: 'Ward No 7',
  },
  {
    id: '00001',
    name: 'Ward No 8',
  }
  
]
class Wards extends Component {
  state = {
    localbodies: localbodies,
  };
  _localBodiesKeyExtractor(item, index) {
    return item.id; 
  }
  _renderLocalBody({item}) {
    return (
        <MyList localbody={item}/>
    )
  }
  render() {
    return (
         <Grid>
            <Row size={80}>
                <FlatList
                  data={this.state.localbodies}
                  keyExtractor={this._localBodiesKeyExtractor}
                  renderItem={this._renderLocalBody}
                />
            </Row>
         </Grid>  
    );
  }
}

export default Wards;