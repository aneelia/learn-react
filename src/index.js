import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ReduxApp from './App-redux';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import reducer from './redux/reducers'
import { logging } from "./redux/enhancers/logging";

const store = createStore(reducer, applyMiddleware(logging))

ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>,
    document.getElementById('root'));