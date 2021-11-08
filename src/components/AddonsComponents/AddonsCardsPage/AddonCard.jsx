import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../../../scss/addons/addonsCardsPage/addonCard.scss";
import {NavLink} from "react-router-dom";
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";
import {getLink} from "../../../store/reducers/openButtonReducer/actions/openButtonAction";
import get from "lodash/get";
import {FormattedMessage} from "react-intl";
import {getFile, removeFile,} from "../../../store/reducers/downloadFileReducer/actions/fileAction";
import {ButtonLoader} from "../../ViewsComponents/ButtonLoader";
import closeButton from "../../../assets/images/close_download_btn.svg";
import attachedFile from "../../../assets/images/attached_file.svg";
import appSource from "../../../assets/images/web_icon.svg";


const AddonCard = ({addon, className}) => {
    const [downloadModalActiveCard, setDownloadModalActiveCard] = useState(false);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {file} = state;

    const {
        slug = "",
        name = "",
        shortDescription = "",
        cardLogo = "",
        isFree = false,
        applicationType,
        downloads = 0,
        resources = [],
    } = addon;

    const handleOpenVersionList = () => {
        setDownloadModalActiveCard(!downloadModalActiveCard);
    };


    useEffect(() => {
        if (get(file, "file.rootAddOnFilePathWithAccessToken")) {
            const link = document.getElementById("file");
            link.click();
            dispatch(removeFile());
        }
    }, [get(file, "file.rootAddOnFilePathWithAccessToken")]);

    const HandlerTrackerCardMoreInfo = () => {
        ReactGa.event({
            category: "Button",
            action: `${slug}_more_info_portal`,
        });
        ReactPixel.track("MoreInfoPortalCardView", {
            category: "Button",
            action: `${slug}_MoreInfoPortalCardView`,
        });
    };

    const HandlerTrackerCardOpen = () => {
        ReactGa.event({
            category: "Button",
            action: `${slug}_open_portal`,
        });
        ReactPixel.track("OpenPortalCardView", {
            category: "Button",
            action: `${slug}_OpenPortalCardView`,
        });

        dispatch(getLink(slug));
    };

    const getAddonVersionFile = (e) => {
        const button = e.target.closest('button')
        dispatch(getFile(button.dataset.path, slug));
    }

    addon.resources.sort((a, b) => (a.isAppSourceLink < b.isAppSourceLink ? 1 : b.isAppSourceLink < a.isAppSourceLink ? -1 : 0))

    return (
        <div className={'addonsCardWrapper'}>
            <div key={slug} className={`addonsCard ${className}`}>
                <NavLink to={"/add-ons/" + slug}>
                    <div className={"cardLogo"}>
                        <img
                            className={"logo"}
                            src={get(cardLogo, "imageSource")}
                            alt={get(cardLogo, "alternateText")}
                        />
                    </div>
                </NavLink>
                <div className="cardBody">
                    <NavLink to={"/add-ons/" + slug}>
                        <h3 className="cardTitle">{name}</h3>
                        <p className="cardDescription">{shortDescription || "D"}</p>
                        <h5 className="cardSubTitle">
                            {isFree ? (
                                <FormattedMessage id="free"/>
                            ) : (
                                <FormattedMessage id="price"/>
                            )}
                        </h5>
                        <div className="description">
                            <p className="applicationType">{applicationType}</p>
                            {applicationType === "Dynamics 365" ? (
                                <p>
                                    {downloads} <FormattedMessage id="downloads"/>
                                </p>
                            ) : (
                                <p>
                                    {downloads} <FormattedMessage id="openings"/>
                                </p>
                            )}
                        </div>
                    </NavLink>

                    <div className="cardsButtons">
                        <NavLink to={"/add-ons/" + slug}>
                            <button onClick={HandlerTrackerCardMoreInfo} className="moreInfoButton">
                                <FormattedMessage id="more.info"/>
                            </button>
                        </NavLink>
                        {file?.addonTypeDownloading === slug ?
                            <ButtonLoader/> :
                            resources?.length === 1 ?
                                <button style={{position: "relative"}}
                                        onClick={applicationType === "Dynamics 365" ? getAddonVersionFile : HandlerTrackerCardOpen}
                                        className={applicationType === "Dynamics 365" ? "downloadButton" : "openButton"}
                                        data-path={resources[0].filePath}>

                                    {applicationType === "Dynamics 365" ? (<FormattedMessage id="download"/>) :
                                    (<FormattedMessage id="open"/>)}
                                </button> :
                                <button
                                    style={{position: "relative"}}
                                    className={downloadModalActiveCard ? 'downloadFileButtonCardDisable' : 'downloadFileButtonCard'}
                                    onClick={handleOpenVersionList}>
                                    Download
                                </button>
                        }
                    </div>
                </div>
                {downloadModalActiveCard && (
                    <div className={'downloadModalOnCard'}>
                        <button className='closeBtn' onClick={handleOpenVersionList}>
                            <img src={closeButton} alt="close"/>
                        </button>
                        <div className={'downloadModalContentOnCard'}>
                            <h2>
                                Choose the archive compatible with your version.
                            </h2>
                            {addon.resources.map(file => (
                                file.isAppSourceLink === true ?
                                    <section className={"downloadPoint"}>
                                        <a href={file.filePath} target={"_blank"}>
                                            <button className={'downloadFile'}>
                                                <div className={'content'}>
                                                    <img src={appSource} alt="AppSource"/>
                                                    <div>
                                                        <p className={'crmName'}>{file.resourceName}</p>
                                                        <p className={'fileName'}>appsource.microsoft.com</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </a>
                                        <p className={'appSourceDescription'}>
                                            After click the field you will be redirected to the official Microsoft
                                            resource.
                                        </p>
                                    </section>
                                    :
                                    <>
                                        {
                                            file.isDisabled === false ?
                                                <section className={"downloadPoint"}>
                                                    <button className={'downloadFile'} data-path={file.filePath}
                                                            onClick={getAddonVersionFile}>
                                                        <div className={'content'}>
                                                            <img src={attachedFile} alt="attached File"/>
                                                            <div>
                                                                <p className={'crmName'}>{file.resourceName}</p>
                                                                <p className={'fileName'}>{file.filePath.split("/")[3]}</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </section>
                                                : ""
                                        }
                                    </>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddonCard;

