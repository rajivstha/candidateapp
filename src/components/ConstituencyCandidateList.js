import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {graphql} from 'react-apollo';
import PropTypes from 'prop-types';
import I18n from '../locale';
import {constituencyCandidates} from '../GQL';
import PoliticalPartyImage from './PoliticalPartyImage';
import ErrorMsg from './ErrorMsg';
import style from './UI/style';

class ConstituencyCandidateList extends Component {
  state = {
    showDetails: false,
    candidates: [],
    iconName: false
  }

  toggleDetails() {
    this.setState({
      showDetails: !this.state.showDetails,
      iconName: !this.state.iconName
    });
  };

  render() {
    let constituency = this.props.constituency;
    let title = constituency.label;
    if (this.props.locale === 'np') {
      title = constituency.label ? constituency.label : constituency.enLabel
    }

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

    let candidates = (
      this.props.candidateType === 'houseOfRepresentativeCandidates' ?
        this.props.data.constituency.houseOfRepresentativeCandidates :
        this.props.data.constituency.provinceAssemblyCandidates
    );
    return (
      <View style={style.itemListContainer}>
        <TouchableOpacity onPress={() => this.toggleDetails()}>
          <View style={style.listTitleContainer}>
            <View style={style.itemIconContainer}>
              <Text style={style.itemIcon}>
                <Icon name={this.state.iconName === false ? 'expand' : 'compress'}
                      size={16}/>
              </Text>
            </View>
            <View>
              <Text style={style.itemText}>{I18n.t('election_area', {locale: this.props.locale})} {title}</Text>
            </View>
          </View>
        </TouchableOpacity>
        {this.state.showDetails == true &&
          <View>
            <View style={style.listContentContainer}>
              <ScrollView>
                {candidates && candidates.length > 0 &&
                  candidates.map((candidate, index) => {
                    let candidateName = candidate.enLabel;
                    if (this.props.locale === 'np' && candidate.label) {
                      candidateName = candidate.label ? candidate.label : candidate.enLabel
                    }
                    return (
                      <TouchableOpacity key={index} onPress={() => Actions.candidate({candidate: candidate})}>
                        <View style={style.listContent}>
                          <View style={style.partyIcon}>
                            <PoliticalPartyImage politicalPartyId={candidate.y_politicalPartyID}/>
                          </View>
                          <View style={style.candidateDetails}>
                            <Text style={style.name}>
                              {candidateName}
                            </Text>
                            <Text style={style.designation}>
                              {candidate.totalVotes} {I18n.t('votes', {locale: this.props.locale})}
                            </Text>
                            <Text style={style.designation}>
                              {candidate.constitutionalAreaEn !== null && candidate.constitutionalAreaNp !== null && I18n.t('election_area', {locale: this.props.locale})}

                              {candidate.constitutionalAreaEn !== null && candidate.constitutionalAreaNp !== null && " ("}
                              {this.props.locale === 'en' && candidate.constitutionalAreaEn !== null && candidate.constitutionalAreaEn}
                              {this.props.locale === 'np' && candidate.constitutionalAreaNp !== null && candidate.constitutionalAreaNp}
                              {candidate.constitutionalAreaEn !== null && candidate.constitutionalAreaNp !== null && ")"}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    )
                  })
                }
              </ScrollView>
            </View>
          </View>
        }
      </View>
    );
  }
}

ConstituencyCandidateList.propTypes = {
  locale: PropTypes.string,
  constituency: PropTypes.object,
  activeDistrict: PropTypes.string
};

const ConstituencyCandidateListWithData = graphql(constituencyCandidates, {
  options: ({constituency}) => ({
    variables: {
      id: constituency._id
    }
  })
})(ConstituencyCandidateList);

export default ConstituencyCandidateListWithData;