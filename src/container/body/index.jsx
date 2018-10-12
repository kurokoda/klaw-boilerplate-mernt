import { css, StyleSheet } from "aphrodite";
import React from "react";
import Loadable from "react-loadable";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Loading from "../../component/loading";
import ROUTES from "../../constants/route";

const Error = Loadable({
  loader: () => import(/* webpackChunkName: "error" */ "../page/error"),
  loading: Loading,
  modules: ["error"]
});

const Body = props => {
  const styles = Body.getStyles(Body.CONFIG);

  return (
    <div name="body" className={css(styles.container)}>
      <Switch>
        {ROUTES.map(ROUTE => (
          <Route
            component={ROUTE.COMPONENT}
            exact
            path={ROUTE.PATH}
            props={props}
          />
        ))}
        <Route component={ROUTES.ERROR} />
      </Switch>
    </div>
  );
};

Body.getStyles = config =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      minHeight: `calc(100vh - ${config.headerHeight + config.footerHeight}px)`
    }
  });

Body.CONFIG = {
  footerHeight: 60,
  headerHeight: 60
};

export default withRouter(Body);
