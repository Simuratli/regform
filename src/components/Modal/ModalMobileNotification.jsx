import React from "react";
import "../../scss/modal/modalMobileNotification.scss";
import warning from "../../assets/images/warning-icon.svg";
import Modal from "./Modal";
import {useCookies} from "react-cookie";


const ModalMobileNotification = ({setActive}) => {

    const [cookies, setCookie] = useCookies(['userHasGotTheInformation']);
    const userHasGotInfo = () =>{
        setActive(false);
        setCookie('userHasGotTheInformation', true)
    }

    return (
        <Modal active={!cookies.userHasGotTheInformation}>
            <img src={warning} alt={"info"} style={{margin: "auto"}}/>
            <h5 className={"mobileModalTitle boldText"}>For your information</h5>
            <p>
                The present mobile version provides general information about UDS
                services and products.
            </p>
            <p className={"boldText"}>
                We recommend using the desktop version to download and use any UDS product.
            </p>
            <button className={"agreeButton"} onClick={userHasGotInfo}>
            </button>
        </Modal>
    );
};
export default ModalMobileNotification;
