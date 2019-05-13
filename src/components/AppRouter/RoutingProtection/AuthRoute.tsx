/* tslint:disable:jsx-no-lambda */

import * as React from "react";
import { Redirect, Route } from "react-router-dom";

export const AuthRoute: React.SFC<any> = ({ component: Component, is_not_authorized, ...rest }) => {
  return <Route
    {...rest}
    render={(props: any) =>
      is_not_authorized
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/home',
            state: { from: props.location }
          }}
        />}
  />};
