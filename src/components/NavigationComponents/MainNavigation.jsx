import React, {useEffect, useState} from "react";
import "../../scss/navigation/mainNavigation.scss";
import "../../scss/utils/utils.scss";
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/images/uds_logo/uds_logo_header_new.svg";
import logout from "../../assets/images/logout.svg";
import "../../scss/navigation/toggleButton/DrawerToggleButton.scss";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import {FormattedMessage} from "react-intl";
import {DropDownAddonList, DropDownContactList, DropDownLogout} from "./DropdownNavbar";
import {getAddonDropdownList} from "../../store/reducers/addonReducer/actions/addonDropdownListAction";
import {useDispatch, useSelector} from "react-redux";

function MainNavigation(props) {

    const [scrolled, setScrolled] = useState(false);
    const dispatch = useDispatch();
    const {addon: {dropdownList}} = useSelector((state) => state);

    const handleScroll = () => {
        if (window.scrollY >= 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        dispatch(getAddonDropdownList());
    }, []);


    window.addEventListener('scroll', handleScroll)

    return (
        <div className={scrolled ? 'fullWidthWrapper fixedNavbar' : 'fullWidthWrapper'}>
            <div className={"navigationBar"}>
                <div className={"leftBlock"}>
                    <Link to={"/"}>
                        <img className={"headerLogo"} src={logo} alt={"logo"}/>
                    </Link>
                    <nav className={"navItems"}>
                        <ul className={"navLinks"}>
                            <li className={"mouseHover"}>
                                <NavLink className={"nav-link"} to="/add-ons">
                                    ADD-ONS
                                    <DropDownAddonList dropdownList={dropdownList}/>
                                </NavLink>
                            </li>
                            <li className={"mouseHover"}>
                                <NavLink className={"nav-link"} to="/education">
                                    <FormattedMessage id="Education"/>
                                </NavLink>
                            </li>
                            <li className={"mouseHover"}>
                                <span className={"nav-link"}>CONTACT US</span>
                                <DropDownContactList/>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={"rightBlock"}>
                    <ul>
                        <li>
                            <a href="https://uds.systems" target={"_blank"}>
                                <button className={"goToWebsiteButton"}>GO TO THE WEBSITE</button>
                            </a>
                        </li>
                        <li>
                            <a target='_blank'
                               href="https://outlook.office365.com/owa/calendar/UDSSYSTEMSLTD@uds.systems/bookings/s/KcmM-oNkQkm9AT7aKGYvkg2">
                                <button className={"bookACall"}>
                                    <FormattedMessage id="book.call"/>
                                </button>
                            </a>
                        </li>
                        <li style={{position: "relative", cursor: "pointer"}} className={"mouseHoverLogout"}>
                            <img alt={"logout"} src={logout}/>
                            <DropDownLogout/>
                        </li>
                    </ul>
                </div>
                <div className={"mainNavToggleButton"}>
                    <DrawerToggleButton setSideDrawerOpen={props.setSideDrawerOpen}
                                        sideDrawerOpen={props.sideDrawerOpen}/>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;
