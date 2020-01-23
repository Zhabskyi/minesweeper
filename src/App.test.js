import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import App from './App';
import thunk from 'redux-thunk';
import {board} from './store/board';
import {infoPanel} from './store/infoPanel';

const rootReducer = combineReducers({
  board,
  infoPanel
});

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  // @ts-ignore
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const customMiddleWare = (store) => (next) => (action) => {
  next(action);
};

const store = createStore(rootReducer, undefined, composeEnhancers(
  applyMiddleware(
    customMiddleWare,
    thunk
  )
));

test('renders start button', () => {
  const { getByText, getAllByText } = render(  <Provider store={store}>
    <App />
  </Provider>);
  const startButton = getByText('START');
  const counts = getAllByText('0');
  expect(startButton).toBeInTheDocument();
  expect(counts.length).toEqual(3);
});

test('Click start button', () => {
  const { getByText, getAllByText, getByTestId } = render(  <Provider store={store}>
    <App />
  </Provider>);

  fireEvent.click(getByText('START'));
  const counts = getAllByText('40');
  const grid = getByTestId('grid')
  expect(counts.length).toEqual(1);
  expect(grid).toBeInTheDocument();
});


