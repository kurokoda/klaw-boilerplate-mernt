import * as React from "react";

class ErrorPage extends React.Component<any, any> {
  /**
   * Controls updates and rendering
   * @returns {boolean} The evaluation to determine whether the component should
   * update when its props change
   */
  shouldComponentUpdate = () => true;

  render() {
    return <div id="error-page">ERROR</div>;
  }
}

export default ErrorPage;
