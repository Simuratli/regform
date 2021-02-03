import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./css/index.css";
import Webfont from "webfontloader";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./config/authentication";
import "./assets/fonts/fonts.css";
import authentication from "./b2c";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import DocumentMeta from "react-document-meta";
import IntelProviderWrapper from "./Intl/IntlProvider";

function initializeApp(App, store) {
  Webfont.load({
    custom: {
      families: ["SegoeUI", "Gilroy"],
    },
  });

  const history = createBrowserHistory();

  const meta = {
    description:
      "UDS Portal is a multifunctional service aimed to improve your Dynamics 365. Here you can try smart and free add-ons or request a team of UDS professions to support your business.",
    canonical: "https://my.uds.systems/add-ons",
    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "DMT,uds,uds portal,interface Switcher,Virtual Machine,Storage Analyzer,add-ons,About add-on,On-Premise and Online,Dynamics 365 system,Dynamics 365 Portal,Dynamics 365,free add-on,free",
      },
    },
  };

  ReactDOM.render(
    <DocumentMeta {...meta}>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <ScrollToTop />
          <IntelProviderWrapper>
            <App />
          </IntelProviderWrapper>
        </BrowserRouter>
      </Provider>
    </DocumentMeta>,
    document.getElementById("root")
  );
}

authentication.run(async () => {
  const App = await import("./App");

  const store = await import("./store");

  initializeApp(App.default, store.default);
});
