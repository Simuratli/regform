import React from "react";
import "../../scss/education/videoComponent.scss";
import ReactPlayer from 'react-player'

const EducationVideoLessons = () => {
    return (
        <>
            <div className="generalVideo">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=3Agq3wOVBJo"/>
            </div>
        </>
    );
};

export default EducationVideoLessons;
