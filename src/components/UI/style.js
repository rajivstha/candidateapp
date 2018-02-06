import {StyleSheet} from 'react-native';
import {theme} from '../../assets/styles';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    backgroundColor: theme.UI.neutralColor
  },
  customNavbarContainer: {
    height: 65,
    flexDirection: 'row',
    backgroundColor: theme.UI.neutralColor
  },
  customTopNavbarContainer: {
    flexDirection: 'row',
    flex: 2,
  },
  backIconContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  backIcon: {
    padding: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    color: theme.UI.textColor,
    fontSize: 18,
    fontWeight: 'bold'
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10
  },
  languageItem: {
    backgroundColor: theme.UI.textColor,
    marginRight: 15
  },
  language: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 15,
    color: theme.UI.neutralColor,
    fontWeight: 'bold'
  },
  activeLocaleChooserStyle: {
    backgroundColor: '#DA1A40',
    color: theme.UI.textColor
  },
  itemListContainer: {
    backgroundColor: '#ccc',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 1
  },
  listTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemIconContainer: {
    marginRight: 10,
    marginTop: 3,
    paddingLeft: 15
  },
  itemIcon: {
    color: theme.UI.neutralColor
  },
  itemTitle: {
    paddingRight: 15,
    flex: 1
  },
  itemText: {
    color: theme.UI.neutralColor,
    fontSize: 20
  },
  listContentContainer: {
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10
  },
  wardListContentContainer: {
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10
  },

  listContent: {
    flexDirection: 'row',
    backgroundColor: theme.UI.borderColor,
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 5,
    paddingTop: 5
  },
  partyIcon: {
    marginRight: 10,
    marginLeft: 7
  },
  partyIconWrapper: {
    width: 60,
    height: 60
  },
  partySingleImage: {
    width: 60,
    height: 60
  },
  candidateDetails: {
    flex: 1,
    flexWrap: 'wrap'
  },
  name: {
    color: theme.UI.neutralColor,
    marginTop: 7,
    fontSize: 20,
    fontWeight: 'bold'
  },
  designation: {
    color: theme.UI.neutralColor,
    marginTop: 2,
    fontSize: 14
  },
  viewWardsContainer: {
    backgroundColor: theme.UI.neutralColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 5
  },
  wardText: {
    color: theme.UI.textColor,
    fontSize: 18,
    fontWeight: 'bold'
  }
});