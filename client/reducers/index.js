import { combineReducers } from 'redux';

<<<<<<< HEAD
// import all reducers here
import swapReducer from './swapReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  swapReducer: swapReducer,
});

// make the combined reducers available for import
=======
import renderingReducer from './renderingReducer';

const reducers = combineReducers({
//   barter: barterReducer,
//   main: mainReducer,
  rendering: renderingReducer,
})


>>>>>>> dev
export default reducers;