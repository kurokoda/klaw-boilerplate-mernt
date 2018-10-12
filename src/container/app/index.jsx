import { connect } from "react-redux";
import { withRouter } from "react-router";
import App from "../../component/app";

export function mapStateToProps() {
  return {};
}

export function mapDispatchToProps() {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
