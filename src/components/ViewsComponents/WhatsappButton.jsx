import React from "react";
import whatsappIcon from "../../assets/images/whatsapp-icon.svg";

function WhatsappButton() {

    return (
        <div style={{position: "fixed", right: "73px", bottom: "97px", zIndex: "998"}}>
            <a target={"_blank"} href={"https://api.whatsapp.com/send/?phone=+380953839341"}>
                <img style={{width: 45}} src={whatsappIcon} alt="Whatsapp"/>
            </a>
        </div>
    );
}

export default WhatsappButton;
