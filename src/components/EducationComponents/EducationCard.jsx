import React from "react"
import "../../scss/education/educationCard.scss";
import {NavLink} from "react-router-dom";


const EducationCard = ({educationCard}) => {
    const {
        name = "",
        slug = "",
        duration = 0,
        courseSubject = "",
        shortDescription,
        coursePermissionState = "",
        coursePricePlanForPermissions,
        cardLogo: {
            imageSource = "",
            alternateText = "",
        },

    } = educationCard;

    let accessStatus = false;

    coursePricePlanForPermissions.forEach(item => {
        if(item.coursePermissionState === "Allowed") {
            accessStatus = true;
        }
    })

    return (
        <>
            <NavLink to={"/education/" + slug}>
                <div className="educationCard">
                    <div className={"leftCardSide"}><img src={imageSource} alt={alternateText}/></div>
                    <div className={"rightCardSide"}>
                        <h5>{name}</h5>
                        <p>{shortDescription}</p>
                        <div className={"cardBottomInfo"}>
                            <div className={"courseButtons"}>
                                {accessStatus === true &&
                                <NavLink to={"/education/" + slug + "/video-course"}>
                                    <button className={"watchCourseButton"}>Watch course</button>
                                </NavLink>
                                }
                                <button className={"moreInfoButton"}>More info</button>
                            </div>
                            <ul>
                                <li className={"appointment"}>{courseSubject}</li>
                                <li className={"duration"}>{duration} Weeks long</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    );
};

export default EducationCard;
