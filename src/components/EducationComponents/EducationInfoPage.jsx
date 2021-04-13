import React, {useEffect} from "react";
import "../../scss/education/educationInfoPage.scss";
import certificate from "../../assets/images/education/certificate_example.svg";
import certificateIcon from "../../assets/images/education/learn_right_bar_icons/cetificate.svg";
import intensity from "../../assets/images/education/learn_right_bar_icons/intensity.svg";
import subject from "../../assets/images/education/learn_right_bar_icons/subject.svg";
import format from "../../assets/images/education/learn_right_bar_icons/format.svg";
import languageIcon from "../../assets/images/education/learn_right_bar_icons/language.svg";
import priceIcon from "../../assets/images/education/learn_right_bar_icons/price.svg";
import pricePlan from "../../assets/images/education/price_price_plan.svg";
import courseLogo from "../../assets/images/courseLogo.svg";
import {NavLink} from "react-router-dom";
import ScrollSyllabus from "./ScrollSyllabus";
import YouTube from "react-youtube";
import shortid from 'shortid';
import GetAccessButton from "./EducationGetAccessButton";

const EducationInfoPage = ({education, accessStatus}) => {
    console.log(accessStatus, "accessStatus")

    const {
        header = "",
        slug = "",
        courseState = "",
        coursePermissionState = "",
        shortDescription = "",
        description = "",
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
                theory = 0
            }
        },
        pricePlans,
        syllabus,
        mentors,
        recommendations,
        certificateDescription = "",
    } = education;

    useEffect(() => {
        document.title = `${header} | Education | UDS Portal`;
    }, [header]);

    return (
        <>
            <div className="educationInfoContent">
                <section className={"header"}>
                    <div className={"headerLeftSide"}>
                        <h1>{header}</h1>
                        <div key={shortDescription} dangerouslySetInnerHTML={{__html: shortDescription}}/>
                        <a href={"https://myudssystemsstorageprod.blob.core.windows.net/uds-portal-assets/education/courses/ms-dynamics-365-consultant/assets/syllabus/Syllabus.docx"}
                           download>
                            <button className={"downloadButton"}>Download</button>
                        </a>
                    </div>
                    <div className={"headerRightSide"}>
                        <img className={"courseLogo"} src={courseLogo} alt={alternateText}/>
                    </div>
                </section>
                <section className={"learnInfo"}>
                    <div className={"learnInfoContent"}>
                        <section className={"topBar"}>
                            <ul>
                                <li>
                                    <img className={"listItemLogo"} src={intensity} alt={"Intensity"}/>
                                    <div className={"topBarContent"}>
                                        <h4>INTENSITY</h4>
                                        <p>Theory: {theory} hours<br/> + practice</p>
                                    </div>
                                </li>
                                <li>
                                    <img className={"listItemLogo"} src={subject} alt={"Benefit"}/>
                                    <div className={"topBarContent"}>
                                        <h4>Subject</h4>
                                        <p>{courseSubject}</p>
                                    </div>
                                </li>
                                <li>
                                    <img className={"listItemLogo"} src={format} alt={"Benefit"}/>
                                    <div className={"topBarContent"}>
                                        <h4>Format</h4>
                                        <p>100% {courseFormat}</p>
                                    </div>

                                </li>
                                <li>
                                    <img className={"listItemLogo"} src={certificateIcon} alt={"Benefit"}/>
                                    <div className={"topBarContent"}>
                                        <h4>Certificate</h4>
                                        <p>Yes</p>
                                    </div>
                                </li>
                                <li>
                                    <img className={"listItemLogo"} src={languageIcon} alt={"Benefit"}/>
                                    <div className={"topBarContent"}>
                                        <h4>Language</h4>
                                        <p>{language}</p>
                                    </div>
                                </li>
                                <li>
                                    <img className={"listItemLogo"} src={priceIcon} alt={"Benefit"}/>
                                    <div className={"topBarContent"}>
                                        <h4>Price</h4>
                                        <p>FREE</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <h2>What you'll learn</h2>
                        <section className={"contentBar"}>
                            <div key={description} dangerouslySetInnerHTML={{__html: description}}/>
                            <YouTube
                                className="reactPlayer"
                                videoId={"LEG3XcEUmW8"}
                                opts={{
                                    playerVars: {
                                        autoplay: 0,
                                    },
                                }}
                            />
                            <NavLink to={"/education/" + slug + "/free-course"}>
                                <button className={"takeCourseButton"}>Take Course</button>
                            </NavLink>
                        </section>
                    </div>
                </section>
                <div className={"fullWidth"}>
                    <section className={"conformityInfo"}>
                        <h2>Who is suitable for the course</h2>
                        <ul className={"conformityList"}>
                            {recommendations.map(recommendationItem =>
                                <li
                                    key={shortid.generate()}
                                    className={"conformityListItem"}
                                    dangerouslySetInnerHTML={{__html: recommendationItem}}
                                />
                            )}
                        </ul>
                    </section>
                </div>
                <ScrollSyllabus education={education}/>
                <section className={"syllabusMobile"}>
                    <h5 className={"syllabusMobileTitle"}>Obtain an overall knowledge about Microsoft Dynamics 365</h5>
                    <a className={"downloadButton"}
                       href={"https://myudssystemsstorageprod.blob.core.windows.net/uds-portal-assets/education/courses/ms-dynamics-365-consultant/assets/syllabus/Syllabus.docx"}
                       download>
                        <button className={"downloadButton"}>Download</button>
                    </a>
                </section>
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
                            <li key={shortid.generate()}>
                                <img src={mentor.photoImage.imageSource} alt={mentor.photoImage.alternateText}/>
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
                        {pricePlans.map(planItem =>
                            <li className={"paidCard"}>
                                <h3 className={"title"}>FREE</h3>
                                <img src={pricePlan} className={"price"}/>
                                <span className={"startDate"}>
                                <h3>Start date: <p>notify me</p></h3>
                            </span>
                                <div
                                    key={shortid.generate()}
                                    dangerouslySetInnerHTML={{__html: planItem.description}}>
                                </div>
                                <GetAccessButton accessStatus={accessStatus}/>
                                {/*<NavLink to={"/education/" + slug + "/free-course"}>*/}
                                {/*    <button className={"getAccessButton"}>Get access</button>*/}
                                {/*</NavLink>*/}
                            </li>
                        )}
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
