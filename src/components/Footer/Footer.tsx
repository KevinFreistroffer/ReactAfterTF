import React from 'react';
import '../../styles/reset.css';
import '../../styles/default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Portfolio, SignIn, SignUp } from '../../pages';
import Header from '../Header/Header';
import Main from '../Main';
import ErrorBoundary from '../ErrorBoundary';
import { Container } from '../Footer/Footer.styled';
import Loading from '../Loading';
import { useSelector } from 'react-redux';
import { DefaultRootState } from '../../store/index';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  const store = useSelector((store: DefaultRootState) => store);

  return (
    <>
      {store.loading.isLoading && <Loading />}
      <Container className='flex'></Container>
    </>
  );
}
