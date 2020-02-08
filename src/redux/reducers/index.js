import { combineReducers } from 'redux';
import frameworks from './frameworks';
import libraries from './libraries';

export default combineReducers({
  frameworks,
  libraries,
});
