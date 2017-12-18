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
        sceneLoading: {
            text: {color: '#FFFFFF', fontWeight: 'bold', alignSelf: 'center'},
            bgImage: {justifyContent: 'center'}
        },
        text: {
            fontFamily: 'serif'
        }
    }
}