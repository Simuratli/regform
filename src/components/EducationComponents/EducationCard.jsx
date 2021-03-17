import React from "react";
import courseLogo from "../../assets/images/consultant.svg";
import "../../scss/education/educationCard.scss";
import {NavLink} from "react-router-dom";

const EducationCard = () => {


    return (
        <>
            <div className="educationCard">
                <div className={"leftCardSide"}><img src={courseLogo} alt={"Course Logo"}/></div>
                <div className={"rightCardSide"}>
                    <h5>MS Dynamics 365 Consultant</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris,
                        rhoncus, vulputate nibh orci vulputate in. Congue morbi erat rhoncus eros,
                        pellentesque vestibulum, sed. Integer tempor lacus proin orci etiam aliquam.</p>
                    <div className={"cardBottomInfo"}>
                        <NavLink to={"/course"}>
                        <button className={"moreInfoButton"}>More info</button>
                        </NavLink>
                        <ul>
                            <li className={"appointment"}>CONSULTING</li>
                            <li className={"duration"}>2 WEEKS LONG</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
};

export default EducationCard;
