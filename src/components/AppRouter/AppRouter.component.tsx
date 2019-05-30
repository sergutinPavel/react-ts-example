// libs
import * as React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
// routing protection
import { PrivateRoute } from "./RoutingProtection/PrivateRoute";
import { AuthRoute } from "./RoutingProtection/AuthRoute";
// pages
import AppHeaderComponent from "../AppHeader/AppHeader.component";
import AppAuthComponent from "../AppAuth/AppAuth.component";
import NotFound from "../../pages/NotFound/NotFound";
import DashboardComponent from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import {IApplicationState, selectToken} from "../../store/root.reducer";
import {connect} from "react-redux";

interface IConnectedState {
  isAuthorised: boolean;
}
interface IOwnProps extends IConnectedState {
  [key: string]: any;
}
const mapStateToProps = (state: IApplicationState): IConnectedState => ({
  isAuthorised: !!selectToken(state),
});

const RootRoutes: React.SFC<any> = () => {
  return (
    <>
      <AppHeaderComponent />
      <Switch>
        {/*<Redirect from="/" to="/dashboard" exact={true} />*/}
        <Route path="/dashboard" component={DashboardComponent} exact={true} />
        <Route path="/home" component={Home} exact={true} />
        {/*<Route path="/promotion" component={DashboardComponent} exact={true} />*/}
        {/*<Route path="/shop" component={Home} exact={true} />*/}
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};

const AppRouterComponent: React.SFC<any> = (props: IOwnProps) => {

  const { isAuthorised } = props;
  console.warn('process.env', process.env, props);
  // const isAuthorised = true;
  return (
    <div className={"app-layout"}>
      <Switch>
        <Redirect from="/" to="/dashboard" exact={true} />
        {/*<Route path="/auth" component={AppAuthComponent} />*/}
        {/*<Route path="/" component={RootRoutes} />*/}
        <AuthRoute path="/auth" component={AppAuthComponent} is_not_authorized={!isAuthorised} />
        <PrivateRoute path="/" component={RootRoutes} is_authorized={isAuthorised} />
      </Switch>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(AppRouterComponent));
