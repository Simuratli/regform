import React from "react";
import "../../scss/education/videoComponent.scss";
import YouTube from "react-youtube";
import download from "../../assets/images/education/docx_icon.svg";

const EducationVideoLessons = ({video}) => {
    //TODO: be attention about url
    // console.log(video, "VIDEVAVA")

    const {
        description,
        courseVideoUrl,
        mentor: {
            firstName = "",
            biography = "",
            photoImage: {
                imageSource = "",
                alternateText = ""
            }
        },
        attachmentUrls = []
    } = video;

    return (
        <>
            <div className="generalVideo">
                <div className="playerWrapper">
                    <YouTube
                        className="reactPlayer"
                        videoId={courseVideoUrl.split("v=")[1].split("&")[0]}
                        opts={{
                            playerVars: {
                                autoplay: 0,
                            },
                        }}
                    />
                    <section className={"author"}>
                        <img src={imageSource} alt={alternateText}/>
                        <div className={"authorInfo"}>
                            <h5>Author</h5>
                            <h4>{firstName}</h4>
                        </div>
                    </section>
                    <p className={"videoDescription"}>{description}</p>
                    {attachmentUrls.length > 0
                        ?
                        <div className={"attachments"}>
                            <h3 className={"attachmentsHeadingParagraph"}>Attached Files</h3>
                            <div className={"attachment"}>
                                {/*<img src={download} alt={"Download"}/>*/}
                                {attachmentUrls.map(attachment => <a href={attachment} download>
                                    Name of the Attachment.docx
                                    <span className={"attachmentSize"}>1.1mb</span>
                                </a>)}

                            </div>
                        </div>
                        :
                        <h4>Here is no Attachment</h4>
                    }

                </div>
            </div>
        </>
    );
};

export default EducationVideoLessons;
