import React, {useEffect} from "react";
import "../../../scss/modal/pendingGetAccessModal.scss";
import info from "../../../assets/images/information_popup_icon.svg";
import close from "../../../assets/images/window-close.svg";
import {useDispatch, useSelector} from "react-redux";
import {changeEducationAccessStatus} from "../../../store/reducers/educationReducer/actions/educationChangeAccessStatusAction";
import {useParams} from "react-router-dom";
import {getUserData} from "../../../store/reducers/userDataReducer/actions/userDataAction";
import "../../../scss/views/editableInput.scss";
import {educationRequestMailPayment} from "../../../store/reducers/educationReducer/actions/educationRequestMailPayment";
import {getEducationAccessStatus} from "../../../store/reducers/educationReducer/actions/educationGetAccessAction";


const PendingGetAccessModal = ({active, setActive, isPaid, price}) => {
    const dispatch = useDispatch();
    const {slug} = useParams();
    const {
        userData: {
            firstName,
            lastName,
            email
        }
    } = useSelector(({user}) => user);
    // const {educationAccessStatus: {
    //     coursePermissionState
    // }} = useSelector(({education}) => education);
    // console.log(coursePermissionState, "EDUCATION")

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    let paymentData = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "courseSlug": slug,
        "paymentMessage": price?.toString()
    }

    //close modal and change status from Forbidden to Pending
    const handleChangeAccessStatusFree = async () => {
        dispatch(changeEducationAccessStatus(slug))
        setActive(false)
    }

    const handleChangeAccessStatusPaid = async () => {
        console.log(paymentData, "paymentData")

        if (!isValidEmail(paymentData.email)) {
            let email = document.getElementById("mail");
            email.setCustomValidity("Don't be shy !");
        } else if (paymentData.firstName.trim().length === 0) {
            let firstName = document.getElementsByName("firstName")[0];
            firstName.setCustomValidity("can not be empty");
        } else if (paymentData.lastName.trim().length === 0) {
            let lastName = document.getElementsByName("lastName")[0];
            lastName.setCustomValidity("can not be empty");
        } else {
            dispatch(educationRequestMailPayment(paymentData));
            setActive(false);
        }
    }
    //just close modal without changing status
    const closeModal = () => {
        setActive(false)
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const inputDataChange = (e) => {
        const name = e.target.getAttribute('name')
        paymentData[name] = e.target.value
    }

    return (
        isPaid
            ? <div className={active ? "pendingModal active" : "pendingModal"}>
                <div className={active ? "modalContent active" : "modalContent"}>

                    <button className={"agreeButton"} onClick={closeModal}>
                        <img src={close} alt={"close"}/>
                    </button>
                    <section className={"textContent"}>
                        <img src={info} alt={"info"} style={{margin: "auto", marginTop: "31px"}}/>
                        <h5 className={"pendingTitle"}>Hello!</h5>
                        <p>
                            We are happy that you have chosen UDS Systems.
                            Within 24 hours, we will send you an email with payment details.
                        </p>
                    </section>
                    <section className={"personalEditableBlock"}>

                        <input className={"editableInput"} type={"text"} defaultValue={firstName} onChange={inputDataChange}
                               name={'firstName'}/>
                        <input className={"editableInput"} type={"text"} defaultValue={lastName} onChange={inputDataChange}
                               name={'lastName'}/>
                        <input className={"editableInput"} type={"text"} defaultValue={email} onChange={inputDataChange}
                               name={'email'} id="mail"/>
                        <p>
                            Make sure the fields Name, Last name and
                            Email are filled in correctly. <b>Thank you!</b>
                        </p>
                    </section>
                    <button className={"gotInfoButton"} onClick={handleChangeAccessStatusPaid}>Confirm</button>

                </div>
            </div>
            : <div className={active ? "pendingModal active" : "pendingModal"}>
                <div className={active ? "modalContent active" : "modalContent"}>
                    <button className={"agreeButton"} onClick={closeModal}>
                        <img src={close} alt={"close"}/>
                    </button>
                    <section className={"textContent"}>
                        <img src={info} alt={"info"} style={{margin: "auto", marginTop: "31px"}}/>
                        <h5 className={"pendingTitle"}>Hello!</h5>
                        <p>
                            UDS Systems will be glad to see you on board.
                            Our manager will contact you via email <b>{email}</b> shortly.
                        </p>
                        <button className={"gotInfoButton"} onClick={handleChangeAccessStatusFree}>Ok</button>
                    </section>
                </div>
            </div>
    );
};
export default PendingGetAccessModal;
