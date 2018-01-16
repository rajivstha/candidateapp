import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import style from './style';
  
const propTypes = {
    politicalPartyId: PropTypes.string,
};

  
const PoliticalPartyImage = (props) => {
    let image = <Image source={require('../../assets/partiesImg/demo.png')} style={style.partySingleImage}  />
    // Nepali Congress
    if(props.politicalPartyId === 'bba4b381-835f-4179-9e99-e3d1e95b4c45') {
        image = <Image source={require('../../assets/partiesImg/bba4b381-835f-4179-9e99-e3d1e95b4c45.png')} style={style.partySingleImage}  />
    }
    // Nepal Communist Party (UML)
    if(props.politicalPartyId === 'cf77ea43-bbbf-4ecf-b358-a42e7f9e9eba') {
        image = <Image source={require('../../assets/partiesImg/cf77ea43-bbbf-4ecf-b358-a42e7f9e9eba.png')} style={style.partySingleImage}  />
    }
    // Communist Party of Nepal (Maoist-Centre)
    if(props.politicalPartyId === 'ce87ee69-1bc1-44ec-8fe6-b076faa9165c') {
        image = <Image source={require('../../assets/partiesImg/ce87ee69-1bc1-44ec-8fe6-b076faa9165c.png')} style={style.partySingleImage} />
    }
    //Sanghiya Samajbadi Forum, Nepal
    if(props.politicalPartyId === 'e2974029-e92e-42bf-999a-102a84d50d27') {
        image = <Image source={require('../../assets/partiesImg/e2974029-e92e-42bf-999a-102a84d50d27.png')} style={style.partySingleImage} />
    }
    //Nepal Communist Party (ML)
    if(props.politicalPartyId === 'bf7a37a7-4dfa-4631-9f87-080861dcadf1') {
        image = <Image source={require('../../assets/partiesImg/bf7a37a7-4dfa-4631-9f87-080861dcadf1.png')} style={style.partySingleImage} />
    }
    //Rastriya Janta Party Nepal
    if(props.politicalPartyId === 'bf0bc461-1e01-48ef-9e80-743213b64a45') {
        image = <Image source={require('../../assets/partiesImg/bf0bc461-1e01-48ef-9e80-743213b64a45.png')} style={style.partySingleImage} />
    }
    //Rastriya Prajatantra Party
    if(props.politicalPartyId === '6c845a2c-cb24-4897-8160-774d55a158bc') {
        image = <Image source={require('../../assets/partiesImg/6c845a2c-cb24-4897-8160-774d55a158bc.png')} style={style.partySingleImage} />
    }
    //Naya Shakti Party Nepal
    if(props.politicalPartyId === 'c81fe263-faee-4a8d-8bce-27ad6b8feec4') {
        image = <Image source={require('../../assets/partiesImg/c81fe263-faee-4a8d-8bce-27ad6b8feec4.png')} style={style.partySingleImage} />
    }
    //Rastriya Janamukti Party
    if(props.politicalPartyId === '9e532b38-10a5-4694-9828-b39b8b7d3245') {
        image = <Image source={require('../../assets/partiesImg/9e532b38-10a5-4694-9828-b39b8b7d3245.png')} style={style.partySingleImage} />
    }
    //Rastriya Janmorcha
    if(props.politicalPartyId === '2a6dc414-b9e4-442b-9736-3494da10b109') {
        image = <Image source={require('../../assets/partiesImg/2a6dc414-b9e4-442b-9736-3494da10b109.png')} style={style.partySingleImage} />
    }
    //Nepal Majdoor Kisan Party
    if(props.politicalPartyId === '0c4e946e-3f61-48f2-a4bf-62a0f22b1a9b') {
        image = <Image source={require('../../assets/partiesImg/0c4e946e-3f61-48f2-a4bf-62a0f22b1a9b.png')} style={style.partySingleImage} />
    }
    //Nepali Janta Dal
    if(props.politicalPartyId === '028d1115-4d1b-457d-b098-40fd9ba84f0a') {
        image = <Image source={require('../../assets/partiesImg/028d1115-4d1b-457d-b098-40fd9ba84f0a.png')} style={style.partySingleImage} />
    }
    //Madhesi Janaadhikar Forum Nepal, Loktantric
    if(props.politicalPartyId === 'cd880609-f143-4505-a56a-54a402cc9159') {
        image = <Image source={require('../../assets/partiesImg/cd880609-f143-4505-a56a-54a402cc9159.png')} style={style.partySingleImage} />
    }
    //Nepal Loktantrik Forum
    if(props.politicalPartyId === '5c8b84f6-7ce1-4a42-be15-bdbd16d1664e') {
        image = <Image source={require('../../assets/partiesImg/5c8b84f6-7ce1-4a42-be15-bdbd16d1664e.png')} style={style.partySingleImage} />
    }
    return(
        <View style={style.partyIconWrapper}>{image}</View>
    );
    
};

PoliticalPartyImage.propTypes = propTypes;

export default PoliticalPartyImage;