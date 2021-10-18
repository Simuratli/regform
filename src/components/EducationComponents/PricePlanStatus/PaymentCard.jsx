import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import oldPrice from "../../../assets/images/education/old_price.svg";
import shortid from "shortid";
import GetAccessButton from "../EducationGetAccessButton";
import "../../../scss/education/paymentCard.scss";
import React, {useState} from "react";

const PaymentCard = ({plan}) => {

    const {slug} = useParams();

    const {educationAccessStatus} = useSelector(({education}) => education);
    const currentPlanAccessStatus = educationAccessStatus.filter(statusItem => statusItem.pricePlanId === plan.pricePlanId)[0]

    console.log(currentPlanAccessStatus, "currentPlanAccessStatus")

    const [totalPrice, setTotalPrice] = useState(plan.price)

    const addExtras = (e) => {
        const price = e.target.value
        if (e.target.checked) {
            setTotalPrice(totalPrice + Number.parseInt(price))
        } else {
            setTotalPrice(totalPrice - Number.parseInt(price))
        }
    }

    let cardClass;
    let cardTitle;
    let courseFormat;
    let isPaid;

    if (plan.price > 0) {
        cardClass = "paid"
        cardTitle = "PAID"
        courseFormat = "Online"
        isPaid = true
    } else {
        cardClass = "free"
        cardTitle = "FREE"
        isPaid = false

        if (slug === "ms-dynamics-365-developer") {
            courseFormat = "Online"
        } else {
            courseFormat = "Offline"
        }
    }

    switch (currentPlanAccessStatus.coursePermissionState) {
        case "Forbidden" :
            return (
                <>
                    <div className={"paidCardHeader"}>
                        <h3 className={"title " + cardClass}>{cardTitle}</h3>
                        <p className={"format " + cardClass}>{courseFormat}</p>

                        {
                            slug === "ms-dynamics-365-consultant" && isPaid ?
                                <img src={oldPrice} alt={"Old price"}/> :
                                <img style={{opacity: "0"}} src={oldPrice} alt={"Old price"}/>
                        }

                        <p className={"price " + cardClass}>
                            <span className={"dollarSign"}>$</span>
                            {plan.price}
                        </p>
                    </div>
                    <div key={shortid.generate()}
                         dangerouslySetInnerHTML={{__html: plan.description}}>
                    </div>

                    <div key={shortid.generate()}
                         dangerouslySetInnerHTML={{__html: plan.checkPoints}}>
                    </div>
                    {
                        plan.coursePricePlanAdditionalServices.length ?
                            <>
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
                                    <p className={"price " + cardClass}>
                                        <h5 className={"totalPriceTitle"}>Total price</h5>
                                        <span className={"dollarSign"}>$</span>
                                        {totalPrice}
                                    </p>
                                </div>
                            </>
                            : ''
                    }
                    {
                        slug === "ms-dynamics-365-developer" && !isPaid ?
                            <a href={plan.technicalTaskUrl} target={"_blank"}>
                                <button className={"downloadTestTaskButton"}>
                                    Download assignments
                                </button>
                            </a> : ""
                    }
                    {
                        slug === "ms-dynamics-365-developer" && isPaid ?
                            <button className={"comingSoonButton"}>Coming soon</button> :
                            <GetAccessButton isPaid={isPaid} price={totalPrice}
                                             currentPlanAccessStatus={currentPlanAccessStatus.coursePermissionState}
                                             currentPricePlanId={currentPlanAccessStatus.pricePlanId}/>
                    }
                </>
            )
        case "Pending" :
            return (
                <>
                    <div className={"paidCardHeader"}>
                        <h3 className={"title " + cardClass}>{cardTitle}</h3>
                        <p className={"format " + cardClass}>{courseFormat}</p>

                        {
                            slug === "ms-dynamics-365-consultant" && isPaid ?
                                <img src={oldPrice} alt={"Old price"}/> :
                                <img style={{opacity: "0"}} src={oldPrice} alt={"Old price"}/>
                        }

                        <p className={"price " + cardClass}>
                            <span className={"dollarSign"}>$</span>
                            {plan.price}
                        </p>
                    </div>
                    <div key={shortid.generate()}
                         dangerouslySetInnerHTML={{__html: plan.description}}>
                    </div>
                    <section className={"pendingBackground"} id={"takeCourse"}>
                        <div className={"pendingBlock statusBlock"}>
                            <h3 className={"statusTitle pendingTitle"}>Thank you! <br/> We have received your request.</h3>
                            <p className={"statusParagraph pendingParagraph"}>When all the necessary procedures are
                                completed, you will get access to the course.</p>
                            {
                                slug === "ms-dynamics-365-developer" && isPaid ?
                                    <button className={"comingSoonButton"}>Coming soon</button> :
                                    <GetAccessButton isPaid={isPaid} price={totalPrice}
                                                     currentPlanAccessStatus={currentPlanAccessStatus.coursePermissionState}
                                                     currentPricePlanId={currentPlanAccessStatus.pricePlanId}/>
                            }
                        </div>
                    </section>
                </>
            )

        case "Allowed":
            return (
                <>
                    <div className={"paidCardHeader"}>
                        <h3 className={"title " + cardClass}>{cardTitle}</h3>
                        <p className={"format " + cardClass}>{courseFormat}</p>

                        {
                            slug === "ms-dynamics-365-consultant" && isPaid ?
                                <img src={oldPrice} alt={"Old price"}/> :
                                <img style={{opacity: "0"}} src={oldPrice} alt={"Old price"}/>
                        }

                        <p className={"price " + cardClass}>
                            <span className={"dollarSign"}>$</span>
                            {plan.price}
                        </p>
                    </div>
                    <div key={shortid.generate()}
                         dangerouslySetInnerHTML={{__html: plan.description}}>
                    </div>
                    <section className={"blueBackground"} id={"takeCourse"}>
                        <div className={"watchCourseBlock statusBlock"}>
                            <h3 className={"statusTitle watchTitle"}>Activate the study mode!</h3>
                            <p className={"statusParagraph watchParagraph"}>Your access to the course has been
                                successfully verified.</p>
                            {
                                slug === "ms-dynamics-365-developer" && isPaid ?
                                    <button className={"comingSoonButton"}>Coming soon</button> :
                                    <GetAccessButton isPaid={isPaid} price={totalPrice}
                                                     currentPlanAccessStatus={currentPlanAccessStatus.coursePermissionState}
                                                     currentPricePlanId={currentPlanAccessStatus.pricePlanId}/>
                            }
                        </div>
                    </section>
                </>
            )
        default:
            return (
                <>
                    <div key={shortid.generate()}
                         dangerouslySetInnerHTML={{__html: plan.checkPoints}}>
                    </div>
                    {
                        plan.coursePricePlanAdditionalServices.length ?
                            <>
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
                                    <p className={"price " + cardClass}>
                                        <h5 className={"totalPriceTitle"}>Total price</h5>
                                        <span className={"dollarSign"}>$</span>
                                        {totalPrice}
                                    </p>
                                </div>
                            </>
                            : ''
                    }
                    {
                        slug === "ms-dynamics-365-developer" && !isPaid ?
                            <a href={plan.technicalTaskUrl} target={"_blank"}>
                                <button className={"downloadTestTaskButton"}>
                                    Download assignments
                                </button>
                            </a> : ""
                    }

                    {
                        slug === "ms-dynamics-365-developer" && isPaid ?
                            <button className={"comingSoonButton"}>Coming soon</button> :
                            <GetAccessButton isPaid={isPaid} price={totalPrice}
                                             currentPlanAccessStatus={currentPlanAccessStatus.coursePermissionState}
                                             currentPricePlanId={currentPlanAccessStatus.pricePlanId}/>
                    }
                </>
            )

    }
}

export default PaymentCard;
