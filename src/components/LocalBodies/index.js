import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {LocalBodyList}  from '../UI';
import {localBodies}  from '../GQL';
import { graphql, compose } from 'react-apollo';
import apolloClient from '../../setup/apolloClient';
import I18n from '../../locale';

class LocalBodies extends Component {
	state = {
		items: [],
		loading: true
	};

	_localBodiesKeyExtractor(item, index) {
		return item._id; 
	}

	componentDidMount() {
		apolloClient.query({
			query: localBodies,
			variables: {
				skip: 0,
				limit: 100,
				returnPagedData: true,
				districtID: this.props.activeDistrict._id
			}
		}).then((data) => {
			this.setState({
				items : data.data.localBodies.items,
				loading: false
			})
		}).catch((err) => {
			console.log(err);
		})
	}

	render() {
		let provinceTitle = this.props.activeProvince.enLabel;
		if(this.props.locale === 'np' && this.props.activeProvince.label){
			provinceTitle = this.props.activeDistrict.label? this.props.activeProvince.label : this.props.activeProvince.enLabel
		}
		let title = this.props.activeDistrict.enLabel;
		if(this.props.locale === 'np' && this.props.activeDistrict.label){
			title = this.props.activeDistrict.label? this.props.activeDistrict.label : this.props.activeDistrict.enLabel
		}
		return (
			<Grid>
				{this.state.loading && 
					<View style={style.loading}>
						<ActivityIndicator size="large" color="#036cae" />
					</View>	
				}
				<Row size={10}>
					<View>
						<Text style={style.title}>{provinceTitle} - {title} - {I18n.t('local_election', {locale: this.props.locale})}</Text>
					</View>
				</Row>
				<Row size={70}>
					<FlatList
					data={this.state.items}
					keyExtractor={this._localBodiesKeyExtractor}
					renderItem={({item}) => {
						return (
							<LocalBodyList activeDistrict={this.props.activeDistrict._id} locale={this.props.locale} 
							item={item}/>
						)
					}}
					/>
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


export default connect(mapStateToProps)(LocalBodies);

