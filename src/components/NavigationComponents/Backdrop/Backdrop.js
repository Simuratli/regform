import React from "react";
import "../../../scss/navigation/backdrop/backdrop.scss";

const Backdrop = (props) => (
  <div className={"backdrop"} onClick={() => props.setSideDrawerOpen(false)} />
);

export default Backdrop;
