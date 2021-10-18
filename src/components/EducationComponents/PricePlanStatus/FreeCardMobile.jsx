import React from "react";
import shortid from "shortid";
import GetAccessButton from "../EducationGetAccessButton";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const FreeCardMobile = ({coursePlanMobile}) => {

    const {slug} = useParams();

    const {educationAccessStatus} = useSelector(({education}) => education);
    const currentPlanAccessStatus = educationAccessStatus.filter(statusItem => statusItem.pricePlanId === coursePlanMobile.pricePlanId)[0]

    return (
        <>
            <div className={"priceTitleBlock"} >
                <div className={"paidCardHeader"}>
                    <h3 className={"title free"}>FREE</h3>
                    {
                        slug === "ms-dynamics-365-developer" ?
                            <p style={{opacity: "0"}}>Online</p> :
                            <p className={"format free"}>Offline</p>
                    }

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
                             dangerouslySetInnerHTML={{__html: coursePlanMobile.checkPoints}}>
                        </div>
                    </div>
                </div>
            </div>
            <p className={"price free"}>
                <span className={"dollarSign"}>$</span>
                {coursePlanMobile.price}
            </p>
            <div className={"priceDescription"} key={shortid.generate()}
                 dangerouslySetInnerHTML={{__html: coursePlanMobile.description}}>
            </div>
            {
                slug === "ms-dynamics-365-developer" ?
                    <a href={coursePlanMobile.technicalTaskUrl} target={"_blank"}>
                        <button className={"downloadTestTaskButton"}>Download test
                            task
                        </button>
                    </a> : ""
            }
            <GetAccessButton isPaid={false} currentPlanAccessStatus={currentPlanAccessStatus.coursePermissionState}
                             currentPricePlanId={currentPlanAccessStatus.pricePlanId}/>
        </>
    )
}

export default FreeCardMobile;
