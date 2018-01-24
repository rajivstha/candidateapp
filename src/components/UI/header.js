import React, { Component } from 'react';
import {View, Text} from 'react-native';
import style from './style';
import LocaleChooser from './localeChooser';
import {connect} from 'react-redux';
import I18n from '../../locale';
import { changeLocale } from '../../locale/localeActions';
class Header extends Component {
  render() {
    return (
        <View style={style.headerContainer}>
            <View style={style.logoContainer}>
                <Text style={style.logo}>Candidates OnNepal</Text>
            </View>
            <LocaleChooser activeLocale={this.props.locale} onChange={this.props.changeLocale} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);