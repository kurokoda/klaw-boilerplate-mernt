import { css, StyleSheet } from "aphrodite/no-important";
import * as PropTypes from "prop-types";
import * as React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { getIncrementedElementName } from "../../../utils/collection";
import ROUTES from "../../../constants/route";

/**
 * A responsive horizontal menu for navigating the application's pages
 */
class LinksDesktop extends React.Component<any, any> {
  render() {
    const { onNavLinkClick } = this.props;
    return (
      <div className={css(styles.links)}>
        {ROUTES.map(ROUTE => (
          <div
            key={getIncrementedElementName("desktopLink")}
            onClick={onNavLinkClick}
            onKeyDown={onNavLinkClick}
            className={css(styles.page)}
            role="link"
            tabIndex={0}
          >
            <NavLink
              to={ROUTE.PATH}
              activeClassName={css(styles.activeLink)}
              className={css(styles.link)}
            >
              {ROUTE.NAME.toUpperCase()}
            </NavLink>
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
    );
  }
}

export default withRouter(LinksDesktop);

const styles = StyleSheet.create({
  activeLink: {
    backgroundImage: "linear-gradient(to right, #686bc7, #00f7a5)",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 6px",
    color: "inherit !important",
    display: "inline",
    fontWeight: "bold",
    textDecoration: "none !important"
  },
  iconColor: {
    color: "inherit"
  },
  link: {
    ":hover": {
      backgroundImage: "linear-gradient(to right, #686bc7, #00f7a5)",
      color: "#FFFFFF",
      height: "30px",
      textDecoration: "none",
      width: "138px"
    },

    color: "inherit",
    fontFamily: "Open Sans",
    padding: "5px"
  },
  links: {
    "@media (max-width: 900px)": {
      margin: "15px 0 0 110px"
    },

    fontSize: "16px",
    letterSpacing: "0.6px",
    margin: "20px 0 0 140px",
    position: "relative",
    zIndex: "10000"
  },
  linksContainer: {
    position: "absolute",
    zIndex: "1000"
  },
  page: {
    "@media (max-width: 800px)": {
      margin: "18px 10px 0 0"
    },

    color: "#000000,",
    display: "inline-block",
    fontWeight: "400",
    height: "30px",
    margin: "18px 20px 0 0"
  },
  socialMediaIconContainer: {
    display: "flex",
    fontSize: "25px",
    height: "100%",
    justifyContent: "space-around",
    margin: "-36px 0 0 auto",
    width: "140px"
  }
});
