import React from "react";
import "../../../scss/modal/modal.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className={active ? "modalContent active" : "modalContent"}>
        {children}
      </div>
    </div>
  );
};
export default Modal;
