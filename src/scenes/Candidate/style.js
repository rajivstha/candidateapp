import {StyleSheet} from 'react-native';
import {theme} from '../../assets/styles';

export default StyleSheet.create({
  candidateContainer: {
    flexDirection: 'column'
  },
  singleImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  singleImage: {
    width: 270,
    height: 220,
  },
  singleImageInnerContainer: {
    borderWidth: 15,
    borderColor: theme.UI.backgroundColor,
    borderRadius: 20,
    marginTop: 10,
    width: 300,
    height: 250,
  },
  singleImageText: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  candidateName: {
    fontSize: 21,
    alignSelf: 'center',
    color: theme.UI.textColor,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
  address: {
    fontSize: 16,
    alignSelf: 'center',
    color: theme.UI.textColor
  },
  candidateDetailsContainer: {
    backgroundColor: theme.UI.backgroundColor,
    flex: 1,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15
  },
  partyImageContainer: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 65,
    height: 65,
    backgroundColor: theme.UI.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'

  },
  bioContainer: {
    paddingBottom: 10
  },
  bioTitle: {
    fontSize: 16,
    color: theme.UI.neutralColor
  },
  bio: {
    color: theme.UI.neutralColor
  },
  candidateDetailsRow: {
    flexDirection: 'row',
    marginBottom: 5
  },
  iconContainer: {
    backgroundColor: theme.UI.neutralColor,
    borderRadius: 25,
    width: 25,
    height: 25,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15
  },
  icon: {
    color: theme.UI.textColor
  },
  textContainer: {
    flexDirection: 'row',
    paddingRight: 15,
    flex: 1
  },
  dataContainer: {
    flexWrap: 'wrap',
    flex: 1
  },
  data: {
    color: theme.UI.neutralColor,
  },
  addDetailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.UI.neutralColor,
    marginTop: 20,
    padding: 15
  },
  addDetailsText: {
    color: theme.UI.textColor,
    fontSize: 18
  },

  addDetails: {
    flexDirection: 'column',
    padding: 20
  },
  addDetailsRow: {
    flexDirection: 'row',
    marginBottom: 7
  },
  title: {
    color: theme.UI.neutralColor,
    fontSize: 18,
    marginBottom: 5
  },
  formLabelContainer: {
    flex: 3,
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 10
  },
  formLabel: {
    fontWeight: 'bold'
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: theme.UI.neutralColor,
    height: 30
  },
  label: {
    fontWeight: 'bold',
    color: theme.UI.neutralColor
  }
});
