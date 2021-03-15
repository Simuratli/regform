import React from "react";
import {injectIntl} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import isEmpty from "lodash/isEmpty";
import authentication from "../../b2c";
import "../../scss/errorComponent/errorComponent.scss";
import {useHistory} from "react-router-dom";
import {resetData} from "../../store/reducers/appReducer/actions/appAction";

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

    console.log(error.response, 'from error component test')

    if (isEmpty(error)) {
        console.log('first')
        responseError = {
            "statusCode": 404,
            "message": `The requested url is not found`,
            "description": "Sorry, the page you are looking for does not exist."
        }
        // used in Chrome for the error response
    } else if(error.message === "Network Error") {
        console.log('second')
        responseError = {
            "statusCode": 404,
            "message": `The requested url is not found`,
            "description": "Sorry, the page you are looking for does not exist."
        }
    } else if(error.message === "Request failed with status code 401") {
        console.log('three')
            authentication.signOut();
            return;
    } else {
        console.log('final')
        responseError = error.response && error.response.data
    }

    const handleBackToHomePage = () => {
        //TODO: clear error from state
         dispatch(resetData())
          history.push("/add-ons");
          console.log('clicked')
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