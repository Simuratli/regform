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
    const [activeSection, setActiveSection] = useState(null);
    // const [active, setActiveVideo] = useState(null);

    if (activeVideo === null) {
        setActiveVideo(courseForPageBlockSections[0].courseForPageBlockSections[0])
        setActiveSection(courseForPageBlockSections[0].position)
    }

    const chooseVideo = (e) => {
        setActiveVideo(e.target.getAttribute('videoToken'))
        const sectionPosition = e.target.getAttribute('sectionPosition')
        const videoPosition = e.target.getAttribute('videoPosition')
        const section = courseForPageBlockSections.filter(item => item.position.toString() === sectionPosition).shift()
        const video = section.courseForPageBlockSections.filter(item => videoPosition === item.position.toString()).shift()
        setActiveVideo(video)
        setActiveSection(sectionPosition)
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
                        <VideoComponent video={activeVideo} activeBlock={activeSection}/>
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
                                                        <span>{video.position.toString()}. </span>{video.header}
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
                <section className={"videoContentMobile"}>
                        <MobileVideoTabs blockVideos={courseForPageBlockSections}/>
                </section>
            </div>
        </>
    );
};



function MobileVideoTabs({blockVideos}) {
    const [ activeTab, setActiveTab ] = useState(null);

    const TabContent = ({ title, content }) => (
        <div className="blockTabContent">
            {content}
        </div>
    );

    if (activeTab === null) {
        setActiveTab(0)
    }


    const videoItems = blockVideos.map( (block) =>{
        return {
            title: 'Block ' + block.position,
            content: <div className={"blockVideoList"}>
                <h5 className={"blockHeader"}>{block.header}</h5>
                {block.courseForPageBlockSections.map(videoBlock =>
                <div className={"tab"}>
                    <input type={"radio"} id={'mob'+videoBlock.position} name="rd"/>
                    <label className={"tab-label"}
                           htmlFor={'mob'+videoBlock.position}><span>{videoBlock.position}.</span> {videoBlock.header}</label>
                    <div className={"tab-content"}>
                        <VideoComponent video={videoBlock} activeBlock={block.position}/>
                    </div>
                </div>
                )}
            </div>
        }
    })

    const openTab = e => setActiveTab(+e.target.dataset.index);

    return (
        <div className={"mobileVideoBlocks"}>
            <div className={"tabBar"}>
                {videoItems.map((tabName, index) => (
                    <button
                        className={`tabLinks ${index === activeTab ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={index}
                    >{tabName.title}</button>
                ))}
            </div>
            {videoItems[activeTab] && <TabContent {...videoItems[activeTab]} />}
        </div>
    );
}



export default EducationVideoLessons;
