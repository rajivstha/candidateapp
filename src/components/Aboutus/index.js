import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Linking, ScrollView} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import aboutUs from '../../setup/aboutUs';

class AboutUs extends Component {
  render() {
    return (
      <ScrollView>
        <View style={style.aboutUsContainer}>
          <View style={style.aboutContainer}>
            <View style={style.aboutUsRow}>
              <Text style={style.title}>About us</Text>
            </View>
            <View style={{paddingBottom: 20}}>
              <Text style={style.text}>
                We developed this app to make information related to Elected Candidates of Nepal accessible to general public.
                This is our Beta release. We are working on more updates to make this app more stable and useful.
              </Text>

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

            <View style={{paddingBottom: 15}}>
              <Text style={style.text}>
                We are a small dedicated team working on various ideas to have some positive impact on our society and country.
              </Text>
            </View>
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="user" size={16}/></Text></View>
              <View style={style.textContainer}><Text style={style.text}>Girish Chaudhary (Backend)</Text></View>
            </View>
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="user" size={16}/></Text></View>
              <View style={style.textContainer}><Text style={style.text}>Rajiv Shrestha (Frontend)</Text></View>
            </View>
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="user" size={16}/></Text></View>
              <View style={style.textContainer}><Text style={style.text}>Yalamber Subba (FullStack)</Text></View>
            </View>

          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
};
export default connect(mapStateToProps)(AboutUs);