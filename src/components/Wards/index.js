import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WardList}  from '../UI';
import {wards}  from '../GQL';
import { graphql, compose } from 'react-apollo';
import {connect} from 'react-redux';


  
class Wards extends Component {
	_localBodiesKeyExtractor(item, index) {
		return item._id; 
	}
	render() {
		return (
			<Grid>
				<Row size={80}>
					<FlatList
						data={this.props.data.wards}
						keyExtractor={this._localBodiesKeyExtractor}
						renderItem={({item}) => {
						return (
							<WardList locale={this.props.locale} item={item}/>
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
		locale: state.locale
	}
};

export default graphql(wards, {
    options: (props) => ({ 
		variables: {
            skip: 0,
            limit: 20,
            localBodyID: props.localBodyId
		}
    })
})(connect(mapStateToProps)(Wards));