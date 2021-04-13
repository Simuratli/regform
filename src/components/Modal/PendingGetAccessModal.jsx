import React, {useEffect} from "react";
import "../../scss/modal/pendingGetAccessModal.scss";
import info from "../../assets/images/information_popup_icon.svg";
import close from "../../assets/images/window-close.svg";
import Modal from "./Modal";
import {useDispatch, useSelector} from "react-redux";
import {changeEducationAccessStatus} from "../../store/reducers/educationReducer/actions/educationChangeAccessStatusAction";
import {useParams} from "react-router-dom";
import {getUserData} from "../../store/reducers/userDataReducer/actions/userDataAction";
import {getEducationInfoPage} from "../../store/reducers/educationReducer/actions/educationInfoPageAction";
import {getEducationAccessStatus} from "../../store/reducers/educationReducer/actions/educationGetAccessAction";

const PendingGetAccessModal = ({active, setActive}) => {
    const dispatch = useDispatch();
    const {slug} = useParams();
    const {userData} = useSelector(({user}) => user);

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    //close modal and change status from Forbidden to Pending
    const handleChangeAccessStatus = () => {
        dispatch(changeEducationAccessStatus(slug))
        setActive(false)
    }
    //just close modal without changing status
    const closeModal = () => {
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
                Our manager will contact you via email <b>{userData.email}</b> shortly.
            </p>
            <button className={"gotInfoButton"} onClick={handleChangeAccessStatus}>Ok</button>
        </Modal>
    );
};
export default PendingGetAccessModal;
