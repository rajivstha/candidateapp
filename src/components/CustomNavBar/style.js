import globalStyle from '../../assets/styles';

module.exports = {
  customNavbarContainer: {
    height: 65,
    flexDirection: 'row',
    backgroundColor: globalStyle.UI.neutralColor
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
    padding: 20
  },
  logoContainer: {
    flex:1,
    justifyContent: 'center'
  },
  logo: {
    color: globalStyle.UI.textColor,
    fontSize: 20,
    fontWeight: 'bold'
  }
}