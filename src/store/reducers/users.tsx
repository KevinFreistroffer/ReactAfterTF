import { User } from '../../models/User';

export interface UsersState {
  users: Array<User>;
}

export const defaultState = {
  users: [],
};

export const usersReducer = (state = defaultState) => {
  return state;
};
