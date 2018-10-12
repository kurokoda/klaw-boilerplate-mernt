/** @module AboutPage */

import { css, StyleSheet } from "aphrodite";
import Immutable from "immutable";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as ImmutablePropTypes from "react-immutable-proptypes";
import { withRouter } from "react-router";
import { isBrowserEnvironment } from "../../../utils/isomorphic";
import { getAboutPageDataUrl } from "../../../utils/route";
import Loading from "../../loading";
import Helmet from "./helmet";

/**
 * The application about page component.
 *
 * @returns {xml} The AboutPage component
 */

class AboutPage extends React.Component {
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
    const { pageData } = this.props;

    if (!pageData) {
      this.fetchPageData();
    }
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    const { flushPageData } = this.props;
    flushPageData();
  }

  render() {
    const classes = AboutPage.getClasses();
    const { pageData } = this.props;

    return pageData && isBrowserEnvironment ? (
      <React.Fragment>
        <Helmet />
        <div id="about-page" className={classes.container}>
          ABOUT PAGE
        </div>
      </React.Fragment>
    ) : (
      <Loading />
    );
  }

  // Business logic

  fetchPageData() {
    if (!this.isLoading) {
      this.isLoading = true;
      const url = getAboutPageDataUrl();
      const {
        fetchPageData,
        fetchPageDataSuccess,
        fetchPageDataError
      } = this.props;

      fetchPageData();

      fetch(url)
        .then(
          response =>
            response.ok
              ? Promise.resolve(response.json())
              : Promise.reject("Invalid response in fetchPageData()")
        )
        .then(payload => {
          this.isLoading = false;
          fetchPageDataSuccess(payload);
          this.onFetchPageDataSuccess();
        })
        .catch(error => {
          this.isLoading = false;
          fetchPageDataError(error);
          this.onFetchPageDataError(error);
        });
    }
  }

  onFetchPageDataSuccess = () => {
    this.noop();
  };

  onFetchPageDataError = error => {
    this.noop();
  };

  noop = () => {
    return null;
  };
}

AboutPage.getClasses = () => {
  const styles = AboutPage.getStyles();

  return {
    container: css(styles.container)
  };
};

AboutPage.propTypes = {
  /** Dispatches action to request page data */
  fetchPageData: PropTypes.func.isRequired,
  /** Dispatches action to notify of page data request failure */
  fetchPageDataError: PropTypes.func.isRequired,
  /** Dispatches action to notify of page data request success */
  fetchPageDataSuccess: PropTypes.func.isRequired,
  /** Dispatches action to request page data deletion */
  flushPageData: PropTypes.func.isRequired,
  /** Page data */
  pageData: ImmutablePropTypes.map
};

AboutPage.defaultProps = {
  pageData: null
};

/**
 * Dynamically generates styles
 * @methodof AboutPage
 * @returns {object} The class's styles
 */
AboutPage.getStyles = () =>
  StyleSheet.create({
    container: {}
  });

export default withRouter(AboutPage);

// TODO move getStyles() from render to componentDidMount
// TODO move immutable.js data hack into reducer
