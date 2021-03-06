// note on window.msal usage. There is little point holding the object constructed by new Msal.UserAgentApplication
// as the constructor for this class will make callbacks to the acquireToken function and these occur before
// any local assignment can take place. Not nice but its how it works.
import * as msal from "msal";
import React from "react";
import { initializeConfig, msalAppConfig, B2C_SCOPES } from "./auth-utils";

const LOCAL_STORAGE = "localStorage";
// const SESSION_STORAGE = 'sessionStorage'
const AUTHORIZATION_KEY = "Authorization";

const state = {
  stopLoopingRedirect: false,
  config: {
    scopes: [],
    cacheLocation: null,
  },
  launchApp: null,
  accessToken: null,
  msalObj: null,
};

let msalApp;

// const { instance } = useMsal();

function acquireToken(successCallback) {
  const account = msalApp.getAccount();

  // console.log(msalApp ,'msalApp')
  // console.log(B2C_SCOPES ,'B2C_SCOPES')
  // console.log(instance.addEventCallback(event) ,'instance')
  // let IsAccountInfo = head(instance.getAllAccounts())
  // console.log(IsAccountInfo, 'IsAccountInfo')

  if (!account) {
    // console.log('!account')
    // console.log(successCallback, 'successCallback')
    msalApp.loginRedirect(B2C_SCOPES.API_ACCESS);
  } else {
    // console.log('else')
    msalApp.acquireTokenSilent(B2C_SCOPES.API_ACCESS).then(
      (accessToken) => {
        // console.log(accessToken, "accessToken");

        if (msalAppConfig.cache.cacheLocation === LOCAL_STORAGE) {
          window.localStorage.setItem(
            AUTHORIZATION_KEY,
            "Bearer " + accessToken
          );
        } else {
          window.sessionStorage.setItem(
            AUTHORIZATION_KEY,
            "Bearer " + accessToken
          );
        }

        state.accessToken = accessToken;

        // TODO: Remove later
        if (process.env.NODE_ENV !== "production") console.log(accessToken);

        if (state.launchApp) {
          state.launchApp();
        }
        if (successCallback) {
          successCallback();
        }
      },
      (error) => {
        if (error) {
          msalApp.acquireTokenRedirect(B2C_SCOPES.API_ACCESS);
        }
      }
    );
  }
}

const authentication = {
  initialize: (config) => {
    initializeConfig(config);
    msalApp = new msal.UserAgentApplication(msalAppConfig);
  },
  run: (launchApp) => {
    state.launchApp = launchApp;
    msalApp.handleRedirectCallback((error) => {
      if (error) {
        // const errorMessage = error.errorMessage ? error.errorMessage : "Unable to acquire access token."
      }
    });
    acquireToken();
  },
  required: (WrappedComponent, renderLoading) => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          signedIn: false,
          error: null,
        };
      }

      render() {
        if (this.state.signedIn) {
          return <WrappedComponent {...this.props} />;
        }
        return typeof renderLoading === "function" ? renderLoading() : null;
      }
    };
  },
  signOut: () => msalApp.logout(),
  getAccessToken: () => state.accessToken,
};

export default authentication;
