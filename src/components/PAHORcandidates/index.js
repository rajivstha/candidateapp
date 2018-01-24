import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {graphql} from 'react-apollo';
import {get} from 'lodash';
import {MyList} from '../UI';
import {constituencies} from '../GQL';
import style from "../LocalBodies/style";

class PAHORcandidates extends Component {

  _PAHORcandidatesKeyExtractor(item, index) {
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
    return (
      <FlatList
        data={get(this.props, 'data.district.constituencies', [])}
        keyExtractor={this._PAHORcandidatesKeyExtractor}
        renderItem={({item}) => {
          return (
            <MyList candidateType={this.props.candidateType} locale={this.props.locale} item={item}/>
          )
        }}
      />
    );
  }
}

const CandidatesListWithData = graphql(constituencies, {
  options: ({activeDistrict}) => ({
    variables: {
      id: activeDistrict._id
    }
  })
})(PAHORcandidates);

export default CandidatesListWithData;