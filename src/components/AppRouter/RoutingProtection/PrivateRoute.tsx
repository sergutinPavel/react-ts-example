/* tslint:disable:jsx-no-lambda */

import * as React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute: React.SFC<any> = ({ component: Component, is_authorized, ...rest }) => {
  return <Route
    {...rest}
    render={(props: any) =>
      is_authorized
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/auth/sign-in',
            state: { from: props.location }
          }}
        />}
  />};
