import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { Actions} from 'react-native-router-flux';
import style from './style';

class LocaleChooser extends Component {
  render() {
    return (
      <View style={[style.languageContainer, this.props.containerStyle]}>
        <View style={style.languageItem}>
          <TouchableOpacity onPress={() => {
            this.props.onChange('en');
            Actions.refresh();
          }}>
            <Text
              style={[style.language, (this.props.activeLocale === 'en' ? style.activeLocaleChooserStyle : {})]}>EN</Text>
          </TouchableOpacity>
        </View>
        <View style={style.languageItem}>
          <TouchableOpacity onPress={() => {
            this.props.onChange('np');
            Actions.refresh();
          }}>
            <Text
              style={[style.language, (this.props.activeLocale === 'np' ? style.activeLocaleChooserStyle : {})]}>NP</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

export default LocaleChooser;


