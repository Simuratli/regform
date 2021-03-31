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
        cardLogo: {
            imageSource = "",
            alternateText = "",
        },

    } = educationCard;

    return (
        <>
            <NavLink to={"/education/courses/" + slug + "/preview"}>
                <div className="educationCard">
                    <div className={"leftCardSide"}><img src={imageSource} alt={alternateText}/></div>
                    <div className={"rightCardSide"}>
                        <h5>{name}</h5>
                        <p>{shortDescription}</p>
                        <div className={"cardBottomInfo"}>
                            <button className={"moreInfoButton"}>More info</button>
                            <ul>
                                <li className={"appointment"}>{courseSubject}</li>
                                <li className={"duration"}>{duration} WEEKS LONG</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    );
};

export default EducationCard;
