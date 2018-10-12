import fetch from "node-fetch";
import { CATEGORIES, ROUTE as ROUTE_REGEX } from "../../constants/regex";
import ROUTE_STRING from "../../constants/route";

const baseUrl = process.env.REACT_APP_JUGGERNAUT_API_BASE_URL;

export const getHomePageDataUrl = () => `${baseUrl}/api/page/home`;
export const getAboutPageDataUrl = () => `${baseUrl}/api/page/about`;

export const getApiUrlForRoute = url => {
  const isHomeRoute = ROUTE_REGEX.HOME_PAGE_DATA.test(url);
  let result;
  if (isHomeRoute) {
    result = Promise.resolve(getHomePageDataUrl());
  } else {
    result = Promise.reject(`ERROR: getApiUrlForRoute: unknown route ${url}`);
  }
  return result;
};

export const getPageTypeForRoute = url => {
  const isHomeRoute = ROUTE_REGEX.HOME_PAGE.test(url);
  let result;
  if (isHomeRoute) {
    result = ROUTE_STRING.HOME.NAME;
  } else {
    result = Promise.reject(`ERROR: getPageTypeForRoute: unknown route ${url}`);
  }
  return result;
};

export const getPageDataForRoute = url => {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return Promise.resolve(response.json());
      }
      return Promise.reject("Error: Failed to load SSR data");
    })
    .then(payload => Promise.resolve(payload))
    .catch(error => Promise.reject(error));
};
