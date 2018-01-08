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
        paddingBottom: 5,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
        
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
        width: 180,
        paddingTop: 7,
        paddingBottom: 7,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    districtText: {
        color: globalStyle.UI.neutralColor,
        fontSize: 15
    }
   
   
}