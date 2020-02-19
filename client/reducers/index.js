import { combineReducers } from 'redux';

// import all reducers here
import swapReducer from './swapReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  swapReducer: swapReducer,
});

// make the combined reducers available for import
export default reducers;