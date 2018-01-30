import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {graphql} from 'react-apollo';
import {get} from 'lodash';
import ConstituencyCandidateList from './ConstituencyCandidateList';
import {constituencies} from '../GQL';
import ErrorMsg from "./ErrorMsg";

class ConstituencyList extends Component {

  _keyExtractor(item, index) {
    return item._id;
  }

  render() {
    if(this.props.data.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#036cae" />
        </View>
      )
    }

    if(this.props.data.error) {
      return (
        <ErrorMsg error={this.props.data.error} locale={this.props.locale}/>
      )
    }

    return (
      <FlatList
        data={get(this.props, 'data.district.constituencies', [])}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => {
          return (
            <ConstituencyCandidateList
              candidateType={this.props.candidateType}
              locale={this.props.locale}
              constituency={item}/>
          )
        }}
      />
    );
  }
}

const ConstituencyListWithData = graphql(constituencies, {
  options: ({activeDistrict}) => ({
    variables: {
      id: activeDistrict._id
    }
  })
})(ConstituencyList);

export default ConstituencyListWithData;