import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HeaderAbout} from '../UI'
import { Actions } from 'react-native-router-flux';
let candidate = {
  id: '001',
  firstName: 'Rajiv',
  lastName: 'Shrestha',
  age: '30',
  post: 'Mayor',
  phoneNo: '980000000',
  email: 'stha.rajiv@gmail.com',
  image: require('../../assets/img/user.jpg'),
  partyImage: require('../../assets/partiesImg/congress.png'),
  bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
}
class Candidate extends Component {
  state = {
    candidate : candidate
  };
  render() {
    return (
         <Grid>
           <HeaderAbout/>
            <Row size={35}>
                <View style={style.singleImageContainer}>
                    <View style={style.singleImageInnerContainer}>
                        <Image source={this.state.candidate.image} style={style.singleImage} />
                        <View style={style.singleImageText}>
                            <Text style={style.candidateName}>{this.state.candidate.firstName} {this.state.candidate.lastName}, {this.state.candidate.age}</Text>
                            <Text style={style.address}>{this.state.candidate.post}</Text>      
                        </View>
                        <View style={style.partyImageContainer}>
                            <Image source={this.state.candidate.partyImage} style={style.partySingleImage} />
                        </View>
                    </View>    
                </View>
            </Row>
            <Row size={45}>
                <View style={style.candidateDetailsContainer}>
                    <View style={style.bioContainer}>
                        <View><Text style={style.bioTitle}>About Me</Text></View>
                        <View><Text style={style.bio}>{this.state.candidate.bio}</Text></View>
                    </View>
                    <View style={style.candidateDetailsRow}>
                        <View style={style.iconContainer}><Text style={style.icon}><Icon name="envelope" size={12}/></Text></View>
                        <View style={style.textContainer}><Text style={style.text}>{this.state.candidate.email}</Text></View>
                    </View>
                    <View style={style.candidateDetailsRow}>
                        <View style={style.iconContainer}><Text style={style.icon}><Icon name="phone" size={12}/></Text></View>
                        <View style={style.textContainer}><Text style={style.text}>{this.state.candidate.phoneNo}</Text></View>
                    </View>
                    <View style={style.candidateDetailsRow}>
                        <View style={style.iconContainer}><Text style={style.icon}><Icon name="facebook" size={12}/></Text></View>
                        <View style={style.textContainer}><Text style={style.text}>Follow Me On Facebook</Text></View>
                    </View>
                    <View style={style.candidateDetailsRow}>
                        <View style={style.iconContainer}><Text style={style.icon}><Icon name="twitter" size={12}/></Text></View>
                        <View style={style.textContainer}><Text style={style.text}>Follow Me On Twitter</Text></View>
                    </View>
                    <TouchableOpacity onPress={()=> Actions.addDetails()}>
                      <View style={style.addDetailsContainer}><Text style={style.addDetailsText}><Icon name="pencil-square-o" size={17}/> Add More Details</Text></View>
                    </TouchableOpacity>
                </View>
            </Row>
         </Grid>  
    );
  }
}

export default Candidate;