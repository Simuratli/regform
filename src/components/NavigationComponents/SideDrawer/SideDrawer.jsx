import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import '../../../scss/navigation/toggleButton/SideDrawer.scss';
import authentication from "../../../b2c";
import logout from "../../../assets/images/exit.svg";
import userLogoutIcon from "../../../assets/images/logout.svg";
import {FormattedMessage} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../../store/reducers/userDataReducer/actions/userDataAction";
import {DropDownAddonListMobile, DropDownContactListMobile} from "./DropdownNavbarMobile";
import {getAddonDropdownList} from "../../../store/reducers/addonReducer/actions/addonDropdownListAction";

const SideDrawer = (props) => {

    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isOpenDropdownContactList, setIsOpenDropdownContactList] = useState(false);

    let drawerClass = 'sideDrawer';

    if (props.sideDrawerOpen) {
        drawerClass = 'sideDrawer open';
    }
    const dispatch = useDispatch();
    const {
        userData: {
            email
        }
    } = useSelector(({user}) => user);
    const {addon: {dropdownList}} = useSelector((state) => state);

    useEffect(() => {
        dispatch(getUserData());
        dispatch(getAddonDropdownList());
    }, []);

    return (
        <nav className={drawerClass}>
            <ul>
                <li>
                    <NavLink to={"/add-ons"}
                             className={"nav-link"}
                             onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
                        Add-ons
                        <div className={isOpenDropdown ? "arrowTestOpen" : "arrowTest"}/>
                    </NavLink>
                    <DropDownAddonListMobile setIsOpenDropdown={setIsOpenDropdown}
                                             isOpenDropdown={isOpenDropdown}
                                             setSideDrawerOpen={props.setSideDrawerOpen}
                                             dropdownList={dropdownList}/>
                </li>
                <li>
                    <NavLink className={"nav-link"}
                             to='/education'
                             onClick={() => props.setSideDrawerOpen(false)}>
                        Education
                    </NavLink>
                </li>
                <li>
                    <p className={"contactList"}
                       onClick={() => setIsOpenDropdownContactList(!isOpenDropdownContactList)}>
                        CONTACT US
                        <div className={isOpenDropdownContactList ? "arrowTestOpen" : "arrowTest"}/>
                    </p>
                    <DropDownContactListMobile isOpenDropdownContactList={isOpenDropdownContactList}
                                               setIsOpenDropdownContactList={setIsOpenDropdownContactList}
                                               setSideDrawerOpen={props.setSideDrawerOpen}/>
                </li>
                <li>
                    <div>
                        <a className={"logOut"} onClick={() => authentication.signOut()}>
                            <img alt={"logout"} src={userLogoutIcon}/>
                            <p className={"userMail"}>{email}</p>
                            <img style={{justifySelf: "end", marginLeft: "9px"}} alt={"logout"} src={logout}/>
                        </a>
                    </div>
                </li>
                <div className={"sideDrawerButtons"}>
                    <li>
                        <a target='_blank' href="https://uds.systems">
                            <button className={"goToWebsiteButton"}>
                                Go to the website
                            </button>
                        </a>
                    </li>
                    <li style={{justifySelf: "end"}}>
                        <a target='_blank'
                           href="https://outlook.office365.com/owa/calendar/UDSSYSTEMSLTD@uds.systems/bookings/s/KcmM-oNkQkm9AT7aKGYvkg2">
                            <button className={"bookACall"}>
                                <FormattedMessage id="book.call"/>
                            </button>
                        </a>
                    </li>
                </div>


            </ul>
        </nav>
    );
};


export default SideDrawer;
