import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppStateProvider from './state';
import dotenv from 'dotenv';

// Redux
import store, { persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

// App
import App from './App';

// Custom Components

require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
