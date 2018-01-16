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
                            let image = <Image source={require('../../assets/partiesImg/demo.png')} style={style.partyIconSingle}  />
                            // Nepali Congress
                            if(candidate.y_politicalPartyID === 'bba4b381-835f-4179-9e99-e3d1e95b4c45') {
                                image = <Image source={require('../../assets/partiesImg/bba4b381-835f-4179-9e99-e3d1e95b4c45.png')} style={style.partyIconSingle}  />
                            }
                            // Nepal Communist Party (UML)
                            if(candidate.y_politicalPartyID === 'cf77ea43-bbbf-4ecf-b358-a42e7f9e9eba') {
                                image = <Image source={require('../../assets/partiesImg/cf77ea43-bbbf-4ecf-b358-a42e7f9e9eba.png')} style={style.partyIconSingle}  />
                            }
                            // Communist Party of Nepal (Maoist-Centre)
                            if(candidate.y_politicalPartyID === 'ce87ee69-1bc1-44ec-8fe6-b076faa9165c') {
                                image = <Image source={require('../../assets/partiesImg/ce87ee69-1bc1-44ec-8fe6-b076faa9165c.png')} style={style.partyIconSingle} />
                            }
                             //Sanghiya Samajbadi Forum, Nepal
                             if(candidate.y_politicalPartyID === 'e2974029-e92e-42bf-999a-102a84d50d27') {
                                image = <Image source={require('../../assets/partiesImg/e2974029-e92e-42bf-999a-102a84d50d27.png')} style={style.partyIconSingle} />
                            }
                            //Nepal Communist Party (ML)
                            if(candidate.y_politicalPartyID === 'bf7a37a7-4dfa-4631-9f87-080861dcadf1') {
                                image = <Image source={require('../../assets/partiesImg/bf7a37a7-4dfa-4631-9f87-080861dcadf1.png')} style={style.partyIconSingle} />
                            }
                            //Rastriya Janta Party Nepal
                            if(candidate.y_politicalPartyID === 'bf0bc461-1e01-48ef-9e80-743213b64a45') {
                                image = <Image source={require('../../assets/partiesImg/bf0bc461-1e01-48ef-9e80-743213b64a45.png')} style={style.partyIconSingle} />
                            }
                            //Rastriya Prajatantra Party
                            if(candidate.y_politicalPartyID === '6c845a2c-cb24-4897-8160-774d55a158bc') {
                                image = <Image source={require('../../assets/partiesImg/6c845a2c-cb24-4897-8160-774d55a158bc.png')} style={style.partyIconSingle} />
                            }
                            //Naya Shakti Party Nepal
                             if(candidate.y_politicalPartyID === 'c81fe263-faee-4a8d-8bce-27ad6b8feec4') {
                                image = <Image source={require('../../assets/partiesImg/c81fe263-faee-4a8d-8bce-27ad6b8feec4.png')} style={style.partyIconSingle} />
                            }
                            //Rastriya Janamukti Party
                            if(candidate.y_politicalPartyID === '9e532b38-10a5-4694-9828-b39b8b7d3245') {
                                image = <Image source={require('../../assets/partiesImg/9e532b38-10a5-4694-9828-b39b8b7d3245.png')} style={style.partyIconSingle} />
                            }
                            //Rastriya Janmorcha
                            if(candidate.y_politicalPartyID === '2a6dc414-b9e4-442b-9736-3494da10b109') {
                                image = <Image source={require('../../assets/partiesImg/2a6dc414-b9e4-442b-9736-3494da10b109.png')} style={style.partyIconSingle} />
                            }
                            //Nepal Majdoor Kisan Party
                            if(candidate.y_politicalPartyID === '0c4e946e-3f61-48f2-a4bf-62a0f22b1a9b') {
                                image = <Image source={require('../../assets/partiesImg/0c4e946e-3f61-48f2-a4bf-62a0f22b1a9b.png')} style={style.partyIconSingle} />
                            }
                            //Nepali Janta Dal
                            if(candidate.y_politicalPartyID === '028d1115-4d1b-457d-b098-40fd9ba84f0a') {
                                image = <Image source={require('../../assets/partiesImg/028d1115-4d1b-457d-b098-40fd9ba84f0a.png')} style={style.partyIconSingle} />
                            }
                            //Madhesi Janaadhikar Forum Nepal, Loktantric
                            if(candidate.y_politicalPartyID === 'cd880609-f143-4505-a56a-54a402cc9159') {
                                image = <Image source={require('../../assets/partiesImg/cd880609-f143-4505-a56a-54a402cc9159.png')} style={style.partyIconSingle} />
                            }
                            //Nepal Loktantrik Forum
                            if(candidate.y_politicalPartyID === '5c8b84f6-7ce1-4a42-be15-bdbd16d1664e') {
                                image = <Image source={require('../../assets/partiesImg/5c8b84f6-7ce1-4a42-be15-bdbd16d1664e.png')} style={style.partyIconSingle} />
                            }
                                return(
                                    <TouchableOpacity key={index} onPress={() => Actions.candidate({candidate: candidate})}>
                                    <View style={style.listContent}>
                                        <View style={style.partyIcon}>
                                            {image}
                                        </View>
                                        <View>
                                            <Text style={style.name}>
                                                {candidateName} - {candidate.totalVotes} {I18n.t('votes', {locale: this.props.locale})}  
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

MyList.propTypes = {
    locale: PropTypes.string,
    item: PropTypes.object,
    activeDistrict: PropTypes.string
    
};

export default MyList;