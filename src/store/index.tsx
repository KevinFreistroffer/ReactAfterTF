import { createStore, combineReducers, applyMiddleware } from 'redux';
import { LoadingState, loadingReducer } from './reducers/loading';
import { UsersState, usersReducer } from './reducers/users';
import thunk from 'redux-thunk';

export interface DefaultRootState {
  users: UsersState;
  loading: LoadingState;
}

const reducers = combineReducers<DefaultRootState>({
  users: usersReducer,
  loading: loadingReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
