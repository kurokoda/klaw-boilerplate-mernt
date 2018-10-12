/* eslint-disable react/prefer-stateless-function */

import * as React from "react";
import { withRouter } from "react-router";
import Body from "../../container/body";
import Footer from "../../container/footer";
import Header from "../../container/header";
import Helmet from "./helmet";

/**
 * This is the top-level application component. It acts as the root of the component tree
 */

class App extends React.Component<any, any> {
  /**
   * Controls updates and rendering
   * @returns {boolean} The evaluation to determine whether the component should
   * update when its props change
   */
  public shouldComponentUpdate() {
    return true;
  }

  public render() {
    return (
      <main>
        <Helmet />
        <Header {...this.props} />
        <Body {...this.props} />
        <Footer {...this.props} />
      </main>
    );
  }
}

export default withRouter(App);
