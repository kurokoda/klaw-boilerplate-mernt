import { css, StyleSheet } from "aphrodite";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import SignInForm from "../form/signIn";
import LinksDesktop from "./links/desktop";

/**
 * The application header component. Contains page links.
 */

class Header extends React.Component<RouteComponentProps, any> {
  private styles = this.getStyles();

  public constructor(props: RouteComponentProps) {
    super(props);
    this.onLogoClick = this.onLogoClick.bind(this);
  }

  public shouldComponentUpdate() {
    return true;
  }

  public render() {
    return (
      <div className={css(this.styles.container)}>
        <div className={css(this.styles.logo)} onClick={this.onLogoClick} />
        <div className={css(this.styles.links)}>
          <LinksDesktop />
        </div>
        <div className={css(this.styles.signIn)}>
          <SignInForm />
        </div>
      </div>
    );
  }

  private onLogoClick() {
    const { history } = this.props;
    history.push("/");
  }

  private getStyles() {
    return StyleSheet.create({
      container: {
        "@media (max-width: 768px)": {
          height: "60px"
        },

        alignItems: "center",
        boxShadow: "0 4px 7px 0 rgba(0, 0, 0, 0.2)",
        display: "flex",
        height: "102px",
        width: "100%"
      },
      links: {
        display: "inline-block"
      },
      logo: {
        backgroundColor: "#000000",
        cursor: "pointer",
        display: "inline-block",
        height: "50px",
        margin: "0 10px 0 10px",
        width: "50px"
      },
      signIn: {
        display: "inline-block",
        float: "right"
      }
    });
  }
}

export default withRouter(Header);
