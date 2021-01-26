import React from "react";
import "../scss/footer.scss";
import "../scss/utils/utils.scss";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/images/uds_portal_logo.svg";
import logoDynamic365 from "../assets/images/d365-logo.png";
import logoMicrosoft from "../assets/images/microsoft_logo.png";
import {FormattedMessage} from "react-intl";

function Footer() {
    return (
        <div className={"fullWidthWrapperFooter"}>
            <div className={"phantom"}>
                <div className={"footerContainer"}>
                    <Link className={"footerLogo"} to={"/"}>
                        <img src={logo} alt={"logo"}/>
                    </Link>
                    <div className={"quickLinks"}>
                        <h3 className={"footerTitle"}>
                            <FormattedMessage id="links"/>
                        </h3>
                        <ul>
                            <li className={"quickLinkItem"}>
                                <a href="https://uds.systems">
                                    <FormattedMessage id="UDS.website"/>
                                </a>
                            </li>
                            <li className={"quickLinkItem"}>
                                <NavLink to="/add-ons">
                                    <FormattedMessage id="add.ons"/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={"contactUs"}>
                        <h3 className={"footerTitle"}>
                            <FormattedMessage id="contact.us"/>
                        </h3>
                        <ul>
                            <li className={"phone"}>
                                <a href={"tel:+38 095 383 9341"}>+380953839341</a>
                            </li>
                            <li className={"email"}>
                                <a href={"mailto:portal@uds.systems"}>portal@uds.systems</a>
                            </li>
                        </ul>
                    </div>
                    <div className={"partnersContainer"}>
                        <a
                            className={"partnerIcon"}
                            href="https://dynamics.microsoft.com/en-us/"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <img alt={"Microsoft Dynamics 365"} src={logoDynamic365}/>
                        </a>
                        <a
                            className="partnerIcon"
                            href="https://www.microsoft.com/en-us"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <img alt={"Microsoft"} src={logoMicrosoft}/>
                        </a>
                    </div>

                </div>
            </div>
            <div className={"footerCopyrightWrapper"}>
                <div className={"footerCopyrightInfo"}>
                    <h4 className={"copyrightTitle"}>
                        <FormattedMessage id="UDS.systems.reserved"/>
                    </h4>
                    <Link className={"privacyPolicy copyrightLinks"} to={"/privacy"}>
                        <FormattedMessage id="privacy.policy"/>
                    </Link>
                    <Link className={"terms copyrightLinks"} to={"/terms"}>
                        <FormattedMessage id="terms.and.conditions"/>
                    </Link>
                    <div className={"iconsBar"}>
                        <ul>
                            <li className={"iconsItem"}>
                                <a
                                    href={"https://twitter.com/UDS_systems"}
                                    target={"_blank"}
                                    rel="noopener noreferrer"
                                >
                                    <svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"
                                         alt="twitter">
                                        <path className="svgIcon twitter"
                                              d="M20 1.92375C19.2563 2.25 18.4637 2.46625 17.6375 2.57125C18.4875 2.06375 19.1363 1.26625 19.4412 0.305C18.6488 0.7775 17.7738 1.11125 16.8412 1.2975C16.0887 0.49625 15.0162 0 13.8462 0C11.5763 0 9.74875 1.8425 9.74875 4.10125C9.74875 4.42625 9.77625 4.73875 9.84375 5.03625C6.435 4.87 3.41875 3.23625 1.3925 0.7475C1.03875 1.36125 0.83125 2.06375 0.83125 2.82C0.83125 4.24 1.5625 5.49875 2.6525 6.2275C1.99375 6.215 1.3475 6.02375 0.8 5.7225C0.8 5.735 0.8 5.75125 0.8 5.7675C0.8 7.76 2.22125 9.415 4.085 9.79625C3.75125 9.8875 3.3875 9.93125 3.01 9.93125C2.7475 9.93125 2.4825 9.91625 2.23375 9.86125C2.765 11.485 4.2725 12.6788 6.065 12.7175C4.67 13.8088 2.89875 14.4662 0.98125 14.4662C0.645 14.4662 0.3225 14.4513 0 14.41C1.81625 15.5813 3.96875 16.25 6.29 16.25C13.835 16.25 17.96 10 17.96 4.5825C17.96 4.40125 17.9538 4.22625 17.945 4.0525C18.7588 3.475 19.4425 2.75375 20 1.92375Z"
                                              fill="#6B7C8A"/>
                                    </svg>
                                </a>
                            </li>
                            <li className={"iconsItem"}>
                                <a
                                    href={"https://www.linkedin.com/company/uds-systems"}
                                    target={"_blank"}
                                    rel="noopener noreferrer"
                                >
                                    <svg alt="linkedin" width="20" height="20" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg"
                                         className="socialIcon">
                                        <path className="svgIcon linkedin" d="M4.4725 6.25H0V20H4.4725V6.25Z"
                                              fill="#6B7C8A"/>
                                        <path className="svgIcon linkedin"
                                              d="M16.655 6.41125C16.6075 6.39625 16.5625 6.38 16.5125 6.36625C16.4525 6.3525 16.3925 6.34125 16.3312 6.33125C16.0937 6.28375 15.8338 6.25 15.5288 6.25C12.9213 6.25 11.2675 8.14625 10.7225 8.87875V6.25H6.25V20H10.7225V12.5C10.7225 12.5 14.1025 7.7925 15.5288 11.25C15.5288 14.3363 15.5288 20 15.5288 20H20V10.7212C20 8.64375 18.5763 6.9125 16.655 6.41125Z"
                                              fill="#6B7C8A"/>
                                        <path className="svgIcon linkedin"
                                              d="M2.1875 4.375C3.39562 4.375 4.375 3.39562 4.375 2.1875C4.375 0.979377 3.39562 0 2.1875 0C0.979377 0 0 0.979377 0 2.1875C0 3.39562 0.979377 4.375 2.1875 4.375Z"
                                              fill="#6B7C8A"/>
                                    </svg>
                                </a>
                            </li>
                            <li className={"iconsItem"}>
                                <a
                                    href={"https://www.facebook.com/UDS.systems/"}
                                    target={"_blank"}
                                    rel="noopener noreferrer"
                                >
                                    <svg alt="facebook" width="10" height="20" viewBox="0 0 10 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path className="svgIcon facebook"
                                              d="M6.25 6.875V4.375C6.25 3.685 6.81 3.125 7.5 3.125H8.75V0H6.25C4.17875 0 2.5 1.67875 2.5 3.75V6.875H0V10H2.5V20H6.25V10H8.75L10 6.875H6.25Z"
                                              fill="#6B7C8A"/>
                                    </svg>
                                </a>
                            </li>
                            <li className={"iconsItem"}>
                                <a
                                    href={
                                        "https://www.youtube.com/channel/UCx443BQ2U4gGXLPYB8Nu3bg"
                                    }
                                    target={"_blank"}
                                    rel="noopener noreferrer"
                                >
                                    <svg alt="youtube" width="20" height="14" viewBox="0 0 20 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path className="svgIcon youtube"
                                              d="M19.15 1.325C18.6075 0.36 18.0188 0.1825 16.82 0.115C15.6225 0.03375 12.6112 0 10.0025 0C7.38875 0 4.37625 0.0337501 3.18 0.11375C1.98375 0.1825 1.39375 0.35875 0.84625 1.325C0.2875 2.28875 0 3.94875 0 6.87125C0 6.87375 0 6.875 0 6.875C0 6.8775 0 6.87875 0 6.87875V6.88125C0 9.79125 0.2875 11.4637 0.84625 12.4175C1.39375 13.3825 1.9825 13.5575 3.17875 13.6388C4.37625 13.7088 7.38875 13.75 10.0025 13.75C12.6112 13.75 15.6225 13.7087 16.8212 13.64C18.02 13.5587 18.6087 13.3838 19.1513 12.4188C19.715 11.465 20 9.7925 20 6.8825C20 6.8825 20 6.87875 20 6.87625C20 6.87625 20 6.87375 20 6.8725C20 3.94875 19.715 2.28875 19.15 1.325ZM7.5 10.625V3.125L13.75 6.875L7.5 10.625Z"
                                              fill="#6B7C8A"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
