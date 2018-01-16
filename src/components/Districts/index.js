import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../UI/footer';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {activeDistrict} from './districtActions';
import I18n from '../../locale';
class Districts extends Component {
    state = {
		loading: true
	}    
    handleActiveDistrict(districtId) {
        return () => {
            this.props.activeDistrict(districtId);
            Actions.localBodies();
        }
    }
    componentDidMount(){
		if(this.props.data.districts){
			this.setState({
				loading: false
			})
		}
	}
    render() {
        let province = {
            id : this.props.data._id,
            label : this.props.data.label,
            enLabel : this.props.data.enLabel
        };
        let districts = this.props.data.districts;
        let provinceTitle = province.enLabel;
        if(this.props.locale === 'np' && province.label){
            provinceTitle = province.label? province.label : province.enLabel
        }
        let image = '';
        if(province.id === '85298c28-e9d4-4292-81d5-7f8ed98a4efd') {
            image = <Image source={require('../../assets/provinceImg/85298c28-e9d4-4292-81d5-7f8ed98a4efd.png')}/>
        }
        if(province.id === '957547b4-e0d7-4a8a-bb9d-489e57e6ec82') {
            image = <Image source={require('../../assets/provinceImg/957547b4-e0d7-4a8a-bb9d-489e57e6ec82.png')}/>
        }
        if(province.id === '6325baea-4746-4d50-83c9-b445f5c476b8') { 
            image = <Image source={require('../../assets/provinceImg/6325baea-4746-4d50-83c9-b445f5c476b8.png')}/>
        }
        if(province.id === 'eea0c852-7749-49bc-afaf-ee4d4b0779d6') {
            image = <Image source={require('../../assets/provinceImg/eea0c852-7749-49bc-afaf-ee4d4b0779d6.png')}/>
        }
        if(province.id === '90805f28-3ee9-4177-bd72-d5de1b234926') {
            image = <Image source={require('../../assets/provinceImg/90805f28-3ee9-4177-bd72-d5de1b234926.png')}/>
        }
        if(province.id === '2e932057-8990-4abf-a38b-ad5456e62363') {
            image = <Image source={require('../../assets/provinceImg/2e932057-8990-4abf-a38b-ad5456e62363.png')}/>
        }
        if(province.id === '3ad0d718-3a53-4fb6-97c4-d4bbbfe289bc') {
            image = <Image source={require('../../assets/provinceImg/3ad0d718-3a53-4fb6-97c4-d4bbbfe289bc.png')}/>
        }
        let heading = '';
        if(this.props.locale === 'en'){
            heading = I18n.t('district_under', {locale: this.props.locale}) + ' ' + provinceTitle;
        }
        if(this.props.locale === 'np'){
            heading = provinceTitle + ' ' + I18n.t('district_under', {locale: this.props.locale});
        }
        return (
            <Grid>
                {this.state.loading && 
				<View style={style.loading}>
					<ActivityIndicator size="large" color="#036cae" />
				</View>	
				}
                <Row size={80} style={style.districtsContainer}>
                    <View style={style.provinceContainer}>
                        <View style={style.provinceImageContainer}>
                            {image}
                        </View>
                        <View style={style.provinceTextContainer}>
                            <Text style={style.provinceText}>
                                {heading}
                            </Text>
                        </View>
                    </View>
                    <ScrollView>
                    <View style={style.districtsListContainer}>
                        {districts.length > 0 && districts.map((district,index)=>{ 
                            let districtTitle = district.enLabel;
                            if(this.props.locale === 'np' && district.label){
                                districtTitle = district.label? district.label : district.enLabel
                            }
                                return(
                                    <TouchableOpacity  key={index} onPress={this.handleActiveDistrict(district._id)}>
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

Districts.propTypes = {
    data: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
    return {
        activeDistrict: (districtId) => dispatch(activeDistrict(districtId)),
    }
};

const mapStateToProps = (state) => {
	return {
		locale: state.locale
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Districts);