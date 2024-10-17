import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'; // For handling asynchronous actions
import patientReducer from './PatientReducer';
import authRequestReducer from './AuthRequestReducer';

const store = createStore(patientReducer, applyMiddleware(thunk));

export default store;

