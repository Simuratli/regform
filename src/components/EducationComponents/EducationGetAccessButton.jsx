import React, {useState} from "react"
import {NavLink, useParams} from "react-router-dom";
import PendingGetAccessModal from "../ViewsComponents/Modal/PendingGetAccessModal";

const GetAccessButton = ({isPaid, price, currentPlanAccessStatus, currentPricePlanId}) => {

    const {slug} = useParams();
    const [active, setActive] = useState(false);

    const handleOpenModal = (e) => {
        setActive(true);
        window.localStorage.setItem(
            'currentPricePlanId', currentPricePlanId
        )
    }

    switch (currentPlanAccessStatus) {
        case "Forbidden" :
            return (
                <>
                    <button onClick={handleOpenModal} className={"getAccessButton"}>Get access</button>
                    <PendingGetAccessModal active={active} setActive={setActive} isPaid={isPaid} price={price}
                                           currentPricePlanId={currentPricePlanId}/>
                </>
            )
        case "Pending" :
            return  <button className={"pendingButton"}>In pending...</button>
        case "Allowed":
            return (
                <NavLink to={"/education/" + slug + "/" + currentPricePlanId}>
                    <button className={"watchCourseButton"}>Watch course</button>
                </NavLink>
            )
        default:
            return <button className={"getAccessButton"}>Get access</button>

    }
};

export default GetAccessButton;
