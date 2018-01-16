import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView} from 'react-native';
import { Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import style from './style';
import {connect} from 'react-redux';
import {localBodyCandidates}  from '../GQL';
import { graphql, compose } from 'react-apollo';
import I18n from '../../locale';
import {PoliticalPartyImage} from '../UI';
class LocalBodyList extends Component {
    state = {
        showDetails: false
    }  
    toggleClass() {
        this.setState({ showDetails: !this.state.showDetails });
    };
    render() {
        let item = this.props.item ? this.props.item : '';
        let title = item.enLabel;
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
                            <Text style={style.itemText}>{title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>    
                {this.state.showDetails == true && 
                <View>
                    <View style={style.listContentContainer}>
                    <ScrollView>
                    {this.props.data.candidates && this.props.data.candidates.items.length > 0 &&
                        this.props.data.candidates.items.map((candidate,index)=>{
                            let candidateName = candidate.enLabel;
                            let candidatePost = candidate.y_postEn;
                            if(this.props.locale === 'np'){
                                candidateName = candidate.label? candidate.label : candidate.enLabel
                                candidatePost = candidate.y_postNp? candidate.y_postNp: candidate.y_postEn;
                            }
                            
                    return(
                            <TouchableOpacity key={index} onPress={() => Actions.candidate({candidate: candidate})}>
                                <View style={style.listContent}>
                                    <View style={style.partyIcon}>
                                        <PoliticalPartyImage politicalPartyId={candidate.y_politicalPartyID} />
                                    </View>
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
                     
                    <TouchableOpacity onPress={() => Actions.wards({localBodyId : item._id })}>
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

LocalBodyList.propTypes = {
    locale: PropTypes.string,
    item: PropTypes.object,
    activeDistrict: PropTypes.string
    
};



const mapStateToProps = (state) => {
	return {
		locale: state.locale
	}
};

export default graphql(localBodyCandidates, { 
    options: (props) => ({ 
        variables: { 
            localBodyID: props.item._id
        }
    })
})(connect(mapStateToProps)(LocalBodyList));  