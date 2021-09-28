import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './store/configureStore';
import Homepage from './pages/Homepage';
import CartDetails from './pages/CartDetails';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(Store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/cart">
              <CartDetails />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

if (window.Cypress) {
  window.store = Store;
}

reportWebVitals();
