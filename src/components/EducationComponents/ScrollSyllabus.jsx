import React from "react"
import "../../scss/education/educationInfoPage.scss";
import shortid from 'shortid';

const ScrollSyllabus = ({education}) => {
    const {
        syllabus
    } = education;

  console.log(syllabus);

    return (
        <section className={"syllabus"}>
            <h2>Course outline</h2>
            <ul>
                {syllabus.map(syllabusItem =>
                    <li key={shortid.generate()}>
                        <h4>{syllabusItem.header}</h4>
                        <p>{syllabusItem.description}</p>
                    </li>)}
            </ul>
            <a href={"https://myudssystemsstorageprod.blob.core.windows.net/uds-portal-assets/education/courses/ms-dynamics-365-consultant/assets/syllabus/Syllabus.docx"} download>
                <button className={"downloadButton"}>Download course outline</button>
            </a>
        </section>
    );
};

export default ScrollSyllabus;
