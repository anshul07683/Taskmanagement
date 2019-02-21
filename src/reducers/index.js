import {combineReducers} from 'redux';
import clientreducer from  './client';
import developerreducer from './developer'

export default combineReducers({
	clients:clientreducer,
	developer:developerreducer

});