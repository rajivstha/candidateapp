import globalStyle from '../../assets/styles';

module.exports = {
    aboutUsContainer:{
        margin: 15,
        backgroundColor: globalStyle.UI.backgroundColor,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'column',
    },
    aboutUsRow: {
        flexDirection: 'row',
        marginBottom: 5
    },
    title:{
        color: '#036cae',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5
    },
    
    iconContainer: {
        marginRight: 7,
        flex: 1
    },
    textContainer: {
        flex: 13
    },
    icon: {
        color: globalStyle.UI.iconColor
    },
    text: {
        color: globalStyle.UI.iconColor,
        fontSize: 18
    }
}