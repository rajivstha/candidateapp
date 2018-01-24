import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import aboutUs from '../../setup/aboutUs';

class Aboutus extends Component {
  render() {
    return (
      <View>
        <View size={100} style={style.aboutUsContainer}>
          <View style={style.aboutContainer}>

            <View style={style.aboutUsRow}>
              <Text style={style.title}>About Us</Text>
            </View>
            {aboutUs.twitterLink != '' &&
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="twitter" size={16}/></Text></View>
              <View style={style.textContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(aboutUs.twitterLink)}>
                  <Text style={style.text}>Follow on Twitter</Text>
                </TouchableOpacity>
              </View>
            </View>
            }
            {aboutUs.facebookLink != '' &&
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="facebook" size={16}/></Text></View>
              <View style={style.textContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(aboutUs.facebookLink)}>
                  <Text style={style.text}>Like us on Facebook</Text>
                </TouchableOpacity>
              </View>
            </View>
            }
            {aboutUs.websiteUrl != '' &&
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="globe" size={16}/></Text></View>
              <View style={style.textContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(aboutUs.websiteUrl)}>
                  <Text style={style.text}>Visit Website</Text>
                </TouchableOpacity>
              </View>
            </View>
            }
            {aboutUs.email != '' &&
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="envelope" size={16}/></Text></View>
              <View style={style.textContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:' + aboutUs.email)}>
                  <Text style={style.text}>Give Us Feedback</Text>
                </TouchableOpacity>
              </View>
            </View>
            }
          </View>

          <View style={style.aboutContainer}>
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
export default connect(mapStateToProps)(Aboutus);