import React, {useEffect, useState} from "react";
import shortid from "shortid";
import oldPrice from "../../../assets/images/education/old_price.svg";
import GetAccessButton from "../EducationGetAccessButton";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const PaidCardMobile = ({coursePlanMobile, pricePlans}) => {
    const {slug} = useParams();

    const paidPlan = pricePlans.filter(plan => plan.price > 0)[0]
    const [totalPrice, setTotalPrice] = useState(paidPlan.price)

    const addExtras = (e) => {
        const price = e.target.value
        if (e.target.checked) {
            setTotalPrice(totalPrice + Number.parseInt(price))
        } else {
            setTotalPrice(totalPrice - Number.parseInt(price))
        }
    }

    const {educationAccessStatus} = useSelector(({education}) => education);
    const currentPlanAccessStatus = educationAccessStatus.filter(statusItem => statusItem.pricePlanId === coursePlanMobile.pricePlanId)[0]

    return (
        <>
            <div className={"priceTitleBlock"}>
                <div className={"paidCardHeader"}>
                    <h3 className={"title paid"}>PAID</h3>
                    {
                        slug === "ms-dynamics-365-developer" ?
                            <p style={{opacity: "0"}}>Online</p> :
                            <p className={"format paid"}>Online</p>
                    }

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
                             dangerouslySetInnerHTML={{__html: coursePlanMobile.checkPoints}}>
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
                            {coursePlanMobile.price}
                        </p>
                    </div>
                    : <p className={"price paid"}>
                        <span className={"dollarSign"}>$</span>
                        {coursePlanMobile.price}
                    </p>
            }


            <div className={"priceDescription"} key={shortid.generate()}
                 dangerouslySetInnerHTML={{__html: coursePlanMobile.description}}>
            </div>

            <ul className={"extraBenefitsList"}>
                <li className={"extraBenefit"}>
                    <input type={"checkbox"} name="mentor_assistance"
                           id={"mentor_assistance_mobile"}
                           value="20" onClick={addExtras} className={"customCheckbox"}/>
                    <label htmlFor={"mentor_assistance_mobile"}
                           htmlFor={"mentor_assistance_mobile"}>Get
                        mentor's assistance (1 hour) <span
                            className={"paid"}>+20$</span></label>
                </li>
                <li className={"extraBenefit"}>
                    <input type={"checkbox"} name="exam_certificate"
                           id={"exam_certificate_mobile"}
                           value="10" onClick={addExtras} className={"customCheckbox"}/>
                    <label htmlFor={"exam_certificate_mobile"}
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
            {
                slug === "ms-dynamics-365-developer" ?
                    <button className={"comingSoonButton"}>Coming soon</button> :
                    <GetAccessButton isPaid={true} price={totalPrice}
                                     currentPlanAccessStatus={currentPlanAccessStatus.coursePermissionState}
                                     currentPricePlanId={currentPlanAccessStatus.pricePlanId}/>
            }
        </>
    )
}

export default PaidCardMobile;
