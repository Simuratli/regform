import React, {useEffect, useState} from "react";
import shortid from "shortid";
import "../../scss/education/cousePricePlan.scss";
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import GetAccessButton from "./EducationGetAccessButton";
import oldPrice from "../../assets/images/education/old_price.svg";

const CoursePricePlan = ({pricePlans}) => {

    const {educationAccessStatus} = useSelector(({education}) => education);

    const {slug} = useParams();

    pricePlans.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0))

    //get total price
    const paidPlan = pricePlans.filter(plan => plan.price > 0)[0]
    const [totalPrice, setTotalPrice] = useState(paidPlan.price)

    useEffect(() => {

    }, [educationAccessStatus.coursePermissionState]);
    const addExtras = (e) => {
        const price = e.target.value
        if (e.target.checked) {
            setTotalPrice(totalPrice + Number.parseInt(price))
        } else {
            setTotalPrice(totalPrice - Number.parseInt(price))
        }
    }

    switch (educationAccessStatus.coursePermissionState) {
        case "Forbidden" :
            return (
                <>
                    <section className={"pricePlan"} id={'takeCourse'}>
                        <h2>Price plans</h2>
                        <ul className={"paidCardsContainer"}>
                            {pricePlans.map(planItem =>
                                <li className={"paidCard"}>
                                    {planItem.price === 0
                                        ? <>
                                            <div className={"paidCardHeader"}>
                                                <h3 className={"title free"}>FREE</h3>
                                                <p className={"format free"}>Offline</p>
                                                <img style={{opacity: "0"}} src={oldPrice} alt={"Old price"}/>
                                                <p className={"price free"}>
                                                    <span className={"dollarSign"}>$</span>
                                                    {planItem.price}
                                                </p>
                                            </div>

                                            <span className={"startDate"}>
                                            {/*<h3>Start date: <p>notify me</p></h3>*/}
                                            </span>
                                            <div key={shortid.generate()}
                                                 dangerouslySetInnerHTML={{__html: planItem.description}}>
                                            </div>
                                            <div key={shortid.generate()}
                                                 dangerouslySetInnerHTML={{__html: planItem.checkPoints}}>
                                            </div>
                                            {
                                                slug === "ms-dynamics-365-developer" ?
                                                    <a href={pricePlans[1].technicalTaskUrl} target={"_blank"}>
                                                        <button className={"downloadTestTaskButton"}>Download test
                                                            task
                                                        </button>
                                                    </a> : ""
                                            }

                                            <GetAccessButton isPaid={false}/>
                                        </>
                                        : <>
                                            <div className={"paidCardHeader"}>
                                                <h3 className={"title paid"}>PAID</h3>
                                                <p className={"format paid"}>Online</p>
                                                {
                                                    slug === "ms-dynamics-365-consultant" ?
                                                        <img src={oldPrice} alt={"Old price"}/> :
                                                        <img style={{opacity: "0"}} src={oldPrice} alt={"Old price"}/>
                                                }

                                                <p className={"price paid"}>
                                                    <span className={"dollarSign"}>$</span>
                                                    {planItem.price}
                                                </p>
                                            </div>
                                            <div key={shortid.generate()}
                                                 dangerouslySetInnerHTML={{__html: planItem.description}}>
                                            </div>
                                            <div key={shortid.generate()}
                                                 dangerouslySetInnerHTML={{__html: planItem.checkPoints}}>
                                            </div>
                                            <ul className={"extraBenefitsList"}>
                                                <li className={"extraBenefit"}>
                                                    <input type={"checkbox"} name="mentor_assistance"
                                                           id={"mentor_assistance_mobile"}
                                                           value="20" onClick={addExtras} className={"customCheckbox"}/>
                                                    <label for={"mentor_assistance_mobile"}
                                                           htmlFor={"mentor_assistance_mobile"}>Get
                                                        mentor's assistance (1 hour) <span
                                                            className={"paid"}>+20$</span></label>
                                                </li>
                                                <li className={"extraBenefit"}>
                                                    <input type={"checkbox"} name="exam_certificate"
                                                           id={"exam_certificate_mobile"}
                                                           value="10" onClick={addExtras} className={"customCheckbox"}/>
                                                    <label for={"exam_certificate_mobile"}
                                                           htmlFor={"exam_certificate_mobile"}>Pass an
                                                        exam and get a
                                                        certificate <span className={"paid"}>+10$</span></label>
                                                </li>
                                            </ul>
                                            <div className={"totalPriceBlock"}>
                                                <p className={"price paid"}>
                                                    <h5 className={"totalPriceTitle"}>Total price</h5>
                                                    <span className={"dollarSign"}>$</span>
                                                    {totalPrice}
                                                </p>
                                            </div>
                                            <GetAccessButton isPaid={true} price={totalPrice}/>
                                        </>
                                    }

                                </li>
                            )}
                        </ul>
                    </section>
                    <section className={"pricePlanMobile"} id={'takeCourseMobile'} name="takeCourse">
                        <h2>Price plans</h2>
                        <ul className={"paidCardsContainer"}>
                            {pricePlans.map(planItem =>
                                <li className={"paidCard"}>
                                    {planItem.price === 0
                                        ? <>
                                            <div className={"priceTitleBlock"}>
                                                <div className={"paidCardHeader"}>
                                                    <h3 className={"title free"}>FREE</h3>
                                                    <p className={"format free"}>Offline</p>
                                                    <span
                                                        className={"startDateMobile"}>{/*<h3>Start date: <p>notify me</p></h3>*/}</span>
                                                </div>
                                            </div>
                                            <div className={"priceDetails"}>
                                                <div className={"tab"}>
                                                    <input type={"checkbox"} id={"freePrice"}/>
                                                    <label className={"tab-label"} htmlFor={"freePrice"}>Details</label>
                                                    <div className={"tab-content"}>
                                                        <div key={shortid.generate()}
                                                             dangerouslySetInnerHTML={{__html: planItem.checkPoints}}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className={"price free"}>
                                                <span className={"dollarSign"}>$</span>
                                                {planItem.price}
                                            </p>
                                            <div className={"priceDescription"} key={shortid.generate()}
                                                 dangerouslySetInnerHTML={{__html: planItem.description}}>
                                            </div>
                                            <GetAccessButton isPaid={false}/>
                                        </>
                                        : <>
                                            <div className={"priceTitleBlock"}>
                                                <div className={"paidCardHeader"}>
                                                    <h3 className={"title paid"}>PAID</h3>
                                                    <p className={"format paid"}>Online</p>
                                                    <span
                                                        className={"startDateMobile"}>{/*<h3>Start date: <p>notify me</p></h3>*/}</span>
                                                </div>
                                            </div>
                                            <div className={"priceDetails"}>
                                                <div className={"tab"}>
                                                    <input type={"checkbox"} id={"paidPrice"}/>
                                                    <label className={"tab-label"} htmlFor={"paidPrice"}>Details</label>
                                                    <div className={"tab-content"}>
                                                        <div key={shortid.generate()}
                                                             dangerouslySetInnerHTML={{__html: planItem.checkPoints}}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                                {
                                                    slug === "ms-dynamics-365-consultant" ?
                                                        <div className={"pricesMobile"}>
                                                        <img src={oldPrice} alt={"Old price"}/>
                                                        <p className={"price paid"}>
                                                            <span className={"dollarSign"}>$</span>
                                                            {planItem.price}
                                                        </p>
                                                        </div>
                                                        : <p className={"price paid"}>
                                                            <span className={"dollarSign"}>$</span>
                                                            {planItem.price}
                                                        </p>
                                                        // <img style={{opacity: "0"}} src={oldPrice} alt={"Old price"}/>
                                                }


                                            <div className={"priceDescription"} key={shortid.generate()}
                                                 dangerouslySetInnerHTML={{__html: planItem.description}}>
                                            </div>

                                            <ul className={"extraBenefitsList"}>
                                                <li className={"extraBenefit"}>
                                                    <input type={"checkbox"} name="mentor_assistance"
                                                           id={"mentor_assistance"}
                                                           value="20" onClick={addExtras} className={"customCheckbox"}/>
                                                    <label htmlFor={"mentor_assistance"}>Get
                                                        mentor's assistance (1 hour) <span
                                                            className={"paid"}>+20$</span></label>
                                                </li>
                                                <li className={"extraBenefit"}>
                                                    <input type={"checkbox"} name="exam_certificate"
                                                           id={"exam_certificate"}
                                                           value="10" onClick={addExtras} className={"customCheckbox"}/>
                                                    <label htmlFor={"exam_certificate"}>Pass
                                                        an exam and get a
                                                        certificate <span className={"paid"}>+10$</span></label>
                                                </li>
                                            </ul>
                                            <div className={"totalPriceBlock"}>
                                                <p className={"price paid"}>
                                                    <h5 className={"totalPriceTitle"}>Total price</h5>
                                                    <span className={"dollarSign"}>$</span>
                                                    {totalPrice}
                                                </p>
                                            </div>
                                            <GetAccessButton isPaid={true} price={totalPrice}/>
                                        </>

                                    }
                                </li>
                            )}
                        </ul>
                    </section>
                </>
            )
        case "Pending" :
            return (
                <section className={"orangeBackground"} id={"takeCourse"}>
                    <div className={"pendingBlock statusBlock"}>
                        <h3 className={"statusTitle pendingTitle"}>Thank you! <br/> We have received your request. </h3>
                        <p className={"statusParagraph pendingParagraph"}>When all the necessary procedures will be
                            completed, you will get an access to the course.</p>
                        <button className={"pendingButton"}>In pending...</button>
                    </div>
                </section>
            )
        case "Allowed":
            return (
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
        default:
            return <button className={"getAccessButton"}>Get access</button>

    }
};

export default CoursePricePlan;
