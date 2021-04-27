import React, {useEffect, useState} from "react";
import MainNavigation from "./components/MainNavigation";
import AddonsCardsPage from "./components/AddonsCardsPage/AddonsCardsPage";
import "../src/scss/base.scss";
import Footer from "./components/Footer";
import {Switch, Route, Redirect} from "react-router-dom";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import AddonFullPageContainer from "./containers/AddonFullPageContainer";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";
import Cookie from "./components/Cookie/Coockie";
import ModalMobileNotification from "./components/Modal/ModalMobileNotification";
import Loader from "./components/views/Loader";
import {useSelector} from "react-redux";
import isEmpty from "lodash/isEmpty";
import TestPage from "./components/views/TestPage";
import RedirectToMigrationTool from "./components/Redirect/ReditectToMigrationTool";
import {DownloadFile} from "./components/views/DownloadFile";
import ErrorComponent from "./components/Error/ErrorComponent";
import EducationCardsPage from "./components/EducationComponents/EducationCardsPage";
import EducationInfoPage from "./components/EducationComponents/EducationInfoPage";
import EducationVideoLessons from "./components/EducationComponents/EducationVideoLessons";
import EducationInfoPageContainer from "./containers/EducationInfoPageContainer";
import EducationVideoLessonsContainer from "./containers/EducationVideoLessonsContainer";

const App = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [modalActive, setModalActive] = useState(true);
    const state = useSelector((state) => state);
    const {app} = state;
    const {error} = app;

    useEffect(() => {
        ReactGa.initialize("UA-183628794-1");
        ReactGa.pageview(window.location.pathname + window.location.search);
        ReactPixel.init("382184772775465");
        ReactPixel.pageView();
    }, []);

    return (
        <div className={"generalWrapper"}>
            <ScrollArrow />
            <MainNavigation setSideDrawerOpen={setSideDrawerOpen} sideDrawerOpen={sideDrawerOpen}/>
            <SideDrawer setSideDrawerOpen={setSideDrawerOpen} sideDrawerOpen={sideDrawerOpen}/>
            {sideDrawerOpen && <Backdrop setSideDrawerOpen={setSideDrawerOpen} />}
            <Cookie />
            {isEmpty(error)
                ?
                <Switch>
                    <Route path={"/"} exact component={AddonsCardsPage}>
                        <Redirect to={"/add-ons"} />
                    </Route>
                    <Route path={"/migration"} exact component={RedirectToMigrationTool} />
                    <Route path={"/add-ons"} exact component={AddonsCardsPage} />
                    <Route path={"/add-ons/:slug"} exact component={AddonFullPageContainer}/>
                    <Route path={"/test/:password"} component={TestPage} />
                    <Route path={"/education"} exact component={EducationCardsPage}/>
                    <Route path={"/education/:slug"} exact component={EducationInfoPageContainer}/>
                    <Route path={"/education/:slug/free-course"} exact component={EducationVideoLessonsContainer}/>
                    <Route path={"*"} component={ErrorComponent}/>
                </Switch>
                : <ErrorComponent/>}
            <Footer />
            <Loader />
            <DownloadFile />
        </div>
    );
};
export default App;
