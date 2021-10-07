import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getAddonCard} from "../../../store/reducers/addonReducer/actions/addonCardAction";
import {NavLink} from "react-router-dom";
import "../../../scss/navigation/toggleButton/dropdownMobile.scss";
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
                    {/*<img src={phone} alt="phone"/>*/}
                    <a onClick={closeDropdownAndSideDrawer} href={"tel:+38 095 383 9341"}>+380953839341</a>
                </li>
                <li className={"dropdownItem mail"}>
                    {/*<img src={mail} alt="mail"/>*/}
                    <a onClick={closeDropdownAndSideDrawer} href={"mailto:portal@uds.systems"}>portal@uds.systems</a>
                </li>
                <li className={"dropdownItem skype"}>
                    {/*<img src={skype} alt="skype"/>*/}
                    <a onClick={closeDropdownAndSideDrawer} href={"skype:live:uds_ddt?chat"}>uds.systems</a>
                </li>
            </div>
        </>
    );
}
