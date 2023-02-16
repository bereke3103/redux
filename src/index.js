import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';

//Store
//Store ---> State

const initialState = { value: 5 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DEC':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'RND':
      return {
        ...state,
        value: state.value * action.payload,
      };
  }
};

const store = createStore(reducer);
const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
};

store.subscribe(update);

const inc = () => {
  return { type: 'INC' };
};

const dec = () => {
  return { type: 'DEC' };
};

const rnd = (params) => {
  return { type: 'RND', payload: params };
};

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 30);
  store.dispatch(rnd(value));
});

// const obj = { value: 0 };

// const reducer = (state = obj, action) => {
//   switch (action.type) {
//     case 'INC':
//       return {
//         ...state,
//         value: state.value + 1,
//       };
//     case 'DEC':
//       return {
//         ...state,
//         value: state.value - 1,
//       };
//     case 'RND':
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };
//   }
// };

// const store = createStore(reducer);

// const update = () => {
//   document.getElementById('counter').textContent = store.getState().value;
// };

// store.subscribe(update);

// const inc = () => {
//   return { type: 'INC' };
// };

// const dec = () => {
//   return { type: 'DEC' };
// };

// const rnd = (params) => ({ type: 'RND', payload: params });

// document.getElementById('inc').addEventListener('click', () => {
//   store.dispatch(inc());
// });

// document.getElementById('dec').addEventListener('click', () => {
//   store.dispatch(dec());
// });

// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 52);
//   store.dispatch(rnd(value));
// });
// //Store ---> reducer (функция/логика которая будет знать что будет делать)

// // let state = reducer(initialState, { type: 'Undefined' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ width: '500px', margin: '0 auto' }}></div>
  </React.StrictMode>
);
