import React from "react";
import CookieConsent from "react-cookie-consent";
import "../../../scss/base.scss";



const Cookie = () => {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Ok"
        declineButtonText="none"
        buttonClasses={"acceptButton"}
        declineButtonClasses={"declineButton"}
        cookieName="Cookie"
        containerClasses={"cookieContainer"}
        contentClasses={"cookieContent"}
        buttonWrapperClasses={"buttons"}>
        <p>
          We use cookies to ensure you an improved user experience and services.<br />
          By using our website, you consent to cookies.
        </p>
        <p>{" "}To find out more — read our{" "}
          <a href={"https://uds.systems/privacy-policy"} target={"_blank"} style={{ color: "#FF8F3E", textDecoration: "underline" }}>
            Privacy Policy.
          </a>
        </p>
      </CookieConsent>
    </>
  );
};
export default Cookie;
