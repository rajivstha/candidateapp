import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {View, TouchableOpacity, Text} from 'react-native';
import { Actions} from 'react-native-router-flux';
import style from './style';
import LocaleChooser from './localeChooser';
import {connect} from 'react-redux';
import I18n from '../../locale';
import { changeLocale } from '../../locale/localeActions';
class Header extends Component {
  render() {
    return (
        <Row size={15} style={style.headerContainer}>
            <View style={style.logoContainer}>
                <TouchableOpacity onPress={() => Actions.home()}>
                    <Text style={style.logo}>Candidates OnNepal</Text>
                </TouchableOpacity>   
            </View>
            <LocaleChooser activeLocale={this.props.locale} onChange={this.props.changeLocale} />
        </Row>
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