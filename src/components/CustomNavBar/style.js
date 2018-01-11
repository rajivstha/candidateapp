import globalStyle from '../../assets/styles';

module.exports = {
    customNavbarContainer: {
        height: 96,
        flexDirection: 'column',
        backgroundColor: globalStyle.UI.neutralColor
    },
    customTopNavbarContainer: {
        flexDirection: 'row',
       
    },
    backIconContainer: {
        //flex: 3
    },
    logoContainer: {
        marginTop: 19,
        alignItems: 'center', 
        justifyContent: 'center',
        //flex: 10
    },
    logo: { 
        color: globalStyle.UI.textColor,
        fontSize: 30,
        fontWeight: 'bold'
    },
    backIcon: {
        color: globalStyle.UI.backgroundColor,
        marginTop: 20,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
        marginRight: 7
        
    }
}