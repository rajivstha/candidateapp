import React, { Component } from 'react';
import {View} from 'react-native';
import { Actions, Scene, Router, Stack, Tabs } from 'react-native-router-flux';
import {connect} from 'react-redux';
import I18n from './locale';

import { TabIcon } from './components/UI';
import globalStyle from './assets/styles';
import CustomNavBar from './components/CustomNavBar';
//App components
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import Province from './components/Province';
import LocalBodies from './components/LocalBodies';
import Wards from './components/Wards';
import ProvincialAssembly from './components/ProvincialAssembly';
import HouseOfRepresentative from './components/HouseOfRepresentative';
import Candidate from './components/Candidate';
import AddDetails from './components/Candidate/AddDetails';


class App extends Component {
  render() {
    const onBackAndroid = () => {
    	return Actions.pop();
    };
    return (
      <Router backAndroidHandler={onBackAndroid} navigationBarStyle={globalStyle.UI.navBar} titleStyle={globalStyle.UI.navTitle} >
			<Stack key="root"
				hideNavBar={true}
             	navBar={CustomNavBar}>
				<Scene key="home" initial={true} component={Home} />
				<Scene key="aboutUs" title="About us" hideNavBar={false} component={AboutUs} />
				<Scene key="province" title="Province" hideNavBar={false} component={Province} />
				<Scene key="candidate" hideNavBar={false} component={Candidate} />
				<Scene key="addDetails" hideNavBar={false} component={AddDetails} />
				<Scene key="wards" hideNavBar={false} component={Wards} />
				<Tabs
					key="tabBar"
					swipeEnabled
					showLabel={false}
          			tabBarPosition="bottom"
          			tabBarStyle={globalStyle.UI.tabBarStyle}
				>
					<Stack
					key="localBodies"
					title={I18n.t('local_election', {locale: this.props.locale})}
					icon={TabIcon}
					>
						<Scene hideNavBar={false} key="localBodies_Index" component={LocalBodies} />
					</Stack>
					<Stack
					key="provincialAssembly"
					title={I18n.t('provincial_assembly', {locale: this.props.locale})}
					icon={TabIcon}
					>
						<Scene hideNavBar={false}  key="provincialAssembly_index" component={ProvincialAssembly} />
					</Stack>
					<Stack
					key="houseOfRepresentative"
					title={I18n.t('hor', {locale: this.props.locale})}
					icon={TabIcon}
					>
						<Scene hideNavBar={false}  key="houseOfRepresentative_index" component={HouseOfRepresentative} />
					</Stack>
				</Tabs>
			</Stack>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
	return {
			locale: state.locale
	}
};

export default connect(mapStateToProps)(App);