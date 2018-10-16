import { css, StyleSheet } from "aphrodite";
import * as React from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { HOME, ERROR, PAGES } from "../../constants/route";

class Body extends React.Component {
  render() {
    const styles = this.getStyles({
      footerHeight: 60,
      headerHeight: 60
    });

    return (
      <div className={css(styles.container)}>
        <Switch>
          <Route path="/" exact component={HOME.COMPONENT} props={this.props} />
          {
            PAGES.map(PAGE =>
              <Route path={PAGE.ROUTE} component={PAGE.COMPONENT} props={this.props} />
            )
          }
          <Route component={ERROR.COMPONENT} />
        </Switch>
      </div>
    );
  }

  getStyles = (config) =>
    StyleSheet.create({
      container: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: `calc(100vh - ${config.headerHeight +
          config.footerHeight}px)`
      }
    });
}

export default withRouter(Body);
