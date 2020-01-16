import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ReduxApp from './App-redux';
import { createStore } from "redux";
import { Provider } from 'react-redux'

const initialState = ["first", "second"]

function changeStore(state = initialState, action) {
    console.log(action)

    if(action.type === 'WRITE') {
        return [
            ...state,
            action.payload
        ]
    }
    return state
}

const store = createStore(changeStore)

ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>,
    document.getElementById('root'));