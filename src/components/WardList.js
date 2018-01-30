import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import style from './UI/style';
import {connect} from 'react-redux';
import I18n from '../locale/index';
import {PoliticalPartyImage} from './UI/index';

class WardList extends Component {
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
    let title = item.label;
    if (this.props.locale === 'np' && item.label) {
      title = item.label ? item.label : item.enLabel
    }
    return (
      <View style={style.itemListContainer}>
        <TouchableOpacity onPress={() => this.toggleClass()}>
          <View onclick={this.toggleClass.bind(this)} style={style.listTitleContainer}>
            <View style={style.itemIconContainer}>
              <Text style={style.itemIcon}><Icon name={this.state.iconName === false ? 'expand' : 'compress'}
                                                 size={16}/></Text>
            </View>
            <View style={style.itemTextContainer}>
              <Text style={style.itemText}>{I18n.t('ward_no', {locale: this.props.locale})} {title}</Text>
            </View>
          </View>
        </TouchableOpacity>
        {this.state.showDetails == true &&
        <View>
          <View style={style.wardListContentContainer}>
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
            </ScrollView>
          </View>

        </View>
        }
      </View>
    );
  }
}

WardList.propTypes = {
  locale: PropTypes.string,
  item: PropTypes.object,
  activeDistrict: PropTypes.string
};

export default WardList;