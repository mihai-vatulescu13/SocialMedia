import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './pages/App';
import reducers from './reducers'
import './components/FontAwesome/FontAwesome'

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)))

ReactDOM.render(
   <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
