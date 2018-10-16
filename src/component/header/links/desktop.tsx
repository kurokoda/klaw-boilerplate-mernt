import { css, StyleSheet } from "aphrodite/no-important";
import * as React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../constants/route";
import { getIncrementedElementName } from "../../../utils/collection";

/**
 * A responsive horizontal menu for navigating the application's pages
 */
class LinksDesktop extends React.Component<any, any> {
  public componentDidMount() {
    const { history } = this.props;
    history.listen(() => {
      this.forceUpdate();
    });
  }

  public render() {
    const { onNavLinkClick } = this.props;
    return (
      <div>
        {ROUTES.map(ROUTE => (
          <NavLink
            key={getIncrementedElementName("desktopLink")}
            to={ROUTE.PATH}
            onClick={onNavLinkClick}
            onKeyDown={onNavLinkClick}
            activeClassName={css(styles.activeLink)}
            className={css(styles.link)}
          >
            {ROUTE.NAME.toUpperCase()}
          </NavLink>
        ))}
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
  link: {
    ":hover": {
      backgroundImage: "linear-gradient(to right, #686bc7, #00f7a5)",
      color: "#FFFFFF",
      height: "30px",
      textDecoration: "none",
      width: "138px"
    },

    color: "#000000",
    fontFamily: "Open Sans",
    fontSize: "16px",
    margin: "0 10px 0 0",
    padding: "5px"
  }
});
