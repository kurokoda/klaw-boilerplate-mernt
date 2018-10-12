import { connect } from "react-redux";
import {
  fetchAboutPageData,
  fetchAboutPageDataSuccess,
  fetchPageDataError,
  flushPageData
} from "../../../actions/page";

import { AboutPage } from "../../../component/page";

export function mapStateToProps({ aboutPageData }) {
  return {
    pageData: aboutPageData
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchPageData: () => dispatch(fetchAboutPageData()),
    fetchPageDataError: () => dispatch(fetchPageDataError()),
    fetchPageDataSuccess: payload =>
      dispatch(fetchAboutPageDataSuccess(payload)),
    flushPageData: () => dispatch(flushPageData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);
