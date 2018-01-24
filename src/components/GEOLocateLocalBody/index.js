import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator,ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import {Header, Footer} from '../UI';
import { graphql, compose } from 'react-apollo';
import {get} from 'lodash';
import {connect} from 'react-redux';
import {localBody}  from '../GQL';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PoliticalPartyImage} from '../UI';
import I18n from '../../locale';
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
	render() {
        let details = get(this.props.data, 'localBody', false);
        console.log(details)
        
		return (
			<View style={style.candidateByLocationContainer}>
                {this.props.data.loading &&
                    <View style={style.loading}>
                        <ActivityIndicator size="large" color="#036cae" />
                    </View>
                }
                {this.props.data.error &&
                    <Text>Something went wrong!</Text>
                }
                {details && details.province && details.district && this.props.locale === 'en' &&
                <View>
                    <Text style={style.breadCrumbTitle}> {details.province.enLabel} - {details.district.enLabel} - {details.enLabel} </Text>
                </View>
                }
                {details && details.province && details.district && this.props.locale === 'np' &&
                <View>
                    <Text style={style.breadCrumbTitle}>{details.province.label} - {details.district.label} - {details.label} </Text>
                </View>
                }
                <View>
                    <View style={style.itemListContainer}>
                        <View style={style.listContentContainer}>
                            {details && details.candidates && 
                                details.candidates.map((candidate, index)=>{
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
                                                <Text style={style.name}>{candidateName} </Text>
                                                <Text style={style.designation}>{candidate.totalVotes} {I18n.t('votes', {locale: this.props.locale})}</Text>
                                                <Text style={style.designation}>{candidatePost}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>   
                                    )
                                    
                                })
                            }
                                       
                                  
                            
                        </View>
                        <ScrollView>  
                        {details && details.wards && 
                            <View><Text style={style.title}>{I18n.t('wards', {locale: this.props.locale})}:</Text></View>
                        }
                            
                            {details && details.wards && 
                                details.wards.map((ward, index)=>{
                                    let title = ward.label;
                                    if(this.props.locale === 'np' && ward.label){
                                        title = ward.label? ward.label : ward.enLabel
                                    }
                                    return(
                                    <View key={index} style={style.itemListContainer}>    
                                        <TouchableOpacity onPress={() => this.toggleClass()}>
                                            <View onclick={this.toggleClass.bind(this)} style={style.listTitleContainer}>
                                                <View style={style.itemIconContainer}>
                                                    <Text style={style.itemIcon}><Icon name={this.state.iconName === false ? 'expand': 'compress'} size={16}/></Text>
                                                </View>
                                                <View style={style.itemTextContainer}>  
                                                    <Text style={style.itemText}>{I18n.t('ward_no', {locale: this.props.locale})} {title}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        {this.state.showDetails == true && 
                                        <View>
                                            <View>

                                            {ward.candidates && ward.candidates.map((candidate,index)=>{
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
                                                                <Text style={style.name}>{candidateName} </Text>
                                                                <Text style={style.designation}>{candidate.totalVotes} {I18n.t('votes', {locale: this.props.locale})}</Text>
                                                                <Text style={style.designation}>{candidatePost}</Text>
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>  
                                                    )
                                                })
                                            }          

                                            </View>
                                        </View>  
                                        }
                                    </View>     
                                    )
                                                                        
                                })
                            }                    
                                            
                                            
                                       
                                    
                           
                        </ScrollView>
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
          variables: {_id:localBodyId}
        })
    })
)(connect(mapStateToProps)(GEOLocateLocalBody));