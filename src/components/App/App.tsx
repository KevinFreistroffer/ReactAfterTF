import React from 'react';
import '../../styles/reset.css';
import '../../styles/default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Portfolio, SignIn, SignUp, ContactMe } from '../../pages';
import Header from '../Header/Header';
import Main from '../Main';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';
import { Container } from '../App/App.styled';
import Loading from '../Loading';
import { useSelector } from 'react-redux';
import { DefaultRootState } from '../../store/index';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const store = useSelector((store: DefaultRootState) => store);

  return (
    <>
      {store.loading.isLoading && <Loading />}

      <Container>
        <Router>
          <ErrorBoundary>
            <Header />
            <Main>
              <Switch>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>{' '}
                <Route path='/contact-me'>
                  <ContactMe />
                </Route>
                <Route path='/sign-in'>
                  <SignIn />
                </Route>
                <Route path='/sign-up'>
                  <SignUp />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </Main>
            <Footer />
          </ErrorBoundary>
        </Router>
      </Container>
    </>
  );
}
