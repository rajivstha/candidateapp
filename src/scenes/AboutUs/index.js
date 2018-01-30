import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Linking, ScrollView} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import aboutData from '../../setup/aboutData';

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
                Candidates OnNepal is an initiative of OnNepal.com. We have developed this app to make information related to Elected Candidates of Nepal accessible to the general public
                and we believe that it will certainly leave an impression to you.

                This is our Beta release. We are and will certainly be continuously working on more updates to make this app more stable and useful.
              </Text>

            </View>
            {aboutData.twitterLink != '' &&
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="twitter" size={16}/></Text></View>
              <View>
                <TouchableOpacity onPress={() => Linking.openURL(aboutData.twitterLink)}>
                  <Text style={style.text}>Follow on Twitter</Text>
                </TouchableOpacity>
              </View>
            </View>
            }
            {aboutData.facebookLink != '' &&
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="facebook" size={16}/></Text></View>
              <View>
                <TouchableOpacity onPress={() => Linking.openURL(aboutData.facebookLink)}>
                  <Text style={style.text}>Like us on Facebook</Text>
                </TouchableOpacity>
              </View>
            </View>
            }
            {aboutData.websiteUrl != '' &&
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="globe" size={16}/></Text></View>
              <View>
                <TouchableOpacity onPress={() => Linking.openURL(aboutData.websiteUrl)}>
                  <Text style={style.text}>Visit Website</Text>
                </TouchableOpacity>
              </View>
            </View>
            }
            {aboutData.email != '' &&
            <View style={style.aboutUsRow}>
              <View style={style.iconContainer}><Text style={style.icon}><Icon name="envelope" size={16}/></Text></View>
              <View>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:' + aboutData.email)}>
                  <Text style={style.text}>Give Us Feedback</Text>
                </TouchableOpacity>
              </View>
            </View>
            }

          </View>
          <View style={style.aboutContainer}>
            <View style={style.aboutUsRow}>
              <Text style={style.title}>Developer Credits</Text>
            </View>

            <View style={{paddingBottom: 15}}>
              <Text style={style.text}>
                We are, a small dedicated team working on various ideas trying to make some positive impact on our society and country.
              </Text>
            </View>
            {aboutData.developers != '' &&
              aboutData.developers.map((developer, index) => (
                <View key={index} style={style.aboutUsRow}>
                  <View style={style.iconContainer}><Text style={style.icon}><Icon name="user" size={16}/></Text></View>
                  <View><Text style={style.text}>{developer}</Text></View>
                </View>
              ))
            }
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