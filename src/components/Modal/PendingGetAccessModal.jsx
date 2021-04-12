import React from "react";
import "../../scss/modal/pendingGetAccessModal.scss";
import info from "../../assets/images/information_popup_icon.svg";
import close from "../../assets/images/window-close.svg";
import Modal from "./Modal";

const PendingGetAccessModal = ({active, setActive}) => {
console.log(active, "active")
console.log(setActive, "setActive")
    const closeModal = () =>{
    setActive(false)
    }
    return (
        <Modal active={active}>
            <button className={"agreeButton"} onClick={closeModal}>
                <img src={close} alt={"close"}/>
            </button>
            <img src={info} alt={"info"} style={{margin: "auto"}}/>
            <h5 className={"pendingTitle"}>Hello!</h5>
            <p>
                UDS Systems will be glad to see you on board.
                Our manager will contact you via email <b>someCustomerEmail@gmail.com</b> shortly.
            </p>
            <button className={"gotInfoButton"} onClick={closeModal}>Ok</button>
        </Modal>
    );
};
export default PendingGetAccessModal;
