import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/default.css';
import reportWebVitals from './reportWebVitals';
import { StylesProvider } from '@material-ui/core/styles';
import Loading from './components/Loading';
import { Provider } from 'react-redux';
import store from './store';
import './i18n';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <Suspense fallback={<Loading />}>
          <App />
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
