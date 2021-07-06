import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../scss/addons/addonFullPage/addonfullpage.scss";
import YouTube from "react-youtube";
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";
import AnimatedContainer from "../../../containers/AnimatedContainer";
import {getFile, removeFile} from "../../../store/reducers/downloadFileReducer/actions/fileAction";
import { getLink } from "../../../store/reducers/openButtonReducer/actions/openButtonAction";
import get from "lodash/get";
import { FormattedMessage, injectIntl } from "react-intl";
import ModalMobileNotification from "../../ViewsComponents/Modal/ModalMobileNotification";
import {ButtonLoader} from "../../ViewsComponents/ButtonLoader";
import AddonMayLikeContainer from "../../../containers/Addons/AddonMayLikeContainer";
import closeButton from '../../../assets/images/close_download_btn.svg'
import attachedFile from '../../../assets/images/attached_file.svg'


const AddonFullPage = ({ addon, intl, children }) => {
  const [modalActive, setModalActive] = useState(true)
  const [downloadModalActive, setDownloadModalActive] = useState(false)
  const state = useSelector((state) => state)
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
    resources = [],
  } = addon;

  const serverHtml =
      addOnPageTables.length &&
      addOnPageTables.map(({ addOnPageTableContent, addOnPageTableCategory }) => {
        return (
            <div key={addOnPageTableCategory}>
              <h2>{addOnPageTableCategory}</h2>
              {addOnPageTableContent &&
              addOnPageTableContent.length &&
              addOnPageTableContent.map(({ htmlBody }) => {
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

  const handleOpenVersionList = () => {
    setDownloadModalActive(!downloadModalActive);
  };

  const getAddonVersionFile = (e) => {
    const button = e.target.closest('button')
    dispatch(getFile(button.dataset.path));
    handleOpenVersionList();
  }

  useEffect(() => {
    if (get(file, "file.rootAddOnFilePathWithAccessToken")) {
      const link = document.getElementById("file");
      link.click();
      dispatch(removeFile());
    }
  }, [get(file, "file.rootAddOnFilePathWithAccessToken")]);

  const HandlerTrackerDownloads = (type) => {
    ReactGa.event({
      category: "Button",
      action: `${slug}_download_page_view_${type.toLowerCase()}_portal`,
    });
    ReactPixel.track(`DownloadPageView${type}Portal`, {
      category: "Button",
      action: `${slug}_DownloadPageView${type}Portal`,
    });
  };

  const handleMethodsForTopDownload = () => {
      handleOpenVersionList();
      HandlerTrackerDownloads("Top");
  };
  const handleMethodsForBottomDownload = () => {
      handleOpenVersionList();
      HandlerTrackerDownloads("Bottom");
  };

  const HandlerTrackerForOpen = (type) => {
    ReactGa.event({
      category: "Button",
      action: `${slug}_${type.toLowerCase()}_open_portal`,
    });
    ReactPixel.track(`OpenPageView${type}Portal`, {
      category: "Button",
      action: `${slug}_OpenPageView${type}Portal`,
    });

    dispatch(getLink(slug));
  };
  console.log(addon.resources, 'addon.resources', addon.resources.length);
  console.log(resources[0].filePath, 'filepath')

  return (
      <div className="addonFullPage">
        <ModalMobileNotification setActive={setModalActive}/>
        {children}
        <div className="headerWrapper" style={{ maxWidth: "4000px" }}>
          <section className="header">
            <AnimatedContainer>
              <div className="headerLeftSide">
                <h1>{name}</h1>
                {applicationType === "Dynamics 365" ? (
                    slug === "uds-virtual-machine" ? (
                        <span className="virtualMashineWarning">
                    <button onClick={handleMethodsForTopDownload} className="downloadFileButton">
                      <FormattedMessage id="download" />
                    </button>
                    <p className="virtualMashineWarningparagraph">
                      <span dangerouslySetInnerHTML={{__html: get(intl, `messages["virtual.machine.text"]`)}}/>
                    </p>

                  </span>) : (resources.length === 1 ? (
                    <button
                        data-path={resources[0].filePath}
                        onClick={getAddonVersionFile}
                        className={'downloadFileButton'}
                    >
                      Download
                    </button>
                    ) : (
                      <button
                          onClick={handleOpenVersionList}
                          className={downloadModalActive ? 'downloadFileButtonDisable' : 'downloadFileButton'}
                          style={{ position: "relative" }} disabled={downloadModalActive && 'disabled'}
                      >
                        Download
                      </button>
                    ))

                ) : (
                    <>
                      <button style={{ position: "relative" }}
                          onClick={() => HandlerTrackerForOpen("Top")}
                          className="openButton">
                        {file?.addonTypeDownloading === slug
                            ? (<ButtonLoader />)
                            : (<FormattedMessage id="open" />)}
                      </button>
                      <p className={"chargeMessage"}>
                        <FormattedMessage id="free.of.charge" />
                      </p>
                    </>
                )}
                {downloadModalActive &&
                <div className={'downloadModal'}>
                  <button className='closeBtn' onClick={handleOpenVersionList}>
                    <img src={closeButton} alt="close"/>
                  </button>
                  <div className={'downloadModalContent'}>
                    <h2>
                      Choose the archive compatible with your version.
                    </h2>
                    {addon.resources.map(file => (
                      <button className={'downloadFile'} data-path={file.filePath} onClick={getAddonVersionFile}>
                        <div className={'content'}>
                          <img src={attachedFile} alt="attached File"/>
                          <div>
                            <p className={'crmName'}>{file.resourceName}</p>
                            <p className={'fileName'}>{file.filePath.split("/")[3]}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                }
              </div>
            </AnimatedContainer>
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
            <h2>
              <FormattedMessage id="about.add.on" />
            </h2>
            <p
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
            />
          </section>
          <section className="installInfo">
            <h2>
              <FormattedMessage id="how.to.install.and.uninstall" />
            </h2>

            {slug === "uds-data-migration-tool" ? (
                <div className={"blockWithPlayer"}>
                  <p>
                    <FormattedMessage id="dmt.text" />
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
                    <FormattedMessage id="download" />
                    <a
                        className="installationGuide"
                        href={installationGuidePath}
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                      {name} <FormattedMessage id="installation.guide" />.
                    </a>
                    <FormattedMessage id="download" />
                    <a
                        className="installationGuide"
                        href={troubleshootGuidePath}
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                      <FormattedMessage id="hints" />
                    </a>
                    <FormattedMessage id="for.safari.users" />
                  </p>
                </>
            )}
          </section>
          <section className="useInfo">
            <h2>
              <FormattedMessage id="how.to.use" />
            </h2>
            <ul className="timeline">
              {sortedAddOnPageSteps.map(
                  ({ stepTitle, stepDescription, stepImage }) => (
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
              <FormattedMessage id="how.to.use" />
            </h2>
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
          <div className={"wrapperForBottom"}>
            <section className="bottomWrapper">
              <div className="bottomInfo">
                <section className={"blockWithCreds"}>{serverHtml}</section>
                <section className="downloadInfo">
                  <h2>
                    <FormattedMessage id="ready.to.get.started" />
                  </h2>
                  {applicationType === "Dynamics 365" ? (
                      <>
                        <button
                            onClick={handleMethodsForBottomDownload}
                            className="downloadFileButton"
                            style={{ position: "relative" }}
                        >
                          {file?.addonTypeDownloading === slug ? (
                              <ButtonLoader />
                          ) : (
                              <FormattedMessage id="download" />
                          )}
                        </button>
                      </>
                  ) : (
                      <button
                          onClick={() => HandlerTrackerForOpen("Bottom")}
                          className="openButton"
                          style={{ position: "relative" }}
                      >
                        {file?.addonTypeDownloading === slug ? (
                            <ButtonLoader />
                        ) : (
                            <FormattedMessage id="open" />
                        )}
                      </button>
                  )}
                </section>
                <section className="helpInfo">
                  <h2>
                    <FormattedMessage id="need.help" />
                  </h2>
                  <p>
                    <FormattedMessage id="need.help.text" />
                  </p>
                  <p>
                    <FormattedMessage id="need.help.text2" />
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
