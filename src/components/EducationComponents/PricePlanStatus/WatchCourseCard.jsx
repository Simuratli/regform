import React from 'react'
import {NavLink, useParams} from "react-router-dom";

const WatchCourseCard = () => {

    const {slug} = useParams();

    return(
        <section className={"blueBackground"} id={"takeCourse"}>
            <div className={"watchCourseBlock statusBlock"}>
                <h3 className={"statusTitle watchTitle"}>Activate the study mode!</h3>
                <p className={"statusParagraph watchParagraph"}>Your access to the course has been
                    successfully verified.</p>
                <NavLink to={"/education/" + slug + "/free-course"}>
                    <button className={"getAccessButton watchButton"}>Watch course</button>
                </NavLink>
            </div>
        </section>
    )
}

export default WatchCourseCard;
