import React, { Component } from 'react';
import {View, Text} from 'react-native';

class ErrorMsg extends Component {
  render() {
    return (
      <View>
        <Text>Something Went Wrong!</Text>
      </View>
    );
  }
}

export default ErrorMsg;