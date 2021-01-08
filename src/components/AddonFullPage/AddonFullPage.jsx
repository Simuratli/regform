import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import "../../scss/addonFullPage/addonfullpage.scss";
import YouTube from "react-youtube";
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";

import { getDownloadFile } from "../../store/actions/downloadFileAction";
import { getFile } from "../../store/actions/fileAction";
import { resetData } from "../../store/actions/resetData";
import { getLink } from "../../store/actions/openButtonAction";

import get from "lodash/get";
import AnimatedComponent from "../AuxiliaryComponents/AnimatedComponent";

const AddonFullPage = ({ addon }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { file } = state;

  const {
    name = "",
    slug = "",
    description = "",
    addOnPageSteps = [],
    applicationType,
    addOnPageTables = [],
    installationGuidePath,
    troubleshootGuidePath,
    cardLogo = {},
  } = addon;

  let creditionalInfo;

  const sortedAddOnPageSteps = addOnPageSteps.sort((a, b) =>
    a.stepIndex > b.stepIndex ? 1 : b.stepIndex > a.stepIndex ? -1 : 0
  );

  useEffect(() => {
    document.title = `UDS Add-ons - ${name}).slice(4)}`;
  }, [name]);

  addOnPageTables.forEach(({ addOnPageTableCategory, addOnPageTableRows }) => {
    if (addOnPageTableCategory === "Credential info") {
      creditionalInfo = addOnPageTableRows;
    }
  });

  const handleDownload = () => {
    dispatch(getDownloadFile());
    dispatch(getFile());
  };

  if (get(file, "file.rootAddOnFilePathWithAccessToken")) {
    const link = document.createElement("a");
    link.download = "addon"; //name;
    link.href = get(file, "file.rootAddOnFilePathWithAccessToken");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    dispatch(resetData());
  }

  const HandlerTrackerTopDownloads = () => {
    ReactGa.event({
      category: "Button",
      action: `${slug}_download_page_view_top_portal`,
    });
    ReactPixel.track("DownloadPageViewTopPortal", {
      category: "Button",
      action: `${slug}_DownloadPageViewTopPortal`,
    });
  };

  const HandlerTrackerBottomDownloads = () => {
    ReactGa.event({
      category: "Button",
      action: `${slug}_download_page_view_bottom_portal`,
    });
    ReactPixel.track("DownloadPageViewBottomPortal", {
      category: "Button",
      action: `${slug}_DownloadPageViewBottomPortal`,
    });
  };

  const handleMethodsForTopDownload = () => {
    handleDownload();
    HandlerTrackerTopDownloads();
  };
  const handleMethodsForBottomDownload = () => {
    handleDownload();
    HandlerTrackerBottomDownloads();
  };

  const HandlerTrackerForTopOpen = () => {
    ReactGa.event({
      category: "Button",
      action: `${slug}_top_open_portal`,
    });
    ReactPixel.track("OpenPageViewTopPortal", {
      category: "Button",
      action: `${slug}_OpenPageViewTopPortal`,
    });

    dispatch(getLink(slug));
  };
  const HandlerTrackerForBottomOpen = () => {
    ReactGa.event({
      category: "Button",
      action: `${slug}_bottom_open_portal`,
    });
    ReactPixel.track("OpenPageViewBottomPortal", {
      category: "Button",
      action: `${slug}_OpenPageViewBottomPortal`,
    });
    dispatch(getLink(slug));
  };

  return (
    <div className="addonFullPage">
      <div className="headerWrapper">
        <section className="header">
          <AnimatedComponent>
            <div className="headerLeftSide">
              <h1>{name}</h1>
              {applicationType === "Dynamics 365" ? (
                slug === "uds-virtual-machine" ? (
                  <span className="virtualMashineWarning">
                    <button
                      onClick={handleMethodsForTopDownload}
                      className="downloadButton"
                    >
                      Download
                    </button>
                    <p className="virtualMashineWarningparagraph">
                      *UDS Virtual Machine exceeds 15 GB. <br /> We recommend
                      using Download Master to avoid breakdowns.
                    </p>
                  </span>
                ) : (
                  <button onClick={handleDownload} className="downloadButton">
                    Download
                  </button>
                )
              ) : (
                <>
                  <button
                    onClick={HandlerTrackerForTopOpen}
                    className="openButton"
                  >
                    Open
                  </button>
                  <p className={"chargeMessage"}>
                    Free of charge until April, 2021
                  </p>
                </>
              )}
            </div>
          </AnimatedComponent>
          <div className="headerRightSide">
            <div className="videoTutorial">
              <img
                src={get(cardLogo, "imageSource")}
                alt={get(cardLogo, "alternateText")}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="fullPageContent">
        <section className={"aboutInfo"}>
          <h2>About add-on</h2>
          <p>{description}</p>
        </section>
        <section className="installInfo">
          <h2>How to install and uninstall</h2>

          {slug === "uds-data-migration-tool" ? (
            <div className={"blockWithPlayer"}>
              <p>
                We designed UDS Data Migration Tool as an online solution with
                an intuitively comprehensive and convenient interface and
                functionality. Yet, for a better experience, we recommend the
                video tutorial first.
              </p>
              <div className="playerWrapper">
                <YouTube
                  className="reactPlayer"
                  videoId={installationGuidePath.split("v=")[1].split("&")[0]}
                  opts={{
                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                />
              </div>
            </div>
          ) : (
            <>
              <p>
                Download{" "}
                <a
                  className="installationGuide"
                  href={installationGuidePath}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  {name} Installation guide{" "}
                </a>{" "}
                for a faultless user experience. <br />
                Download{" "}
                <a
                  className="installationGuide"
                  href={troubleshootGuidePath}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  hints
                </a>{" "}
                for Safari users.{" "}
              </p>
            </>
          )}
        </section>
        <section className="useInfo">
          <h2>How to use</h2>
          <ul className="timeline">
            {sortedAddOnPageSteps.map(
              ({ stepTitle, stepDescription, stepImage }) => (
                <li className="event" key={stepTitle + stepImage}>
                  <div className="stepDescription">
                    <span className="stepTitle">{stepTitle}</span>
                    <p className="stepDescP">{stepDescription}</p>
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
          <h2>How to use</h2>
          <ul>
            {sortedAddOnPageSteps.map(
              ({ stepTitle, stepDescription, stepImage }) => (
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
        <section className="additionalInfo">
          <h2>{get(addOnPageTables, "[0].addOnPageTableCategory")}</h2>
          <section className={"technicalInfo commonStyles"}>
            <ul>
              {get(addOnPageTables, "[0].addOnPageTableRows", []).map((row) => (
                <li className="pageTables" key={row.key}>
                  <p>
                    <span className="rowKey">{row.key}</span> {row.value}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className="creditionalInfo commonStyles">
            {creditionalInfo ? (
              <>
                <ul>
                  {creditionalInfo
                    ? creditionalInfo.map((row) => (
                        <li className="pageTables" key={row.key}>
                          <p>
                            <span className="rowKey">{row.key}</span>{" "}
                            {row.value}
                          </p>
                        </li>
                      ))
                    : " "}
                </ul>
              </>
            ) : (
              ""
            )}
          </section>
        </section>
        <section className="bottomWrapper">
          <div className="bottomInfo">
            <section className="downloadInfo">
              <h2>Ready to get started? </h2>
              {applicationType === "Dynamics 365" ? (
                <>
                  <button
                    onClick={handleMethodsForBottomDownload}
                    className="downloadButton"
                  >
                    Download
                  </button>
                </>
              ) : (
                <button
                  onClick={HandlerTrackerForBottomOpen}
                  className="openButton"
                >
                  Open
                </button>
              )}
            </section>
            <section className="helpInfo">
              <h2>Need help?</h2>
              <p>
                Are you experiencing any difficulties? - Be sure that we are
                ready to help you.
              </p>
              <ul className="helpList">
                <li className="mailItem">
                  <a
                    className="mail"
                    href="mailto:portal@uds.systems"
                    rel="noreferrer noopener"
                  >
                    portal@uds.systems
                  </a>
                </li>
                <li className="skypeItem">
                  <a
                    className="skype"
                    href="skype:live:uds_ddt?chat"
                    rel="noopener noreferrer"
                  >
                    uds.systems
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddonFullPage;
