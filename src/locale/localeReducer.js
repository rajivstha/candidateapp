import { 
    CHANGE_LOCALE
} from './localeActions';
  
const initialState = 'en';

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_LOCALE:
            return action.locale;
        default:
            return state
    }
}