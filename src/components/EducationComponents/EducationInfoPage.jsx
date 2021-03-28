import React from "react";
import "../../scss/education/educationInfoPage.scss";
import courseLogo from "../../assets/images/consultant.svg";
import benefitIcon from "../../assets/images/test_icon.svg";
import {NavLink, useParams} from "react-router-dom";

const EducationInfoPage = ({education}) => {
    const {
        header = "",
        slug = "",
        description = "",
        addOnPageSteps = [],
        applicationType,
        addOnPageTables = [],
        installationGuidePath,
        troubleshootGuidePath,
        cardLogo = {},
    } = education;

    return (
        <>
            <div className="educationInfoContent">
                <div className={"headerWrapper"}>
                    <section className={"header"}>
                        <div className={"headerLeftSide"}>
                            <h1>{header}</h1>
                            <p>The course is aimed at those who are interested in getting to know in detail the
                                automation of complex business processes using the Microsoft Dynamics 365 platform. The
                                training is suitable both for those who are already working with the system and would
                                like to get acquainted with the functionality in more detail, and for those who will
                                work with the system for the first time.</p>
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
                            <div className={"learnParagraph"}>
                                <p>The course starts with a slow dive into the subject not to miss a thing or confuse
                                    the newbies. With each step, you will dig deeper and have to put freshly-obtained
                                    knowledge to use. Keeping a theory-practice balance guarantees the new career
                                    start as a Junior Microsoft Dynamics 365 Consultant at UDS Systems.</p>
                                <ul>
                                    <li>Business Security</li>
                                    <li>Sales analytics / Power BI</li>
                                    <li>How to customize CRM (import, views, dashboards, connections, etc.)</li>
                                    <li>Microsoft Business Solutions Ecosystem Complementary Products at a glance</li>
                                    <li>What CRM system is / opportunities overview</li>
                                </ul>
                            </div>
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
                                <h4>Specialists who already use Dynamics 365 and want to deepen their knowledge</h4>
                                <p>
                                    Just a must-have. This course talks about all the nuances of using MS Dynamics 365
                                    directly needed to configure the system and use its maximum capabilities.
                                </p>
                            </li>
                            <li className={"conformityListItem"}>
                                <h4>Business Analysts</h4>
                                <p>
                                    The course provides a deep understanding of all Dynamics 365 advantages and
                                    disadvantages. In the future, gained knowledge will enable you to offer the best
                                    possible options to meet business needs.
                                </p>
                            </li>
                            <li className={"conformityListItem"}>
                                <h4>For those who want to change current professional fulfillment</h4>
                                <p>
                                    A vast majority of the companies use MS Dynamics 365 to automate business processes,
                                    and the demand for Dynamics 365 experts is growing every year. We suggest this
                                    course as a soft professional switch to Dynamics 365 world and further career
                                    development.
                                </p>
                            </li>
                            <li className={"conformityListItem"}>
                                <h4>Students</h4>
                                <p>
                                    This course helps to gain all the necessary Dynamics 365 knowledge and determine the
                                    direction for further career fulfillment as MS Dynamics 365 Consultant, Business
                                    Analyst, or Project Manager.
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
                        <li><p>MS CRM Solutions</p></li>
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
                            <p>The certificate issued by UDS is an assurance of the successful course accomplishment. It
                                proves that you can showcase your competency in the subject area and apply for Junior
                                Microsoft Dynamics 365 Consultant.</p>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula nibh nunc eu, sit
                                    arcu morbi sed nunc.</p>
                            </div>
                        </li>
                        <li>
                            <img src={benefitIcon} alt={"Mentor"}/>
                            <div>
                                <h4>Peter Ivanov</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula nibh nunc eu, sit
                                    arcu morbi sed nunc.</p>
                            </div>
                        </li>
                        <li>
                            <img src={benefitIcon} alt={"Mentor"}/>
                            <div>
                                <h4>Peter Ivanov</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula nibh nunc eu, sit
                                    arcu morbi sed nunc.</p>
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
                            <span className={"startDate"}>
                                <h3>Start date: <p>notify me</p></h3>
                            </span>
                            <div className={"descriptionSection"}>
                                <p className={"description"}>Free plan is designated for everyone willing and eager to
                                    become a member of UDS team. On the successful completion of the course, we afford soft
                                    ground for students to apply for Junior Microsoft Dynamics 365 Consultant in UDS
                                    Systems. </p>
                                <ul className={"checkPoints"}>
                                    <li>
                                        <p>small-group format (up to 6 students);</p>
                                    </li>
                                    <li>
                                        <p>short course (2 weeks only);</p>
                                    </li>
                                    <li>
                                        <p>mentor's assistance;</p>
                                    </li>
                                    <li>
                                        <p>practical assignments similar to the tasks of real projects;</p>
                                    </li>
                                    <li>
                                        <p>check of home assignment;</p>
                                    </li>
                                    <li>
                                        <p>employment in UDS Systems;</p>
                                    </li>
                                    <li>
                                        <p>we recruit a group of students only
                                            two times a year (when the need to expand current projects arises).</p>
                                    </li>
                                </ul>
                            </div>
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
                            <label className={"tab-label"} htmlFor={"chck1"}>What is a course format?</label>
                            <div className={"tab-content"}>
                                We carry online most of our courses —
                                you can study in a convenient mode without being tied to a place.
                            </div>
                        </div>
                        <div className={"tab"}>
                            <input type={"checkbox"} id={"chck2"}/>
                            <label className={"tab-label"} htmlFor={"chck2"}>What if I face difficulties during the
                                course?</label>
                            <div className={"tab-content"}>
                                Your mentor will support you and help you to go through the difficulties that might
                                arise.
                            </div>
                        </div>
                        <div className={"tab"}>
                            <input type={"checkbox"} id={"chck3"}/>
                            <label className={"tab-label"} htmlFor={"chck3"}>Where can I find a job after the course
                                completion?</label>
                            <div className={"tab-content"}>
                                After course completion, you can choose the most attractive position: MS Dynamics 365
                                Consultant, Business Analyst, or Project Manager.
                                UDS will provide a job offer for the most successful graduates. Also, upon request, we
                                will provide a list of companies that run in the related area for all graduates.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EducationInfoPage;
