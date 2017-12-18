import globalStyle from '../../assets/styles';

module.exports = {
    candidateContainer:{
        flexDirection: 'column',
    },
    singleImageContainer: {flex:1, backgroundColor: '#FFF', padding: 15, marginLeft:45, marginRight:45, borderRadius: 20, marginTop: 20},
    singleImageInnerContainer: { flex:1},
    singleImageText: {backgroundColor: 'rgba(0, 0, 0, 0.5)', bottom: 0,  left: 0, right: 0, flexDirection: 'column', position: 'absolute', alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10},
    candidateName: { fontSize: 21, alignSelf: 'center', color: globalStyle.UI.textColor, fontWeight: 'bold' },
    address: { fontSize: 16, alignSelf: 'center', color: globalStyle.UI.textColor, },
    candidateDetailsContainer: { 
        backgroundColor: globalStyle.UI.backgroundColor, flex: 1, marginTop: 10, padding: 15
    },
    bioContainer:{
        paddingBottom: 10
    },
    bioTitle:{
        fontSize: 16,
        color: globalStyle.UI.neutralColor
    },
    bio:{
        color: globalStyle.UI.neutralColor
    },
    candidateDetailsRow: {
        flexDirection: 'row',
        marginBottom: 2
    },
    iconContainer: {
        backgroundColor: globalStyle.UI.neutralColor,
        borderRadius: 25,
        width: 25,
        height: 25,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: globalStyle.UI.textColor
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: globalStyle.UI.neutralColor,
        fontSize: 14
    },
    addDetailsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalStyle.UI.neutralColor,
        marginTop: 20,
        padding: 15
    },
    addDetailsText: {
        color: globalStyle.UI.textColor,
        fontSize: 18
    },
     
}
