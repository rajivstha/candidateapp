import {Dimensions} from 'react-native';

module.exports = {
    screenWidth:  Dimensions.get('window').width,
    UI: {
        backgroundColor: '#FFFFFF',
        primaryColor: '#FF1493',
        neutralColor: '#036cae',
        dangerColor: '#FF0000',
        textColor: '#FFFFFF',
        iconColor:'#ababab',
        borderColor: '#ddd',
        bgImage: {
            flex:1
        },
        text: {
            fontFamily: 'serif'
        },
        navBar: {
            backgroundColor: '#036cae'
        },
        sceneBackground: {
            backgroundColor: '#FFFFFF'
        },
        tabBarStyle: {
            backgroundColor: '#036cae', 
            borderBottomColor:'#036cae', 
            borderBottomWidth: 1,
          height: 60,
        },
        navTitle: {
            color: '#FFFFFF'
        },
        sceneLoading: {
            text: {color: '#FFFFFF', fontWeight: 'bold', alignSelf: 'center'},
            bgImage: {justifyContent: 'center'}
        },
        loading: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
          }
    }
}