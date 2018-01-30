import {StyleSheet} from 'react-native';
import globalStyle, {theme} from '../../assets/styles';

export default StyleSheet.create({
  districtsContainer: {
    flexDirection: 'column',
  },
  provinceContainer: {
    flexDirection: 'column',
  },
  provinceImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DA1A40',
    height: 220
  },
  singleProvinceImg: {
    width: 250,
    height: 220
  },
  provinceTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.UI.neutralColor,
    padding: 2

  },
  provinceText: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'

  },

  districtsListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20
  },
  districtItem: {
    borderWidth: 1,
    borderColor: theme.UI.neutralColor,
    marginTop: 10,
    width: 180,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  districtText: {
    color: theme.UI.neutralColor,
    fontSize: 20
  },
  loading: globalStyle.loading


});