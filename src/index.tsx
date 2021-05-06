import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/default.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, SignIn, SignUp } from './pages';
import Header from './components/Header/Header';
import Main from './components/Main';
import { StyledApp } from './index.styled';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <Suspense fallback='Loading'>
          <StyledApp>
            <Router>
              <Header />
              <Main>
                <Switch>
                  <Route path='/sign-in'>
                    <SignIn />
                  </Route>{' '}
                  <Route path='/sign-up'>
                    <SignUp />
                  </Route>
                  <Route path='/'>
                    <Home />
                  </Route>
                </Switch>
              </Main>
            </Router>
          </StyledApp>
        </Suspense>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
