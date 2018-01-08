import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WardList}  from '../UI';
import {wards}  from '../GQL';
import { graphql, compose } from 'react-apollo';
import {connect} from 'react-redux';

// let localbodies = [
//   {
//     id: '00009',
//     name: 'Ward No 1',
//   },
  
  
// ]
class Wards extends Component {
//   state = {
//     localbodies: localbodies,
//   };
  _localBodiesKeyExtractor(item, index) {
    return item._id; 
  }

//   _renderLocalBody({item}) {
//     return (
//         <MyList localbody={item}/>
//     )
//   }
  render() {
    console.log(this.props.data.wards)
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

//export default Wards;



const mapStateToProps = (state) => {
	return {
		locale: state.locale
	}
};

export default graphql(wards, {
    options: (props) => ({ 
		variables: {
            skip: 0,
            limit: 100,
            localBodyID: props.localBodyId
		}
    })
})(connect(mapStateToProps)(Wards));