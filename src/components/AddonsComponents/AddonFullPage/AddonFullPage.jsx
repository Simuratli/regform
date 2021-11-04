import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FormattedMessage, injectIntl} from "react-intl";
import YouTube from "react-youtube";
import get from "lodash/get";

import "../../../scss/addons/addonFullPage/addonfullpage.scss";
import {removeFile} from "../../../store/reducers/downloadFileReducer/actions/fileAction";
import AnimatedContainer from "../../../containers/AnimatedContainer";
import ModalMobileNotification from "../../ViewsComponents/Modal/ModalMobileNotification";
import AddonMayLikeContainer from "../../../containers/Addons/AddonMayLikeContainer";
import DownloadAddonButton from "../DownloadAddonButton/DownloadAddonButton";


const AddonFullPage = ({addon, intl, children}) => {
    const [, setModalActive] = useState(true)
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const {file} = state;

    const {
        name = "",
        slug = "",
        description = "",
        shortDescription = "",
        addOnPageSteps = [],
        addOnPageTables = [],
        installationGuidePath,
        troubleshootGuidePath,
        cardLogo = {},
    } = addon;

    const serverHtml =
        addOnPageTables.length &&
        addOnPageTables.map(({addOnPageTableContent, addOnPageTableCategory}) => {
            return (
                <div key={addOnPageTableCategory}>
                    <h2>{addOnPageTableCategory}</h2>
                    {addOnPageTableContent &&
                    addOnPageTableContent.length &&
                    addOnPageTableContent.map(({htmlBody}) => {
                        return (
                            <div
                                key={htmlBody}
                                dangerouslySetInnerHTML={{
                                    __html: htmlBody,
                                }}
                            />
                        );
                    })}
                </div>
            );
        });

    const sortedAddOnPageSteps = addOnPageSteps.sort((a, b) =>
        a.stepIndex > b.stepIndex ? 1 : b.stepIndex > a.stepIndex ? -1 : 0
    );

    useEffect(() => {
        document.title = `${name.slice(3)} | Add-ons | UDS Portal`;
    }, [name]);



    useEffect(() => {
        if (get(file, "file.rootAddOnFilePathWithAccessToken")) {
            const link = document.getElementById("file");
            link.click();
            dispatch(removeFile());
        }
    }, [get(file, "file.rootAddOnFilePathWithAccessToken")]);



    return (
        <div className="addonFullPage">
            <ModalMobileNotification setActive={setModalActive}>
            {children}
            </ModalMobileNotification>
            <div className="headerWrapper" style={{maxWidth: "4000px"}}>
                <section className="header">
                    <AnimatedContainer style={{display: "flex", alignItems: "center"}}>
                        <div className="headerLeftSide">
                            <h1>{name}</h1>
                            <p className={"shortDescription"}>{shortDescription}</p>
                            { slug === "uds-virtual-machine"?  <p className="virtualMashineWarningparagraph">
                                <span dangerouslySetInnerHTML={{__html: get(intl, `messages["virtual.machine.text"]`)}}/>
                            </p>: ""}
                            <div style={{position: "relative", width: "220px"}}>
                                <DownloadAddonButton addon={addon}/>
                                {slug === "uds-data-migration-tool" ?
                                    <p className={"chargeMessage"}>
                                        <FormattedMessage id="free.of.charge"/>
                                    </p> : ""
                                }
                            </div>
                        </div>
                    </AnimatedContainer>
                    <div className="headerRightSide">
                            <img src={get(cardLogo, "imageSource")} alt={get(cardLogo, "alternateText")}/>
                    </div>
                </section>
            </div>
            <div className="fullPageContent">
                <section className={"aboutInfo"}>
                    <h2>
                        <FormattedMessage id="about.add.on"/>
                    </h2>
                    <p dangerouslySetInnerHTML={{__html: description}}/>
                </section>
                <section className="installInfo">
                    <h2>
                        <FormattedMessage id="how.to.install.and.uninstall"/>
                    </h2>

                    {slug === "uds-data-migration-tool" ? (
                        <div className={"blockWithPlayer"}>
                            <p>
                                <FormattedMessage id="dmt.text"/>
                            </p>
                            <div className="playerWrapper">
                                <YouTube
                                    className="reactPlayer"
                                    videoId={installationGuidePath.split("v=")[1].split("&")[0]}
                                    opts={{playerVars: {autoplay: 0}}}/>
                            </div>
                        </div>
                    ) : (
                        <>
                            <p>
                                <FormattedMessage id="download"/>
                                <a className="installationGuide"
                                    href={installationGuidePath}
                                    target={"_blank"}
                                    rel="noopener noreferrer">
                                    {name} <FormattedMessage id="installation.guide"/>.
                                </a>
                                <FormattedMessage id="download"/>
                                <a className="installationGuide"
                                    href={troubleshootGuidePath}
                                    target={"_blank"}
                                    rel="noopener noreferrer">
                                    <FormattedMessage id="hints"/>
                                </a>
                                <FormattedMessage id="for.safari.users"/>
                            </p>
                        </>
                    )}
                </section>
                <section className="useInfo">
                    <h2>
                        <FormattedMessage id="how.to.use"/>
                    </h2>
                    <ul className="timeline">
                        {sortedAddOnPageSteps.map(
                            ({stepTitle, stepDescription, stepImage}) => (
                                <li className="event" key={stepTitle + stepImage}>
                                    <div className="stepDescription">
                                        <span className="stepTitle">{stepTitle}</span>
                                        <p
                                            className="stepDescP"
                                            dangerouslySetInnerHTML={{
                                                __html: stepDescription,
                                            }}
                                        />
                                    </div>
                                    <div className="stepImage">
                                        <img
                                            src={get(stepImage, "imageSource")}
                                            alt={get(stepImage, "alternateText")}
                                        />
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </section>
                <section className="useInfoMobile">
                    <h2>
                        <FormattedMessage id="how.to.use"/>
                    </h2>
                    <ul>
                        {sortedAddOnPageSteps.map(
                            ({stepTitle, stepDescription, stepImage}) => (
                                <li key={stepTitle + stepImage}>
                                    <span className="stepTitle">{stepTitle}</span>
                                    <p>{stepDescription}</p>
                                    <div className="stepImage">
                                        <img
                                            src={get(stepImage, "imageSource")}
                                            alt={get(stepImage, "alternateText")}
                                        />
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </section>
                <div className={"wrapperForBottom"}>
                    <section className="bottomWrapper">
                        <div className="bottomInfo">
                            <section className={"blockWithCreds"}>{serverHtml}</section>
                            <section className="downloadInfo">
                                <h2>
                                    <FormattedMessage id="ready.to.get.started"/>
                                </h2>
                                <div style={{position: "relative", width: "220px", margin: "auto"}}>
                                <DownloadAddonButton addon={addon}/>
                                </div>
                            </section>
                            <section className="helpInfo">
                                <h2>
                                    <FormattedMessage id="need.help"/>
                                </h2>
                                <p>
                                    <FormattedMessage id="need.help.text"/>
                                </p>
                                <p>
                                    <FormattedMessage id="need.help.text2"/>
                                </p>
                                <ul className="helpList">
                                    <li className="mailItem">
                                        <a className="mail"
                                            href="mailto:portal@uds.systems"
                                            rel="noreferrer noopener">
                                            portal@uds.systems
                                        </a>
                                    </li>
                                    <li className="skypeItem">
                                        <a className="skype"
                                            href="skype:live:uds_ddt?chat"
                                            rel="noopener noreferrer">
                                            uds.systems
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className={"bottomScrollBlockWrapper"}>
                            <h2 className={"alsoLikeTitle"}>You may also like</h2>
                            <AddonMayLikeContainer/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default injectIntl(AddonFullPage);

