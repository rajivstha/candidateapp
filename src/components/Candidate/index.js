import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from '../UI'
import { Actions } from 'react-native-router-flux';

import {connect} from 'react-redux';
import {candidate}  from '../GQL';
import { graphql } from 'react-apollo';
import I18n from '../../locale';
import PropTypes from 'prop-types';



class Candidate extends Component {
    state = { 
        candidate: []
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            candidate: nextProps.data.candidate
        })
    }  
    render() {
        if(this.state.candidate.length > 0){
            let candidateDetails = this.state.candidate
        }
        return (
                <Grid>
                <Header/>
                <Row size={35}>
                    <View style={style.singleImageContainer}>
                        <View style={style.singleImageInnerContainer}>
                            <Image source={require('../../assets/img/user.jpg')} style={style.singleImage} />
                            <View style={style.singleImageText}>
                                <Text style={style.candidateName}>{this.state.candidate && this.state.candidate.enLabel}</Text>
                                <Text style={style.address}>{this.state.candidate && this.state.candidate.post}</Text>      
                            </View>
                            <View style={style.partyImageContainer}>
                                <Image source={require('../../assets/partiesImg/congress.png')} style={style.partySingleImage} />
                            </View>
                        </View>    
                    </View>
                </Row>
                <Row size={45}>
                    <View style={style.candidateDetailsContainer}>
                        <View style={style.bioContainer}>
                            <View><Text style={style.bioTitle}>About Me</Text></View>
                            <View><Text style={style.bio}>this is my boitext</Text></View>
                        </View>
                        <View style={style.candidateDetailsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="envelope" size={12}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}>email</Text></View>
                        </View>
                        <View style={style.candidateDetailsRow}>
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
                        </View>
                        
                    </View>
                </Row>
                </Grid>  
        );
    }
}

//export default Candidate;

Candidate.propTypes = {
    candidateID: PropTypes.string,
};

const mapStateToProps = (state) => {
	return {
		locale: state.locale
	}
};

export default graphql(candidate, { 
    options: (props) => ({ 
        variables: { 
            _id: props.candidateID
        }
    })
})(connect(mapStateToProps)(Candidate));  