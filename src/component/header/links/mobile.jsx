import { css, StyleSheet } from "aphrodite/no-important";
import * as PropTypes from "prop-types";
import * as React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { getIncrementedElementName } from "../../../utils/collection";

/**
 * A dropdown vertical menu with a 'hamburger' button for navigating the
 * application's pages
 *
 * @returns {xml} The LinksMobile component
 */
class LinksMobile extends React.Component<any, any> {
  state = {
    currentLocation: null,
    isOpen: false
  };

  componentDidMount() {
    this.initRouteChangeListener();
  }

  componentWillUnmount() {
    this.routeChangeListenerDismiss();
  }

  render() {
    const { topics } = this.props;
    const { isOpen } = this.state;

    if (isOpen) {
      return (
        <div className={css(styles.mobileWidth)} role="banner">
          <div
            className={css(styles.button)}
            onClick={this.onNavHeaderClick}
            onKeyDown={this.onNavHeaderClick}
            role="presentation"
          >
            &#10005;
          </div>
          <div className={css(styles.links)}>
            {topics.map(item => (
              <div
                className={css(styles.page)}
                key={getIncrementedElementName("mobileLink")}
                onClick={this.onNavLinkClick}
                onKeyDown={this.onNavLinkClick}
                role="link"
                tabIndex={0}
              >
                <Link
                  className={css(styles.link)}
                  activeStyle={css(styles.activeLink)}
                  to={item.route}
                >
                  {item.text.toUpperCase()}
                </Link>
              </div>
            ))}
            <div className={css(styles.socialMediaIconContainer)}>
              <a
                href="http://www.facebook.com/TheTylt/"
                className={css(styles.iconColor)}
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href="http://twitter.com/TheTylt"
                className={css(styles.iconColor)}
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="http://www.instagram.com/thetylt/"
                className={css(styles.iconColor)}
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={css(styles.mobile)}>
        <div
          className={css(styles.button)}
          onClick={this.onNavLinkClick}
          onKeyDown={this.onNavLinkClick}
          role="link"
          tabIndex={0}
        >
          &#9776;
        </div>
      </div>
    );
  }

  initRouteChangeListener() {
    const { history } = this.props;
    const { currentLocation } = this.state;

    this.routeChangeListenerDismiss = history.listen(location => {
      if (currentLocation && currentLocation !== location) {
        this.setState({ isOpen: false });
      }
      this.setState({ currentLocation });
    });
  }

  toggleIsOpen = () => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  };

  onNavHeaderClick = () => {
    const { onNavHeaderClick } = this.props;
    const { isOpen } = this.state;

    if (isOpen) {
      onNavHeaderClick("sidebar");
    } else {
      onNavHeaderClick("header");
    }
  };

  onNavMenuButtonClick = () => {
    const { onNavMenuButtonClick } = this.props;

    this.toggleIsOpen();
    onNavMenuButtonClick();
  };

  onNavLinkClick = () => {
    const { onNavLinkClick } = this.props;

    onNavLinkClick();
  };

  onNavLogoClick = () => {
    const { onNavLogoClick } = this.props;

    onNavLogoClick();
  };
}

export default withRouter(LinksMobile);

const styles = StyleSheet.create({
  activeLink: {
    fontWeight: "bold"
  },
  button: {
    color: "#000000",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "35px",
    margin: "0 24px 0 0px",
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)"
  },
  iconColor: {
    color: "inherit"
  },
  link: {
    ":hover": {
      textDecoration: "none"
    },

    color: "#000000",
    fontFamily: "Open Sans"
  },
  links: {
    backgroundColor: "#ffffff",
    margin: "100px 0 0 0",
    position: "absolute",
    width: "100%",
    zIndex: "10000"
  },
  linksContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    position: "absolute",
    top: "70px",
    width: "100%",
    zIndex: "1000"
  },
  mobileWidth: {
    width: "inherit"
  },
  page: {
    color: "#000000,",
    display: "block",
    fontSize: "24px",
    fontWeight: "400",
    height: "30px",
    margin: "18px 0 0 0",
    textAlign: "center",
    textShadow: "0 0 5px #FFFFFF"
  },
  socialMediaIconContainer: {
    alignContent: "bottom",
    alignItems: "center",
    display: "flex",
    fontSize: "50px",
    height: "70vh",
    justifyContent: "space-around",
    margin: "30px auto",
    width: "210px"
  }
});
