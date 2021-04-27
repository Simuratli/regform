import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../scss/addonsCardsPage/addonCard.scss";
import { NavLink } from "react-router-dom";
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";

import { getLink } from "../../store/reducers/openButtonReducer/actions/openButtonAction";

import get from "lodash/get";
import { FormattedMessage } from "react-intl";
import { getDownloadFileCard } from "../../store/reducers/downloadFileReducer/actions/downloadFileCardAction";
import {
  getFile,
  removeFile,
} from "../../store/reducers/downloadFileReducer/actions/fileAction";
import { ButtonLoader } from "../views/ButtonLoader";

const AddonCard = ({ addon, className }) => {
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
  } = addon;

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

  return (
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

          <button
            style={{
              position: "relative",
            }}
            onClick={
              applicationType === "Dynamics 365"
                ? handleMethodsForDownload
                : HandlerTrackerCardOpen
            }
            className={
              applicationType === "Dynamics 365"
                ? "downloadButton"
                : "openButton"
            }
          >
            {file?.addonTypeDownloading === slug ? (
              <ButtonLoader />
            ) : applicationType === "Dynamics 365" ? (
              <FormattedMessage id="download" />
            ) : (
              <FormattedMessage id="open" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddonCard;
