import React, {Component} from 'react';
import {Image} from 'react-native';

function ProvinceImage(props) {
  let image = '';
  let imgStyle = props.style || {};
  if (props.id === '85298c28-e9d4-4292-81d5-7f8ed98a4efd') {
    image = <Image style={imgStyle}
                   source={require('../../assets/provinceImg/85298c28-e9d4-4292-81d5-7f8ed98a4efd.png')}/>
  }
  if (props.id === '957547b4-e0d7-4a8a-bb9d-489e57e6ec82') {
    image = <Image style={imgStyle}
                   source={require('../../assets/provinceImg/957547b4-e0d7-4a8a-bb9d-489e57e6ec82.png')}/>
  }
  if (props.id === '6325baea-4746-4d50-83c9-b445f5c476b8') {
    image = <Image style={imgStyle}
                   source={require('../../assets/provinceImg/6325baea-4746-4d50-83c9-b445f5c476b8.png')}/>
  }
  if (props.id === 'eea0c852-7749-49bc-afaf-ee4d4b0779d6') {
    image = <Image style={imgStyle}
                   source={require('../../assets/provinceImg/eea0c852-7749-49bc-afaf-ee4d4b0779d6.png')}/>
  }
  if (props.id === '90805f28-3ee9-4177-bd72-d5de1b234926') {
    image = <Image style={imgStyle}
                   source={require('../../assets/provinceImg/90805f28-3ee9-4177-bd72-d5de1b234926.png')}/>
  }
  if (props.id === '2e932057-8990-4abf-a38b-ad5456e62363') {
    image = <Image style={imgStyle}
                   source={require('../../assets/provinceImg/2e932057-8990-4abf-a38b-ad5456e62363.png')}/>
  }
  if (props.id === '3ad0d718-3a53-4fb6-97c4-d4bbbfe289bc') {
    image = <Image style={imgStyle}
                   source={require('../../assets/provinceImg/3ad0d718-3a53-4fb6-97c4-d4bbbfe289bc.png')}/>
  }
  return image;
}

export default ProvinceImage;