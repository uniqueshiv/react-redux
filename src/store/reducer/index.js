import reducer from './reducer';
import {combineReducers} from 'redux';


export default combineReducers({
  rootReducer:reducer //first is name of reducer and second is the reducer which will created name of reducer.js
});
