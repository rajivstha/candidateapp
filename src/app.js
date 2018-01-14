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
import Aboutus from './components/Aboutus';
import Districts from './components/Districts';
import LocalBodies from './components/LocalBodies';
import Wards from './components/Wards';
import ProvincialAssembly from './components/ProvincialAssembly';
import HouseOfRepresentative from './components/HouseOfRepresentative';
import Candidate from './components/Candidate';
import AddDetails from './components/Candidate/AddDetails';
import { BackHandler } from 'react-native';


class App extends Component {
  render() {
    const onBackAndroid = () => {
    	return Actions.pop();
    };
    return (
      <Router backAndroidHandler={onBackAndroid} navigationBarStyle={globalStyle.UI.navBar} titleStyle={globalStyle.UI.navTitle} >
			<Stack key="root">
				<Scene key="home" initial={true} hideNavBar  component={Home} />
				<Scene key="aboutUs" navBar={CustomNavBar}  hideNavBar={false} component={Aboutus} />
				<Scene key="districts" navBar={CustomNavBar} component={Districts} />
				<Scene key="candidate"  navBar={CustomNavBar} component={Candidate} />
				<Scene key="addDetails"   component={AddDetails} />
				<Scene key="wards" hideNavBar={false} navBar={CustomNavBar} component={Wards} />
				<Tabs
					key="tabbar"
					swipeEnabled
					showLabel={false}
					tabBarStyle={globalStyle.UI.tabBarStyle}
				>
					<Stack
					key="bodies"
					hideNavBar={false}
					title={I18n.t('local_election', {locale: this.props.locale})}
					icon={TabIcon}
					>
						<Scene navBar={CustomNavBar} key="localBodies"   component={LocalBodies} />
					</Stack>
					<Stack
					key="assembly"
					hideNavBar={false}
					title={I18n.t('provincial_assembly', {locale: this.props.locale})}
					icon={TabIcon}
					>
						<Scene  navBar={CustomNavBar} key="provincialAssembly"   component={ProvincialAssembly} />
					</Stack>
					<Stack
					key="representative"
					hideNavBar={false}
					title={I18n.t('hor', {locale: this.props.locale})}
					icon={TabIcon}
					>
						<Scene navBar={CustomNavBar} key="houseOfRepresentative"   component={HouseOfRepresentative} />
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