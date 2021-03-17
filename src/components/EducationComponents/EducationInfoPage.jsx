import React from "react";
import "../../scss/education/educationInfoPage.scss";
import courseLogo from "../../assets/images/consultant.svg";
import benefitIcon from "../../assets/images/test_icon.svg";

const EducationInfoPage = () => {


    return (
        <>
            <div className="educationInfoContent">
                <div className={"headerWrapper"}>
                    <section className={"header"}>
                        <div className={"headerLeftSide"}>
                            <h1>MS Dynamics 365 Consultant</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris, rhoncus,
                                vulputate nibh orci vulputate in. Congue morbi erat rhoncus eros, pellentesque
                                vestibulum, sed. Integer tempor lacus proin orci etiam aliquam.
                            </p>
                            <button className={"downloadButton"}>Download curriculum</button>
                        </div>
                        <div className={"headerRightSide"}>
                            <img className={"courseLogo"} src={courseLogo} alt={"MS Dynamics 365 Consultant"}/>
                        </div>
                    </section>
                </div>
                <section className={"learnInfo"}>
                    <h2>What you'll learn</h2>
                    <div className={"learnInfoContent"}>
                        <section className={"leftBar"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
                                risus semper urna, suspendisse a nullam. Mauris nulla
                                id facilisis ipsum.</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>A, sit egestas cras adipiscing lacus.</li>
                                <li>Diam facilisis imperdiet neque vestibulum.</li>
                                <li>Diam nunc neque suscipit ornare gravida magna amet</li>
                                <li>In ut tellus urna amet ullamcorper feugiat.</li>
                            </ul>
                            <img className={"courseLogo"} src={courseLogo} alt={"What you will learn"}/>
                            <button className={"takeCourseButton"}>Take Course</button>
                        </section>
                        <section className={"rightBar"}>
                            <ul>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={benefitIcon} alt={"Benefit"}/>
                                        <h4>Duration</h4>
                                    </div>
                                    <p>- video: 20h;<br/> - practice: 30h;</p>
                                </li>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={benefitIcon} alt={"Benefit"}/>
                                        <h4>Subject</h4>
                                    </div>
                                    <p>Consulting</p>
                                </li>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={benefitIcon} alt={"Benefit"}/>
                                        <h4>Format</h4>
                                    </div>
                                    <p>100% Online</p>
                                </li>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={benefitIcon} alt={"Benefit"}/>
                                        <h4>Certificate of completion</h4>
                                    </div>
                                    <p>Yes</p>
                                </li>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={benefitIcon} alt={"Benefit"}/>
                                        <h4>Language</h4>
                                    </div>
                                    <p>Russian</p>
                                </li>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={benefitIcon} alt={"Benefit"}/>
                                        <h4>Price</h4>
                                    </div>
                                    <p>FREE</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
                <div className={"fullWidth"}>
                <section className={"conformityInfo"}>
                    <h2>Who is suitable for the course</h2>
                    <ul className={"conformityList"}>
                        <li className={"conformityListItem"}>
                            <h4>Students</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris, rhoncus,
                                vulputate nibh orci vulputate in.
                            </p>
                        </li>
                        <li className={"conformityListItem"}>
                            <h4>If you are looking for new opportunities</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris, rhoncus,
                                vulputate nibh orci vulputate in.
                            </p>
                        </li>
                        <li className={"conformityListItem"}>
                            <h4>You are already using Microsoft Dynamics</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris, rhoncus,
                                vulputate nibh orci vulputate in.
                            </p>
                        </li>
                        <li className={"conformityListItem"}>
                            <h4>Business Analysts</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris, rhoncus,
                                vulputate nibh orci vulputate in.
                            </p>
                        </li>
                    </ul>

                </section>
                </div>
                {/*<div className={"fullWidth"}>*/}
                    <section className={"syllabus"}>
                        <h2>Syllabus</h2>
                        <ul>
                            <li>
                                <h4>1. Microsoft Dynamics CRM functionality</h4>
                                <p>Learn Microsoft Dynamics CRM Architecture,
                                    CRM types, ecosystem and external
                                    integration. </p>
                            </li>
                            <li>
                                <h4>1. Microsoft Dynamics CRM functionality</h4>
                                <p>Learn Microsoft Dynamics CRM Architecture,
                                    CRM types, ecosystem and external
                                    integration. </p>
                            </li>
                            <li>
                                <h4>1. Microsoft Dynamics CRM functionality</h4>
                                <p>Learn Microsoft Dynamics CRM Architecture,
                                    CRM types, ecosystem and external
                                    integration. </p>
                            </li>
                            <li>
                                <h4>1. Microsoft Dynamics CRM functionality</h4>
                                <p>Learn Microsoft Dynamics CRM Architecture,
                                    CRM types, ecosystem and external
                                    integration. </p>
                            </li>
                        </ul>
                        <button className={"downloadButton"}>Download curriculum</button>
                    </section>
                {/*</div>*/}
            </div>
        </>
    );
};

export default EducationInfoPage;
