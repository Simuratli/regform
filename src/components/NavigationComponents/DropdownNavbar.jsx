import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import "../../scss/navigation/drodowNavbar.scss";
import {useDispatch, useSelector} from "react-redux";
import phone from "../../assets/images/footer_icons/phone.svg";
import mail from "../../assets/images/footer_icons/mail.svg";
import skype from "../../assets/images/footer_icons/skype.svg";
import whatsappIcon from "../../assets/images/footer_icons/whatsapp.svg";
import authentication from "../../b2c";
import logout from "../../assets/images/exit.svg";
import {getUserData} from "../../store/reducers/userDataReducer/actions/userDataAction";
import shortid from "shortid";

// import {getEducationCard} from "../../store/reducers/educationReducer/actions/educationCardAction";


export const DropDownAddonList = ({isOpen, dropdownList}) => {

    return (
        <>
            <div className={isOpen ? 'dropdownList open' : 'dropdownList'}>
                <NavLink className={"dropdownItem addOn"} to={"/add-ons"}>
                    All
                </NavLink>
                {
                    dropdownList.map((item, index) => (
                        <NavLink key={shortid.generate()} className={"dropdownItem addOn"} to={"/add-ons/" + item.slug}>
                            {item.name}
                        </NavLink>
                    ))
                }
            </div>
        </>
    );
}

export const DropDownContactList = () => {

    return (
        <>
            <ul className={"dropdownList contacts"}>
                <li className={"dropdownItem phone"}>
                    <img src={phone} alt="phone"/>
                    <span>
                    <a href={"tel:+38 095 383 9341"}> +380953839341</a>
                    </span>
                </li>
                <li className={"dropdownItem whatsapp"}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    <span>
                    <a target={"_blank"} href={"https://api.whatsapp.com/send/?phone=+380953839341"}>
                        +380953839341
                    </a>
                    </span>
                </li>
                <li className={"dropdownItem mail"}>
                    <img src={mail} alt="mail"/>
                    <span>
                        <a href={"mailto:portal@uds.systems"}> portal@uds.systems</a>
                    </span>
                </li>
                <li className={"dropdownItem skype"}>
                    <img src={skype} alt="skype"/>
                    <span>
                        <a href={"skype:live:uds_ddt?chat"}> uds.systems</a>
                    </span>
                </li>

            </ul>
        </>
    );
}

export const DropDownLogout = () => {
    const dispatch = useDispatch();
    const {
        userData: {
            email
        }
    } = useSelector(({user}) => user);

    // const {education} = useSelector((state) => state);
    //
    // const coursePlaceholder = [];
    //
    // const moqEduCards = [
    //     {
    //         "name": "Microsoft Dynamics\n365 Consultant",
    //         "slug": "ms-dynamics-365-consultant",
    //         "duration": 2,
    //         "courseState": "Available",
    //         "courseSubject": "Consulting",
    //         "shortDescription": "This course is an accurate and intensive blend of theoretical and practical studies. It gives you an in-depth understanding of how to automate and customize complex business processes using Microsoft Dynamics 365. It consists of 7 units with the reinforcement of the skills after going.",
    //         "cardLogo": {
    //             "imageSource": "https://myudssystemsstorageprod.blob.core.windows.net/uds-portal-assets/education/courses/ms-dynamics-365-consultant/assets/logo/logo_ms_dynamics_365_consultant.svg",
    //             "alternateText": "ms-dynamics-365-consultant"
    //         },
    //         "coursePricePlanForPermissions": [
    //             {
    //                 "pricePlanId": "f950a79a-4ad6-4497-a3be-1330b67d6ad2",
    //                 "coursePermissionState": "Pending",
    //                 "hasPaid": false
    //             },
    //             {
    //                 "pricePlanId": "c2e8980f-c2b4-48dc-9c77-e262fc101e00",
    //                 "coursePermissionState": "Pending",
    //                 "hasPaid": false
    //             }
    //         ]
    //     },
    //     {
    //         "name": "Microsoft Dynamics 365 Developer",
    //         "slug": "ms-dynamics-365-developer",
    //         "duration": 6,
    //         "courseState": "Available",
    //         "courseSubject": "Programming",
    //         "shortDescription": "It is a step-by-step course where you will learn how to expand standard functionality of Microsoft Dynamics 365. Common Data Service SD, development of Custom Workflows, Plugins will become convenient and comprehensive for you. The theory is aligned with the hands-on examples.",
    //         "cardLogo": {
    //             "imageSource": "https://myudssystemsstorageprod.blob.core.windows.net/uds-portal-assets/education/courses/ms-dynamics-365-developer/assets/logo%5Clogo_ms_dynamics_365_developer.svg",
    //             "alternateText": "ms-dynamics-365-developer"
    //         },
    //         "coursePricePlanForPermissions": [
    //             {
    //                 "pricePlanId": "cddc0d99-8102-4f27-a1ee-584a8661012e",
    //                 "coursePermissionState": "Allowed",
    //                 "hasPaid": false
    //             },
    //             {
    //                 "pricePlanId": "2aa63cbf-6694-447a-9714-db0d8b63db6d",
    //                 "coursePermissionState": "Pending",
    //                 "hasPaid": false
    //             }
    //         ]
    //     }
    // ]

    // education.educationCards && education.educationCards.forEach(course => {
    //    course.coursePricePlanForPermissions.forEach(pricePlan => {
    //        if(pricePlan.coursePermissionState != "Forbidden"){
    //            const message = `Your access to ${course.name} course is ${pricePlan.coursePermissionState}`
    //            if(!coursePlaceholder.includes(message)){
    //                coursePlaceholder.push(message)
    //            }
    //        }
    //    })
    // })
    // moqEduCards.forEach(course => {
    //     const obj = {
    //         name: course.name,
    //         status: "Forbidden",
    //
    //     }
    //     course.coursePricePlanForPermissions.forEach(pricePlan => {
    //         if(pricePlan.coursePermissionState != "Forbidden") {
    //             if (obj.status === "Allowed") {
    //                 return;
    //             }
    //             obj.status = pricePlan.coursePermissionState
    //         }
    //     })
    //     if(obj.status !== "Forbidden"){
    //         const message = `Your access to ${obj.name} course is ${obj.status}`
    //         coursePlaceholder.push(message)
    //     }
    // })

    useEffect(() => {
        dispatch(getUserData());
        // dispatch(getEducationCard());
    }, []);

    return (
        <>
            <div className={"dropdownList userLogout"}>
                {/*{ coursePlaceholder.length ?*/}
                {/*    <div className={"dropdownItem coursePlaceholder"}>*/}
                {/*        {*/}
                {/*            coursePlaceholder.map(message => {*/}
                {/*                return <p>{message}</p>*/}
                {/*            })*/}

                {/*        }*/}
                {/*    </div> : ""*/}
                {/*}*/}
                <div className={"dropdownItem userMail"}>
                    {email && email.length > 25 ?
                        email.slice(0, 25) + "..." :
                    email}
                </div>
                <div className={"dropdownItem logoutItem"}>
                    <a style={{display: "flex", justifyContent: "space-between"}}
                       onClick={() => authentication.signOut()}>
                        <p style={{margin: "0"}}>Logout</p>
                        <img alt={"logout"} src={logout}/>
                    </a>
                </div>
            </div>
        </>
    );
}

