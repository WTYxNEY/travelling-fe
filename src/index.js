import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import AuthProvider from './Context/AuthContext';

import reducers from './reducers/'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <AuthProvider>
  <Provider store={store}>
    <App />
  </Provider>
  </AuthProvider>
  ,
  document.getElementById('root')
);
