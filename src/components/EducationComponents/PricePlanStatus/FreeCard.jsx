import React from "react";
import oldPrice from "../../../assets/images/education/old_price.svg";
import shortid from "shortid";
import GetAccessButton from "../EducationGetAccessButton";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";


const FreeCard = ({coursePlan}) => {

    const {slug} = useParams();

    const {educationAccessStatus} = useSelector(({education}) => education);
    const currentPlanAccessStatus = educationAccessStatus.filter(statusItem => statusItem.pricePlanId === coursePlan.pricePlanId)[0]

    return (
        <>
            <div className={"paidCardHeader"}>
                <h3 className={"title free"}>FREE</h3>
                {
                    slug === "ms-dynamics-365-developer" ?
                        <p style={{opacity: "0"}}>Online</p> :
                        <p className={"format free"}>Offline</p>
                }
                <img style={{opacity: "0"}} src={oldPrice} alt={"Old price"}/>
                <p className={"price free"}>
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
            {
                slug === "ms-dynamics-365-developer" ?
                    <a href={coursePlan.technicalTaskUrl} target={"_blank"}>
                        <button className={"downloadTestTaskButton"}>
                            Download test task
                        </button>
                    </a> : ""
            }

            <GetAccessButton isPaid={false}
                             currentPlanAccessStatus={currentPlanAccessStatus.coursePermissionState}
                             currentPricePlanId={currentPlanAccessStatus.pricePlanId}/>
        </>
    )

}

export default FreeCard;
