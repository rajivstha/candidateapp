import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator,ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions} from 'react-native-router-flux';
import {Header, Footer} from '../UI';
import { graphql, compose } from 'react-apollo';
import {connect} from 'react-redux';
import {geoQuery}  from '../GQL';
import {GEOLocateLocalBody} from '../GEOLocateLocalBody';
import Icon from 'react-native-vector-icons/FontAwesome';
import {get} from 'lodash';
import I18n from '../../locale';
import style from './style';

class GEOLocate extends Component {
    state = {
        showDetails: false,
        iconName: false
    }  
    toggleClass() {
        this.setState({ 
            showDetails: !this.state.showDetails,
            iconName: !this.state.iconName 
         });
    };
	render() {
        let localBodyId = get(this.props.data, 'geoLocate.localBody._id', false);
        return (
			<View style={style.candidateByLocationContainer}>
                {this.props.data.loading &&
                    <View style={style.loading}>
                        <ActivityIndicator size="large" color="#036cae" />
                    </View>
                }
                {this.props.data.error &&
                    <Text>Something went wrong!</Text>
                }
                {localBodyId &&
                <GEOLocateLocalBody localBodyId={localBodyId}/>
                }
            </View>   
        );
	}
}


const mapStateToProps = (state) => {
	return {
		locale: state.locale
	}
};



export default compose(
    graphql(geoQuery, {
        options: ({location}) => ({
          variables: {location}
        })
      })
  )(connect(mapStateToProps)(GEOLocate));