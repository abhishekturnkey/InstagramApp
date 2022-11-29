import {combineReducers} from 'redux';
import { friendProfileReducer } from './friendProfileReducer';
import { homeReducer } from './homeReducer';
import { profileReducer } from './profileReducer';

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    friendProfileReducer: friendProfileReducer,
    homeReducer: homeReducer
})

export default rootReducer;