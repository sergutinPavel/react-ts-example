import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../../store';

interface IOwnState {
  showHeader: boolean;
  scrollTop: number | undefined;
  [key: string]: any;
}
interface IOwnProps {
  [key: string]: any;
}
class AppHeaderComponent extends React.Component<IOwnProps, IOwnState> {
  constructor(props: IOwnProps) {
    super(props);
    this.state = {
      showHeader: true,
      scrollTop: undefined
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event: any): void => {
    const scrollTop = +event.target.documentElement.scrollTop;
    if (this.state.scrollTop === undefined) {
      this.setState({showHeader: true, scrollTop});
      return;
    }
    if (this.state.scrollTop < scrollTop && scrollTop > 50) {
      this.setState({showHeader: false, scrollTop})
    } else {
      this.setState({showHeader: true, scrollTop})
    }
  };

  goBack(): void {
    console.warn('', history);
    history.goBack();
  }
  goForward(): void { history.goForward(); }

  render() {
    return (
      <header className={"app-layout__header" + (this.state.showHeader ? "": " hide")}>
        {/*<span className="mdi mdi-airballoon" />*/}
        <a className={"btn btn-warning"} onClick={this.goBack}>Back</a>
        <a className={"btn btn-warning"} onClick={this.goForward}>Forward</a>
        <NavLink className={"btn btn-outline-primary"}
                 to="/home"
                 activeClassName={"active"}>Home</NavLink>
        <NavLink className={"btn btn-outline-primary"}
                 to="/dashboard"
                 activeClassName={"active"}>Dashboard</NavLink>
      </header>
    );
  }
}

export default AppHeaderComponent;
