import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {activeProvince} from './provinceActions';
import style from './style';
  

class ProvinceItem extends Component {
    handleActiveProvince(item) {
        let province = {
            _id: item._id,
            label: item.label,
            enLabel: item.enLabel
        }
        return () => {
            this.props.activeProvince(province);
            Actions.districts({data: item})
        }
    }
    render(){
        let item = this.props.item ? this.props.item : '';
        let title = item.enLabel;
        if(this.props.locale === 'np' && item.label){
            title = item.label? item.label : item.enLabel
        }
        let image = '';
        if(item._id === '85298c28-e9d4-4292-81d5-7f8ed98a4efd') {
            image = <Image source={require('../../assets/provinceImg/85298c28-e9d4-4292-81d5-7f8ed98a4efd.png')}/>
        }
        if(item._id === '957547b4-e0d7-4a8a-bb9d-489e57e6ec82') {
            image = <Image source={require('../../assets/provinceImg/957547b4-e0d7-4a8a-bb9d-489e57e6ec82.png')}/>
        }
        if(item._id === '6325baea-4746-4d50-83c9-b445f5c476b8') { 
            image = <Image source={require('../../assets/provinceImg/6325baea-4746-4d50-83c9-b445f5c476b8.png')}/>
        }
        if(item._id === 'eea0c852-7749-49bc-afaf-ee4d4b0779d6') {
            image = <Image source={require('../../assets/provinceImg/eea0c852-7749-49bc-afaf-ee4d4b0779d6.png')}/>
        }
        if(item._id === '90805f28-3ee9-4177-bd72-d5de1b234926') {
            image = <Image source={require('../../assets/provinceImg/90805f28-3ee9-4177-bd72-d5de1b234926.png')}/>
        }
        if(item._id === '2e932057-8990-4abf-a38b-ad5456e62363') {
            image = <Image source={require('../../assets/provinceImg/2e932057-8990-4abf-a38b-ad5456e62363.png')}/>
        }
        if(item._id === '3ad0d718-3a53-4fb6-97c4-d4bbbfe289bc') {
            image = <Image source={require('../../assets/provinceImg/3ad0d718-3a53-4fb6-97c4-d4bbbfe289bc.png')}/>
        } 
        return (
            <TouchableOpacity onPress={this.handleActiveProvince(item)}>
                <View style={style.provinceItem}>
                    <View style={style.provinceImageContainer}>
                        {image}
                    </View>
                    <View style={style.provinceTextContainer}><Text style={style.provinceText}>{title}</Text></View>
                </View>
            </TouchableOpacity>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        activeProvince: (province) => dispatch(activeProvince(province)),
    }
};

ProvinceItem.propTypes = {
    locale: PropTypes.string,
    item: PropTypes.object
};


export default connect(null,mapDispatchToProps)(ProvinceItem);