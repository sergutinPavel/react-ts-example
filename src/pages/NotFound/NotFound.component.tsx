import * as React from "react";

class NotFoundComponent extends React.Component<any, any> {

  public render() {
    return (
      <div className={"app-layout__page not-found-page"}>
        <h3 className={"not-found-page__heading"}>
          Page you're looking for not found.
        </h3>
        <div className={"not-found-page__background_text"}>
          <span>not</span>
          <span>found</span>
        </div>
      </div>
    )
  }
}

export default NotFoundComponent;
