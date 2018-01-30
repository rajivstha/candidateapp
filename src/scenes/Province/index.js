import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ProvinceImage from './ProvinceImage';
import {activeDistrict} from './actions';
import I18n from '../../locale';
import globalStyle from '../../assets/styles';
import style from './style';

class Province extends Component {

  handleActiveDistrict(district) {
    return () => {
      this.props.activeDistrict(district);
      Actions.tabBar();
    }
  }

  render() {
    let province = {
      id: this.props.data._id,
      label: this.props.data.label,
      enLabel: this.props.data.enLabel
    };
    let districts = this.props.data.districts;
    let provinceTitle = province.enLabel;
    if (this.props.locale === 'np' && province.label) {
      provinceTitle = province.label ? province.label : province.enLabel
    }

    let heading = '';
    if (this.props.locale === 'en') {
      heading = I18n.t('district_under', {locale: this.props.locale}) + ' ' + provinceTitle;
    }
    if (this.props.locale === 'np') {
      heading = provinceTitle + ' ' + I18n.t('district_under', {locale: this.props.locale});
    }
    return (
      <Grid>
        <Row style={style.districtsContainer}>
          <View style={style.provinceContainer}>
            <View style={style.provinceImageContainer}>
              <ProvinceImage id={province.id} style={style.singleProvinceImg} />
            </View>
            <View style={style.provinceTextContainer}>
              <Text style={style.provinceText}>
                {heading}
              </Text>
            </View>
          </View>
          <ScrollView>
            <View style={style.districtsListContainer}>
              {districts.length > 0 && districts.map((district, index) => {
                let districtTitle = district.enLabel;
                if (this.props.locale === 'np' && district.label) {
                  districtTitle = district.label ? district.label : district.enLabel
                }
                return (
                  <TouchableOpacity key={index} onPress={this.handleActiveDistrict(district)}>
                    <View style={style.districtItem}>
                      <Text style={style.districtText}>{districtTitle}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
              }
            </View>
          </ScrollView>
        </Row>
      </Grid>
    );
  }
}

Province.propTypes = {
  data: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return {
    activeDistrict: (district) => dispatch(activeDistrict(district)),
  }
};

const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Province);