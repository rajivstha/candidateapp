import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MyList}  from '../UI';
import {connect} from 'react-redux';
import { graphql } from 'react-apollo';
import apolloClient from '../../setup/apolloClient';
import {constituencies}  from '../GQL';

class PAHORcandidates extends Component {
  state = {
    items: [],
  };
  _localBodiesKeyExtractor(item, index) {
    return item._id; 
  }
  componentDidMount(){
    apolloClient.query({
		query: constituencies,
		variables: {
			id: this.props.activeDistrict
		}
    }).then((data) => {
		//console.log(data.data.district.constituencies);
		this.setState({
			items : data.data.district.constituencies
		})
    }).catch((err) => {
      	console.log(err);
    })
  }

  render() {
	 // console.log(this.props.candidateType);
	return (
         <Grid>
            <Row size={80}>
				 <FlatList
					data={this.state.items}
					keyExtractor={this._localBodiesKeyExtractor}
					renderItem={({item}) => {
						return (
							<MyList candidateType ={this.props.candidateType} locale={this.props.locale} item={item}/>
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

export default connect(mapStateToProps)(PAHORcandidates);