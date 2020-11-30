import React, {useState} from "react";
import "../../scss/modal/modal.scss";

import Modal from "./Modal"

const ModalMobileNotification = ({active, setActive}) => {
    return(
        <Modal active={active} setActive={setActive}>
            <p>The present mobile version provides general information about UDS services and products.
                <span className={"boldText"}> We recommend using the desktop version to download and use any UDS product.</span></p>
            <button className={"agreeButton"} onClick={() => setActive(false)}>OK</button>
        </Modal>
    )
}
export default ModalMobileNotification;
