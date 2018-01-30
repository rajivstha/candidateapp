import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {graphql, compose} from 'react-apollo';
import {connect} from 'react-redux';
import {geoQuery} from '../../GQL';
import GEOLocateLocalBody from './GEOLocateLocalBody';
import {get} from 'lodash';
import style from './style';
import ErrorMsg from "../../components/ErrorMsg";

class GEOLocate extends Component {
  render() {
    let localBodyId = get(this.props.data, 'geoLocate.localBody._id', false);
    return (
      <View style={style.candidateByLocationContainer}>
        {this.props.data.loading &&
          <View style={style.loading}>
            <ActivityIndicator size="large" color="#036cae"/>
          </View>
        }
        {this.props.data.error &&
          <ErrorMsg error={this.props.data.error} locale={this.props.locale}/>
        }
        {localBodyId &&
          <GEOLocateLocalBody localBodyId={localBodyId} locale={this.props.locale}/>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
};


export default compose(
  graphql(geoQuery, {
    options: ({location}) => ({
      variables: {location}
    })
  })
)(connect(mapStateToProps)(GEOLocate));