import React from "react";
import {NavLink} from "react-router-dom";
import '../../scss/toggleButton/SideDrawer.scss';
import DrawerToggleButton from "./DrawerToggleButton";

const SideDrawer = (props) => {

    let drawerClass = 'sideDrawer';

    if (props.sideDrawerOpen) {
        drawerClass = 'sideDrawer open';
    }

    return (
    <nav className={drawerClass}>
        <div>
            <DrawerToggleButton setSideDrawerOpen={props.setSideDrawerOpen} sideDrawerOpen={props.sideDrawerOpen}/>
        </div>

        <ul>
            <li><a className={"nav-link"} href='https://uds.systems'>Uds Website</a></li>
            <li><NavLink className={"nav-link"} to='/add-ons' onClick={() => props.setSideDrawerOpen(false)}>Add-ons</NavLink></li>
            <li>
                <button className={"bookACall"}>
                    <a className={'bookACall'} href='https://calendly.com/rsavran/dynamics'>Book a call</a>
                </button>
            </li>
        </ul>
    </nav>
    );
};



export default SideDrawer;