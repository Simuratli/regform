import React from "react";
import "../../scss/modal/modalMobileNotification.scss";
import warning from "../../assets/images/warning-icon.svg";

import Modal from "./Modal";

const ModalMobileNotification = ({active, setActive}) => {
    return (
        <Modal active={active} setActive={setActive}>
            <img src={warning} alt={"info"} style={{margin: "auto"}}/>
            <h5 className={"mobileModalTitle boldText"}>For your information</h5>
            <p>
                The present mobile version provides general information about UDS
                services and products.
            </p>
            <p className={"boldText"}>
                We recommend using the desktop version to download and use any UDS product.
            </p>
            <button className={"agreeButton"} onClick={() => setActive(false)}>
            </button>
        </Modal>
    );
};
export default ModalMobileNotification;
