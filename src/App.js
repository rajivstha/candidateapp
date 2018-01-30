import React, {Component} from 'react';
import {Actions, Scene, Router, Stack, Tabs} from 'react-native-router-flux';
import {connect} from 'react-redux';
import I18n from './locale';

import {TabIcon, MyNavBar} from './components/UI';
import globalStyle from './assets/styles';

//App components
import Home from './scenes/Home';
import AboutUs from './scenes/AboutUs';
import Province from './scenes/Province';
import LocalBodies from './scenes/LocalBodies';
import Wards from './scenes/Wards';
import ProvincialAssembly from './scenes/ProvincialAssembly';
import HouseOfRepresentative from './scenes/HouseOfRepresentative';
import Candidate from './scenes/Candidate';
import AddDetails from './scenes/Candidate/AddDetails';
import GEOLocate from './scenes/GEOLocate';

class App extends Component {
  render() {
    const onBackAndroid = () => {
      return Actions.pop();
    };
    return (
      <Router backAndroidHandler={onBackAndroid} navigationBarStyle={globalStyle.UI.navBar}
              titleStyle={globalStyle.UI.navTitle}>
        <Stack key="root" navBar={MyNavBar}>
          <Scene key="home" title="Candidates OnNepal" initial={true} component={Home}/>
          <Scene key="aboutUs" title={I18n.t('about_us', {locale: this.props.locale})} component={AboutUs}/>
          <Scene key="province" title={I18n.t('province', {locale: this.props.locale})} component={Province}/>
          <Scene key="candidate" title={I18n.t('candidate', {locale: this.props.locale})} component={Candidate}/>
          <Scene key="addDetails" hideNavBar={false} component={AddDetails}/>
          <Scene key="wards" title={I18n.t('wards', {locale: this.props.locale})} component={Wards}/>
          <Scene key="geoLocate" title="Geo Locate" component={GEOLocate}/>
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
              <Scene hideNavBar={false} key="localBodies_Index" component={LocalBodies}/>
            </Stack>
            <Stack
              key="provincialAssembly"
              title={I18n.t('provincial_assembly', {locale: this.props.locale})}
              icon={TabIcon}
            >
              <Scene hideNavBar={false} key="provincialAssembly_index" component={ProvincialAssembly}/>
            </Stack>
            <Stack
              key="houseOfRepresentative"
              title={I18n.t('hor', {locale: this.props.locale})}
              icon={TabIcon}
            >
              <Scene hideNavBar={false} key="houseOfRepresentative_index" component={HouseOfRepresentative}/>
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