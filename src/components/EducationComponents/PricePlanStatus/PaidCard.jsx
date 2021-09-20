import React, {useState} from "react";
import oldPrice from "../../../assets/images/education/old_price.svg";
import shortid from "shortid";
import GetAccessButton from "../EducationGetAccessButton";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const PaidCard = ({coursePlan, pricePlans}) => {
    const {slug} = useParams();

    const paidPlan = pricePlans.filter(plan => plan.price > 0)[0]
    const [totalPrice, setTotalPrice] = useState(paidPlan.price)

    const {educationAccessStatus} = useSelector(({education}) => education);
    const currentPlanAccessStatus = educationAccessStatus.filter(statusItem => statusItem.pricePlanId === coursePlan.pricePlanId)[0]


    const addExtras = (e) => {
        const price = e.target.value
        if (e.target.checked) {
            setTotalPrice(totalPrice + Number.parseInt(price))
        } else {
            setTotalPrice(totalPrice - Number.parseInt(price))
        }
    }
    return (
        <>
            <div className={"paidCardHeader"}>
                <h3 className={"title paid"}>PAID</h3>
                {
                    slug === "ms-dynamics-365-developer" ?
                        <p style={{opacity: "0"}}>Online</p>:
                        <p className={"format paid"}>Online</p>
                }

                {
                    slug === "ms-dynamics-365-consultant" ?
                        <img src={oldPrice} alt={"Old price"}/> :
                        <img style={{opacity: "0"}} src={oldPrice} alt={"Old price"}/>
                }

                <p className={"price paid"}>
                    <span className={"dollarSign"}>$</span>
                    {coursePlan.price}
                </p>
            </div>
            <div key={shortid.generate()}
                 dangerouslySetInnerHTML={{__html: coursePlan.description}}>
            </div>
            <div key={shortid.generate()}
                 dangerouslySetInnerHTML={{__html: coursePlan.checkPoints}}>
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
            {
                slug === "ms-dynamics-365-developer" ?
                    <button className={"comingSoonButton"}>Coming soon</button> :
                    <GetAccessButton isPaid={true} price={totalPrice} currentPlanAccessStatus={currentPlanAccessStatus.coursePermissionState}
                                     currentPricePlanId={currentPlanAccessStatus.pricePlanId}/>
            }

        </>
    )

}

export default PaidCard;
