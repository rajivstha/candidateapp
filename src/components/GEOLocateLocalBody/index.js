import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {graphql, compose} from 'react-apollo';
import {get} from 'lodash';
import {connect} from 'react-redux';
import {localBody} from '../GQL';
import {PoliticalPartyImage} from '../UI';
import I18n from '../../locale';
import {WardList} from '../UI';
import style from './style';

class GEOLocateLocalBody extends Component {
  state = {
    showDetails: false,
    iconName: false
  }

  toggleClass() {
    this.setState({
      showDetails: !this.state.showDetails,
      iconName: !this.state.iconName
    });
  };

  _localBodiesKeyExtractor(item, index) {
    return item._id;
  }

  render() {
    let details = get(this.props.data, 'localBody', false);

    return (
      <View style={{flex:1}}>
        {this.props.data.loading &&
        <View style={style.loading}>
          <ActivityIndicator size="large" color="#036cae"/>
        </View>
        }
        {this.props.data.error &&
        <Text>Something went wrong!</Text>
        }
        {details && details.province && details.district && this.props.locale === 'en' &&
        <Text
            style={style.breadCrumbTitle}> {details.province.enLabel} - {details.district.enLabel} - {details.enLabel} </Text>
        }
        {details && details.province && details.district && this.props.locale === 'np' &&
        <Text
            style={style.breadCrumbTitle}>{details.province.label} - {details.district.label} - {details.label} </Text>
        }
        <View style={style.itemListContainer}>
          <View style={style.listContentContainer}>
            {details && details.candidates &&
            details.candidates.map((candidate, index) => {
              let candidateName = candidate.enLabel;
              let candidatePost = candidate.y_postEn;
              if (this.props.locale === 'np') {
                candidateName = candidate.label ? candidate.label : candidate.enLabel
                candidatePost = candidate.y_postNp ? candidate.y_postNp : candidate.y_postEn;
              }
              return (
                <TouchableOpacity key={index} onPress={() => Actions.candidate({candidate: candidate})}>
                  <View style={style.listContent}>
                    <View style={style.partyIcon}>
                      <PoliticalPartyImage politicalPartyId={candidate.y_politicalPartyID}/>
                    </View>
                    <View>
                      <Text style={style.name}>{candidateName} </Text>
                      <Text
                        style={style.designation}>{candidate.totalVotes} {I18n.t('votes', {locale: this.props.locale})}</Text>
                      <Text style={style.designation}>{candidatePost}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
            }
          </View>
          {details && details.wards &&
            <Text style={style.title}>{I18n.t('wards', {locale: this.props.locale})}:</Text>
          }
          <View style={[style.listContentContainer, {flex:1}]}>
            {details && details.wards &&
            <FlatList
              data={details.wards}
              keyExtractor={this._localBodiesKeyExtractor}
              renderItem={({item}) => {
                return (
                  <WardList locale={this.props.locale} item={item}/>
                )
              }}
            />
            }
          </View>
        </View>
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
  graphql(localBody, {
    options: ({localBodyId}) => ({
      variables: {_id: localBodyId}
    })
  })
)(connect(mapStateToProps)(GEOLocateLocalBody));