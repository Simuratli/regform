import React, {useEffect, useState} from "react";
import "../../../scss/modal/pendingGetAccessModal.scss";
import info from "../../../assets/images/information_popup_icon.svg";
import close from "../../../assets/images/window-close.svg";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getUserData} from "../../../store/reducers/userDataReducer/actions/userDataAction";
import "../../../scss/views/editableInput.scss";
import {educationRequestMailPayment} from "../../../store/reducers/educationReducer/actions/educationRequestMailPayment";
import {sendCvAndChangeAccessStatus} from "../../../store/reducers/educationReducer/actions/educationSendCvAndChangeAccessStatusAction";


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

    useEffect(() => {
        dispatch(getUserData());
    }, []);


    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    let paymentData = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "courseSlug": slug,
        "paymentMessage": price?.toString()
    }

    //close modal and change status from Forbidden to Pending
    const handleSubmission = async (e) => {
        e.preventDefault();
        dispatch(sendCvAndChangeAccessStatus(slug, selectedFile))
        setActive(false)
    }

    const changeHandler = (event) => {
        const file = event.target.files[0]
        setSelectedFile(file);
        if (file) {
            setIsFilePicked(true);
        } else {
            setIsFilePicked(false);
        }
    };

    const handleChangeAccessStatusPaid = async (e) => {
        e.preventDefault();
        dispatch(educationRequestMailPayment(paymentData));
        setActive(false);
    }
    //just close modal without changing status
    const closeModal = () => {
        setActive(false)
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
                        </p>
                    </section>
                    <section className={"personalEditableBlock"}>
                        <form onSubmit={handleSubmission}>
                            <div>
                                <div className="form-group file-area">

                                    <label htmlFor="file">Add your CV</label>
                                    <input type="file" name="file" id="file" required="required" accept=".pdf, .docx"
                                           onChange={changeHandler}/>
                                    <div className={"uploadField"}>
                                        <div className="file-dummy">
                                            {isFilePicked ? (
                                                selectedFile.name.length > 35 ?
                                                    <div className="success">{selectedFile.name.slice(0, 35)}...</div> :
                                                    <div className="success">{selectedFile.name}</div>

                                            ) : (
                                                <div className="default">Use PDF or DOCX format</div>
                                            )}
                                        </div>
                                        <button className={"uploadButton"}/>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Our manager will contact you via email <b>{email}</b> shortly.
                            </p>
                            {
                                selectedFile ?
                                    <button className={"gotInfoButton"} type={"submit"}>Send</button> :
                                    <button className={"disableButton"} disabled={true}>Send</button>
                            }
                        </form>
                    </section>

                </div>
            </div>
    );
};
export default PendingGetAccessModal;
