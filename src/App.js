import React, {useEffect, useState} from 'react';
import MainNavigation from "./components/MainNavigation";
import AddonsCardsPage from "./components/AddonsCardsPage/AddonsCardsPage";
import "../src/scss/base.scss";
import Footer from "./components/Footer";
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Privacy from "./components/PrivacyAndTerms/Privacy";
import Terms from "./components/PrivacyAndTerms/Terms";
import AddonFullPageContainer from "./containers/AddonFullPageContainer";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";
import authentication from "./b2c";
import ReactGa from "react-ga";
import ReactPixel from 'react-facebook-pixel';
import Cookie from "./components/Cookie/Coockie";
import ModalMobileNotification from "./components/Modal/ModalMobileNotification";

function App() {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const accessToken = authentication.getAccessToken();
    const [modalActive, setModalActive] = useState(true);

    let backdrop;

    if (sideDrawerOpen) {
        backdrop = <Backdrop setSideDrawerOpen={setSideDrawerOpen}/>;
    }
    useEffect(() => {
        ReactGa.initialize([
            {
                trackingId: 'UA-183628794-1',
                gaOptions: {
                    name: 'UDS Portal'
                }
            },
            {
                trackingId: 'UA-82280513-1',
                gaOptions: {
                    name: 'UDS Website'
                }
            }

            ]
        );
        ReactGa.pageview(window.location.pathname + window.location.search);
        ReactPixel.init('382184772775465');
        ReactPixel.pageView();
    }, [])

    return (
        <div className={'generalWrapper'}>
            <ScrollArrow/>
            <MainNavigation setSideDrawerOpen={setSideDrawerOpen}/>
            <SideDrawer setSideDrawerOpen={setSideDrawerOpen} sideDrawerOpen={sideDrawerOpen}/>
            {backdrop}
            <Cookie/>
            <ModalMobileNotification active={modalActive} setActive={setModalActive}/>
            <Switch>
                <Route path={'/'} exact component={AddonsCardsPage}>
                    <Redirect to={'/add-ons'}/>
                </Route>
                <Route path={'/add-ons'} exact component={AddonsCardsPage}/>
                <Route path={'/add-ons/:slug'} exact component={AddonFullPageContainer}/>
                <Route path={'/privacy'} component={Privacy}/>
                <Route path={'/terms'} component={Terms}/>
            </Switch>

            <Footer/>

        </div>
    );
}

export default App;