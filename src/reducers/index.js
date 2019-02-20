import {combineReducers} from 'redux';
import clientreducer from  './client';

export default combineReducers({
	clients:clientreducer
});