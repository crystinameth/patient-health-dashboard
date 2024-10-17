import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
// import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk'; // For handling asynchronous actions
import patientReducer from './reducers';

const store = createStore(patientReducer, applyMiddleware(thunk));

export default store;

