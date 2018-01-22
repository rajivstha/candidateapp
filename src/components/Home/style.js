import globalStyle from '../../assets/styles';

module.exports = {
    provinceContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15
    },
    provinceItem: { 
        marginBottom: 30 
    },
    provinceImageContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#DA1A40',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10
    },
    singleProvinceImg: {
        width: 250,
        height: 220
    },
    provinceTextContainer:{
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: globalStyle.UI.neutralColor,
        marginTop: 10,
        borderRadius: 5 
    },
    provinceText: {  
        paddingTop: 5, 
        paddingBottom: 5, 
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
        
    },
    loading: globalStyle.UI.loading
}