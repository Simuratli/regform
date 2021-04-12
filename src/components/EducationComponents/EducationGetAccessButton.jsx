import React, {useState} from "react"
import {NavLink, useParams} from "react-router-dom";
import PendingGetAccessModal from "../Modal/PendingGetAccessModal";

const GetAccessButton = ({accessStatus}) => {

    const [active, setActive] = useState(false);
    const handleOpenModal = () => {
        setActive(true)
        // console.log(active)
        // return <PendingGetAccessModal active={active} setActive={setActive}/>
    }
    const {slug} = useParams();

    switch (accessStatus.coursePermissionState) {
        case "Forbidden" :
            return (
                <>
                    <button onClick={handleOpenModal} className={"getAccessButton"}>Get access</button>
                    <PendingGetAccessModal active={active} setActive={setActive}/>
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
