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
  ROUTE: "/"
};

export default [HOME];
