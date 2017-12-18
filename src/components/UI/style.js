import globalStyle from '../../assets/styles';

module.exports = {
    headerContainer:{
        flexDirection: 'column',
        backgroundColor: '#036cae'
    },
    logoContainer: {
        marginTop: 10,
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1
    },
    logo: { 
        color: globalStyle.UI.textColor,
        fontSize: 30,
        fontWeight: 'bold'
    },
    languageContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    languageItem: {
        backgroundColor: globalStyle.UI.textColor,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5
    },
    language:{
        color: '#036cae',
        fontWeight: 'bold'
    },
    footerContainer:{
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#036cae',
        width: globalStyle.screenWidth
    },
    footerText:{
        fontSize: 16,
        color: globalStyle.UI.textColor,
        paddingTop: 15,
        paddingBottom: 15
    }
}