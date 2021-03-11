import React from "react";
import {injectIntl} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import get from "lodash/get";

import isEmpty from "lodash/isEmpty";
import authentication from "../../b2c";

const ErrorComponent = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {app} = state;
    const {error} = app;
    console.log(error.message, "hello")
    console.log(error.response, "hello2")

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


    return (
        <>
            <h1>Error:{responseError.statusCode }</h1>
            <h1>Message:{responseError.message}</h1>
            <h1>desc:{responseError.description}</h1>
        </>


    )
}

export default injectIntl(ErrorComponent);

// import React from "react";
//
// class ErrorBoundary extends React.Component {
//     // constructor(props) {
//         // super(props);
//         state = { hasError: false, error: null };
//     // }
//
//     static getDerivedStateFromError(error) {
//         // Update state so the next render will show the fallback UI.
//         return { hasError: true , error};
//     }
//
//
//     render() {
//         if (this.state.hasError) {
//             // You can render any custom fallback UI
//             return <h1>Something went wrong.{this.state.error.message}</h1>;
//         }
//
//         return this.props.children;
//     }
// }
//
// export default ErrorBoundary;