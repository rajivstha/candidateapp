import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {View, TouchableOpacity, Text} from 'react-native';
import { Actions} from 'react-native-router-flux';
import style from './style';
import LocaleChooser from '../UI/localeChooser';
import {connect} from 'react-redux';
import I18n from '../../locale';
import { changeLocale } from '../../locale/localeActions';
import Icon from 'react-native-vector-icons/FontAwesome';
class CustomNavBar extends Component {
  render() {
    return (
        <Row  style={style.customNavbarContainer}>
            <View style={style.customTopNavbarContainer}>
                <View stye={style.backIconContainer}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Text style={style.backIcon}>
                            <Icon name="chevron-left" size={23}/>
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.logoContainer}>
                    <TouchableOpacity onPress={() => Actions.home()}>
                        <Text style={style.logo}>Candidates OnNepal</Text>
                    </TouchableOpacity>   
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar);