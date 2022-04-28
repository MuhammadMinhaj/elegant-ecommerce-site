/**
 * @author Muhammad Minhaj <programmer.mdminhaj@gmail.com>
 * @description The redux store
 */

// Includes Packages
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Middlewares
const middlewares = [logger, thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
