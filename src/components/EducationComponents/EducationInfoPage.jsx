import React, {useEffect} from "react";
import "../../scss/education/educationInfoPage.scss";
import certificate from "../../assets/images/education/certificate_example.svg";
import certificateIcon from "../../assets/images/education/learn_right_bar_icons/cetificate.svg";
import intensity from "../../assets/images/education/learn_right_bar_icons/intensity.svg";
import subject from "../../assets/images/education/learn_right_bar_icons/subject.svg";
import format from "../../assets/images/education/learn_right_bar_icons/format.svg";
import languageIcon from "../../assets/images/education/learn_right_bar_icons/language.svg";
import priceIcon from "../../assets/images/education/learn_right_bar_icons/price.svg";
import ScrollSyllabus from "./ScrollSyllabus";
import YouTube from "react-youtube";
import shortid from 'shortid';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import CoursePricePlan from "./CoursePricePlan";

const EducationInfoPage = ({education}) => {

    const {
        header = "",
        slug = "",
        logoGifPath = "",
        courseOutlinePath = "",
        description = "",
        introVideoUrl = "",
        courseLogo: {
            imageSource = "",
            alternateText = ""
        },
        courseRightBar: {
            courseSubject = "",
            courseFormat = "",
            language = "",
            courseDuration: {
                theory = 0
            }
        },
        pricePlans,
        mentors,
        recommendations,
        courseCertificateForPagePreview,
    } = education;

    const intro = introVideoUrl.split("v=")[1].split("&")[0]


    useEffect(() => {
        document.title = `${header} | Education | UDS Portal`;
    }, [header]);

    const {educationAccessStatus} = useSelector(({education}) => education);

    return (
        <>
            <div className="educationInfoContent">
                <div className={"educationTopWrapper"}>
                    <section className={"educationHeader"}>
                        <div className={"headerLeftSide"}>
                            <h1>{header}</h1>
                            <img className={"courseLogoMobile"} src={imageSource} alt={alternateText}/>
                            <div>
                                <p>Find out more details in the Course Outline</p>
                            </div>
                            <a href={courseOutlinePath}
                               target={"_blank"}>
                                <button className={"downloadButton"}>Download</button>
                            </a>
                        </div>
                        <div className={"headerRightSide"}>
                            <video autostart autoPlay loop src={logoGifPath} type="video/mp4"/>
                        </div>
                    </section>
                </div>
                <section className={"learnInfo"}>
                    <div className={"learnInfoContent"}>
                        <section className={"topBar"}>
                            <ul>
                                <li>
                                    <img className={"listItemLogo"} src={intensity} alt={"Intensity"}/>
                                    <div className={"topBarContent"}>
                                        <h4>Intensity</h4>
                                        <p>Theory: {theory} hr<br/> + practice</p>
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
                                        {
                                            slug === "ms-dynamics-365-consultant" ?
                                                <p>Online/Offline</p> : <p>Online</p>
                                        }

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
                                    <img className={"listItemLogo"} src={certificateIcon} alt={"Benefit"}/>
                                    <div className={"topBarContent"}>
                                        <h4>Certificate</h4>
                                        <p>Yes</p>
                                        <a className={'detailsButton'} href="#certificate">Details</a>
                                    </div>
                                </li>
                                <li>
                                    <img className={"listItemLogo"} src={priceIcon} alt={"Benefit"}/>
                                    <div className={"topBarContent"}>
                                        <h4>Price</h4>
                                        <p>FREE / PAID</p>
                                        <a className={'detailsButton'} href="#chck1">Details</a>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <h2>What you'll learn</h2>
                        <section className={"contentBar"}>
                            <div key={description} dangerouslySetInnerHTML={{__html: description}}/>
                            <YouTube
                                className="reactPlayer"
                                videoId={intro}
                                opts={{
                                    playerVars: {
                                        autoplay: 0,
                                    },
                                }}
                            />
                            <div className={"attentionBlock"}>
                                <h3>Please pay attention.</h3>
                                <p style={{marginBottom: "10px"}}>The course is available in Russian. English version is coming soon. </p>
                                <p>If you want to be notified about the launch of training in English,
                                    contact us: <a className={"attentionLink"} href={"mailto:portal@uds.systems"}>portal@uds.systems.</a></p>
                            </div>
                            {educationAccessStatus.coursePermissionState === "Allowed"
                                ?
                                <NavLink to={"/education/" + slug + "/free-course"}>
                                    <button className={"watchCourseButton"}>Watch course</button>
                                </NavLink>
                                :
                                <a href={'#takeCourse'}>
                                    <button className={"takeCourseButton"}>Take Course</button>
                                </a>
                            }
                        </section>
                    </div>
                </section>
                <div className={"fullWidth"}>
                    <section className={"conformityInfo"}>
                        <h2>Who is this course for</h2>
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
                    <section className={"conformityInfoMobile"}>
                        <h2>Who is this course for</h2>
                        <div className={"questionList"}>
                            <div className={"tab"}>
                                <input type={"checkbox"} id={"first"}/>
                                <label className={"tab-label"} htmlFor={"first"}>Specialists who already use Dynamics
                                    365 and want to deepen their knowledge</label>
                                <div className={"tab-content"}>
                                    Just a must-have. This course talks about all the nuances of using MS Dynamics 365
                                    directly needed to configure the system and use its maximum capabilities.
                                </div>
                            </div>
                            <div className={"tab"}>
                                <input type={"checkbox"} id={"second"}/>
                                <label className={"tab-label"} htmlFor={"second"}>Business Analysts</label>
                                <div className={"tab-content"}>
                                    The course provides a deep understanding of all Dynamics 365 advantages and
                                    disadvantages. In the future, gained knowledge will enable you
                                    to offer the best possible options to meet business needs.
                                </div>
                            </div>
                            <div className={"tab"}>
                                <input type={"checkbox"} id={"third"}/>
                                <label className={"tab-label"} htmlFor={"third"}>For those who want to change current
                                    professional fulfillment</label>
                                <div className={"tab-content"}>
                                    A vast majority of the companies use MS Dynamics 365 to automate business processes,
                                    and the demand for Dynamics 365 experts is growing every year. We suggest this
                                    course as a soft professional switch to Dynamics 365 world and further career
                                    development.
                                </div>
                            </div>
                            <div className={"tab"}>
                                <input type={"checkbox"} id={"fourth"}/>
                                <label className={"tab-label"} htmlFor={"fourth"}>Students</label>
                                <div className={"tab-content"}>
                                    This course helps to gain all the necessary Dynamics 365 knowledge and determine the
                                    direction for further career fulfillment as MS Dynamics 365 Consultant, Business
                                    Analyst, or Project Manager.
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <ScrollSyllabus education={education}/>
                <section className={"syllabusMobile"}>
                    <h2>Course outline</h2>
                    <h5 className={"syllabusMobileTitle"}>Obtain an overall knowledge about Microsoft Dynamics 365</h5>
                    <a className={"downloadButton"}
                       href={courseOutlinePath}
                       target={"_blank"}>
                        <button className={"downloadButton"}>Download</button>
                    </a>
                </section>
                <section className={"certification"} id={'certificate'}>
                    <h2>Certification</h2>
                    <div className={"certificationContent"}>
                        <div className={"certificateTextContent"}>
                            <h4>Stand ahead of other competitors!</h4>
                            <p>{courseCertificateForPagePreview.description}</p>
                            <p style={{fontWeight: "400", fontSize: "14px"}}>You will get this certificate if you choose the "mentor" option
                                in the paid version or if you complete a free course
                                with further employment at UDS.</p>
                        </div>
                        <img src={courseCertificateForPagePreview.certificateLogoPath} alt={"Certificate example"}/>
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
                                    <h5>{mentor.jobPosition}</h5>
                                    <p>{mentor.biography}</p>
                                </div>
                            </li>
                        )}
                    </ul>
                </section>
                <CoursePricePlan pricePlans={pricePlans}/>
                <section className={"educationFAQ"}>
                    <h2>FAQ</h2>
                    <div className={"questionList"}>
                        <div className={"tab"}>
                            <input type={"checkbox"} id={"chck1"}/>
                            <label className={"tab-label"} htmlFor={"chck1"}>What is the difference between the paid and
                                free versions of the course?</label>
                            <div className={"tab-content"}>
                                <p>
                                    The course content is identical in both versions.<br/>
                                    The difference is that we hold a free course for consultants only 1-2 times a year
                                    at
                                    the request of the CEO. If this case, you apply for a free course, get on the
                                    waiting
                                    list, pass an interview and join the training (you’ll receive a notification by
                                    email as
                                    soon as we set the starting date). The main goal of the free course is further
                                    employment at UDS company. We consider candidates from all over the world, but
                                    always
                                    with the knowledge of the English language.
                                </p>
                                <p>
                                    The paid version of the course is available to you at any time, there is no binding
                                    or long waiting. You pay for the course and get access to the training material
                                    right away. Also, after completion, you can apply for employment at UDS. To do this,
                                    email UDS HR: <a href={"mailto:t.matsyokha@uds.systems"}>t.matsyokha@uds.systems</a>
                                </p>


                            </div>
                        </div>
                        <div className={"tab"}>
                            <input type={"checkbox"} id={"chck2"}/>
                            <label className={"tab-label"} htmlFor={"chck2"}>Do you help with further
                                employment?</label>
                            <div className={"tab-content"}>
                                <p>Yes, we do. You can apply for a free course, successfully complete it, get
                                    interviewed, and join UDS team as Junior MS Dynamics 365 Consultant.</p>
                                <p>If the paid course is more advantageous, we provide a list of companies that run in
                                    the related area. (upon the graduate's request).</p>
                            </div>
                        </div>
                        <div className={"tab"}>
                            <input type={"checkbox"} id={"chck3"}/>
                            <label className={"tab-label"} htmlFor={"chck3"}>What if I run into learning
                                difficulties?</label>
                            <div className={"tab-content"}>
                                <p>Your personal mentor will support you all time.</p>
                                <p>If you prefer paid version, you can choose the mentor's help option for an extra
                                    charge. All our mentors are fluent in English, Russian, and Ukrainian, so they will
                                    help you to find the answer to any question.</p>
                            </div>
                        </div>
                        <div className={"tab"}>
                            <input type={"checkbox"} id={"chck4"}/>
                            <label className={"tab-label"} htmlFor={"chck4"}>What is a course format?</label>
                            <div className={"tab-content"}>
                                <p>We carry online most of our courses — you can study in a convenient mode without
                                    being tied to a place. Right now we carry offline free course only.
                                </p>
                            </div>
                        </div>
                        <div className={"tab"}>
                            <input type={"checkbox"} id={"chck5"}/>
                            <label className={"tab-label"} htmlFor={"chck5"}>What skills are required to start the
                                course?</label>
                            <div className={"tab-content"}>
                                <p>
                                    Everyone who wants to master MS Dynamics 365 can start studying without any
                                    preparation. But, keep in mind that some advantages allow becoming a successful
                                    Junior Dynamics 365 faster:
                                </p>
                                <ul className={"faqPointList"}>
                                    <li>excellent knowledge of the English language;</li>
                                    <li>understanding of marketing, economics;</li>
                                    <li>technical background;</li>
                                    <li>well-developed soft skills;</li>
                                    <li>analytical thinking.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EducationInfoPage;
