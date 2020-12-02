import React from "react";
import '../scss/footer.scss';
import '../scss/utils/utils.scss';
import youTubeIcon from '../assets/images/footer_icons/y.png';
import facebookIcon from '../assets/images/footer_icons/f.png';
import twitterIcon from '../assets/images/footer_icons/t.png';
import linkedInIcon from '../assets/images/footer_icons/l.png';
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/images/footer_logo.svg";
import logoDynamic365 from "../assets/images/d365-logo.png";
import logoMicrosoft from "../assets/images/microsoft_logo.png";

function Footer(props) {
    return (
        <div className={'phantom'}>
            <div className={'footerContainer'}>

                <div className={'leftSide'}>
                    <Link className={'footerLogo'} to={'/'}><img src={logo} alt={'logo'} /></Link>
                    <div className={'iconsBar'}>
                        {/*<h3 className={'footerTitle'}>Stay in Touch</h3>*/}
                        <ul>
                            <li className={'iconsItem'}>
                                <a href={"https://twitter.com/UDS_systems"} target={'_blank'} rel="noopener noreferrer">
                                    <img src={twitterIcon}/></a>
                            </li>
                            <li className={'iconsItem'}>
                                <a href={"https://www.linkedin.com/company/uds-systems"} target={'_blank'} rel="noopener noreferrer">
                                    <img src={linkedInIcon}/></a>
                            </li>
                            <li className={'iconsItem'}>
                                <a href={"https://www.facebook.com/UDS.systems/"} target={'_blank'} rel="noopener noreferrer">
                                    <img src={facebookIcon}/></a>
                            </li>
                            <li className={'iconsItem'}>
                                <a href={"https://www.youtube.com/channel/UCx443BQ2U4gGXLPYB8Nu3bg"} target={'_blank'}
                                   rel="noopener noreferrer"><img src={youTubeIcon}/></a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className={'rightSide'}>
                    <div className={'quickLinks'}>
                        <h3 className={'footerTitle'}>Links</h3>
                        <ul>
                            <li className={'quickLinkItem'}>
                                <a href='https://uds.systems'>UDS Website</a>
                            </li>
                            <li className={'quickLinkItem'}>
                                <NavLink to='/add-ons' >Add-ons</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={'contactUs'}>
                        <h3 className={'footerTitle'}>Contact Us</h3>
                        <ul>
                            <li className={'phone'}>
                                <a href={"tel:+38 095 383 9341"}>+380953839341</a>
                            </li>
                            <li className={'email'}>
                                <a href={"mailto:portal@uds.systems"}>portal@uds.systems</a>
                            </li>
                        </ul>
                    </div>
                    <div className={"partnersContainer"}>
                        <a className={"partnerIcon"} href="https://dynamics.microsoft.com/en-us/" target={'_blank'} rel="noopener noreferrer">
                            <img alt={'Microsoft Dynamics 365'} src={logoDynamic365}/>
                        </a>
                        <a className="partnerIcon" href="https://www.microsoft.com/en-us" target={'_blank'} rel="noopener noreferrer">
                            <img alt={'Microsoft'} src={logoMicrosoft}/>
                        </a>
                    </div>
                </div>


            </div>
            <div className={'footerCopyrightInfo'}>
                <h4 className={'copyrightTitle'}>UDS Systems © 2020 All Rights reserved</h4>
                <div className={'copyrightLinks'}>
                    <Link className={'privacyPolicy'} to={'/privacy'}>Privacy Policy</Link>
                    <Link className={'terms'} to={'/terms'}>Terms and conditions</Link>
                </div>


            </div>
        </div>
    )

}

export default Footer;
