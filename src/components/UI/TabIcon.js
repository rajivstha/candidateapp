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
        iconColor = props.focused ? '#FF0000' : '#000000',
        iconSize = props.focused ? 30 : 20;
    switch(props.title) {
        case 'localbodies':
            iconName = props.focused ? 'heart' : 'heart-o';
            break;
        case 'provincialassembly':
            iconName = props.focused ? 'comments' : 'comments-o';
            break;
        case 'houseofrepresentative':
            iconName = props.focused ? 'user' : 'user-o';
            break;
    }
    if(iconName) {
        return <Icon name={iconName} size={iconSize} color={iconColor} />;
    }
    return <Text>{props.title}</Text>
};

TabIcon.propTypes = propTypes;

export default TabIcon;