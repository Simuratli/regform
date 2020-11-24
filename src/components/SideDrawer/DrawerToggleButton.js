import React from "react";
import '../../scss/toggleButton/DrawerToggleButton.scss';

function DrawerToggleButton(props) {
    // console.log(props.sideDrawerOpen)
    return (
        <button className={'burger'} onClick={() => props.sideDrawerOpen ? props.setSideDrawerOpen(false) : props.setSideDrawerOpen(true)}>
            <div className={'line'}/>
            <div className={'line'}/>
            <div className={'line'}/>
        </button>
    )
}

export default DrawerToggleButton;

