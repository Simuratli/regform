import React from "react";
import {NavLink} from "react-router-dom";
import '../../../scss/navigation/toggleButton/SideDrawer.scss';
import authentication from "../../../b2c";
import logout from "../../../assets/images/logout.png";
import {FormattedMessage} from "react-intl";

const SideDrawer = (props) => {

    let drawerClass = 'sideDrawer';

    if (props.sideDrawerOpen) {
        drawerClass = 'sideDrawer open';
    }

    return (
        <nav className={drawerClass}>
            <ul>
                <li><a className={"nav-link"} href='https://uds.systems'>Uds Website</a></li>
                <li><NavLink className={"nav-link"} to='/add-ons' onClick={() => props.setSideDrawerOpen(false)}>Add-ons</NavLink></li>
                <li><NavLink className={"nav-link"} to='/education' onClick={() => props.setSideDrawerOpen(false)}>Education</NavLink></li>
                <li>
                    <a href="https://calendly.com/rsavran/dynamics">
                        <button className={"bookACall"}>
                            <FormattedMessage id="book.call" />
                        </button>
                    </a>
                </li>
                <li>
                    <div>
                        <a className={"logOut"} onClick={() => authentication.signOut()}>
                            SIGN OUT
                            <img style={{marginLeft: "9px"}} alt={"logout"} src={logout} />
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};



export default SideDrawer;
