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
import pricePlanMobile from "../../assets/images/education/price_mobile.svg";
import courseLogo from "../../assets/images/ms_consultant_logo.svg";
import courseLogoGif from "../../assets/images/Women_Consultant.mp4";
import ScrollSyllabus from "./ScrollSyllabus";
import YouTube from "react-youtube";
import shortid from 'shortid';
import GetAccessButton from "./EducationGetAccessButton";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const EducationInfoPage = ({education}) => {

    const {
        header = "",
        slug = "",
        shortDescription = "",
        description = "",
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
        certificateDescription = "",
    } = education;

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
                            <img className={"courseLogoMobile"} src={courseLogo} alt={alternateText}/>
                            <div key={shortDescription} dangerouslySetInnerHTML={{__html: shortDescription}}/>
                            <a href={"https://myudssystemsstorageprod.blob.core.windows.net/uds-portal-assets/b2c-auth-page/Course_outline.pdf"}
                               target={"_blank"}>
                                <button className={"downloadButton"}>Download</button>
                            </a>
                        </div>
                        <div className={"headerRightSide"}>
                            <video autostart autoPlay loop src={courseLogoGif} type="video/mp4"/>
                            {/*<img src="../../assets/images/ms_consultant_logo.svg" alt="logo"/>*/}
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
                                        <p>Offline/Online</p>
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
                                        <a className={'detailsButton'} href="#takeCourse">Details</a>
                                    </div>
                                </li>
                                <li>
                                    <img className={"listItemLogo"} src={priceIcon} alt={"Benefit"}/>
                                    <div className={"topBarContent"}>
                                        <h4>Price</h4>
                                        <p>FREE / PAID</p>
                                        <a className={'detailsButton'} href="#takeCourse">Details</a>
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
                       href={"https://myudssystemsstorageprod.blob.core.windows.net/uds-portal-assets/b2c-auth-page/Course_outline.pdf"}
                       target={"_blank"}>
                        <button className={"downloadButton"}>Download</button>
                    </a>
                </section>
                <section className={"gettingSkills"}>
                    <h2>Become proficient in</h2>
                    <ol>
                        <li><p>MS Dynamics 365 <br/> Architecture</p></li>
                        <li><p>MS Dynamics 365 <br/> Web Services creation</p></li>
                        <li><p>PowerApps <br/> customization</p></li>
                        <li><p>Plugin <br/> development</p></li>
                        <li><p>Integration with external <br/> products</p></li>
                        <li><p>Custom Workflow <br/> development</p></li>
                    </ol>
                </section>
                <section className={"certification"}>
                    <h2>Certification</h2>
                    <div className={"certificationContent"}>
                        <div className={"certificateTextContent"}>
                            <h4>Stand ahead of other competitors!</h4>
                            <p>{certificateDescription}</p>
                        </div>
                        <img src={certificate} alt={"Certificate example"}/>
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
                                    <h5>MS Dynamics 365 <br/> Consultant</h5>
                                    <p>{mentor.biography}</p>
                                </div>
                            </li>
                        )}
                    </ul>
                </section>
                <section className={"pricePlan"} id={'takeCourse'}>
                    <h2>Price plans</h2>
                    <ul className={"paidCardsContainer"}>
                        {pricePlans.map(planItem =>
                            <li className={"paidCard"}>
                                {
                                    planItem.price === 0
                                        ? <>
                                            <h3 className={"title free"}>FREE</h3>
                                            <p className={"format free"}>Offline</p>
                                            <p className={"price free"}>
                                                <span className={"dollarSign"}>$</span>
                                                {planItem.price}
                                            </p>
                                            <span className={"startDate"}>
                                            {/*<h3>Start date: <p>notify me</p></h3>*/}
                                            </span>
                                            <div key={shortid.generate()}
                                                 dangerouslySetInnerHTML={{__html: planItem.description}}>
                                            </div>
                                            <GetAccessButton/>
                                        </>
                                        : <h3 className={"title paid"}>PAID</h3>
                                }

                            </li>
                        )}
                        <li className={"paidCard"}>
                            <div className="descriptionSection">
                                <h3 className={"title"}>PAID</h3>
                                <p className={"format free"}>Online</p>
                                <p className={"price"}>
                                    <span className={"dollarSign"}>$</span>
                                    29.99
                                </p>

                                <p className="description">
                                    Paid plan is an option for self-discipline and independent people whose first aim is
                                    to
                                    obtain new knowledge. Its means there are no time restrictions and homework. At the
                                    same
                                    time, you can also request for Certificate or apply for employment in UDS Systems
                                    under
                                    certain conditions (exam and interview).
                                </p>
                                <ul className="checkPointsPaidCard">
                                    <li><p>no time reference; </p></li>
                                    <li><p>start the course right after payment;</p></li>
                                    <li><p>no practical assignment;</p></li>
                                    <li><p>convenient studying tempo;</p></li>
                                    <li><p>no mentors’s assistance; </p></li>
                                    <li><p>we do not grant Certificates on
                                        completion (without request).</p></li>
                                </ul>
                            </div>
                            <GetAccessButton/>
                        </li>
                    </ul>
                </section>
                <section className={"pricePlanMobile"} id={'takeCourseMobile'} name="takeCourse">
                    <h2>Price plans</h2>
                    <ul className={"paidCardsContainer"}>
                        <li className={"paidCard"}>
                            <div className={"priceTitleBlock"}>
                                <h3 className={"priceTitleMobile"}>FREE</h3>
                                <span className={"startDateMobile"}>
                                    {/*<h3>Start date: <p>notify me</p></h3>*/}
                                    </span>
                            </div>
                            <div className={"priceDetails"}>
                                <div className={"tab"}>
                                    <input type={"checkbox"} id={"freePrice"}/>
                                    <label className={"tab-label"} htmlFor={"freePrice"}>Details</label>
                                    <div className={"tab-content"}>
                                        <ul>
                                            <li>small-group format (up to 6 students);</li>
                                            <li>short course (2 weeks only);</li>
                                            <li>mentor's assistance;</li>
                                            <li>practical assignments similar to the tasks of real projects;</li>
                                            <li>check of home assignment;</li>
                                            <li>employment in UDS Systems;</li>
                                            <li> we recruit a group of students only two times a year (when the need to
                                                expand current projects arises).
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={"priceDescription"}>
                                <p>Free plan is designated for everyone willing and eager to become a member of UDS
                                    team.</p>
                            </div>
                            <img src={pricePlanMobile} className={"priceMobile"}/>
                            <GetAccessButton/>
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
// [
//     {
//         "price": 0,
//         "description": "<p className=\"description\"> Paid plan is an option for self-discipline and independent people whose first aim is to obtain new knowledge. Its means there are no time restrictions and homework. At the same time, you can also request for Certificate or apply for employment in UDS Systems under certain conditions (exam and interview).</p>",
//         "checkPoints": "<ul class=\"checkPoints\"><li><p>small-group format (up to 6 students);</p></li><li><p>short course (2 weeks only);</p></li><li><p>mentor's assistance;</p></li><li><p>practical assignments similar to the tasks of real projects;</p></li><li><p>check of home assignment;</p></li><li><p>employment in UDS Systems;</p></li><li><p>we recruit a group of students only two times a year (when the need to expand current projects arises).</p></li></ul>"
//     },
// ]
//     [
//     {
//         "price": 29,99,
//         "description": "  <p className=\"description\">Paid plan is an option for self-discipline and independent people whose first aim is to obtain new knowledge. Its means there are no time restrictions and homework. At the same time, you can also request for Certificate or apply for employment in UDS Systems under certain conditions (exam and interview). </p>",
//         "checkPoints": "<ul className=\"checkPointsPaidCard\"><li><p>no time reference; </p></li><li><p>start the course right after payment;</p></li><li><p>no practical assignment;</p></li><li><p>convenient studying tempo;</p></li><li><p>no mentors’s assistance; </p></li><li><p>we do not grant Certificates on completion (without request).</p></li></ul>"
//     },
//     ]
