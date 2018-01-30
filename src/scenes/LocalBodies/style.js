import {StyleSheet} from 'react-native';
import globalStyle, {theme} from '../../assets/styles';

export default StyleSheet.create({
  loading: globalStyle.loading,
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
});