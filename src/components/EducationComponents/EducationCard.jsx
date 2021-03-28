import React from "react"
import "../../scss/education/educationCard.scss";
import {NavLink} from "react-router-dom";

const EducationCard = ({educationCard}) => {

    const {
        name = "",
        slug = "",
        duration = 0,
        courseState = "",
        courseSubject = "",
        shortDescription,
        cardLogo:{
            imageSource = "",
            alternateText = "",
        },

    } = educationCard;

    return (
        <>
            <div className="educationCard">
                <div className={"leftCardSide"}><img src={imageSource} alt={alternateText}/></div>
                <div className={"rightCardSide"}>
                    <h5>{name}</h5>
                    <p>{shortDescription}</p>
                    <div className={"cardBottomInfo"}>
                        <NavLink to={"/educations/courses/" + slug + "/preview"}>
                        <button className={"moreInfoButton"}>More info</button>
                        </NavLink>
                        <ul>
                            <li className={"appointment"}>{courseSubject}</li>
                            <li className={"duration"}>{duration} WEEKS LONG</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EducationCard;
