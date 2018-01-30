import { StyleSheet } from 'react-native';
import { theme } from '../../assets/styles';

export default StyleSheet.create({
  aboutUsContainer: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column'
  },
  aboutContainer: {
    backgroundColor: theme.UI.backgroundColor,
    marginTop: 15,
    padding: 15,
    borderRadius: 5

  },
  aboutUsRow: {
    flexDirection: 'row',
    marginBottom: 7,
    alignItems: 'center'
  },
  title: {
    color: theme.UI.neutralColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  iconContainer: {
    width: 28,
  },
  text: {
    fontSize: 15
  }
});