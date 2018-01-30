import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {graphql} from 'react-apollo';

import ErrorMsg from "../../components/ErrorMsg";
import LocalBodyListItem from '../../components/LocalBodyListItem';
import {localBodies} from '../../GQL';
import globalStyle from '../../assets/styles';

class LocalBodiesList extends Component {

  _localBodiesKeyExtractor(item, index) {
    return item._id;
  }

  render() {
    if (this.props.data.loading) {
      return (
        <View style={globalStyle.loading}>
          <ActivityIndicator size="large" color="#036cae"/>
        </View>
      )
    }

    if (this.props.data.error) {
      return (
        <ErrorMsg error={this.props.data.error} locale={this.props.locale}/>
      )
    }

    return (
      <FlatList
        data={this.props.data.localBodies.items}
        keyExtractor={this._localBodiesKeyExtractor}
        renderItem={({item}) => {
          return (
            <LocalBodyListItem activeDistrict={this.props.activeDistrict._id}
                               locale={this.props.locale}
                               item={item}/>
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

