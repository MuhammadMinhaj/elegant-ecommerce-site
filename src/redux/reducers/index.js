import { combineReducers } from 'redux';
import appReducer from './appReducer';
// Combine all reducers to create the root reducer
const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
