import { css, StyleSheet } from "aphrodite";
import * as React from "react";
import { withRouter } from "react-router";
import * as ReactRouterPropTypes from "react-router-prop-types";
import LinksDesktop from "./links/desktop";
import LinksMobile from "./links/mobile";

/**
 * The application footer component. Contains page links. Displays either
 * a responsive horizontal menu or a dropdown vertical menu with a 'hamburger'
 * button depending on the application's current window size
 *
 * Children:
 * * `<LinksDesktop>`
 * * `<LinksMobile>`
 */

class Header extends React.Component<any, any> {
  componentDidMount() {
    const { history } = this.props;
    history.listen(location => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div name="header" className={css(styles.headerContainer)}>
        <div name="linksContainer" className={css(styles.linksContainer)}>
          <div
            name="logo"
            className={css(styles.logo)}
            onClick={this.onNavLogoClick}
            onKeyDown={this.onNavLogoClick}
            role="link"
            tabIndex={0}
          />
          <div name="desktopLinks" className={css(styles.desktopLinks)}>
            <LinksDesktop topics={Header.topics} />
          </div>
          <div name="mobileLinks" className={css(styles.mobileLinks)}>
            <LinksMobile
              onNavLogoClick={this.onNavLogoClick}
              topics={Header.topics}
            />
          </div>
        </div>
      </div>
    );
  }

  onNavLogoClick = () => {
    const { history } = this.props;
    history.push("/");
  };

  static topics = [
    {
      route: "/",
      text: "home"
    }
  ];
}

export default withRouter(Header);

Header.propTypes = {
  /** The application router's history */
  history: ReactRouterPropTypes.history.isRequired
};

const styles = StyleSheet.create({
  desktopLinks: {
    "@media (min-width: 769px)": {
      display: "block",
      width: "100%"
    },

    display: "none"
  },
  headerContainer: {
    "@media (max-width: 768px)": {
      height: "60px"
    },

    "@media (min-width: 769px)": {
      height: "102px"
    },

    boxShadow: "0 4px 7px 0 rgba(0, 0, 0, 0.2)",
    position: "relative",
    width: "100%",
    zIndex: "100"
  },
  iconColor: {
    color: "inherit"
  },
  linksContainer: {
    "@media (min-width: 1240px)": {
      width: "1240px"
    },

    display: "flex",
    height: "100%",
    margin: "auto",
    width: "100%"
  },
  logo: {
    "@media (max-width: 768px)": {
      height: "40px",
      left: "50%",
      margin: "0 0 0 30px",
      transform: "translate(-100%, -50%)",
      width: "63px"
    },

    "@media (min-width: 769px)": {
      height: "52px",
      transform: "translate(0%, -50%)",
      width: "80px"
    },

    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    cursor: "pointer",
    margin: "0 0 0 20px",
    position: "absolute",
    top: "50%"
  },
  mobileLinks: {
    "@media (max-width: 768px)": {
      display: "block",
      width: "100%"
    },
    display: "none"
  }
});
