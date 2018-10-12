import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/css/bootstrap-theme.css";

import { StyleSheet } from "aphrodite";
import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { hydrate, render } from "react-dom";
import { Frontload } from "react-frontload";
import * as Loadable from "react-loadable";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import App from "./component/app";
import Loading from "./component/loading";
import "./index.css";
import createStore from "./store";

const { store, history, persistor } = createStore();

const Application = (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Frontload noServerRender={true}>
          <App />
        </Frontload>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

const root = document.querySelector("#root");
StyleSheet.rehydrate((window as any).renderedClassNames);
if (process.env.NODE_ENV === "production") {
  // We hydrate in production to get fast page loads by attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  // We render normally if we're not running on the server
  render(Application, root);
}
