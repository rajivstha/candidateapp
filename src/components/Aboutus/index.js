import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Footer, HeaderAbout} from '../UI';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
class Aboutus extends Component {
  
  render() {
    return (
         <Grid>
              <HeaderAbout/>
                <Row size={50} style={style.aboutUsContainer}>
                    <View style={style.aboutUsRow}>
                        <Text style={style.title}>About Us</Text>
                    </View>
                    <View style={style.aboutUsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="group" size={23}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}>Developed by Mundhum ITS</Text></View>
                    </View>
                    <View style={style.aboutUsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="twitter" size={23}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}>Follow on Twitter</Text></View>
                    </View>
                    <View style={style.aboutUsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="facebook" size={23}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}>Like us on Facebook</Text></View>
                    </View>
                    <View style={style.aboutUsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="globe" size={23}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}>Visit Website</Text></View>
                    </View>
                    <View style={style.aboutUsRow}>
                            <View style={style.iconContainer}><Text style={style.icon}><Icon name="envelope" size={23}/></Text></View>
                            <View style={style.textContainer}><Text style={style.text}>Give Us Feedback</Text></View>
                    </View>
                </Row>
                <Row size={50}></Row>
            
         </Grid>  
    );
  }
}

export default Aboutus;