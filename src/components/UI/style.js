import globalStyle from '../../assets/styles';

module.exports = {
    headerContainer:{
        flexDirection: 'column',
        backgroundColor: globalStyle.UI.neutralColor
    },
    logoContainer: {
        marginTop: 14,
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
        marginRight: 5
    },
    language:{
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        color: globalStyle.UI.neutralColor,
        fontWeight: 'bold'
    },
    activeLocaleChooserStyle: {
        backgroundColor: '#DA1A40',
        color: globalStyle.UI.textColor
    },
    footerContainer:{
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: globalStyle.UI.neutralColor,
        width: globalStyle.screenWidth
    },
    footerText:{
        fontSize: 16,
        color: globalStyle.UI.textColor,
        paddingTop: 15,
        paddingBottom: 15
    },
    itemListContainer:{
        backgroundColor: '#ccc',
        padding: 10,
        marginBottom: 1
    },
    listTitleContainer: {
        flexDirection: 'row',
    },
    itemIconContainer: {
        marginRight: 10,
        marginTop: 3,
    },
    itemIcon: {
        color: globalStyle.UI.neutralColor
    },
    itemText: {
        color: globalStyle.UI.neutralColor,
        fontSize: 15
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
        backgroundColor: globalStyle.UI.borderColor,
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
    name: {
        color: globalStyle.UI.neutralColor,
        marginTop: 7,
        fontWeight: 'bold'
    },
    designation: {
        color: globalStyle.UI.neutralColor,
        marginTop: 2,
       
        fontSize: 12
    },
    viewWardsContainer: {
        backgroundColor: globalStyle.UI.neutralColor,
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 10,
        marginTop: 5
    },
    wardText: {
        color: globalStyle.UI.textColor,
        fontSize: 16
    }
}