import React from "react";
import "../../scss/education/educationInfoPage.scss";
import courseLogo from "../../assets/images/consultant.svg";
import benefitIcon from "../../assets/images/test_icon.svg";
import {NavLink} from "react-router-dom";

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
                <section className={"gettingSkills"}>
                    <h2>Skills you will gain</h2>
                    <ul>
                        <li><p>Microsoft Dynamics CRM</p></li>
                        <li><p>MS CRM Solutions</p> </li>
                        <li><p>MS CRM Relationships and Records</p></li>
                        <li><p>MS CRM Forms</p></li>
                        <li><p>Business Rules</p></li>
                        <li><p>Workflows</p></li>
                        <li><p>Document management</p></li>
                    </ul>
                </section>
                <section className={"certification"}>
                    <h2>Certification</h2>
                    <div className={"setificationContent"}>
                        <img src={courseLogo} alt={"Certificate"}/>
                        <div>
                            <h4>Improve your CV</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Eleifend quis proin faucibus felis at mauris. Pharetra, non
                                vel ac iaculis id.</p>
                            <p>You can share your Course Certificates in the Certifications
                                section of your LinkedIn profile, on printed resumes, CVs,
                                or other documents.</p>
                        </div>

                    </div>

                </section>
                <section className={"mentors"}>
                    <h2>Meet your mentors</h2>
                    <ul>
                        <li>
                            <img src={benefitIcon} alt={"Mentor"}/>
                            <div>
                                <h4>Peter Ivanov</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula nibh nunc eu, sit arcu morbi sed nunc.</p>
                            </div>
                        </li>
                        <li>
                            <img src={benefitIcon} alt={"Mentor"}/>
                            <div>
                                <h4>Peter Ivanov</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula nibh nunc eu, sit arcu morbi sed nunc.</p>
                            </div>
                        </li>
                        <li>
                            <img src={benefitIcon} alt={"Mentor"}/>
                            <div>
                                <h4>Peter Ivanov</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula nibh nunc eu, sit arcu morbi sed nunc.</p>
                            </div>
                        </li>
                    </ul>

                </section>
                <section className={"pricePlan"}>
                    <h2>Price plans</h2>
                    <ul className={"paidCardsContainer"}>
                        <li className={"paidCard"}>
                            <h3 className={"title"}>FREE</h3>
                            <span className={"price"}>$ 0</span>
                            <p className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Auctor blandit eu quis egestas arcu dui, tempus tellus enim.
                                Eget nec vel felis, nulla elementum aliquam.</p>
                            <span className={"startDate"}>
                                <h3>Start date: <p>notify me</p></h3>
                            </span>
                            <ul className={"paidPoints"}>
                                <li>
                                    <img src={benefitIcon} alt={"Benefit Point"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </li>
                                <li>
                                    <img src={benefitIcon} alt={"Benefit Point"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </li>
                                <li>
                                    <img src={benefitIcon} alt={"Benefit Point"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </li>
                                <li>
                                    <img src={benefitIcon} alt={"Benefit Point"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </li>
                                <li>
                                    <img src={benefitIcon} alt={"Benefit Point"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </li>
                                <li>
                                    <img src={benefitIcon} alt={"Benefit Point"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </li>
                            </ul>
                            <NavLink to={"/video"}>
                                <button className={"getAccessButton"}>Get access</button>
                            </NavLink>
                        </li>
                    </ul>
                </section>
                <section className={"educationFAQ"}>
                    <h2>FAQ</h2>
                    <div className={"questionList"}>
                            <div className={"tab"}>
                                <input type={"checkbox"} id={"chck1"}/>
                                    <label className={"tab-label"} htmlFor={"chck1"}>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. At suspendisse amet enim commodo? </label>
                                    <div className={"tab-content"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus et, tristique nunc leo eu id.
                                    </div>
                            </div>
                            <div className={"tab"}>
                                <input type={"checkbox"} id={"chck2"}/>
                                    <label className={"tab-label"} htmlFor={"chck2"}>Lorem ipsum dolor sit amet?</label>
                                    <div className={"tab-content"}>
                                        Pellentesque nec diam vitae sodales mi vitae nunc purus. Sed urna arcu,
                                        nisl donec sed. At sit ut dignissim eu, pellentesque duis odio. Eu quis
                                        eleifend nibh a, non cras vitae ornare. Fusce sit tristique ornare
                                        diam aliquam nu
                                    </div>
                            </div>
                        </div>
                </section>
            </div>
        </>
    );
};

export default EducationInfoPage;
