import { combineReducers } from 'redux';

import renderingReducer from './renderingReducer';

const reducers = combineReducers({
//   barter: barterReducer,
//   main: mainReducer,
  rendering: renderingReducer,
})


export default reducers;