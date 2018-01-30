import {StyleSheet} from 'react-native';
import theme from './theme-style';

export { theme };

export default StyleSheet.create({
  bgImage: {
    flex: 1
  },
  text: {
    fontFamily: 'serif'
  },
  navBar: {
    backgroundColor: '#036cae'
  },
  sceneBackground: {
    backgroundColor: '#FFFFFF'
  },
  tabBarStyle: {
    backgroundColor: '#036cae',
    borderBottomColor: '#036cae',
    borderBottomWidth: 1,
    height: 60,
  },
  navTitle: {
    color: '#FFFFFF'
  },
  sceneLoadingText: {color: '#FFFFFF', fontWeight: 'bold', alignSelf: 'center'},
  sceneLoadingBGImage: {justifyContent: 'center'},
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: theme.UI.neutralColor,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#ccc',
    paddingTop: 10,
    height: 65,
    paddingLeft: 15,
    paddingRight: 15
  }
})