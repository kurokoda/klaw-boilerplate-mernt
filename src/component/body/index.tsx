import { css, StyleSheet } from "aphrodite";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { ABOUT, ERROR, HOME } from "../../constants/route";

class Body extends React.Component<{} & RouteComponentProps<any>> {
  public render() {
    const styles = this.getStyles({
      footerHeight: 60,
      headerHeight: 60
    });

    return (
      <div className={css(styles.container)}>
        <Switch>
          <Route
            path={HOME.PATH}
            exact={true}
            component={HOME.COMPONENT}
            props={this.props}
          />
          <Route
            path={ABOUT.PATH}
            component={ABOUT.COMPONENT}
            props={this.props}
          />
          <Route component={ERROR} />
        </Switch>
      </div>
    );
  }

  private getStyles = (config: {
    headerHeight: number;
    footerHeight: number;
  }) =>
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
