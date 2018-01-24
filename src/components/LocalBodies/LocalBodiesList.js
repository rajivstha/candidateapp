import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {LocalBodyListItem}  from '../UI';
import {localBodies}  from '../GQL';
import { graphql, compose } from 'react-apollo';
import I18n from '../../locale';
import style from './style';

class LocalBodiesList extends Component {

  _localBodiesKeyExtractor(item, index) {
    return item._id;
  }

  render() {
    if(this.props.data.loading) {
      return (
        <View style={style.loading}>
          <ActivityIndicator size="large" color="#036cae" />
        </View>
      )
    }
    return (
         <FlatList
            data={this.props.data.localBodies.items}
            keyExtractor={this._localBodiesKeyExtractor}
            renderItem={({item}) => {
              return (
                <LocalBodyListItem activeDistrict={this.props.activeDistrict._id} locale={this.props.locale}
                               item={item} />
              )
            }}
          />
    );
  }
}

const LocalBodiesListWithData = graphql(localBodies, {
  options: ({activeDistrict}) => ({
    variables: {
      skip: 0,
      limit: 100,
      returnPagedData: true,
      districtID: activeDistrict._id
    }
  })
})(LocalBodiesList);

export default LocalBodiesListWithData;

