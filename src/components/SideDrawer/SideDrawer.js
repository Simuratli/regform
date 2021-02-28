import React from "react";
import {Link, NavLink} from "react-router-dom";
import '../../scss/toggleButton/SideDrawer.scss';
import DrawerToggleButton from "./DrawerToggleButton";
import authentication from "../../b2c";
import logout from "../../assets/images/logout.png";
import logo from "../../assets/images/uds_portal_logo.svg";

const SideDrawer = (props) => {

    let drawerClass = 'sideDrawer';

    if (props.sideDrawerOpen) {
        drawerClass = 'sideDrawer open';
    }

    return (
    <nav className={drawerClass}>
        <div className={"top"}>
            <DrawerToggleButton setSideDrawerOpen={props.setSideDrawerOpen} sideDrawerOpen={props.sideDrawerOpen}/>
            <Link to={"/"}>
                <img className={"headerLogo"} src={logo} alt={"logo"} />
            </Link>
        </div>

        <ul>
            <li><a className={"nav-link"} href='https://uds.systems'>Uds Website</a></li>
            <li><NavLink className={"nav-link"} to='/add-ons' onClick={() => props.setSideDrawerOpen(false)}>Add-ons</NavLink></li>
            <li>
                <button className={"bookACall"}>
                    <a className={'bookACall'} href='https://calendly.com/rsavran/dynamics'>Book a call</a>
                </button>
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
