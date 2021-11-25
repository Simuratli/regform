import React from "react";
import whatsappIcon from "../../assets/images/whatsapp-icon.svg";

function WhatsappButton() {

    return (
        <div style={{position: "fixed", right: "43px", bottom: "43px", zIndex: "998"}}>
            <a href={"https://api.whatsapp.com/send/?phone=+380953839341"}>
                <img style={{width: 45}} src={whatsappIcon} alt="Whatsapp"/>
            </a>
        </div>
    );
}

export default WhatsappButton;
