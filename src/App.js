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
      <Router backAndroidHandler={onBackAndroid} navigationBarStyle={globalStyle.navBar}
              titleStyle={globalStyle.navTitle}>
        <Stack key="root" navBar={MyNavBar}>
          <Scene key="home" hideNavBar={true} title="Candidates OnNepal" initial={true} component={Home}/>
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
            hideNavBar={true}
            tabBarPosition="bottom"
            tabBarStyle={globalStyle.tabBarStyle}
          >
            <Scene
              key="localBodies"
              hideNavBar={false}
              title={I18n.t('local_election', {locale: this.props.locale})}
              icon={TabIcon} component={LocalBodies}
            />
            <Scene
              key="provincialAssembly"
              hideNavBar={false}
              title={I18n.t('provincial_assembly', {locale: this.props.locale})}
              icon={TabIcon}
              component={ProvincialAssembly}
            />
            <Scene
              key="houseOfRepresentative"
              hideNavBar={false}
              title={I18n.t('hor', {locale: this.props.locale})}
              icon={TabIcon} component={HouseOfRepresentative}
            />
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