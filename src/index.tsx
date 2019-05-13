import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/index.scss";
import { RootComponent } from "./Root.component";
import AppRouterComponent from "./components/AppRouter/AppRouter.component";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RootComponent>
    <AppRouterComponent />
  </RootComponent>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
