import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, Linking} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Footer} from '../UI';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import I18n from '../../locale';
import aboutUs from '../../setup/aboutUs';
class Aboutus extends Component {
  render() {
    return (
         <Grid>
			<Row size={50} style={style.aboutUsContainer}>
				<View style={style.aboutUsRow}>
					<Text style={style.title}>{I18n.t('about_us', {locale: this.props.locale})}</Text>
				</View>
				{aboutUs.name !='' && 
				<View style={style.aboutUsRow}>
						<View style={style.iconContainer}><Text style={style.icon}><Icon name="group" size={16}/></Text></View>
						<View style={style.textContainer}><Text style={style.text}>Developed by {aboutUs.name}</Text></View>
				</View>
				}
				{aboutUs.twitterLink !='' && 
				<View style={style.aboutUsRow}>
						<View style={style.iconContainer}><Text style={style.icon}><Icon name="twitter" size={16}/></Text></View>
						<View style={style.textContainer}>
						<TouchableOpacity onPress={() => Linking.openURL(aboutUs.twitterLink)}>
							<Text style={style.text}>Follow on Twitter</Text>
						</TouchableOpacity>	
						</View>
				</View>
				}
				{aboutUs.facebookLink !='' && 
				<View style={style.aboutUsRow}>
						<View style={style.iconContainer}><Text style={style.icon}><Icon name="facebook" size={16}/></Text></View>
						<View style={style.textContainer}>
						<TouchableOpacity onPress={() => Linking.openURL(aboutUs.facebookLink)}>
							<Text style={style.text}>Like us on Facebook</Text>
						</TouchableOpacity>
						</View>
				</View>
				}
				{aboutUs.websiteUrl !='' &&
				<View style={style.aboutUsRow}>
						<View style={style.iconContainer}><Text style={style.icon}><Icon name="globe" size={16}/></Text></View>
						<View style={style.textContainer}>
						<TouchableOpacity onPress={() => Linking.openURL(aboutUs.websiteUrl)}>
							<Text style={style.text}>Visit Website</Text>
						</TouchableOpacity>
						</View>
				</View>
				}
				{aboutUs.email !='' && 
				<View style={style.aboutUsRow}>
						<View style={style.iconContainer}><Text style={style.icon}><Icon name="envelope" size={16}/></Text></View>
						<View style={style.textContainer}>
						<TouchableOpacity onPress={() => Linking.openURL('mailto:'+aboutUs.email)}>
							<Text style={style.text}>Give Us Feedback</Text>
						</TouchableOpacity>
						</View>
				</View>
				}

				<View style={style.aboutUsRow}>
					<Text style={style.title}>Developers</Text>
				</View>
				<View style={style.aboutUsRow}>
						<View style={style.iconContainer}><Text style={style.icon}><Icon name="user" size={16}/></Text></View>
						<View style={style.textContainer}><Text style={style.text}>Yalamber Subba</Text></View>
				</View>
				<View style={style.aboutUsRow}>
						<View style={style.iconContainer}><Text style={style.icon}><Icon name="user" size={16}/></Text></View>
						<View style={style.textContainer}><Text style={style.text}>Girish Chaudhary</Text></View>
				</View>
				<View style={style.aboutUsRow}>
						<View style={style.iconContainer}><Text style={style.icon}><Icon name="user" size={16}/></Text></View>
						<View style={style.textContainer}><Text style={style.text}>Rajiv Shrestha</Text></View>
				</View>
			</Row>
			
            
         </Grid>  
    );
  }
}
const mapStateToProps = (state) => {
        return {
            locale: state.locale
        }
};
export default connect(mapStateToProps)(Aboutus);