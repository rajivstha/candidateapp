import globalStyle from '../../assets/styles';

module.exports = {
    aboutUsContainer:{
        marginTop: 10,
        backgroundColor: globalStyle.UI.neutralColor,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: globalStyle.UI.textColor
    },

    aboutUsRow: {
        flexDirection: 'row',
        marginBottom: 5
    },
    title:{
        color: globalStyle.UI.textColor,
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
        color: globalStyle.UI.textColor
    },
    text: {
        color: globalStyle.UI.textColor,
        fontSize: 14
    }
}