import * as React from 'react';
import { Container } from './Loading.styled';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { DefaultRootState } from '../../store/index';

export interface ILoadingProps {}

export const Loading = (props: ILoadingProps) => {
  const { showLoadingIndicator, text } = useSelector(
    (store: DefaultRootState) => store.loading
  );

  return (
    <Container>
      {showLoadingIndicator && <CircularProgress />}
      {text && text !== '' && <p>{text}</p>}
    </Container>
  );
};

export default Loading;
