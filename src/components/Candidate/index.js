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
import {PoliticalPartyImage} from '../UI';


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
                                <PoliticalPartyImage politicalPartyId={candidate.y_politicalPartyID} />
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