import { 
    ACTIVE_PROVINCE
} from './provinceActions';
  
const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTIVE_PROVINCE:
            return action.province;
        default:
            return state
    }
}