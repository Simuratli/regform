import React, {useState} from "react";
import close from "../../../assets/images/window-close.svg";
import info from "../../../assets/images/information_popup_icon.svg";
import {useDispatch, useSelector} from "react-redux";
import {sendCvAndChangeAccessStatus} from "../../../store/reducers/educationReducer/actions/educationSendCvAndChangeAccessStatusAction";
import {useParams} from "react-router-dom";
import {ButtonLoader} from "../ButtonLoader";

const FreeGetAccessModalConsultant = ({email, active, setActive, currentPricePlanId}) => {
    const dispatch = useDispatch();
    const {slug} = useParams();
    const [selectedFile, setSelectedFile] = useState();
    const [isValidFile, setIsValidFile] = useState(true);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const {isOpenButtonLoader} = useSelector(({app}) => app);

    const changeHandler = (event) => {
        const file = event.target.files[0]
        if (file && file.size > 5242880) {
            setIsFilePicked(true);
            setSelectedFile(file);
            setIsValidFile(false);
        } else {
            setIsValidFile(true);
            setSelectedFile(file);
            if (file) {
                setIsFilePicked(true);
            } else {
                setIsFilePicked(false);
            }
        }
    };

    const deleteFile = (event) => {
        setIsFilePicked(false);
        setIsValidFile(true);
        setSelectedFile(null);
        const testInput = document.getElementById("file")
        testInput.value = ""
    }

    //close modal and change status from Forbidden to Pending
    const handleSubmission = async (e) => {
        e.preventDefault();
        dispatch(sendCvAndChangeAccessStatus(slug, selectedFile))
    }
    //just close modal without changing status
    const closeModal = () => {
        setActive(false)
        window.localStorage.removeItem('currentPricePlanId')
    }

    return (
        <div className={active ? "pendingModal active" : "pendingModal"}>
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
                                <label htmlFor="file">Add your CV (no more than 5 MB)</label>
                                <input type="file" name="file" id="file" required="required" accept=".pdf, .docx"
                                       onChange={changeHandler}/>
                                <div className={"uploadField"}>
                                    <div className={isValidFile ? "file-dummy" : " file-dummy errorInput"}>
                                        {isFilePicked ? (
                                            selectedFile.name.length > 25 ?
                                                <div className={"upload"}>
                                                    <div className="success">{selectedFile.name.slice(0, 25)}...</div>
                                                    <button className={"deleteFile"} onClick={deleteFile}/>
                                                </div>
                                                :
                                                <div className={"upload"}>
                                                    <div className="success">{selectedFile.name}</div>
                                                    <button className={"deleteFile"} onClick={deleteFile}/>
                                                </div>

                                        ) : (
                                            <div className="default">Use PDF or DOCX format</div>
                                        )}
                                    </div>
                                    <button className={"uploadButton"}/>
                                </div>
                            </div>
                            {
                                isValidFile ? "" :
                                    <span style={{marginTop: "10px"}} className={"errorInputMessage"}>The file is larger than 5 MB</span>
                            }
                        </div>
                        <p>
                            Our manager will contact you via email <b>{email}</b> shortly.
                        </p>
                        {
                            isOpenButtonLoader ?
                                <div style={{width: "127px", height: "40px", marginBottom: "30px"}}><ButtonLoader/>
                                </div>
                                : selectedFile &&  isValidFile ?
                                    <button className={"gotInfoButton"} type={"submit"}>Send</button> :
                                    <button className={"disableButton"} disabled={true}>Send</button>
                        }

                    </form>
                </section>
            </div>
        </div>
    );
};
export default FreeGetAccessModalConsultant;
