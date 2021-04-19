import React, {useEffect} from "react"
import "../../scss/education/educationCard.scss";
import {NavLink, useParams} from "react-router-dom";
import courseLogo from "../../assets/images/courseLogo.svg";
import {useDispatch, useSelector} from "react-redux";
import {getEducationAccessStatus} from "../../store/reducers/educationReducer/actions/educationGetAccessAction";

const EducationCard = ({educationCard}) => {
    const { educationAccessStatus} = useSelector(({education}) => education);
    const dispatch = useDispatch;
    console.log(educationAccessStatus);

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

    useEffect(() => {
        dispatch(getEducationAccessStatus(slug));
    }, [slug]);

    return (
        <>
            <NavLink to={"/education/" + slug}>
                <div className="educationCard">
                    <div className={"leftCardSide"}><img src={courseLogo} alt={alternateText}/></div>
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
