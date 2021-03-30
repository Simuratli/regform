import React from "react";
import "../../scss/education/educationVideoLessons.scss";
import author from "../../assets/images/test_icon.svg";
import VideoComponent from "./VideoComponent";

const EducationVideoLessons = ({education}) => {

    const {
        courseName,
        courseForPageRightBlock: {
            courseForPageBlockSections
        },
    } = education;

    courseForPageBlockSections.sort((a, b) =>
        a.position > b.position ? 1 : b.position > a.position ? -1 : 0);


    return (
        <>
            <div className="educationVideoComponent">
                <button className={"backButton"}>Back</button>
                <h2 className={"generalHeadingParagraph"}>{courseName}</h2>
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
                        <p className={"videoDescription"}>descr</p>
                        <div className={"attachments"}>
                            <h3 className={"attachmentsHeadingParagraph"}>Attached Files</h3>
                            <p>Учебка-BLOCK 1_PRACTICE_final_oct-21_KI.docx</p>
                        </div>
                    </div>

                    <div className={"rightBar"}>
                        <section className={"videoSections"}>
                            <div className={"videoSectionList"}>
                                {courseForPageBlockSections.map(section => <div className={"tab"}>
                                    <input type={"checkbox"} id={section.position}/>
                                    <label className={"tab-label"}
                                           htmlFor={section.position}>Section {section.position.toString()}: {section.header}</label>
                                    <div className={"tab-content"}>
                                        {section.courseForPageBlockSections.map(video =>
                                            <ul className={"videoPreview"}>
                                                <li className={"video"}>{video.position.toString()}. {video.header}</li>
                                            </ul>
                                        )}
                                    </div>
                                </div>)}
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EducationVideoLessons;
