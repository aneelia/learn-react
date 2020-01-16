import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ReduxApp from './App-redux';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import reducer from './redux/reducers'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>,
    document.getElementById('root'));