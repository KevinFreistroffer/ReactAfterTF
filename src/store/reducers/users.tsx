import { User } from '../../models';

export interface UsersState {
  users: Array<User>;
  user: User | undefined;
}

export const defaultState = {
  users: [],
  user: undefined,
};

export const usersReducer = (state = defaultState) => {
  return state;
};
