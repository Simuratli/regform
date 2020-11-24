import React, { useEffect, useState } from 'react';
import MainNavigation from "./components/MainNavigation";
import AddonsCardsPage from "./components/AddonsCardsPage/AddonsCardsPage";
import "../src/scss/base.scss";
import Footer from "./components/Footer";
import { Switch, Route, Redirect } from 'react-router-dom';
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Privacy from "./components/PrivacyAndTerms/Privacy";
import Terms from "./components/PrivacyAndTerms/Terms";
import AddonFullPage from "./components/AddonFullPage/AddonFullPage";
import AddonFullPageContainer from "./containers/AddonFullPageContainer";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";
import authentication from "./b2c";
import ReactGa from "react-ga";
import ReactPixel from 'react-facebook-pixel';

function App() {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const accessToken = authentication.getAccessToken()
    // console.log(accessToken, "ACT APP")

    let backdrop;
    // const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
    // const options = {
    //     autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    //     debug: false, // enable logs
    // };

    if (sideDrawerOpen) {
        backdrop = <Backdrop setSideDrawerOpen={setSideDrawerOpen} />;
    }
    useEffect(() => {
        ReactGa.initialize('UA-183628794-1')
        // ReactGa.initialize('UA-82280513-1')
        ReactPixel.init('382184772775465');
        ReactPixel.pageView();
        // ReactPixel.fbq('init', '{382184772775465}');
        // ReactPixel.fbq('init', '382184772775465');
        // ReactPixel.fbq('track', 'PageView');
        // ReactGa.pageview('/add-ons')
    }, [])

    return (
        <div className={'generalWrapper'}>
            <ScrollArrow />
            <MainNavigation setSideDrawerOpen={setSideDrawerOpen} />
            <SideDrawer setSideDrawerOpen={setSideDrawerOpen} sideDrawerOpen={sideDrawerOpen} />
            {backdrop}
            <Switch>
                <Route path={'/'} exact component={AddonsCardsPage}>
                    <Redirect to={'/add-ons'} />
                </Route>
                <Route path={'/add-ons'} exact component={AddonsCardsPage} />
                <Route path={'/add-ons/:slug'} exact component={AddonFullPageContainer} />
                <Route path={'/privacy'} component={Privacy} />
                <Route path={'/terms'} component={Terms} />
            </Switch>

            <Footer />

        </div>
    );
}

export default App;