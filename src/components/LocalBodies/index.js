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
				districtID: this.props.activeDistrict
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
		return (
			<Grid>
				{this.state.loading && 
					<View style={style.loading}>
						<ActivityIndicator size="large" color="#036cae" />
					</View>	
				}
				<Row size={6}>
					<View>
						<Text style={style.title}>{I18n.t('local_election', {locale: this.props.locale})}</Text>
					</View>
				</Row>
				<Row size={74}>
					<FlatList
					data={this.state.items}
					keyExtractor={this._localBodiesKeyExtractor}
					renderItem={({item}) => {
						return (
							<LocalBodyList activeDistrict={this.props.activeDistrict} locale={this.props.locale} 
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
		activeDistrict: state.activeDistrict
	}
};


export default connect(mapStateToProps)(LocalBodies);

