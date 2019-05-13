// libs
import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// routing protection
import { PrivateRoute } from "./RoutingProtection/PrivateRoute";
import { AuthRoute } from "./RoutingProtection/AuthRoute";
// pages
import AppHeaderComponent from "../AppHeader/AppHeader.component";
import AppAuthComponent from "../AppAuth/AppAuth.component";
import NotFoundComponent from "../../pages/NotFound/NotFound.component";
import DashboardComponent from "../../pages/Dashboard/Dashboard.component";
import HomeComponent from "../../pages/Home/Home.component";

const RootRoutes: React.SFC<any> = () => {
  return (
    <>
      <AppHeaderComponent />
      <Switch>
        <Route path="/dashboard" component={DashboardComponent} exact={true} />
        <Route path="/home" component={HomeComponent} exact={true} />
        <Route path="/promotion" component={DashboardComponent} exact={true} />
        <Route path="/shop" component={HomeComponent} exact={true} />
        <Route path="/not-found" component={NotFoundComponent} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};

const AppRouterComponent: React.SFC<any> = (props?) => {
  console.warn('process.env', process.env, props);
  // todo: 1. create auth store
  // todo: 2. get auth status from the store
  //   HARDCODE YO
  const isAuthorised = true;
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

export default AppRouterComponent;
