import Loadable from "react-loadable";
import Loading from "../../component/loading";

// webpackChunkName: "home"
const HOME = {
  COMPONENT: Loadable({
    loader: () => import("../../container/page/home"),
    loading: Loading,
    modules: ["home"]
  }),
  NAME: "home",
  PATH: "/"
};

const ABOUT = {
  COMPONENT: Loadable({
    loader: () => import("../../container/page/about"),
    loading: Loading,
    modules: ["about"]
  }),
  NAME: "about",
  PATH: "/about"
};

export const ERROR = {
  COMPONENT: Loadable({
    loader: () => import("../../container/page/error"),
    loading: Loading,
    modules: ["error"]
  }),
  NAME: "error",
  PATH: "/error"
};

export default [HOME, ABOUT];
