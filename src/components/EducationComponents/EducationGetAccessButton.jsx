import React, {useState} from "react"
import { NavLink, useParams } from "react-router-dom";
import  { useSelector } from "react-redux";
import PendingGetAccessModal from "../ViewsComponents/Modal/PendingGetAccessModal";

const GetAccessButton = ({isPaid, price}) => {

    const { educationAccessStatus} = useSelector(({education}) => education);
    const [active, setActive] = useState(false);
    const handleOpenModal = (e) => {
        setActive(true);
    }
    const {slug} = useParams();

    switch (educationAccessStatus.coursePermissionState) {
        case "Forbidden" :
            return (
                <>
                    <button onClick={handleOpenModal} className={"getAccessButton"}>Get access</button>
                    <PendingGetAccessModal active={active} setActive={setActive} isPaid={isPaid} price={price}/>
                </>
            )
        case "Pending" :
            return <button className={"getAccessButton"}>Pending for access</button>
        case "Allowed":
            return (
                <NavLink to={"/education/" + slug + "/free-course"}>
                    <button className={"getAccessButton"}>Watch course</button>
                </NavLink>
            )
        default:
            return <button className={"getAccessButton"}>Get access</button>

    }
};

export default GetAccessButton;
