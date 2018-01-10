import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView} from 'react-native';
import { Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import style from './style';
import {connect} from 'react-redux';
import {wardCandidates}  from '../GQL';
import { graphql, compose } from 'react-apollo';
import I18n from '../../locale';
class WardList extends Component {
    state = {
        showDetails: false
    }  
    toggleClass() {
        this.setState({ showDetails: !this.state.showDetails });
    };
    render() {
        let item = this.props.item ? this.props.item : '';
        let title = item.label;
        if(this.props.locale === 'np' && item.label){
            title = item.label? item.label : item.enLabel
        }
        return (
            <View style={style.itemListContainer}>
            <TouchableOpacity onPress={() => this.toggleClass()}>
                <View onclick={this.toggleClass.bind(this)} style={style.listTitleContainer}>
                    <View style={style.itemIconContainer}>
                        <Text style={style.itemIcon}><Icon name="navicon" size={22}/></Text>
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
                        {this.props.data.candidates && this.props.data.candidates.items.length > 0 &&
                            this.props.data.candidates.items.map((candidate,index)=>{
                                let candidateName = candidate.enLabel;
                                let candidatePost = candidate.candidatePost.enLabel;
                                if(this.props.locale === 'np'){
                                    candidateName = candidate.label? candidate.label : candidate.enLabel
                                    candidatePost = candidate.candidatePost.label? candidate.candidatePost.label: candidate.candidatePost.enLabel;
                                }
                                return(
                                <TouchableOpacity key={index} onPress={() => Actions.candidate({candidate: candidate})}>
                                    <View style={style.listContent}>
                                        <View style={style.partyIcon}><Image source={require('../../assets/partiesImg/congress.png')}/></View>
                                        <View>
                                            <Text style={style.name}>{candidateName} - {candidate.totalVotes} {I18n.t('votes', {locale: this.props.locale})}  </Text>
                                            <Text style={style.designation}> {candidatePost}</Text>
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

const mapStateToProps = (state) => {
	return {
		locale: state.locale
	}
};

export default graphql(wardCandidates, { 
    options: (props) => ({ 
        variables: { 
            wardID: props.item._id
        }
    })
})(connect(mapStateToProps)(WardList));  