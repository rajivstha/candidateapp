import globalStyle from '../../assets/styles';

module.exports = {
    headerContainer:{
        flexDirection: 'column',
        backgroundColor: globalStyle.UI.neutralColor
    },
    logoContainer: {
        marginTop: 30,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        color: globalStyle.UI.textColor,
        fontSize: 28,
        fontWeight: 'bold'
    },
    languageContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    languageItem: {
        backgroundColor: globalStyle.UI.textColor,
        marginRight: 15
    },
    language:{
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 15,
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
        padding: 15,
        marginBottom: 1
    },
    listTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
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
        fontSize: 20,
        fontWeight: 'bold'
    },
    designation: {
        color: globalStyle.UI.neutralColor,
        marginTop: 2,
        fontSize: 14
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
        fontSize: 18,
        fontWeight: 'bold'
    }
}