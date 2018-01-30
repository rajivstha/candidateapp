import { StyleSheet } from 'react-native';
import globalStyle, {theme} from '../../assets/styles';

export default StyleSheet.create({
  candidatesByLocationButton: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'center',
    backgroundColor: theme.UI.neutralColor,
    borderRadius: 5,
  },
  provinceContainer: {
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15
  },
  provinceItem: {
    marginBottom: 30
  },
  provinceImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DA1A40',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10
  },
  singleProvinceImg: {
    width: 250,
    height: 220
  },
  provinceTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.UI.neutralColor,
    marginTop: 10,
    borderRadius: 5
  },
  provinceText: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'

  },
  loading: globalStyle.loading,
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.UI.neutralColor,
    width: theme.screenWidth
  },
  footerText: {
    fontSize: 16,
    color: theme.UI.textColor,
    paddingTop: 15,
    paddingBottom: 15
  },
});