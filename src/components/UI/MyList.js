import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView} from 'react-native';
import { Actions} from 'react-native-router-flux';
import style from './style';
class MyList extends Component {
    state = {
        showDetails: false
    }  
    toggleClass() {
        this.setState({ showDetails: !this.state.showDetails });
    };
    render() {
        return (
            <View style={style.itemListContainer}>
            <TouchableOpacity onPress={() => this.toggleClass()}>
                <View onclick={this.toggleClass.bind(this)} style={style.listTitleContainer}>
                    <View style={style.itemIconContainer}>
                        <Text style={style.itemIcon}><Icon name="navicon" size={22}/></Text>
                    </View>
                    <View style={style.itemTextContainer}>  
                        <Text style={style.itemText}>{this.props.localbody.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>    
                {this.state.showDetails == true && 
                <View>
                    <View style={style.listContentContainer}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => Actions.candidate()}>
                            <View style={style.listContent}>
                                <View style={style.partyIcon}><Image source={require('../../assets/partiesImg/congress.png')}/></View>
                                <View>
                                    <Text style={style.name}>Rajiv shrestha</Text>
                                    <Text style={style.designation}> Chairperson</Text>
                                </View>
                            </View>
                        </TouchableOpacity>        
                        <TouchableOpacity onPress={() => Actions.candidate()}>
                            <View style={style.listContent}>
                                <View style={style.partyIcon}><Image source={require('../../assets/partiesImg/congress.png')}/></View>
                                <View>
                                    <Text style={style.name}>Rajiv shrestha</Text>
                                    <Text style={style.designation}>Vice Chairperson</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>    
                    </View>
                    <TouchableOpacity onPress={() => Actions.wards()}>
                        <View style={style.viewWardsContainer}><Text style={style.wardText}>View All Wards</Text></View>
                    </TouchableOpacity>  
                </View>  
                }
            </View>
        );
    }
}

export default MyList;