import { Form, Text } from 'informed';
import * as React from "react";
import { withRouter } from "react-router";


/**
 * The application sign-in form component.
 */

class Footer extends React.Component<any, any> {
  /**
   * Controls updates and rendering
   * @returns {boolean} The evaluation to determine whether the component should
   * update when its props change
   */
  public shouldComponentUpdate(){
    return true;
  }

  public render() {
    return (
        <Form id="sign-in-form">
          <label htmlFor="username-field">First name:</label>
          <Text field="username" id="name-field" />
          <label htmlFor="password-field">First name:</label>
          <Text field="password" id="name-field" type="password"/>
          <button type="submit">
            Submit
          </button>
        </Form>
    );
  }
}

export default withRouter(Footer);
