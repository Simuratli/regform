import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import "../../scss/navigation/drodowNavbar.scss";
import {useDispatch, useSelector} from "react-redux";
import phone from "../../assets/images/footer_icons/phone.svg";
import mail from "../../assets/images/footer_icons/mail.svg";
import skype from "../../assets/images/footer_icons/skype.svg";
import authentication from "../../b2c";
import logout from "../../assets/images/exit.svg";
import {getUserData} from "../../store/reducers/userDataReducer/actions/userDataAction";
import whatsappIcon from "../../assets/images/whatsapp_dropdown.svg";


export const DropDownAddonList = ({isOpen, dropdownList}) => {

    return (
        <>
            <div className={isOpen ? 'dropdownList open' : 'dropdownList'}>
                <NavLink className={"dropdownItem addOn"} to={"/add-ons"}>
                    All
                </NavLink>
                {
                    dropdownList.map((item, index) => (
                        <NavLink className={"dropdownItem addOn"} to={"/add-ons/" + item.slug}>
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
                    <a href={"tel:+38 095 383 9341"}><span>phone:</span> +380953839341</a>
                </li>
                <li className={"dropdownItem whatsapp"}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    <a target={"_blank"} href={"https://api.whatsapp.com/send/?phone=+380953839341"}>
                        <span>whatsapp:</span> +380953839341
                    </a>
                </li>
                <li className={"dropdownItem mail"}>
                    <img src={mail} alt="mail"/>
                    <a href={"mailto:portal@uds.systems"}><span>e-mail:</span> portal@uds.systems</a>
                </li>
                <li className={"dropdownItem skype"}>
                    <img src={skype} alt="skype"/>
                    <a href={"skype:live:uds_ddt?chat"}><span>skype:</span> uds.systems</a>
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

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    return (
        <>
            <div className={"dropdownList userLogout"}>
                <div className={"dropdownItem userMail"}>
                    {email}
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

