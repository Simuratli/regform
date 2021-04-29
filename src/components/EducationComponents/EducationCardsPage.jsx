import React, {useEffect} from "react";
import orangeElement from "../../assets/images/education/gradient_orange_element.svg";
import "../../scss/education/educationCardsPage.scss";
import mentors from "../../assets/images/education/mentors_icon.svg";
import structure from "../../assets/images/education/structure_icon.svg";
import certificate from "../../assets/images/education/certificate_icon.svg";
import EducationCardContainer from "../../containers/Education/EducationCardContainer";


const EducationCardsPage = () => {
    useEffect(() => {
        document.title = `Education | UDS Portal`;
    }, []);
    return (
        <section className="mainContainer">
            <section className="educationHeaderContent">
                <h1 className="headingParagraph">
                    Welcome to UDS Dynamics Education
                </h1>
                <img className="orangeElement" src={orangeElement} alt="orange element"/>
                <p className="paragraph">
                    Are you interested in Microsoft Dynamics 365 and ready to build your reliable career?
                    Then UDS Dynamics Education courses will resonate with such curious and enthusiastic persons!
                </p>
            </section>
            <section className={"educationCoursesCards"}>
                <h2 className={"educationTitle"}>Courses</h2>
                <EducationCardContainer/>
            </section>
            <section className={"educationBenefits"}>
                <h2 className={"benefitsTitle"}>Our Benefits</h2>
                <ul className={"benefitsList"}>
                    <li className={"benefitsListItem"}>
                        <img src={mentors} alt={"mentors"}/>
                        <h5>Mentors</h5>
                        <p>Mentors of all presented courses are full-time senior specialists
                            employed by UDS. They know how to speak technical yet,
                            comprehensive language with the students.</p>
                    </li>
                    <li className={"benefitsListItem"}>
                        <img src={structure} alt={"structure"}/>
                        <h5>Structure</h5>
                        <p>Short-term courses do not mean superficial. UDS specialists gave a hand to make them
                            clever-organized and time-saving. So, we involved all gained related knowledge to help
                            jumpstart a new career in a short time frame.</p>
                    </li>
                    <li className={"benefitsListItem"}>
                        <img src={certificate} alt={"certificate"}/>
                        <h5>Certificate / Employment</h5>
                        <p>On the completion of the course, we grant Certificates. The most diligent students will get
                            an offer to cooperate. We also provide recommendations to other companies if the student
                            wants to apply for the related position.</p>
                    </li>
                </ul>
            </section>

        </section>
    );
};

export default EducationCardsPage;
