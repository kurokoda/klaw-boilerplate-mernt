/** @module HomePage */

import { css, StyleSheet } from "aphrodite";
import Immutable from "immutable";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as ImmutablePropTypes from "react-immutable-proptypes";
import { withRouter } from "react-router";
import { isBrowserEnvironment } from "../../../utils/isomorphic";
import { getHomePageDataUrl } from "../../../utils/route";
import Loading from "../../loading";
import Helmet from "./helmet";

/**
 * The application home page component.
 *
 * @returns {xml} The HomePage component
 */

class HomePage extends React.Component {
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
    const classes = HomePage.getClasses();
    const { pageData } = this.props;

    return pageData && isBrowserEnvironment ? (
      <React.Fragment>
        <Helmet />
        <div id="home-page" className={classes.container}>
          HOME PAGE
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
      const url = getHomePageDataUrl();
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

HomePage.getClasses = () => {
  const styles = HomePage.getStyles();

  return {
    container: css(styles.container)
  };
};

HomePage.propTypes = {
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

HomePage.defaultProps = {
  pageData: null
};

/**
 * Dynamically generates styles
 * @methodof HomePage
 * @returns {object} The class's styles
 */
HomePage.getStyles = () =>
  StyleSheet.create({
    container: {}
  });

export default withRouter(HomePage);

// TODO move getStyles() from render to componentDidMount
// TODO move immutable.js data hack into reducer
