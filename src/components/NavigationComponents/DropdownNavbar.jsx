import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import "../../scss/navigation/drodowNavbar.scss";
import {getAddonCard} from "../../store/reducers/addonReducer/actions/addonCardAction";
import {useDispatch, useSelector} from "react-redux";
import phone from "../../assets/images/footer_icons/phone.svg";
import mail from "../../assets/images/footer_icons/mail.svg";
import skype from "../../assets/images/footer_icons/skype.svg";
import authentication from "../../b2c";
import logout from "../../assets/images/exit.svg";
import {getUserData} from "../../store/reducers/userDataReducer/actions/userDataAction";

export const DropDownAddonList = ({isOpen}) => {

    const {addon: {cards}} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!cards.length) {
            dispatch(getAddonCard(1));
        }
    }, []);

    return (
        <>
            <div className={isOpen ? 'dropdownList open' : 'dropdownList'}>
                <NavLink className={"dropdownItem addOn"} to={"/add-ons/"}>
                   All
                </NavLink>
                {
                    cards.map((item, index) => (
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
                    <a href={"tel:+38 095 383 9341"}>+380953839341</a>
                </li>
                <li className={"dropdownItem mail"}>
                    <img src={mail} alt="mail"/>
                    <a href={"mailto:portal@uds.systems"}>portal@uds.systems</a>
                </li>
                <li className={"dropdownItem skype"}>
                    <img src={skype} alt="skype"/>
                    <a href={"skype:live:uds_ddt?chat"}>uds.systems</a>
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

