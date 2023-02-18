import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer } from './counterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { peopleReducer } from './peopleReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: counterReducer,
  people: peopleReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
