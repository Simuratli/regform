import React, {useEffect} from "react";
import "../../../scss/modal/pendingGetAccessModal.scss";
import info from "../../../assets/images/information_popup_icon.svg";
import close from "../../../assets/images/window-close.svg";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getUserData} from "../../../store/reducers/userDataReducer/actions/userDataAction";
import "../../../scss/views/editableInput.scss";
import {educationRequestMailPayment} from "../../../store/reducers/educationReducer/actions/educationRequestMailPayment";
import FreeGetAccessModalConsultant from "./FreeGetAccessModalConsultant";
import FreeGetAccessModalDeveloper from "./FreeGetAccessModalDeveloper";


const PendingGetAccessModal = ({active, setActive, isPaid, price, currentPricePlanId}) => {
    const dispatch = useDispatch();
    const {slug} = useParams();
    const {
        userData: {
            firstName,
            lastName,
            email
        }
    } = useSelector(({user}) => user);

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    let paymentData = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "courseSlug": slug,
        "paymentMessage": price?.toString(),
        "coursePricePlanId": currentPricePlanId
    }


    const handleChangeAccessStatusPaid = async (e) => {
        e.preventDefault();
        dispatch(educationRequestMailPayment(paymentData));
        setActive(false);
    }
    //just close modal without changing status
    const closeModal = () => {
        setActive(false)
        window.localStorage.removeItem('currentPricePlanId')
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
                        <form onSubmit={handleChangeAccessStatusPaid}>
                            <label htmlFor="firstName">First name</label>
                            <input className={firstName ? "editableInput" : "emptyField"} type={"text"}
                                   defaultValue={firstName} onChange={inputDataChange}
                                   name={'firstName'} required={true}/>
                            <label htmlFor="lastName">Last name</label>
                            <input className={lastName ? "editableInput" : "emptyField"} type={"text"}
                                   defaultValue={lastName} onChange={inputDataChange}
                                   name={'lastName'} required={true}/>
                            <label htmlFor="email">Email</label>
                            <input className={email ? "editableInput" : "emptyField"} type={"email"} defaultValue={email}
                                   onChange={inputDataChange}
                                   name={'email'} id="mail" required={true}/>
                            <p>
                                Make sure the fields Name, Last name and
                                Email are filled in correctly. <b>Thank you!</b>
                            </p>
                            <button className={"gotInfoButton"} type={"submit"}>Confirm</button>
                        </form>
                    </section>
                </div>
            </div>
            :
            <>
                {slug === "ms-dynamics-365-consultant" ?
                    <FreeGetAccessModalConsultant email={email} active={active} setActive={setActive} currentPricePlanId={currentPricePlanId}/> :
                    <FreeGetAccessModalDeveloper email={email} active={active} setActive={setActive} currentPricePlanId={currentPricePlanId}/>
                }
            </>

    );
};
export default PendingGetAccessModal;
