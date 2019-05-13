import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  IApplicationState,
  selectExpandSidebar
} from "../../store/root.reducer";
import {
  ExampleAction,
  ToggleSidebarAction
} from "../../store/general/general.actions";
import { history } from "../../store";

interface IConnectedState {
  expandSidebar: boolean;
  exampleData: any;
}
interface IConnectedDispatch {
  toggleSidebar: any;
  exampleAction: any;
}
interface IOwnProps extends IConnectedState, IConnectedDispatch {
  [key: string]: any;
}

const mapStateToProps = (state: IApplicationState): IConnectedState => ({
  expandSidebar: selectExpandSidebar(state),
  exampleData: state.general.exampleData
});
const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
  toggleSidebar: () => dispatch(ToggleSidebarAction()),
  exampleAction: () => dispatch(ExampleAction())
});

class DashboardComponent extends React.Component<IOwnProps, any> {
  constructor(props: IOwnProps) {
    super(props);
  }

  // componentWillMount () {
  //   // console.log('DashboardComponent componentWillMount', selectExpandSidebar);
  //   this.props.expandSidebar.subscribe((v: any) => {
  //     console.warn('v', v);
  //   })
  // }

  sidebar = () => {
    this.props.toggleSidebar();
  };

  navigateTo = () => {
    // browserHistory.push(url);
    const url: string | undefined = '/home';
    history.push(url);
  };

  public render() {
    console.log('this', this);
    return (
      <div className={"app-layout__page"}
           // onClick={this.navigateTo}
      >
        DashboardComponent
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
