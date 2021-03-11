import React from "react";
import {injectIntl} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import isEmpty from "lodash/isEmpty";
import authentication from "../../b2c";
import "../../scss/errorComponent/errorComponent.scss";
import {useHistory} from "react-router-dom";

const ErrorComponent = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {app} = state;
    const {error} = app;
    // console.log(error.message, "hello")
    // console.log(error.response, "hello2")
    // console.log(error, "just error")
    const history = useHistory();

    let responseError;

    if (isEmpty(error)) {
        responseError = {
            "statusCode": 404,
            "message": `The requested url is not found`,
            "description": "Sorry, the page you are looking for does not exist."
        }
        // used in Chrome for the error response
    } else if(error.message === "Network Error") {
        responseError = {
            "statusCode": 404,
            "message": `The requested url is not found`,
            "description": "Sorry, the page you are looking for does not exist."
        }
    } else if(error.message === "Request failed with status code 401") {
            authentication.signOut();
            return;
    } else {
        responseError = error.response && error.response.data
    }

    const handleBackToHomePage = () => {
          history.push("/add-ons");
    }
    const handleRefreshPage = () => {
        document.location.reload();
    }


    return (
        <section className={"errorContainer"}>
            <h1 className={"statusCode"}>{responseError.statusCode }</h1>
            <h5 className={"errorMessage"}>{responseError.message}</h5>
            <h5 className={"errorDescription"}>{responseError.description}</h5>
            <button className={"actionButton"} onClick={handleBackToHomePage}>Back to Home Page</button>
        </section>


    )
}

export default injectIntl(ErrorComponent);