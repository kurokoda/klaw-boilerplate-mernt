import { connect } from "react-redux";
import {
  fetchHomePageData,
  fetchHomePageDataSuccess,
  fetchPageDataError,
  flushPageData
} from "../../../actions/page";

import { HomePage } from "../../../component/page";

export function mapStateToProps({ homePageData }) {
  return {
    pageData: homePageData
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchPageData: () => dispatch(fetchHomePageData()),
    fetchPageDataError: () => dispatch(fetchPageDataError()),
    fetchPageDataSuccess: payload =>
      dispatch(fetchHomePageDataSuccess(payload)),
    flushPageData: () => dispatch(flushPageData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
