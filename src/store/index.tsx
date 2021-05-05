import { createStore, combineReducers, applyMiddleware } from 'redux';
import { usersReducer } from './reducers/users';
import thunk from 'redux-thunk';

const reducers = combineReducers([usersReducer]);

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
