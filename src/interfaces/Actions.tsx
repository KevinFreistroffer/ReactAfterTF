export type LoadingAction = {
  type: string;
  payload: {
    isLoading: boolean;
    showLoadingIndicator?: boolean;
    text?: string;
  };
};
