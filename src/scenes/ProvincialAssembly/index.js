import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import globalStyle from '../../assets/styles';
import {connect} from 'react-redux';
import ConstituencyList from "../../components/ConstituencyList";

class ProvincialAssembly extends Component {

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
        <Row size={10}>
          <Text style={globalStyle.title}>{provinceTitle} - {title}</Text>
        </Row>
        <Row size={90}>
          <ConstituencyList locale={this.props.locale}
                            activeDistrict={this.props.activeDistrict}
                            activeProvince={this.props.activeProvince}
                            candidateType='provinceAssemblyCandidates'/>
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

export default connect(mapStateToProps)(ProvincialAssembly);