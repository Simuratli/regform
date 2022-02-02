import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {openNotification} from "../../../store/reducers/appReducer/actions/appAction";
import "../../../scss/modal/pendingGetAccessModal.scss";
import info from "../../../assets/images/information_popup_icon.svg";
import close from "../../../assets/images/window-close.svg";

const PendingNotificationModal = () => {

    const dispatch = useDispatch();

    const {isOpenNotification} = useSelector(({app}) => app);

    const closeNotification = () => {
        dispatch(openNotification(false))
    }

    return (
        <div className={isOpenNotification ? "pendingModal active" : "pendingModal"}>
            <div className={isOpenNotification ? "modalContent active" : "modalContent"}>
                <div className={"contentWithoutFields"}>
                    <img src={info} alt={"info"} style={{margin: "auto"}}/>
                    <h5 className={"mobileModalTitle boldText"}>Thank you!</h5>
                    <p className={"greenParagraph"}>
                        We have received your request. <br/>Your course is in pending now.
                    </p>
                    <p>
                        Our manager will contact you via your email shortly.
                    </p>
                    <button className={"agreeButton"} onClick={closeNotification}>
                        <img src={close} alt={"close"}/>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default PendingNotificationModal;
