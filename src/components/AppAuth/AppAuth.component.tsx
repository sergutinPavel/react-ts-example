import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// SFC will deprecate
// TODO: change to FC
const SignInComponent: React.SFC<any> = () => <div>SignInComponent</div>;
const SignUpComponent: React.SFC<any> = () => <div>SignUpComponent</div>;

const AppAuthComponent: React.SFC<any> = () => {
  return (
    <Switch>
      <Redirect from="/auth" to="/auth/sign-in" exact={true} />
      <Route path="/auth/sign-in" component={SignInComponent} />
      <Route path="/auth/sign-up" component={SignUpComponent} />
      <Redirect to="/auth/sign-in" />
    </Switch>
  );
};

export default AppAuthComponent;
