import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {graphql, compose} from 'react-apollo';
import {connect} from 'react-redux';

import WardList from '../../components/WardList';
import {wards} from '../../GQL';
import globalStyle from '../../assets/styles';
import ErrorMsg from "../../components/ErrorMsg";


class Wards extends Component {

  _keyExtractor(item, index) {
    return item._id;
  }

  render() {
    let title = this.props.localBody.enLabel;
    if (this.props.locale === 'np' && this.props.localBody.label) {
      title = this.props.localBody.label ? this.props.localBody.label : this.props.localBody.enLabel
    }
    return (
      <Grid>
        <Row size={9}>
          <Text style={globalStyle.title}>{title}</Text>
        </Row>
        <Row size={71}>
          {this.props.data.loading &&
            <View style={globalStyle.loading}>
              <ActivityIndicator size="large" color="#036cae"/>
            </View>
          }
          {this.props.data.error &&
            <ErrorMsg error={this.props.data.error} locale={this.props.locale} />
          }
          <FlatList
            data={this.props.data.wards}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => {
              return (
                <WardList locale={this.props.locale} item={item}/>
              )
            }}
          />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
};

export default graphql(wards, {
  options: ({localBody}) => ({
    variables: {
      skip: 0,
      limit: 200,
      localBodyID: localBody._id
    }
  })
})(connect(mapStateToProps)(Wards));