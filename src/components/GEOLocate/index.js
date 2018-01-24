import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator,ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import {Header, Footer} from '../UI';
import { graphql, compose } from 'react-apollo';
import {connect} from 'react-redux';
import {geoQuery}  from '../GQL';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';

class GEOLocate extends Component {
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
        if(this.props.data.geoLocate){
            let localbodyId = this.props.data.geoLocate.localBody._id;
            console.log(localbodyId);
        }
        
		return (
			<View style={style.candidateByLocationContainer}>
                {this.props.data.loading &&
                    <View style={style.loading}>
                        <ActivityIndicator size="large" color="#036cae" />
                    </View>
                }
                <View>
                    <Text>Province 1 - Biratnagar - </Text>
                </View>
                <View>
                    <View style={style.itemListContainer}>
                        <View style={style.listContentContainer}>
                               
                                    <TouchableOpacity  onPress={() => Actions.candidate({candidate: candidate})}>
                                        <View style={style.listContent}>
                                            <View style={style.partyIcon}>
                                                <Text>political party image</Text>
                                            </View>
                                            <View>
                                                <Text style={style.name}>Rajiv Shrestha </Text>
                                                <Text style={style.designation}>5000 Total Votes</Text>
                                                <Text style={style.designation}>Mayor</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>  
                                    <TouchableOpacity  onPress={() => Actions.candidate({candidate: candidate})}>
                                        <View style={style.listContent}>
                                            <View style={style.partyIcon}>
                                                <Text>political party image</Text>
                                            </View>
                                            <View>
                                                <Text style={style.name}>Rajiv Shrestha </Text>
                                                <Text style={style.designation}>5000 Total Votes</Text>
                                                <Text style={style.designation}>Mayor</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>  
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
    graphql(geoQuery, {
        options: ({location}) => ({
          variables: {location}
        })
      })
  )(connect(mapStateToProps)(GEOLocate));