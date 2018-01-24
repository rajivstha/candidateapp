import React, { Component } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { Actions} from 'react-native-router-flux';
import style from './style';
import LocaleChooser from '../UI/localeChooser';
import {connect} from 'react-redux';
import I18n from '../../locale';
import { changeLocale } from '../../locale/localeActions';
import Icon from 'react-native-vector-icons/Ionicons';

class CustomNavBar extends Component {
  render() {
    return (
        <View  style={style.customNavbarContainer}>
            <View style={style.customTopNavbarContainer}>
                <View style={style.backIconContainer}>
                    <TouchableOpacity style={style.backIcon} onPress={() => Actions.pop()}>
                        <Icon name="ios-arrow-back" size={30} color="#FFFFFF"/>
                    </TouchableOpacity>
                </View>
                <View style={style.logoContainer}>
                    <Text style={style.logo}>{ this.props.title }</Text>
                </View>
            </View>
            <LocaleChooser containerStyle={{alignItems:'flex-end', justifyContent:'flex-end'}} activeLocale={this.props.locale} onChange={this.props.changeLocale} />
        </View>
    );
  }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar);