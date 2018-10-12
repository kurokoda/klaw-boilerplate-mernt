import { css, StyleSheet } from "aphrodite";
import * as React from "react";
import { withRouter } from "react-router";

/**
 * The application footer component. Contains links and legal information
 */

class Footer extends React.Component<any, any> {
  /**
   * Controls updates and rendering
   * @returns {boolean} The evaluation to determine whether the component should
   * update when its props change
   */
  shouldComponentUpdate = () => true;

  render() {
    return (
      <div name="footer" className={css(styles.footer)}>
        <div name="logo" className={css(styles.container)}>
          <div name="logo" className={css(styles.logo)} />
          <div
            name="socialMediaIcons"
            className={css(styles.socialMediaIconContainer)}
          >
            <a
              name="facebook"
              href="http://www.facebook.com"
              className={css(styles.contentColor)}
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              name="twitter"
              href="http://twitter.com"
              className={css(styles.contentColor)}
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              name="instagram"
              href="http://www.instagram.com"
              className={css(styles.contentColor)}
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className={css([styles.content, styles.contentColor])}>
            © 2018 THE COMPANY
          </div>
          <div className={css([styles.content, styles.contentColor])}>
            Use of and/or registration on any portion of this site constitutes
            acceptance of our &nbsp;
            <a href="http://www.advance.net/advancelocalUserAgreement/user-agreement.html">
              User Agreement
            </a>
            &nbsp; (updated 5/25/18) and &nbsp;
            <a href="https://www.advance.net/advancelocalUserAgreement/privacy-policy.html">
              Privacy Policy and Cookie Statement &nbsp;
            </a>
            (updated 05/25/18).
          </div>
          <div className={css([styles.content, styles.contentColor])}>
            © 2018 Advance Local Media LLC. All rights reserved
            <a href="https://www.advancelocal.com/about-us/">&nbsp; About Us</a>
            .<br />
            The material on this site may not be reproduced,
            distributed,transmitted,cached or otherwise used, except with the
            prior written permission of Advance Local.
          </div>
          <a
            href="https://www.advance.net/advancelocalUserAgreement/privacy-policy.html#california_top/"
            className={css(styles.content)}
          >
            Your California Privacy Rights
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    height: "350px",
    justifyContent: "space-between",
    left: "0",
    margin: "auto",
    maxWidth: "746px",
    position: "absolute",
    right: "0",
    textAlign: "center",
    top: "0",
    width: "100%",

    "@media (max-width: 768px)": {
      height: "410px"
    }
  },
  content: {
    fontFamily: "Open Sans",
    fontSize: "14px",

    "@media (max-width: 768px)": {
      fontSize: "12px",
      padding: "10px"
    }
  },
  contentColor: {
    color: "#ffffff;"
  },
  footer: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    height: "461px",
    margin: "50px 0 0 0",
    position: "relative"
  },

  logo: {
    backgroundRepeat: "no-repeat",
    height: "69px",
    width: "110px",

    "@media (max-width: 768px)": {
      height: "90px",
      margin: "0 0 35px 0"
    }
  },
  socialMediaIconContainer: {
    display: "flex",
    fontSize: "25px",
    justifyContent: "space-around",
    width: "200px",

    "@media (max-width: 768px)": {
      fontSize: "35px",
      margin: "0 0 35px 0",
      width: "180px"
    }
  }
});
