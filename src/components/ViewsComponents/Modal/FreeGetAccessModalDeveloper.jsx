import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import React, {useState} from "react";
import {sendCvAndChangeAccessStatus} from "../../../store/reducers/educationReducer/actions/educationSendCvAndChangeAccessStatusAction";
import close from "../../../assets/images/window-close.svg";
import info from "../../../assets/images/information_popup_icon.svg";
import {ButtonLoader} from "../ButtonLoader";

const FreeGetAccessModalDeveloper = ({email, active, setActive}) => {
    const dispatch = useDispatch();
    const {slug} = useParams();
    const [selectedFile, setSelectedFile] = useState();
    const [selectedLink, setSelectedLink] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [isLinkPicked, setIsLinkPicked] = useState(false);
    const [isValidFile, setIsValidFile] = useState(true);
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

    const changeHandlerForLink = (event) => {
        const link = event.target.value
        setSelectedLink(link);
        if (link) {
            setIsLinkPicked(true);
        } else {
            setIsLinkPicked(false);
        }
    };



    //close modal and change status from Forbidden to Pending
    const handleSubmission = async (e) => {
        e.preventDefault();
        dispatch(sendCvAndChangeAccessStatus(slug, selectedFile, selectedLink))
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
                        We can't wait to share our knowledge with you. Attach your resume and a link to the completed
                        technical assignment to register for a free course.
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
                                isValidFile ? "" : <span className={"errorInputMessage"} style={{marginTop: "6px", marginBottom: "0"}}>The file is larger than 5 MB</span>
                            }
                            <div className="testTaskBlock">
                                <label htmlFor="link">Add assignments</label>
                                <input type="url" name="link" id="link" required="required" onChange={changeHandlerForLink}
                                       placeholder={"Add a link to your file on GitHub or Google Disk"}/>
                            </div>
                        </div>
                        <p>
                            Our manager will contact you via email <b>{email}</b> shortly.
                        </p>
                        {
                            isOpenButtonLoader ? <div style={{width: "127px", height: "40px", marginBottom: "30px"}}><ButtonLoader/></div>
                                :  selectedFile && isLinkPicked ?
                                <button className={"gotInfoButton"} type={"submit"}>Send</button> :
                                <button className={"disableButton"} disabled={true}>Send</button>
                        }
                    </form>
                </section>
            </div>
        </div>
    );
};
export default FreeGetAccessModalDeveloper;
