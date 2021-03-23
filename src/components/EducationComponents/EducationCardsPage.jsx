import React from "react";
import orangeElement from "../../assets/images/orange_element.svg";
import "../../scss/education/educationCardsPage.scss";
import benefitIcon from "../../assets/images/test_icon.svg";
import EducationCardContainer from "../../containers/EducationCardContainer";


const EducationCardsPage = () => {
    return (
        <section className="mainContainer">
            <section className="headerContent">
                    <h1 className="headingParagraph">
                        Welcome to UDS Dynamics Education
                    </h1>
                    <img className="orangeElement" src={orangeElement} alt="orange element"/>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean massa ridiculus leo facilisis in tellus tristique nisi 
                        adipiscing. Magna id gravida magna turpis ut amet, posuere.
                    </p>
            </section>
            <section className={"educationBenefits"}>
                <h2 className={"benefitsTitle"}>Our Benefits</h2>
                <p className={"benefitsSubtitle"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean massa ridiculus leo facilisis in tellus tristique nisi adipiscing.
                    Magna id gravida magna turpis ut amet, posuere.</p>
                <ul className={"benefitsList"}>
                    <li className={"benefitsListItem"}>
                        <img src={benefitIcon} alt={"benefit"}/>
                        <h5>Benefit 1</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </li>
                    <li className={"benefitsListItem"}>
                        <img src={benefitIcon} alt={"benefit"}/>
                        <h5>Benefit 1</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </li>
                    <li className={"benefitsListItem"}>
                        <img src={benefitIcon} alt={"benefit"}/>
                        <h5>Benefit 1</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </li>
                </ul>
            </section>
            <section className={"educationCoursesCards"}>
                <h2 className={"educationTitle"}>Courses</h2>
                <EducationCardContainer />
            </section>
        </section>
    );
};

export default EducationCardsPage;
