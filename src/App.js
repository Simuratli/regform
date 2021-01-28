import React, { useEffect, useState } from "react";
import MainNavigation from "./components/MainNavigation";
import AddonsCardsPage from "./components/AddonsCardsPage/AddonsCardsPage";
import "../src/scss/base.scss";
import Footer from "./components/Footer";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Privacy from "./components/PrivacyAndTerms/Privacy";
import Terms from "./components/PrivacyAndTerms/Terms";
import AddonFullPageContainer from "./containers/AddonFullPageContainer";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";
import Cookie from "./components/Cookie/Coockie";
import ModalMobileNotification from "./components/Modal/ModalMobileNotification";
import ErrorPageComp from "./components/views/ErrorPageComp";

import styled from "styled-components";
import Loader from "./components/views/Loader";
import { useSelector } from "react-redux";

import isEmpty from "lodash/isEmpty";
import TestPage from "./components/views/TestPage";

const GeneralWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  // const accessToken = authentication.getAccessToken();
  const [modalActive, setModalActive] = useState(true);
  const history = useHistory();
  const state = useSelector((state) => state);

  const { app } = state;
  const { error } = app;
  const { err } = error;

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop setSideDrawerOpen={setSideDrawerOpen} />;
  }

  // if (window.location.hash.indexOf("AADB2C90118") >= 0) {
  //   history.push("/forgot");
  // }

  useEffect(() => {
    !isEmpty(err) && history.push("/error-page");
  }, [!isEmpty(err)]);

  useEffect(() => {
    // ReactGa.initialize([
    //     {
    //         trackingId: 'UA-183628794-1',
    //         gaOptions: {
    //             name: 'UDS Portal'
    //         }
    //     },
    //     {
    //         trackingId: 'UA-82280513-1',
    //         gaOptions: {
    //             name: 'UDS Website'
    //         }
    //     }
    //
    //     ]
    // );
    ReactGa.initialize("UA-183628794-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
    ReactPixel.init("382184772775465");
    ReactPixel.pageView();
  }, []);

  return (
    <GeneralWrapper>
      <ScrollArrow />
      <MainNavigation setSideDrawerOpen={setSideDrawerOpen} />
      <SideDrawer
        setSideDrawerOpen={setSideDrawerOpen}
        sideDrawerOpen={sideDrawerOpen}
      />
      {backdrop}
      <Cookie />
      <ModalMobileNotification
        active={modalActive}
        setActive={setModalActive}
      />
      <Switch>
        <Route path={"/"} exact component={AddonsCardsPage}>
          <Redirect to={"/add-ons"} />
        </Route>
        <Route path={"/add-ons"} exact component={AddonsCardsPage} />
        <Route
          path={"/add-ons/:slug"}
          exact
          component={AddonFullPageContainer}
        />
        <Route path={"/privacy"} component={Privacy} />
        <Route path={"/terms"} component={Terms} />
        <Route path={"/error-page"} component={ErrorPageComp} />
        <Route path={"/test/:password"} component={TestPage} />

        <Route
          render={() => (
            <ErrorPageComp
              status={404}
              statusText="The requested url is not found"
            />
          )}
        />
      </Switch>

      <Footer />
      <Loader />
      {/*<ErrorModal />*/}
    </GeneralWrapper>
  );
};

export default App;
