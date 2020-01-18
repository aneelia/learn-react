import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ReduxApp from "./App-redux";
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from "redux";
import reducer from './redux/reducers'
import { logging } from "./redux/middlewares/logging";

const store = createStore(reducer, applyMiddleware(logging));


//
// const testButton = document.querySelector(".testButton")
// const items = document.querySelector(".testUl")
// const inputValue = document.querySelector(".testInput")
//
//
// store.subscribe(() => {
//     // console.log('subscribe', store.getState())
//     items.innerHTML=''
//     inputValue.value = ''
//
//     store.getState().map(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         items.appendChild(li)
//     })
// })
//
// testButton.addEventListener('click', () => {
//     console.log('INPUT', inputValue.value)
//     store.dispatch({type: 'WRITE', payload: inputValue.value })
// })
//

ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>,
    document.getElementById('root'));