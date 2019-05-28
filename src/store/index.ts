import {createStore, applyMiddleware, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "react-router-redux";
import {createLogger} from "redux-logger";
import createHistory from "history/createBrowserHistory";
import RootReducer, {IApplicationState} from "./root.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.effects"


export const history = createHistory();

const routingMW = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware, routingMW];

if ((process.env as any).NODE_ENV !== 'production') {
  const logger = createLogger();
  middleware = [...middleware, logger];
}

const createApplicationStore: Store<IApplicationState> = (() => {
  const store: any = createStore(
    RootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
})();

export default createApplicationStore;
