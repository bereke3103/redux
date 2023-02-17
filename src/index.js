import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './App.css';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, counter: state.counter + action.payload };
    case 'GET_CASH':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);
