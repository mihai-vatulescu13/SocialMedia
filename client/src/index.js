import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
<<<<<<< HEAD
import { createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
=======
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducers from "./reducers";

//define the main store(that may contain substates for different components):
const store = createStore(combinedReducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));
>>>>>>> auth-redux

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
