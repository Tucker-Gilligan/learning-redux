import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  //"counter" can be any name you want
  //counter is how we will acess counterReducer
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
