import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Actions } from 'react-native-router-flux';

import {connect} from 'react-redux';
import {candidate}  from '../GQL';
import { graphql } from 'react-apollo';
import I18n from '../../locale';
import PropTypes from 'prop-types';



class Candidate extends Component {
    state = {
		loading: true
    }  
    componentDidMount(){
		if(this.props.candidate){
			this.setState({
				loading: false
			})
		}
	}
    render() {
        let candidate = this.props.candidate;
        // let candidateName = candidate.enLabel;
        let candidateName, candidatePost, candidateParty, candidateSex;
        if(this.props.locale === 'np' &&  candidate.label){
            candidateName = candidate.label;
        }else if(this.props.locale === 'en' &&  candidate.enLabel){
            candidateName = candidate.enLabel;
        }else{
            candidateName = '';
        }

        if(this.props.locale === 'np' &&  candidate.y_postNp){
            candidatePost = candidate.y_postNp;
        }else if(this.props.locale === 'en' &&  candidate.y_postEn){
            candidatePost = candidate.y_postEn;
        }else{
            candidatePost = '';
        }

        if(this.props.locale === 'np' &&  candidate.x_politicalPartyName){
            candidateParty = candidate.x_politicalPartyName;
        }else if(this.props.locale === 'en' &&  candidate.x_politicalPartyNameEng){
            candidateParty = candidate.x_politicalPartyNameEng;
        }else{
            candidateParty = '';
        }

        if(this.props.locale === 'np' &&  candidate.y_genderNp){
            candidateSex = candidate.y_genderNp;
        }else if(this.props.locale === 'en' &&  candidate.y_genderEn){
            candidateSex = candidate.y_genderEn;
        }else{
            candidateSex = '';
        }
        let image = <Image source={require('../../assets/partiesImg/demo.png')} style={style.partySingleImage}  />
        // Nepali Congress
        if(candidate.y_politicalPartyID === 'bba4b381-835f-4179-9e99-e3d1e95b4c45') {
            image = <Image source={require('../../assets/partiesImg/bba4b381-835f-4179-9e99-e3d1e95b4c45.png')} style={style.partySingleImage}  />
        }
        // Nepal Communist Party (UML)
        if(candidate.y_politicalPartyID === 'cf77ea43-bbbf-4ecf-b358-a42e7f9e9eba') {
            image = <Image source={require('../../assets/partiesImg/cf77ea43-bbbf-4ecf-b358-a42e7f9e9eba.png')} style={style.partySingleImage}  />
        }
        // Communist Party of Nepal (Maoist-Centre)
        if(candidate.y_politicalPartyID === 'ce87ee69-1bc1-44ec-8fe6-b076faa9165c') {
            image = <Image source={require('../../assets/partiesImg/ce87ee69-1bc1-44ec-8fe6-b076faa9165c.png')} style={style.partySingleImage} />
        }
         //Sanghiya Samajbadi Forum, Nepal
         if(candidate.y_politicalPartyID === 'e2974029-e92e-42bf-999a-102a84d50d27') {
            image = <Image source={require('../../assets/partiesImg/e2974029-e92e-42bf-999a-102a84d50d27.png')} style={style.partySingleImage} />
        }
        //Nepal Communist Party (ML)
        if(candidate.y_politicalPartyID === 'bf7a37a7-4dfa-4631-9f87-080861dcadf1') {
            image = <Image source={require('../../assets/partiesImg/bf7a37a7-4dfa-4631-9f87-080861dcadf1.png')} style={style.partySingleImage} />
        }
        //Rastriya Janta Party Nepal
        if(candidate.y_politicalPartyID === 'bf0bc461-1e01-48ef-9e80-743213b64a45') {
            image = <Image source={require('../../assets/partiesImg/bf0bc461-1e01-48ef-9e80-743213b64a45.png')} style={style.partySingleImage} />
        }
        //Rastriya Prajatantra Party
        if(candidate.y_politicalPartyID === '6c845a2c-cb24-4897-8160-774d55a158bc') {
            image = <Image source={require('../../assets/partiesImg/6c845a2c-cb24-4897-8160-774d55a158bc.png')} style={style.partySingleImage} />
        }
        //Naya Shakti Party Nepal
         if(candidate.y_politicalPartyID === 'c81fe263-faee-4a8d-8bce-27ad6b8feec4') {
            image = <Image source={require('../../assets/partiesImg/c81fe263-faee-4a8d-8bce-27ad6b8feec4.png')} style={style.partySingleImage} />
        }
        //Rastriya Janamukti Party
        if(candidate.y_politicalPartyID === '9e532b38-10a5-4694-9828-b39b8b7d3245') {
            image = <Image source={require('../../assets/partiesImg/9e532b38-10a5-4694-9828-b39b8b7d3245.png')} style={style.partySingleImage} />
        }
        //Rastriya Janmorcha
        if(candidate.y_politicalPartyID === '2a6dc414-b9e4-442b-9736-3494da10b109') {
            image = <Image source={require('../../assets/partiesImg/2a6dc414-b9e4-442b-9736-3494da10b109.png')} style={style.partySingleImage} />
        }
        //Nepal Majdoor Kisan Party
        if(candidate.y_politicalPartyID === '0c4e946e-3f61-48f2-a4bf-62a0f22b1a9b') {
            image = <Image source={require('../../assets/partiesImg/0c4e946e-3f61-48f2-a4bf-62a0f22b1a9b.png')} style={style.partySingleImage} />
        }
        //Nepali Janta Dal
        if(candidate.y_politicalPartyID === '028d1115-4d1b-457d-b098-40fd9ba84f0a') {
            image = <Image source={require('../../assets/partiesImg/028d1115-4d1b-457d-b098-40fd9ba84f0a.png')} style={style.partySingleImage} />
        }
        //Madhesi Janaadhikar Forum Nepal, Loktantric
        if(candidate.y_politicalPartyID === 'cd880609-f143-4505-a56a-54a402cc9159') {
            image = <Image source={require('../../assets/partiesImg/cd880609-f143-4505-a56a-54a402cc9159.png')} style={style.partySingleImage} />
        }
        //Nepal Loktantrik Forum
        if(candidate.y_politicalPartyID === '5c8b84f6-7ce1-4a42-be15-bdbd16d1664e') {
            image = <Image source={require('../../assets/partiesImg/5c8b84f6-7ce1-4a42-be15-bdbd16d1664e.png')} style={style.partySingleImage} />
        }


 
        
        return (
                <Grid>
                {this.state.loading && 
				<View style={style.loading}>
					<ActivityIndicator size="large" color="#036cae" />
				</View>	
				}
                <Row size={40}>
                    <View style={style.singleImageContainer}>
                        <View style={style.singleImageInnerContainer}>
                            <Image source={require('../../assets/img/user.jpg')} style={style.singleImage} />
                            <View style={style.singleImageText}>
                                <Text style={style.candidateName}>{candidateName}</Text>
                                <Text style={style.address}>{candidatePost}</Text>      
                            </View>
                            <View style={style.partyImageContainer}>
                                {image}
                            </View>
                        </View>    
                    </View>
                </Row>
                <Row size={40}>
                    <View style={style.candidateDetailsContainer}>
                        {/* <View style={style.bioContainer}>
                            <View><Text style={style.bioTitle}>About Me</Text></View>
                            <View><Text style={style.bio}>this is my boitext</Text></View>
                        </View> */}
                        <View style={style.candidateDetailsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="circle" size={12}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}><Text style={style.label}>{I18n.t('total_votes', {locale: this.props.locale})}:</Text> {candidate.totalVotes}</Text></View>
                        </View>
                        {candidateParty != '' &&  
                        <View style={style.candidateDetailsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="circle" size={12}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}><Text style={style.label}>{I18n.t('political_party', {locale: this.props.locale})}:</Text>  {candidateParty} </Text></View>
                        </View>
                        }
                        <View style={style.candidateDetailsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="circle" size={12}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}><Text style={style.label}>{I18n.t('age', {locale: this.props.locale})}:</Text>  {candidate.age}</Text></View>
                        </View>
                        {candidateSex != '' &&
                        <View style={style.candidateDetailsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="circle" size={12}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}><Text style={style.label}>{I18n.t('sex', {locale: this.props.locale})}:</Text> {candidateSex}</Text></View>
                        </View>
                        }

                        {/* <View style={style.candidateDetailsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="phone" size={12}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}>9099999</Text></View>
                        </View>
                        <View style={style.candidateDetailsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="facebook" size={12}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}>Follow Me On Facebook</Text></View>
                        </View>
                        <View style={style.candidateDetailsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="twitter" size={12}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}>Follow Me On Twitter</Text></View>
                        </View> */}
                        
                    </View>
                </Row>
                </Grid>  
        );
    }
}

//export default Candidate;

Candidate.propTypes = {
    candidate: PropTypes.object,
};

const mapStateToProps = (state) => {
	return {
		locale: state.locale
	}
};

export default connect(mapStateToProps)(Candidate);  