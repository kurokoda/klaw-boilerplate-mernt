import { ABOUT, HOME, SIGN_UP } from "../../constants/route";

const baseUrl = process.env.REACT_APP_JUGGERNAUT_API_BASE_URL;

export const getHomePageDataUrl = () => `${baseUrl}/api/page/home`;
export const getAboutPageDataUrl = () => `${baseUrl}/api/page/about`;

export const getPageTypeForRoute = url => {
  const isAboutRoute = ABOUT.MATCH(url);
  const isHomeRoute = HOME.MATCH(url);
  const isSignUpRoute = SIGN_UP.MATCH(url);

  let result;

  if (isAboutRoute) {
    result = ABOUT.NAME;
  } else if (isHomeRoute) {
    result = HOME.NAME;
  } else if (isSignUpRoute) {
    result = SIGN_UP.NAME;
  } else {
    result = Promise.reject(`ERROR: getPageTypeForRoute: unknown route ${url}`);
  }
  return result;
};