import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import ReduxApp from "./App-redux";
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducers';
import { logging } from './redux/middlewares/logging';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(logging),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
