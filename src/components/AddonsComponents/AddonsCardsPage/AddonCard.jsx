import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../../scss/addons/addonsCardsPage/addonCard.scss";
import { NavLink } from "react-router-dom";
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";

import { getLink } from "../../../store/reducers/openButtonReducer/actions/openButtonAction";

import get from "lodash/get";
import { FormattedMessage } from "react-intl";
import { getDownloadFileCard } from "../../../store/reducers/downloadFileReducer/actions/downloadFileCardAction";
import {
  getFile,
  removeFile,
} from "../../../store/reducers/downloadFileReducer/actions/fileAction";
import {ButtonLoader} from "../../ViewsComponents/ButtonLoader";
import closeButton from "../../../assets/images/close_download_btn.svg";
import attachedFile from "../../../assets/images/attached_file.svg";

const AddonCard = ({ addon, className }) => {
  const [downloadModalActiveCard, setDownloadModalActiveCard] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { file } = state;

  const {
    slug = "",
    name = "",
    shortDescription = "",
    cardLogo = "",
    isFree = false,
    applicationType,
    downloads = 0,
    price = 0,
    resourcePath = "",
    resources = [],
  } = addon;

  const handleOpenVersionList = () => {
    setDownloadModalActiveCard(!downloadModalActiveCard);
  };

  const handleDownload = () => {
    dispatch(getDownloadFileCard({ resourcePath, slug }));
    dispatch(getFile());
  };

  useEffect(() => {
    if (get(file, "file.rootAddOnFilePathWithAccessToken")) {
      const link = document.getElementById("file");
      link.click();
      dispatch(removeFile());
    }
  }, [get(file, "file.rootAddOnFilePathWithAccessToken")]);

  const HandlerTrackerCardDownloads = () => {
    ReactGa.event({
      category: "Button",
      action: `${slug}_download_card_view_portal`,
    });
    ReactPixel.track("DownloadCardViewPortal", {
      category: "Button",
      action: `${slug}_DownloadCardViewPortal`,
    });
  };

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

  const handleMethodsForDownload = () => {
    handleDownload();
    HandlerTrackerCardDownloads();
  };

  const getAddonVersionFile = (e) => {
    const button = e.target.closest('button')
    dispatch(getFile(button.dataset.path));
  }

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
                <FormattedMessage id="free" />
              ) : (
                <FormattedMessage id="price" />
              )}
            </h5>
            <div className="description">
              <p className="applicationType">{applicationType}</p>
              {applicationType === "Dynamics 365" ? (
                <p>
                  {downloads} <FormattedMessage id="downloads" />
                </p>
              ) : (
                <p>
                  {downloads} <FormattedMessage id="openings" />
                </p>
              )}
            </div>
          </NavLink>

          <div className="cardsButtons">
            <NavLink to={"/add-ons/" + slug}>
              <button
                onClick={HandlerTrackerCardMoreInfo}
                className="moreInfoButton"
              >
                <FormattedMessage id="more.info" />
              </button>
            </NavLink>

            {resources?.length === 1 ? (
              <button
                style={{
                  position: "relative",
                }}
                onClick={
                  applicationType === "Dynamics 365"
                      ? getAddonVersionFile
                      : HandlerTrackerCardOpen
                }
                className={
                  applicationType === "Dynamics 365"
                      ? "downloadButton"
                      : "openButton"
                }
                data-path={resources[0].filePath}
              >
              {file?.addonTypeDownloading === slug ? (
                  <ButtonLoader />
              ) : applicationType === "Dynamics 365" ? (
                  <FormattedMessage id="download" />
              ) : (
                  <FormattedMessage id="open" />
              )}
            </button>) : (
                <button
                  className={downloadModalActiveCard ? 'downloadFileButtonCardDisable' : 'downloadFileButtonCard'}
                  onClick={handleOpenVersionList}
                >
                  Download
                </button>
            )}
          </div>
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
              <button className={'downloadFile'} data-path={file.filePath} onClick={getAddonVersionFile}>
                <div className={'content'}>
                  <img src={attachedFile} alt="attached File"/>
                  <div>
                    <p className={'crmName'}>Dynamics 365 Online</p>
                    <p className={'fileName'}>uds-bug-handler-9.1@1.0.0.0.zip</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddonCard;
