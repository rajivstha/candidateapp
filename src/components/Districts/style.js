import globalStyle from '../../assets/styles';

module.exports = {
    districtsContainer:{
        flexDirection: 'column',
    },
    provinceContainer:{
        flexDirection: 'column',
    },
    provinceImageContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#DA1A40',
        height: 170
    },
    provinceTextContainer:{
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: globalStyle.UI.neutralColor
    },
    provinceText: {  
        paddingTop: 5, 
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
        
    },
    provinceSubText: {
        color: '#fff',
        paddingBottom: 5
    },
    districtsListContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20
    },
    districtItem: {
        borderWidth: 1,
        borderColor: globalStyle.UI.neutralColor,
        marginTop: 10,
        width: 150,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    districtText: {
        color: globalStyle.UI.neutralColor,
        fontSize: 15
    }
   
   
}