import React, {useEffect, useState} from "react";
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
import {ButtonLoader} from "../ButtonLoader";

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

    const {isOpenButtonLoader} = useSelector(({app}) => app);
    const [isDisableF, setIsDisableF] = useState(firstName.length !== 0);
    const [isDisableL, setIsDisableL] = useState(lastName.length !== 0);
    const [isDisableE, setIsDisableE] = useState(email.length !== 0);

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    let paymentData = {
        "courseSlug": slug,
        "paymentMessage": price?.toString(),
        "coursePricePlanId": currentPricePlanId
    }

    const handleChangeAccessStatusPaid = async (e) => {
        e.preventDefault();
        paymentData.firstName = e.target.elements.firstName.value
        paymentData.lastName = e.target.elements.lastName.value
        paymentData.email = e.target.elements.email.value
        dispatch(educationRequestMailPayment(paymentData));
    }

    //just close modal without changing status
    const closeModal = () => {
        setActive(false)
        window.localStorage.removeItem('currentPricePlanId')
    }
    const process = (name, state) => {
        switch (name) {
            case 'firstName':
                setIsDisableF(state)
                break
            case "lastName":
                setIsDisableL(state)
                break
            case "email":
                setIsDisableE(state)
        }
    }

    const inputDataChange = (e) => {
        const name = e.target.getAttribute('name')

        if (e.target.value.trim() === "") {
            process(name, false)
            e.target.className = "emptyField";
        } else {
            process(name, true)
            e.target.className = "editableInput";
        }
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
                            {
                                !isDisableF ? <span className={"errorInputMessage"}>This field is required</span> : ""
                            }
                            <label htmlFor="lastName">Last name</label>
                            <input className={lastName ? "editableInput" : "emptyField"} type={"text"}
                                   defaultValue={lastName} onChange={inputDataChange}
                                   name={'lastName'} required={true}/>
                            {
                                !isDisableL ? <span className={"errorInputMessage"}>This field is required</span> : ""
                            }
                            <label htmlFor="email">Email</label>
                            <input className={email ? "editableInput" : "emptyField"} type={"email"} defaultValue={email}
                                   onChange={inputDataChange}
                                   name={'email'} id="mail" required={true}/>
                            {
                                !isDisableE ? <span className={"errorInputMessage"}>This field is required</span> : ""
                            }
                            <p>
                                Make sure the fields Name, Last name and
                                Email are filled in correctly. <b>Thank you!</b>
                            </p>

                            {
                                isOpenButtonLoader
                                    ? <div style={{width: "127px", height: "40px", marginBottom: "30px", position: "relative"}}>
                                        <ButtonLoader/>
                                    </div>
                                    : isDisableF && isDisableL && isDisableE ? <button className={"gotInfoButton"} type={"submit"}>Confirm</button>
                                    : <button className={"disableButton"} disabled={true}>Send</button>
                            }
                        </form>
                    </section>
                </div>
            </div>
            :
            <>
                {slug === "ms-dynamics-365-consultant" ?
                    <FreeGetAccessModalConsultant email={email} active={active} setActive={setActive}
                                                  currentPricePlanId={currentPricePlanId}/> :
                    <FreeGetAccessModalDeveloper email={email} active={active} setActive={setActive}
                                                 currentPricePlanId={currentPricePlanId}/>
                }
            </>

    );
};
export default PendingGetAccessModal;
