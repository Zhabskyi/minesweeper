import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {board} from './store/board';
import {controlPanel} from './store/controlPanel';
import App from "./App";

const rootReducer = combineReducers({
  board,
  controlPanel
});

const store = createStore(rootReducer, {}, applyMiddleware());

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
