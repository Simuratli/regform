import React from "react";
import '../scss/mainNavigation.scss';
import '../scss/utils/utils.scss';
import {Link, NavLink} from "react-router-dom";
import authentication from '../b2c';
import logo from '../assets/images/header_logo.svg';
import logout from '../assets/images/logout.png';
import '../../src/scss/toggleButton/DrawerToggleButton.scss';
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";


function MainNavigation(props) {

    return (
        <div style={{paddingBottom: "15px"}} className={'navigationBar'}>
            <div className={'mainNavToggleButton'}>
                <DrawerToggleButton setSideDrawerOpen={props.setSideDrawerOpen}/>
            </div>

            <div>
                <Link to={'/'}><img className={'headerLogo'} src={logo} alt={'logo'}/></Link>
            </div>
            <div className={'rightBlock'}>
                <nav className={'navItems'}>
                    <ul className={'navLinks'}>
                        <li><a className={"nav-link"} href='https://uds.systems'>Uds Website</a></li>
                        <li><NavLink className={"nav-link"} to='/add-ons'>Add-ons</NavLink></li>
                        <li>
                            <button className={"bookACall"}>
                                <a className={'bookACall'} href='https://calendly.com/rsavran/dynamics'>Book a call</a>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div>
                    <a className={'logOut'} onClick={() => authentication.signOut()}><img src={logout}/></a>
                </div>

            </div>


        </div>

    )

}

export default MainNavigation;