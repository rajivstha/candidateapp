import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ProvinceImage from './ProvinceImage';
import Footer from '../UI/footer';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {activeDistrict} from './actions';
import I18n from '../../locale';

class Province extends Component {
  state = {
    loading: true
  }

  handleActiveDistrict(district) {
    return () => {
      this.props.activeDistrict(district);
      Actions.tabBar();
    }
  }

  componentDidMount() {
    if (this.props.data.districts) {
      this.setState({
        loading: false
      })
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
        {this.state.loading &&
        <View style={style.loading}>
          <ActivityIndicator size="large" color="#036cae"/>
        </View>
        }
        <Row size={80} style={style.districtsContainer}>
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