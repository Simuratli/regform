import React, {useEffect, useState} from "react";
import "../src/scss/base.scss";
import {Switch, Route, Redirect} from "react-router-dom";
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";
import {useDispatch, useSelector} from "react-redux";
import isEmpty from "lodash/isEmpty";
import EducationCardsPage from "./components/EducationComponents/EducationCardsPage";
import TicketList from "./components/MyTicketComponents/Tikets/TicketList";
import TicketStartPageContainer from "./containers/MyTicket/TicketStartPageContainer";
import RedirectToMigrationTool from "./components/ViewsComponents/Redirect/ReditectToMigrationTool";
import EducationInfoPageContainer from "./containers/Education/EducationInfoPageContainer";
import EducationVideoLessonsContainer from "./containers/Education/EducationVideoLessonsContainer";
import TicketDetails from "./components/MyTicketComponents/Tikets/TicketDetails";
import ErrorComponent from "./components/ErrorComponents/ErrorComponent";
import Cookie from "./components/ViewsComponents/Cookie/Coockie";
import Loader from "./components/ViewsComponents/Loader";
import {DownloadFile} from "./components/ViewsComponents/DownloadFile";
import ScrollArrow from "./components/NavigationComponents/ScrollArrow/ScrollArrow";
import MainNavigation from "./components/NavigationComponents/MainNavigation";
import SideDrawer from "./components/NavigationComponents/SideDrawer/SideDrawer";
import Backdrop from "./components/NavigationComponents/Backdrop/Backdrop";
import AddonsCardsPage from "./components/AddonsComponents/AddonsCardsPage/AddonsCardsPage";
import AddonFullPageContainer from "./containers/Addons/AddonFullPageContainer";
import Footer from "./components/NavigationComponents/Footer";
import TicketChat from "./components/MyTicketComponents/TicketChat/TicketChat";
import {getAuthoriseCheck} from "./store/reducers/userDataReducer/actions/userAuthorizeCheckAction";


const App = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const state = useSelector((state) => state);
    const {app, user: {userAuth}} = state;
    const {error} = app;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userAuth) {
            dispatch(getAuthoriseCheck());
        }
        ReactGa.initialize("UA-183628794-1");
        ReactGa.pageview(window.location.pathname + window.location.search);
        ReactPixel.init("382184772775465");
        ReactPixel.pageView();
    }, []);

    // if (!isEmpty(error)){
    //     return <ErrorComponent/>
    // }

    return userAuth ? (
        <div className={"generalWrapper"}>
            <ScrollArrow/>
            <MainNavigation setSideDrawerOpen={setSideDrawerOpen} sideDrawerOpen={sideDrawerOpen}/>
            <SideDrawer setSideDrawerOpen={setSideDrawerOpen} sideDrawerOpen={sideDrawerOpen}/>
            {sideDrawerOpen && <Backdrop setSideDrawerOpen={setSideDrawerOpen}/>}
            <Cookie/>
            {isEmpty(error)
                ?
                <Switch>
                    <Route path={"/"} exact component={AddonsCardsPage}>
                        <Redirect to={"/add-ons"}/>
                    </Route>
                    <Route path={"/migration"} exact component={RedirectToMigrationTool}/>
                    <Route path={"/add-ons"} exact component={AddonsCardsPage}/>
                    <Route path={"/add-ons/:slug"} exact component={AddonFullPageContainer}/>
                    <Route path={"/education"} exact component={EducationCardsPage}/>
                    <Route path={"/education/:slug"} exact component={EducationInfoPageContainer}/>
                    <Route path={"/education/:slug/free-course"} exact component={EducationVideoLessonsContainer}/>
                    <Route path={"my-ticket"} exact component={TicketStartPageContainer}/>
                    <Route path={"my-ticket/ticket-list"} exact component={TicketList}/>
                    <Route path={"my-ticket/:slug"} exact component={TicketDetails}/>
                    <Route path={"my-ticket/chat"} exact component={TicketChat}/>
                    <Route path={"*"} component={ErrorComponent}/>
                </Switch>
                : <ErrorComponent/>}
            <Footer/>
            <Loader/>
            <DownloadFile/>
        </div>
    ) : <Loader/>;
};

export default App;
