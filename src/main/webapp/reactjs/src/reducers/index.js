import {combineReducers} from 'redux';
import errorsReducer from './errorsReducer';
import videoReducer from './videoReducer';

export default combineReducers({
    errors: errorsReducer,
    video: videoReducer
}); 