import React, {useEffect, useState} from "react";
import "../../scss/education/educationVideoLessons.scss";
import VideoComponent from "./VideoComponent";
import {NavLink, useParams} from "react-router-dom";
import shortid from 'shortid';

const EducationVideoLessons = ({education}) => {

    const {
        courseName,
        courseForPageRightBlock: {
            courseForPageBlockSections
        },
    } = education;

    useEffect(() => {
        document.title = `Free course | ${courseName} | Education | UDS Portal`;
    }, [courseName]);

    courseForPageBlockSections.sort((a, b) =>
        a.position > b.position ? 1 : b.position > a.position ? -1 : 0);

    // sorting videos in each section
    courseForPageBlockSections.forEach(section => {
        section.courseForPageBlockSections.sort((a, b) =>
            a.position > b.position ? 1 : b.position > a.position ? -1 : 0);
    })

    const [activeVideo, setActiveVideo] = useState(null);

    if (activeVideo === null) {
        setActiveVideo(courseForPageBlockSections[0].courseForPageBlockSections[0])
    }

    const chooseVideo = (e) => {
        setActiveVideo(e.target.getAttribute('videoToken'))
        const sectionPosition = e.target.getAttribute('sectionPosition')
        const videoPosition = e.target.getAttribute('videoPosition')
        const section = courseForPageBlockSections.filter(item => item.position.toString() === sectionPosition).shift()
        const video = section.courseForPageBlockSections.filter(item => videoPosition === item.position.toString()).shift()
        setActiveVideo(video)
    }

    const {slug} = useParams();
    return (
        <>
            <div className="educationVideoComponent">
                <NavLink to={"/education/" + slug}>
                    <button className={"backButton"}>Back to course page</button>
                </NavLink>
                <h2 className={"generalHeadingParagraph"}>{courseName}</h2>
                <section className={"videoContent"}>
                    <div className={"leftBar"}>
                        <VideoComponent video={activeVideo}/>
                    </div>
                    <div className={"rightBar"}>
                        <div className={"videoSections"}>
                            <div className={"videoSectionList"}>
                                {courseForPageBlockSections.map(section =>
                                    <div className={"tab"}>
                                        <input type={"checkbox"} id={section.position}/>
                                        <label className={"tab-label"}
                                               htmlFor={section.position}>Block {section.position.toString()}: {section.header}</label>
                                        <div className={"tab-content"}>
                                            {section.courseForPageBlockSections.map(video =>
                                                <ul className={"videoPreview"} key={shortid.generate()}>
                                                    <li className={"video"} onClick={chooseVideo}
                                                        sectionPosition={section.position}
                                                        videoPosition={video.position}>
                                                        {video.position.toString()}. {video.header}
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EducationVideoLessons;
