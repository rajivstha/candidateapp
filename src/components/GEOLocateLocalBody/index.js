import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator,ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import {Header, Footer} from '../UI';
import { graphql, compose } from 'react-apollo';
import {connect} from 'react-redux';
import {localBody}  from '../GQL';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PoliticalPartyImage} from '../UI';
import I18n from '../../locale';
import style from './style';

class GEOLocateLocalBody extends Component {
    state = {
        showDetails: false,
        iconName: false,
        localbodyDetails: null
    }  
    toggleClass() {
        this.setState({ 
            showDetails: !this.state.showDetails,
            iconName: !this.state.iconName 
         });
    };
	render() {
        // if(this.props.data.geoLocate){
        //     //let localbodyId = this.props.data.geoLocate.localBody._id;
            
            
        // }
        console.log(this.props.data)
        
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
                <View>
                    <Text>Province 1 - Biratnagar - </Text>
                </View>
                {/* <View>
                    <View style={style.itemListContainer}>
                        <View style={style.listContentContainer}>
                            {this.state.localbodyDetails.candidates &&   
                                this.state.localbodyDetails.candidates.map((candidate,index)=>{
                                    let candidateName = candidate.enLabel;
                                    let candidatePost = candidate.y_postEn;
                                    if(this.props.locale === 'np'){
                                        candidateName = candidate.label? candidate.label : candidate.enLabel
                                        candidatePost = candidate.y_postNp? candidate.y_postNp: candidate.y_postEn;
                                    }
                                    <TouchableOpacity  onPress={() => Actions.candidate({candidate: candidate})}>
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
                                })  
                            }        
                            
                        </View>
                        <ScrollView>  
                            <View><Text>Wards</Text></View>
                            <View style={style.itemListContainer}>
                                        <TouchableOpacity onPress={() => this.toggleClass()}>
                                            <View onclick={this.toggleClass.bind(this)} style={style.listTitleContainer}>
                                                <View style={style.itemIconContainer}>
                                                    <Text style={style.itemIcon}><Icon name={this.state.iconName === false ? 'expand': 'compress'} size={16}/></Text>
                                                </View>
                                                <View style={style.itemTextContainer}>  
                                                    <Text style={style.itemText}>Ward No. 1</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>    
                                            
                                        <View>
                                            <View style={style.wardListContentContainer}>
                                                    <TouchableOpacity>
                                                            <View style={style.listContent}>
                                                                <View style={style.partyIcon}>
                                                                   <Text>party image</Text> 
                                                                </View>
                                                                <View>
                                                                    <Text style={style.name}>Rajiv shrstha </Text>
                                                                    <Text style={style.designation}>200 - Votes</Text>
                                                                    <Text style={style.designation}>Sadasya</Text>
                                                                </View>
                                                            </View>
                                                    </TouchableOpacity>  
                                            </View>
                                        </View>  
                            </View>
                        </ScrollView>
                    </View>
                </View> */}
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