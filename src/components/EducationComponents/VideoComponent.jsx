import React from "react";
import "../../scss/education/videoComponent.scss";
import mentorPlaceholder from "../../assets/images/education/logo_placeholder_mentor.svg";
import YouTube from "react-youtube";
import {useParams} from "react-router-dom";

const EducationVideoLessons = ({video, activeBlock}) => {
    //TODO: be attention about url
    const {
        description,
        courseVideoUrl,
        mentor: {
            firstName = "",
            photoImage: {
                imageSource = "",
                alternateText = ""
            }
        },
        attachmentUrls = []
    } = video;

    const {slug} = useParams();

    const videoId = courseVideoUrl.split("v=")[1].split("&")[0];

    return (
        <>
            <div className="generalVideo">
                <div className="playerWrapper">
                    <YouTube
                        className="reactPlayer"
                        videoId={videoId}
                        opts={{
                            playerVars: {
                                autoplay: 0,
                            },
                        }}
                    />
                    <div className={"underVideoBlock"}>
                        <section className={"locationLearnProcess"}>
                            <h5>Block {activeBlock.toString()}</h5>
                            <h4>{video.header}</h4>
                        </section>
                        <section className={"author"}>
                            {
                                imageSource === null ?
                                    <img src={mentorPlaceholder} alt={alternateText}/> :
                                    <img src={imageSource} alt={alternateText}/>
                            }
                            <div className={"authorInfo"}>
                                <h5>Author</h5>
                                <h4>{firstName}</h4>
                            </div>
                        </section>
                    </div>

                    <p className={"videoDescription"}>{description}</p>
                    {attachmentUrls.length > 0
                        ?
                        <div className={"attachments"}>
                            <h3 className={"attachmentsHeadingParagraph"}>Attached Files</h3>
                            <div className={"attachment"}>
                                {attachmentUrls.map(attachment => <a rel="noopener noreferrer" target='_blank'
                                                                     href={attachment} download>
                                    Block_{activeBlock.toString()}_practice.pdf
                                    <span className={"attachmentSize"}>1.1mb</span>
                                </a>)}

                            </div>
                        </div>
                        :
                        <>
                            {
                                slug === "ms-dynamics-365-developer" ?
                                    <div className={"noAttachments"}>
                                        <h3 className={"attachmentsHeadingParagraph"}>Attached Files</h3>
                                        <h4 className={"developerAttachments"}>During the course, you will develop one project. All the instructions for
                                            your homework are in 'Project Sevent for Developers course' file under Block
                                            1. Please read it carefully. Good luck!</h4>
                                    </div> :
                                    <div className={"noAttachments"}>
                                        <h3 className={"attachmentsHeadingParagraph"}>Attached Files</h3>
                                        <h4>No homework this time. Have a cup of tea and rest.</h4>
                                    </div>

                            }
                        </>

                    }

                </div>
            </div>
        </>
    );
};

export default EducationVideoLessons;
