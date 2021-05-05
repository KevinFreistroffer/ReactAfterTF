import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/default.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Register } from './pages';
import Header from './components/Header/Header';
import Main from './components/Main';
import { StyledApp } from './index.styled';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <StyledApp>
          <Router>
            <Header />
            <Main>
              <Switch>
                <Route path='/register'>
                  <Register />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </Main>
          </Router>
        </StyledApp>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
