import React, {useEffect} from "react";
import "../../scss/modal/pendingGetAccessModal.scss";
import info from "../../assets/images/information_popup_icon.svg";
import close from "../../assets/images/window-close.svg";
import {useDispatch, useSelector} from "react-redux";
import {changeEducationAccessStatus} from "../../store/reducers/educationReducer/actions/educationChangeAccessStatusAction";
import {useParams} from "react-router-dom";
import {getUserData} from "../../store/reducers/userDataReducer/actions/userDataAction";


const PendingGetAccessModal = ({active, setActive}) => {
    const dispatch = useDispatch();
    const {slug} = useParams();
    const {userData} = useSelector(({user}) => user);

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    //close modal and change status from Forbidden to Pending
    const handleChangeAccessStatus = async () => {
        dispatch(changeEducationAccessStatus(slug))
        setActive(false)
    }
    //just close modal without changing status
    const closeModal = () => {
        setActive(false)
    }

    return (
        <div className={active ? "pendingModal active" : "pendingModal"}>
            <div className={active ? "modalContent active" : "modalContent"}>
                <button className={"agreeButton"} onClick={closeModal}>
                    <img src={close} alt={"close"}/>
                </button>
                <img src={info} alt={"info"} style={{margin: "auto", marginTop: "31px"}}/>
                <h5 className={"pendingTitle"}>Hello!</h5>
                <p>
                    UDS Systems will be glad to see you on board.
                    Our manager will contact you via email <b>{userData.email}</b> shortly.
                </p>
                <button className={"gotInfoButton"} onClick={handleChangeAccessStatus}>Ok</button>
            </div>
        </div>
    );
};
export default PendingGetAccessModal;
