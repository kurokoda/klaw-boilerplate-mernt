import * as actions from "../page";

describe("page actions", () => {
  it("should create an action to fetch data for the home page", () => {
    const expectedAction = {
      type: actions.FETCH_HOME_PAGE_DATA
    };
    expect(actions.fetchHomePageData()).toEqual(expectedAction);
  });

  it("should create an action to report home page data fetching success", () => {
    const payload = { data: "data" };
    const expectedAction = {
      payload,
      type: actions.FETCH_HOME_PAGE_DATA_SUCCESS
    };
    expect(actions.fetchHomePageDataSuccess(payload)).toEqual(expectedAction);
  });

  it("should create an action to report page data fetching failure", () => {
    const expectedAction = {
      type: actions.FETCH_PAGE_DATA_ERROR
    };
    expect(actions.fetchPageDataError("error")).toEqual(expectedAction);
  });
});
