import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
//Store
//Store ---> State

const { dispatch, getState, subscribe } = createStore(reducer);

const update = () => {
  document.getElementById('counter').textContent = getState().value;
};

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
// const trueDedDispatch = bindActionCreators(dec, dispatch);
// const trueRndDispatch = bindActionCreators(rnd, dispatch);

subscribe(update);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 30);
  rnd(value);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ width: '500px', margin: '0 auto' }}></div>
  </React.StrictMode>
);
