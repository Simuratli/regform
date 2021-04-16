import React, {memo, useEffect, useState} from "react"
import {NavLink, useParams} from "react-router-dom";
import PendingGetAccessModal from "../Modal/PendingGetAccessModal";
import {useDispatch, useSelector} from "react-redux";
import {getEducationInfoPage} from "../../store/reducers/educationReducer/actions/educationInfoPageAction";
import {getEducationAccessStatus} from "../../store/reducers/educationReducer/actions/educationGetAccessAction";

const GetAccessButton = memo(({accessStatus}) => {

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getEducationAccessStatus(slug));
    // }, [accessStatus]);

    const { educationAccessStatus} = useSelector(({education}) => education);
    console.log(educationAccessStatus, 'educationAccessStatus')
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
});

export default GetAccessButton;
