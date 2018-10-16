/** @module SignUpPage */

import { css, StyleSheet } from "aphrodite";
import Immutable from "immutable";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as ImmutablePropTypes from "react-immutable-proptypes";
import { withRouter } from "react-router";
import { isBrowserEnvironment } from "../../../utils/isomorphic";
import { getSignUpPageDataUrl } from "../../../utils/route";
import Loading from "../../loading";
import Helmet from "./helmet";

/**
 * The application about page component.
 *
 * @returns {xml} The SignUpPage component
 */

class SignUpPage extends React.Component {
  /**
   * Controls updates and rendering
   * @returns {boolean} The evaluation to determine whether the component should
   * update when its props change
   */
  shouldComponentUpdate = () => true;

  /**
   * Fetches page data and resets page position
   * @returns {void}
   */
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const classes = SignUpPage.getClasses();
    const { pageData } = this.props;

    return pageData && isBrowserEnvironment ? (
      <React.Fragment>
        <Helmet />
        <div id="sign-up-page" className={classes.container}>
          ABOUT PAGE
        </div>
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

SignUpPage.getClasses = () => {
  const styles = SignUpPage.getStyles();

  return {
    container: css(styles.container)
  };
};

SignUpPage.defaultProps = {
  pageData: null
};

/**
 * Dynamically generates styles
 * @methodof SignUpPage
 * @returns {object} The class's styles
 */
SignUpPage.getStyles = () =>
  StyleSheet.create({
    container: {}
  });

export default withRouter(SignUpPage);

// TODO move getStyles() from render to componentDidMount
// TODO move immutable.js data hack into reducer
