import React from "react"
import "../../scss/education/educationCard.scss";
import {NavLink} from "react-router-dom";
import courseLogo from "../../assets/images/ms_consultant_logo.svg";



const EducationCard = ({educationCard}) => {
    const {
        name = "",
        slug = "",
        duration = 0,
        courseState = "",
        courseSubject = "",
        shortDescription,
        coursePermissionState = "",
        cardLogo: {
            imageSource = "",
            alternateText = "",
        },

    } = educationCard;

    return (
        <>
            <NavLink to={"/education/" + slug}>
                <div className="educationCard">
                    <div className={"leftCardSide"}><img src={courseLogo} alt={alternateText}/></div>
                    <div className={"rightCardSide"}>
                        <h5>{name}</h5>
                        <p>{shortDescription}</p>
                        <div className={"cardBottomInfo"}>
                            {coursePermissionState === "Allowed" &&
                            <NavLink to={"/education/" + slug + "/free-course"}>
                                <button className={"watchCourseButton"}>Watch course</button>
                            </NavLink>
                            }
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
