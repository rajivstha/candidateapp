import React, { Component } from 'react';
import {View} from 'react-native';
import { Actions, Scene, Router, Stack, Tabs } from 'react-native-router-flux';
import {connect} from 'react-redux';
import I18n from './locale';

import { TabIcon } from './components/UI';

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
import globalStyle from './assets/styles';

class App extends Component {
  render() {
    const onBackAndroid = () => {
    	return Actions.pop();
    };
    return (
      <Router backAndroidHandler={onBackAndroid} navigationBarStyle={globalStyle.UI.navBar} titleStyle={globalStyle.UI.navTitle} >
			<Stack key="root">
				<Scene key="home" initial={true} hideNavBar  component={Home} />
				<Scene key="aboutUs"  hideNavBar={true} component={Aboutus} />
				<Scene key="districts"   component={Districts} />
				<Scene key="candidate"   component={Candidate} />
				<Scene key="addDetails"   component={AddDetails} />
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
						<Scene key="localBodies"   component={LocalBodies} />
						<Scene key="wards" hideNavBar={false}  component={Wards} />
					</Stack>
					<Stack
					key="assembly"
					hideNavBar={false}
					title={I18n.t('provincial_assembly', {locale: this.props.locale})}
					icon={TabIcon}
					>
						<Scene key="provincialAssembly"   component={ProvincialAssembly} />
					</Stack>
					<Stack
					key="representative"
					hideNavBar={false}
					title={I18n.t('hor', {locale: this.props.locale})}
					icon={TabIcon}
					>
						<Scene key="houseOfRepresentative"   component={HouseOfRepresentative} />
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