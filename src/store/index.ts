import {createStore, applyMiddleware, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "react-router-redux";
import {createEpicMiddleware} from "redux-observable";
import {createLogger} from "redux-logger";
import createHistory from "history/createBrowserHistory";
import RootReducer, {IApplicationState} from "./root.reducer";
import {rootEffects} from "./root.effects";


export const history = createHistory();

const routingMW = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware();
let middleware = [epicMiddleware, routingMW];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();
  middleware = [...middleware, logger];
}

const createApplicationStore: Store<IApplicationState> = (() => {
  const store: any = createStore(
    RootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  epicMiddleware.run((rootEffects as any));

  return store;
})();

export default createApplicationStore;
