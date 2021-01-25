import React from "react";
import CookieConsent from "react-cookie-consent";
import {Link} from "react-router-dom";
import "../../scss/base.scss";


const Cookie = () => {
    return(
        <>
            <CookieConsent enableDeclineButton flipButtons
                           location="bottom"
                           buttonText="Accept"
                           declineButtonText="Decline"
                           buttonClasses={"acceptButton"}
                           declineButtonClasses={"declineButton"}
                           cookieName="Coockie"
                           containerClasses={"cookieContainer"}
                           contentClasses={"cookieContent"}
                           buttonWrapperClasses={"buttons"}
                           buttonStyle={{color: "#4e503b", fontSize: "13px"}}
                           expires={150}
            >
                We use cookies on this site to enhance your user experience.
                By continuing to use the service, you agree to our use of cookies as described in the{" "}
                <Link to={'/privacy'} style={{color: "#FF8F3E", textDecoration: "underline"}}>Privacy Policy.</Link>
            </CookieConsent>

        </>
    )
}
export default Cookie;

