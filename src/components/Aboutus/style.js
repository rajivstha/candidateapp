import globalStyle from '../../assets/styles';

module.exports = {
    aboutUsContainer:{
        marginTop: 5,
        backgroundColor: globalStyle.UI.neutralColor,
        // paddingTop: 25,
        // paddingBottom: 25,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: globalStyle.UI.textColor
    },
    aboutContainer: {
        backgroundColor: globalStyle.UI.backgroundColor,
        marginTop: 20,
        padding: 20,
        borderRadius: 5
        
    },
    aboutUsRow: {
        flexDirection: 'row',
        marginBottom: 7
    },
    title:{
        color: globalStyle.UI.neutralColor,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5
    },
    
    iconContainer: {
        flex: 1
    },
    textContainer: {
        flex: 13
    },
    icon: {
        color: globalStyle.UI.neutralColor
    },
    text: {
        color: globalStyle.UI.neutralColor,
        fontSize: 14
    }
}