import React from "react";
import "../../scss/education/videoComponent.scss";
import video from "../../assets/images/consultant.svg";

const EducationVideoLessons = () => {
    return (
        <>
            <div className="generalVideo">
                <img src={video}/>
            </div>
        </>
    );
};

export default EducationVideoLessons;
