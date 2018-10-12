import Immutable from "immutable";
import { pageActions as actions } from "../../actions";
import reducer from "../articlePageData";

describe("home page data reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it("should handle FETCH_HOME_PAGE_DATA_SUCCESS", () => {
    const payload = { data: "data" };
    expect(
      reducer([], {
        payload,
        type: actions.FETCH_HOME_PAGE_DATA_SUCCESS
      })
    ).toEqual(Immutable.fromJS(payload));
  });
});
