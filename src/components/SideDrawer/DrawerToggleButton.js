import React from "react";
import '../../scss/toggleButton/DrawerToggleButton.scss';

function DrawerToggleButton(props) {
    const openNavAndChangeButton = () => {
        props.sideDrawerOpen ? props.setSideDrawerOpen(false) : props.setSideDrawerOpen(true);
    }
    return (
        <button className={'burger'} onClick={openNavAndChangeButton}>
            <div className={props.sideDrawerOpen ? 'open' : 'close'}/>
            <div className={props.sideDrawerOpen ? 'open' : 'close'}/>
            <div className={props.sideDrawerOpen ? 'open' : 'close'}/>
        </button>
    )
}

export default DrawerToggleButton;

