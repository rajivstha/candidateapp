import React, { Component } from 'react';
import {View} from 'react-native';
import { Actions, Scene, Router, Stack, Tabs } from 'react-native-router-flux';
//import { connect } from 'react-redux';

//import { TabIcon, MyTabBar } from './components/UI';

//App components
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Districts from './components/Districts';
import LocalBodies from './components/LocalBodies';
import Wards from './components/Wards';
import Candidate from './components/Candidate';
class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="home" initial={true}  component={Home} />
          <Scene key="aboutus"   component={Aboutus} />
          <Scene key="districts"   component={Districts} />
          <Scene key="localbodies"   component={LocalBodies} />
          <Scene key="ward"   component={Wards} />
          <Scene key="candidate"   component={Candidate} />
        </Stack>
      </Router>
    )
  }
}


export default App;