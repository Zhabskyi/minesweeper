import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {board} from './store/board';
import thunk from 'redux-thunk';
import {infoPanel} from './store/infoPanel';
import App from "./App";

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

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
