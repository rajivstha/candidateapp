import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {activeProvince} from './provinceActions';
import ProvinceImage from '../Province/ProvinceImage';
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
      Actions.province({data: item})
    }
  }

  render() {
    let item = this.props.item ? this.props.item : '';
    let title = item.enLabel;
    if (this.props.locale === 'np' && item.label) {
      title = item.label ? item.label : item.enLabel
    }
    return (
      <TouchableOpacity onPress={this.handleActiveProvince(item)}>
        <View style={style.provinceItem}>
          <View style={style.provinceImageContainer}>
            <ProvinceImage id={item._id} style={style.singleProvinceImg} />
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


export default connect(null, mapDispatchToProps)(ProvinceItem);