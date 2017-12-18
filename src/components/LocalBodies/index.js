import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MyList}  from '../UI';

let localbodies = [
  {
    id: '00001',
    name: 'Aathrai Tribeni Rural Municipality',
  }
  
]
class LocalBodies extends Component {
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

export default LocalBodies;