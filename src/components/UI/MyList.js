import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView} from 'react-native';
import { Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import style from './style';
import I18n from '../../locale';
import { graphql } from 'react-apollo';
import apolloClient from '../../setup/apolloClient';
import {PAHORcandidates}  from '../GQL';

class MyList extends Component {
    state = {
        showDetails: false,
        candidates: []
    }  
    toggleClass() {
        this.setState({ showDetails: !this.state.showDetails });
    };
    componentDidMount(){
        if(this.props.item){
            apolloClient.query({
                query: PAHORcandidates,
                variables: {
                    id: this.props.item._id
                }
            }).then((data) => {
                this.setState({
                     candidates: this.props.candidateType === 'houseOfRepresentativeCandidates' ? data.data.constituency.houseOfRepresentativeCandidates : data.data.constituency.provinceAssemblyCandidates
                })
            }).catch((err) => {
                  console.log(err);
            })
        }
    }

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
                        <Text style={style.itemText}>{I18n.t('election_area', {locale: this.props.locale})} {title}</Text>
                    </View>
                </View>
            </TouchableOpacity>    
                {this.state.showDetails == true && 
                <View>
                    <View style={style.listContentContainer}>
                    <ScrollView>
                        {this.state.candidates && this.state.candidates.length > 0 &&
                            this.state.candidates.map((candidate,index)=>{
                            let candidateName = candidate.enLabel;
                            if(this.props.locale === 'np' && candidate.label){
                                candidateName = candidate.label? candidate.label : candidate.enLabel
                            }
                                return(
                                    <TouchableOpacity key={index} onPress={() => Actions.candidate({candidateId: candidate._id})}>
                                    <View style={style.listContent}>
                                        <View style={style.partyIcon}><Image source={require('../../assets/partiesImg/congress.png')}/></View>
                                        <View>
                                            <Text style={style.name}>
                                                {candidateName} - {candidate.totalVotes} {I18n.t('votes', {locale: this.props.locale})}  
                                            </Text>
                                            <Text style={style.designation}> 
                                                {I18n.t('election_area', {locale: this.props.locale})}  {candidate.constitutionalArea}
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

MyList.propTypes = {
    locale: PropTypes.string,
    item: PropTypes.object,
    activeDistrict: PropTypes.string
    
};

export default MyList;