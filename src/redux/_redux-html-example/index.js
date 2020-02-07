import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

const store = createStore(changeStore);

function changeStore(state = [], action) {
  console.log('1', state);
  switch (action.type) {
    case 'WRITE':
      return [...state, action.payload];
      break;
    default:
      return state;
  }
}

const testButton = document.querySelector('.testButton');
const items = document.querySelector('.testUl');
const inputValue = document.querySelector('.testInput');

store.subscribe(() => {
  // console.log('subscribe', store.getState())
  items.innerHTML = '';
  inputValue.value = '';

  store.getState().map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    items.appendChild(li);
  });
});

testButton.addEventListener('click', () => {
  console.log('INPUT', inputValue.value);
  store.dispatch({ type: 'WRITE', payload: inputValue.value });
});

// ReactDOM.render(
//     <App />,
//     document.getElementById('root'));
