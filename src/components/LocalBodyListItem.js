import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import style from './UI/style';
import {connect} from 'react-redux';
import I18n from '../locale/index';
import PoliticalPartyImage from './PoliticalPartyImage';

class LocalBodyListItem extends Component {
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

  render() {
    let item = this.props.item ? this.props.item : '';
    let title = item.enLabel;
    if (this.props.locale === 'np' && item.label) {
      title = item.label ? item.label : item.enLabel
    }
    return (
      <View style={style.itemListContainer}>
        <TouchableOpacity onPress={() => this.toggleClass()}>
          <View onclick={this.toggleClass.bind(this)} style={style.listTitleContainer}>
            <View style={style.itemIconContainer}>
              <Icon name={this.state.iconName === false ? 'expand' : 'compress'}
                                                 size={16} color={style.itemIcon.color}/>
            </View>
            <View style={style.itemTitle}>
              <Text style={style.itemText}>{title}</Text>
            </View>
          </View>
        </TouchableOpacity>
        {this.state.showDetails == true &&
        <View>
          <View style={style.listContentContainer}>
            <ScrollView>
              {this.props.item.candidates && this.props.item.candidates.length > 0 &&
              this.props.item.candidates.map((candidate, index) => {
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
                      <View style={style.candidateDetails}>
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


            </ScrollView>
          </View>

          <TouchableOpacity onPress={() => Actions.wards({localBody: item})}>
            <View style={style.viewWardsContainer}><Text style={style.wardText}>
              {I18n.t('view_wards', {locale: this.props.locale})}
            </Text></View>
          </TouchableOpacity>

        </View>
        }
      </View>
    );
  }
}

LocalBodyListItem.propTypes = {
  locale: PropTypes.string,
  item: PropTypes.object,
  activeDistrict: PropTypes.string

};


const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
};

export default connect(mapStateToProps)(LocalBodyListItem);