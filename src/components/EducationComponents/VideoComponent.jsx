import React from "react";
import "../../scss/education/videoComponent.scss";
import ReactPlayer from 'react-player'

const EducationVideoLessons = ({video}) => {
    //TODO: be attention about url
    console.log(video, "VIDEVAVA")

    return (
        <>
            <div className="generalVideo">
                <ReactPlayer
                    url={video.courseVideoUrl.split('&')[0]
                    // url={videoUrl ? videoUrl.split('&')[0] : "https://www.youtube.com/watch?v=3Agq3wOVBJo"
                    }/>
            </div>
        </>
    );
};

export default EducationVideoLessons;
