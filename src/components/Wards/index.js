import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WardList} from '../UI';
import {wards} from '../GQL';
import {graphql, compose} from 'react-apollo';
import {connect} from 'react-redux';


class Wards extends Component {

  _wardsKeyExtractor(item, index) {
    return item._id;
  }

  render() {
    let title = this.props.localBody.enLabel;
    if (this.props.locale === 'np' && this.props.localBody.label) {
      title = this.props.localBody.label ? this.props.localBody.label : this.props.localBody.enLabel
    }
    return (
      <Grid>
        <Row size={7}>
          <Text style={style.title}>{title}</Text>
        </Row>
        <Row size={73}>
          {this.props.data.loading &&
            <View style={style.loading}>
              <ActivityIndicator size="large" color="#036cae"/>
            </View>
          }
          <FlatList
            data={this.props.data.wards}
            keyExtractor={this._wardsKeyExtractor}
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