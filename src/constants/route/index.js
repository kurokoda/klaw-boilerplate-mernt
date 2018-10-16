import * as Loadable from "react-loadable";
import Loading from "../../component/loading";

export const HOME = {
  COMPONENT: Loadable({
    loader: () => import("../../container/page/home"),
    loading: Loading,
    modules: ["home"]
  }),
  MATCH: url => "/".test(),
  NAME: "home",
  PATH: "/"
};

export const ABOUT = {
  COMPONENT: Loadable({
    loader: () => import("../../container/page/about"),
    loading: Loading,
    modules: ["about"]
  }),
  MATCH: url => "/about".test(),
  NAME: "about",
  PATH: "/about"
};

export const SIGN_UP = {
  COMPONENT: Loadable({
    loader: () => import("../../container/page/signup"),
    loading: Loading,
    modules: ["sign-up"]
  }),
  MATCH: url => "/sign-up".test(),
  NAME: "signUp",
  PATH: "/sign-up"
};

export const ERROR = {
  COMPONENT: Loadable({
    loader: () => import("../../container/page/error"),
    loading: Loading,
    modules: ["error"]
  }),
  MATCH: url => "/error".test(),
  NAME: "error",
  PATH: "/error"
};

export const PAGES = [ABOUT, SIGN_UP];
