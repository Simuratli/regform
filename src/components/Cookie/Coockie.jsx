import React, {useState} from "react";
import CookieConsent from "react-cookie-consent";
import "../../scss/base.scss";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const Cookie = () => {
  // const [cookieAccepted, setCookieAccepted] = useState(false);
  // const cookieAcceptedCallback = '';
  // const test = getCookie('Cookie')
  // console.log('cookie', test)
  return (
    <>
      <CookieConsent
        // enableDeclineButton
        // flipButtons
        location="bottom"
        buttonText="Ok"
        declineButtonText="none"
        buttonClasses={"acceptButton"}
        declineButtonClasses={"declineButton"}
        cookieName="Cookie"
        containerClasses={"cookieContainer"}
        contentClasses={"cookieContent"}
        buttonWrapperClasses={"buttons"}
        // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        // expires={0}
      >
        <p>
          We use cookies to ensure you an improved user experience and services.
          <br />
          By using our website, you consent to cookies.
        </p>
        <p>
          {" "}
          To find out more — read our{" "}
          <a
            href={"https://uds.systems/privacy-policy"}
            target={"_blank"}
            style={{ color: "#FF8F3E", textDecoration: "underline" }}
          >
            Privacy Policy.
          </a>
        </p>
      </CookieConsent>
    </>
  );
};
export default Cookie;
