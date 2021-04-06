import React, { Component } from "react";

import Aux from "../Auxi/Auxi";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";

import classes from "./Layout.css";

class Layout extends Component {
  state = {
    showSidedrawer: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSidedrawer: !prevState.showSidedrawer };
    });
  };

  sidedrawerClosedHandler = () => {
    this.setState({ showSidedrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <Sidedrawer
          open={this.state.showSidedrawer}
          closed={this.sidedrawerClosedHandler}
        />
        <main className={classes.Content}> {this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
