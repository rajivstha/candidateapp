import { StyleSheet } from 'react-native';
import { theme } from '../../assets/styles';

export default StyleSheet.create({
  candidateByLocationContainer: {
    padding: 15,
    flex: 1
  },
  itemListContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginBottom: 1,
    borderRadius: 5,
  },
  listContentContainer: {
    marginTop: 10,
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
  name: {
    color: theme.UI.neutralColor,
    marginTop: 7,
    fontWeight: 'bold'
  },
  designation: {
    color: theme.UI.neutralColor,
    marginTop: 2,

    fontSize: 12
  },
  wardListContentContainer: {
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10
  },
  listTitleContainer: {
    flexDirection: 'row',
  },
  itemIconContainer: {
    marginRight: 10,
    marginTop: 3,
  },
  itemIcon: {
    color: theme.UI.neutralColor
  },
  itemText: {
    color: theme.UI.neutralColor,
    fontSize: 15
  },
  title: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: theme.UI.neutralColor,
    fontWeight: 'bold'
  },
  breadCrumbTitle: {
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 18,
    color: theme.UI.neutralColor,
    fontWeight: 'bold'
  }
});