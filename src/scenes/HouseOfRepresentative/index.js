import React, {Component} from 'react';
import {Text} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import {connect} from 'react-redux';
import ConstituencyList from '../../components/ConstituencyList';
import globalStyle from '../../assets/styles';

class HouseOfRepresentative extends Component {
  render() {
    let provinceTitle = this.props.activeProvince.enLabel;
    if (this.props.locale === 'np' && this.props.activeProvince.label) {
      provinceTitle = this.props.activeDistrict.label ? this.props.activeProvince.label : this.props.activeProvince.enLabel
    }
    let title = this.props.activeDistrict.enLabel;
    if (this.props.locale === 'np' && this.props.activeDistrict.label) {
      title = this.props.activeDistrict.label ? this.props.activeDistrict.label : this.props.activeDistrict.enLabel
    }
    return (
      <Grid>
        <Row size={12}>
          <Text style={globalStyle.title}>{provinceTitle} - {title}</Text>
        </Row>
        <Row size={88}>
          <ConstituencyList locale={this.props.locale}
                            activeDistrict={this.props.activeDistrict}
                            activeProvince={this.props.activeProvince}
                            candidateType='houseOfRepresentativeCandidates'/>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale,
    activeDistrict: state.activeDistrict,
    activeProvince: state.activeProvince
  }
};

export default connect(mapStateToProps)(HouseOfRepresentative);