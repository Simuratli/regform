import React from "react";
import "../../scss/education/educationInfoPage.scss";
import certificate from "../../assets/images/education/certificate.svg";
import benefitIcon from "../../assets/images/test_icon.svg";
import intencity from "../../assets/images/education/learn_right_bar_icons/intensity.svg";
import subject from "../../assets/images/education/learn_right_bar_icons/subject.svg";
import book from "../../assets/images/education/learn_right_bar_icons/book.svg";
import languageIcon from "../../assets/images/education/learn_right_bar_icons/language.svg";
import priceIcon from "../../assets/images/education/learn_right_bar_icons/price.svg";
import {NavLink} from "react-router-dom";

const EducationInfoPage = ({education}) => {

    const {
        header = "",
        slug = "",
        courseState = "",
        coursePermissionState = "",
        shortDescription = "",
        courseLogo: {
            imageSource = "",
            alternateText = ""
        },
        courseRightBar: {
            courseSubject = "",
            courseFormat = "",
            hasCertificate = false,
            language = "",
            price = "",
            courseDuration: {
                video = 0,
                practice = 0
            }
        },
        pricePlans,
        syllabus,
        mentors,
        recommendations,
        certificateDescription = "",
    } = education;

    return (
        <>
            <div className="educationInfoContent">
                <div className={"headerWrapper"}>
                    <section className={"header"}>
                        <div className={"headerLeftSide"}>
                            <h1>{header}</h1>
                            <div key={shortDescription} dangerouslySetInnerHTML={{__html: shortDescription}}/>
                            <button className={"downloadButton"}>Download curriculum</button>
                        </div>
                        <div className={"headerRightSide"}>
                            <img className={"courseLogo"} src={imageSource} alt={alternateText}/>
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
                            <img className={"courseLogo"} src={imageSource} alt={"What you will learn"}/>
                            <button className={"takeCourseButton"}>Take Course</button>
                        </section>
                        <section className={"rightBar"}>
                            <ul>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={intencity} alt={"Benefit"}/>
                                        <h4>INTENSITY</h4>
                                    </div>
                                    <p>Theory: {video} hours<br/> + practice</p>
                                </li>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={subject} alt={"Benefit"}/>
                                        <h4>Subject</h4>
                                    </div>
                                    <p>{courseSubject}</p>
                                </li>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={book} alt={"Benefit"}/>
                                        <h4>Format</h4>
                                    </div>
                                    <p>100% {courseFormat}</p>
                                </li>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={book} alt={"Benefit"}/>
                                        <h4>Certificate of completion</h4>
                                    </div>
                                    <p>Yes</p>
                                </li>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={languageIcon} alt={"Benefit"}/>
                                        <h4>Language</h4>
                                    </div>
                                    <p>{language}</p>
                                </li>
                                <li>
                                    <div className={"titleOfBenefit"}>
                                        <img className={"listItemLogo"} src={priceIcon} alt={"Benefit"}/>
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
                            {recommendations.map(recommendationItem =>
                                <li className={"conformityListItem"} key={recommendationItem}
                                    dangerouslySetInnerHTML={{__html: recommendationItem}}/>
                            )}
                        </ul>
                    </section>
                </div>
                {/*<div className={"fullWidth"}>*/}
                <section className={"syllabus"}>
                    <h2>Course outline</h2>
                    <ul>
                        {syllabus.map(syllabusItem =>
                            <li>
                                <h4>{syllabusItem.header}</h4>
                                <p>{syllabusItem.description}</p>
                            </li>)}
                    </ul>
                    <button className={"downloadButton"}>Download curriculum</button>
                </section>
                {/*</div>*/}
                <section className={"gettingSkills"}>
                    <h2>Become proficient in</h2>
                    <ul>
                        <li><p>MS Dynamics 365 Architecture</p></li>
                        <li><p>Microsoft Dynamics 365 Web Services creation</p></li>
                        <li><p>PowerApps customization</p></li>
                        <li><p>Plugin development</p></li>
                        <li><p>Integration with external products</p></li>
                        <li><p>Custom Workflow development</p></li>
                    </ul>
                </section>
                <section className={"certification"}>
                    <h2>Certification</h2>
                    <div className={"certificationContent"}>
                        <img src={certificate} alt={"Certificate example"}/>
                        <div>
                            <h4>Stand ahead of other competitors!</h4>
                            <p>{certificateDescription}</p>
                        </div>

                    </div>

                </section>
                <section className={"mentors"}>
                    <h2>Meet your mentors</h2>
                    <ul>
                        {mentors.map(mentor =>
                            <li>
                                <img src={benefitIcon} alt={"Mentor"}/>
                                <div>
                                    <h4>{mentor.firstName}</h4>
                                    <p>{mentor.biography}</p>
                                </div>
                            </li>
                        )}
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
                            {pricePlans.map(planItem =>
                            <div key={planItem} dangerouslySetInnerHTML={{__html: planItem.description}}>
                            </div>
                            )}
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
