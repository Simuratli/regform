import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getAddonCard} from "../../../store/reducers/addonReducer/actions/addonCardAction";
import {NavLink} from "react-router-dom";
import "../../../scss/navigation/toggleButton/dropdownMobile.scss";
import phone from "../../../assets/images/footer_icons/phone.svg";
import mail from "../../../assets/images/footer_icons/mail.svg";
import skype from "../../../assets/images/footer_icons/skype.svg";
import whatsappIcon from "../../../assets/images/whatsapp_dropdown.svg";
// import skype from "../../../assets/images/skype.svg"

export const DropDownAddonListMobile = ({isOpenDropdown, setIsOpenDropdown, setSideDrawerOpen}) => {

    const {addon: {cards}} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!cards.length) {
            dispatch(getAddonCard(1));
        }
    }, []);

    const closeDropdownAndSideDrawer = () => {
        setIsOpenDropdown(false)
        setSideDrawerOpen(false)
    }

    return (
        <>
            <div className={isOpenDropdown ? 'dropdownListMobile isOpen' : 'dropdownListMobile'}>
                <NavLink onClick={closeDropdownAndSideDrawer}
                         className={"dropdownItem addOn"}
                         to={"/add-ons/"}>
                    All
                </NavLink>
                {
                    cards.map((item, index) => (
                        <NavLink onClick={closeDropdownAndSideDrawer}
                                 className={"dropdownItem addOn"}
                                 to={"/add-ons/" + item.slug}>
                            {item.name}
                        </NavLink>
                    ))
                }
            </div>
        </>
    );
}

export const DropDownContactListMobile = ({isOpenDropdownContactList, setIsOpenDropdownContactList, setSideDrawerOpen}) => {

    const closeDropdownAndSideDrawer = () => {
        setIsOpenDropdownContactList(false)
        setSideDrawerOpen(false)
    }

    return (
        <>
            <div className={isOpenDropdownContactList ? "dropdownListMobile contacts isOpen" : "dropdownListMobile contacts"}>
                <li className={"dropdownItem phone"}>
                    <img src={phone} alt="phone"/>
                    <a href={"tel:+38 095 383 9341"} onClick={closeDropdownAndSideDrawer}>+380953839341</a>
                </li>
                <li className={"dropdownItem mail"}>
                    <img src={mail} alt="mail"/>
                    <a href={"mailto:portal@uds.systems"} onClick={closeDropdownAndSideDrawer}>portal@uds.systems</a>
                </li>
                <li className={"dropdownItem skype"}>
                    <img src={skype} alt="skype"/>
                    <a href={"skype:live:uds_ddt?chat"} onClick={closeDropdownAndSideDrawer}>uds.systems</a>
                </li>
                <li className={"dropdownItem skype"}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    <a target={"_blank"} href={"https://api.whatsapp.com/send/?phone=+380953839341"} onClick={closeDropdownAndSideDrawer}>
                        +380953839341
                    </a>
                </li>
            </div>
        </>
    );
}
