import globalStyle from '../../assets/styles';

module.exports = {
    candidateContainer:{
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
        borderColor: globalStyle.UI.backgroundColor,
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
        color: globalStyle.UI.textColor, 
        fontWeight: 'bold' 
    },
    address: { 
        fontSize: 16, 
        alignSelf: 'center', 
        color: globalStyle.UI.textColor
    },
    candidateDetailsContainer: { 
        backgroundColor: globalStyle.UI.backgroundColor, 
        flex: 1, 
        marginTop: 10, 
        padding: 15
    },
    partyImageContainer: {
        position: 'absolute', 
        top: -10,
        right: -10,
        width: 65,
        height: 65,
        backgroundColor: globalStyle.UI.backgroundColor,
        alignItems: 'center', 
        justifyContent: 'center'

    },
    partySingleImage: {
        width: 60,
        height: 60,
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
     
    addDetails:{
        flexDirection: 'column',
        padding: 20
    },
    addDetailsRow: {
        flexDirection: 'row',
        marginBottom: 7
    },
    title:{
        color: globalStyle.UI.neutralColor,
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
    formLabel:{
        fontWeight: 'bold'
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: globalStyle.UI.neutralColor,
        height: 30
    },
    label: {
        fontWeight: 'bold'
    },
    loading: globalStyle.UI.loading
    
}
