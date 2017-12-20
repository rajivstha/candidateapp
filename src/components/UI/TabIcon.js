import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
  
const propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string,
};

  
const TabIcon = (props) => {
    let iconName, 
        iconColor = props.focused ? '#DA1A40' : '#FFFFFF',
        iconSize = props.focused ? 18 : 16;
    // switch(props.title) {
    //     case 'Local Election':
    //         iconName = props.focused ? 'heart' : 'heart-o';
    //         break;
    //     case 'Provincial Assembly':
    //         iconName = props.focused ? 'comments' : 'comments-o';
    //         break;
    //     case 'House of Representative':
    //         iconName = props.focused ? 'user' : 'user-o';
    //         break;
    // }
    // if(iconName) {
    //     return <Icon name={iconName} size={iconSize} color={iconColor} />;
    // }
    return <Text style={{color: iconColor, fontSize: iconSize}}>{props.title}</Text>
};

TabIcon.propTypes = propTypes;

export default TabIcon;