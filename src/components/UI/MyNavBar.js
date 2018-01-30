import React, { Component } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { Actions} from 'react-native-router-flux';
import style from './style';
import LocaleChooser from './localeChooser';
import {connect} from 'react-redux';
import { changeLocale } from '../../locale/localeActions';
import Icon from 'react-native-vector-icons/Ionicons';

class MyNavBar extends Component {
  render() {
    return (
      <View  style={style.customNavbarContainer}>
        <View style={style.customTopNavbarContainer}>
          {!this.props.hideBackButton &&
            <View style={style.backIconContainer}>
              <TouchableOpacity style={style.backIcon} onPress={() => Actions.pop()}>
                <Icon name="ios-arrow-back" size={30} color="#FFFFFF"/>
              </TouchableOpacity>
            </View>
          }
          <View style={[style.logoContainer, (this.props.hideBackButton?{paddingLeft: 20}:{})]}>
            <Text style={style.logo}>{ this.props.title }</Text>
          </View>
        </View>
        <LocaleChooser containerStyle={{alignItems:'flex-end', justifyContent:'flex-end'}} activeLocale={this.props.locale} onChange={this.props.changeLocale} />
      </View>
    );
  }
}

MyNavBar.defaultProps = {
  hideBackButton: false,
  title: ''
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocale: (locale) => dispatch(changeLocale(locale)),
  }
};

const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNavBar);