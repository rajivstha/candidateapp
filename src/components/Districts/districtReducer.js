import { 
    ACTIVE_DISTRICT
} from './districtActions';
  
const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTIVE_DISTRICT:
            return action.district;
        default:
            return state
    }
}