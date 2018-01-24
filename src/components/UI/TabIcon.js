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
        iconSize = props.focused ? 40 : 36;
    switch(props.navigation.state.key) {
        case 'localBodies':
            iconName = props.focused ? 'home' : 'home';
            break;
        case 'provincialAssembly':
            iconName = props.focused ? 'product-hunt' : 'product-hunt';
            break;
        case 'houseOfRepresentative':
            iconName = props.focused ? 'institution' : 'institution';
            break;
    }
    if(iconName) {
        return <Icon name={iconName} size={iconSize} color={iconColor} />;
    }else{
        return <Text style={{color: iconColor, fontSize: iconSize}}>{props.title}</Text>
    }
    
};

TabIcon.propTypes = propTypes;

export default TabIcon;