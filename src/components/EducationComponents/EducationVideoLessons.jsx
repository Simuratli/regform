import React from "react";
import "../../scss/education/educationVideoLessons.scss";
import author from "../../assets/images/test_icon.svg";
import VideoComponent from "./VideoComponent";

const EducationVideoLessons = () => {
    return (
        <>
            <div className="educationVideoComponent">
                <button className={"backButton"}>Back</button>
                <h2 className={"generalHeadingParagraph"}>MS Dynamics 365 Consultant course</h2>
                <section className={"videoContent"}>
                    <div className={"leftBar"}>
                        <VideoComponent/>
                        <section className={"author"}>
                            <img src={author} alt={"Author"}/>
                            <div className={"authorInfo"}>
                                <h5>Author</h5>
                                <h4>Slava Kostiuk</h4>
                            </div>
                        </section>
                        <p className={"videoDescription"}>
                            Some description lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Facilisi risus semper urna, suspendisse a nullam. Mauris nulla id facilisis ipsum.
                        </p>
                        <div className={"attachments"}>
                            <h3 className={"attachmentsHeadingParagraph"}>Attached Files</h3>
                            <p>Учебка-BLOCK 1_PRACTICE_final_oct-21_KI.docx</p>
                        </div>
                    </div>
                    <div className={"rightBar"}>
                        <section className={"videoSections"}>
                            <div className={"videoSectionList"}>
                                <div className={"tab"}>
                                    <input type={"checkbox"} id={"chck1"}/>
                                    <label className={"tab-label"} htmlFor={"chck1"}>Section 1: Microsoft
                                        Dynamics CRM functionality</label>
                                    <div className={"tab-content"}>
                                       <ul className={"videoPreview"}>
                                           <li className={"video"}>1. Jira</li>
                                           <li className={"video"}>2. Dynamics_CRM</li>
                                           <li className={"video"}>3. Solutions</li>
                                           <li className={"video"}>4. Entities</li>
                                       </ul>
                                    </div>
                                </div>
                                <div className={"tab"}>
                                    <input type={"checkbox"} id={"chck2"}/>
                                    <label className={"tab-label"} htmlFor={"chck2"}>Section 2: Working with forms</label>
                                    <div className={"tab-content"}>
                                        <ul className={"videoPreview"}>
                                            <li className={"video"}>1. Jira</li>
                                            <li className={"video"}>2. Dynamics_CRM</li>
                                            <li className={"video"}>3. Solutions</li>
                                            <li className={"video"}>4. Entities</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={"tab"}>
                                    <input type={"checkbox"} id={"chck3"}/>
                                    <label className={"tab-label"} htmlFor={"chck3"}>Section 3: Relationships and Records</label>
                                    <div className={"tab-content"}>
                                        <ul className={"videoPreview"}>
                                            <li className={"video"}>1. Jira</li>
                                            <li className={"video"}>2. Dynamics_CRM</li>
                                            <li className={"video"}>3. Solutions</li>
                                            <li className={"video"}>4. Entities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EducationVideoLessons;
