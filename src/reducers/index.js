import homePageData from "./homePageData";

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      return true;
    default:
      return state;
  }
};

export default {
  homePageData,
  rehydrated
};
