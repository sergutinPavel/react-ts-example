import * as React from "react";
import { Provider } from "react-redux";
import { Router } from 'react-router-dom';
import store, { history } from "./store";

export const RootComponent: React.SFC<any> = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);
