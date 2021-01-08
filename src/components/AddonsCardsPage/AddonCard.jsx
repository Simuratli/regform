import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../scss/addonsCardsPage/addonCard.scss";
import { NavLink } from "react-router-dom";
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";
import { getDownloadFileCard } from "../../store/actions/downloadFileCardAction";
import { getFile } from "../../store/actions/fileAction";
import { resetData } from "../../store/actions/resetData";
import { getLink } from "../../store/actions/openButtonAction";

import AnimatedComponent from "../AuxiliaryComponents/AnimatedComponent";

import get from "lodash/get";

const AddonCard = ({ addon }) => {
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
    resourcePath,
  } = addon;

  const handleDownload = () => {
    dispatch(getDownloadFileCard(resourcePath));
    dispatch(getFile());
  };

  if (get(file, "file.rootAddOnFilePathWithAccessToken")) {
    const link = document.createElement("a");
    link.download = "add-on"; //name;
    link.href = get(file, "file.rootAddOnFilePathWithAccessToken");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    dispatch(resetData());
  }

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
    <div key={slug} className={"addonsCard"}>
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
          <p className="cardDescription">{shortDescription}</p>
          <h5 className="cardSubTitle">{isFree ? "FREE" : price}</h5>
          <div className="description">
            <p className="applicationType">{applicationType}</p>
            {applicationType === "Dynamics 365" ? (
              <p>{downloads} downloads</p>
            ) : (
              <p>{downloads} openings</p>
            )}
          </div>
        </NavLink>

        <div className="cardsButtons">
          <NavLink to={"/add-ons/" + slug}>
            <button
              onClick={HandlerTrackerCardMoreInfo}
              className="moreInfoButton"
            >
              More info
            </button>
          </NavLink>

          <button
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
            {applicationType === "Dynamics 365" ? "Download" : "Open"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddonCard;
