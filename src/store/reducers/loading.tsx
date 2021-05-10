import { LoadingAction } from '../../interfaces/Actions';
import { SET_LOADING } from '../../constants/actionTypes';

export interface LoadingState {
  isLoading: boolean;
  showLoadingIndicator?: boolean;
  text?: string;
}

export const defaultState: LoadingState = {
  isLoading: false,
  showLoadingIndicator: true,
  text: '',
};

export const loadingReducer = (state = defaultState, action: LoadingAction) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
