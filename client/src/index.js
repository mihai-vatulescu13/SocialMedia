import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
