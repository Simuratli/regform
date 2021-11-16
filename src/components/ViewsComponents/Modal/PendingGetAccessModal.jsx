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
import {isEmpty} from "lodash";


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
    const [isDisable, setIsDisable] = useState(false);
    const [isDisableF, setIsDisableF] = useState(false);
    const [isDisableL, setIsDisableL] = useState(false);
    const [isDisableE, setIsDisableE] = useState(false);

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

    if( paymentData.firstName.length === 0 || paymentData.lastName.length === 0 || paymentData.email.length === 0){
        setIsDisable(true);
    }

    const handleChangeAccessStatusPaid = async (e) => {
        e.preventDefault();
        dispatch(educationRequestMailPayment(paymentData));
    }
    //just close modal without changing status
    const closeModal = () => {
        setActive(false)
        window.localStorage.removeItem('currentPricePlanId')
    }
    const process = (name , state) => {
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
        paymentData[name] = e.target.value.trim()
        if( e.target.value.trim() === ""){
            setIsDisable(true);
            process(name, true)
            e.target.className = "emptyField";
        } else {
            setIsDisable(false);
            process(name, false)
            e.target.className = "editableInput";
        }
        console.log(isEmpty(paymentData.firstName), "isEmpty(paymentData.firstName)")
        console.log(paymentData.firstName, "paymentData.firstName")
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
                            <input className={firstName ? "editableInput" :  "emptyField"} type={"text"}
                                   defaultValue={firstName} onChange={inputDataChange}
                                   name={'firstName'} required={true}/>
                            {
                                isDisableF ? <span className={"errorInputMessage"}>Please, enter your First Name</span> : ""
                            }
                            <label htmlFor="lastName">Last name</label>
                            <input className={lastName ? "editableInput" : "emptyField"} type={"text"}
                                   defaultValue={lastName} onChange={inputDataChange}
                                   name={'lastName'} required={true}/>
                            {
                                isDisableL ? <span className={"errorInputMessage"}>Please, enter your Last Name</span> : ""
                            }
                            <label htmlFor="email">Email</label>
                            <input className={email ? "editableInput" : "emptyField"} type={"email"} defaultValue={email}
                                   onChange={inputDataChange}
                                   name={'email'} id="mail" required={true}/>
                            {
                                isDisableE ? <span className={"errorInputMessage"}>Please, enter your Email</span> : ""
                            }
                            <p>
                                Make sure the fields Name, Last name and
                                Email are filled in correctly. <b>Thank you!</b>
                            </p>

                            {
                                isOpenButtonLoader
                                    ? <div style={{width: "127px", height: "40px", marginBottom: "30px"}}>
                                        <ButtonLoader/>
                                    </div>
                                    : isDisable ? <button className={"disableButton"} disabled={true}>Send</button>
                                    : <button className={"gotInfoButton"} type={"submit"}>Confirm</button>
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
