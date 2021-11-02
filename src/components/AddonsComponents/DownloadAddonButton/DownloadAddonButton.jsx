import React, {useState} from "react";
import "../../../scss/modal/modal.scss";
import {ButtonLoader} from "../../ViewsComponents/ButtonLoader";
import {FormattedMessage} from "react-intl";
import {getFile} from "../../../store/reducers/downloadFileReducer/actions/fileAction";
import {useDispatch, useSelector} from "react-redux";
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";
import {getLink} from "../../../store/reducers/openButtonReducer/actions/openButtonAction";
import DownloadAddonTooltip from "../../ViewsComponents/DownloadAddonTooltip";

const DownloadAddonButton = ({addon}) => {
    const {
        slug = "",
        applicationType,
        resources = [],
    } = addon;

    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const {file} = state;

    const [downloadAddonTooltipActive, setDownloadAddonTooltipActive] = useState(false);

    const handleOpenVersionList = () => {
        setDownloadAddonTooltipActive(!downloadAddonTooltipActive);
    };

    const getAddonVersionFile = (e) => {
        const button = e.target.closest('button')
        dispatch(getFile(button.dataset.path, slug));
        handleOpenVersionList();
    }

    const downloadFile = (e) => {
        dispatch(getFile(e.target.dataset.path, slug));
    }

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

    return (
        <>
            {applicationType === "Dynamics 365" ?
                resources.length > 1 ?
                    file?.addonTypeDownloading === slug ?
                        <div style={{height:"50px"}}>
                            <ButtonLoader/>
                        </div>
                        :
                        <button onClick={handleOpenVersionList}
                                className={downloadAddonTooltipActive ? 'downloadFileButtonDisable' : 'downloadFileButton'}
                                style={{position: "relative"}}
                                disabled={downloadAddonTooltipActive && 'disabled'}>
                            Download
                        </button>
                    :
                    <button onClick={downloadFile}
                            className={'downloadFileButton'}
                            style={{position: "relative"}}
                            data-path={resources[0].filePath}>
                        {file?.addonTypeDownloading === slug ? (
                            <ButtonLoader/>
                        ) : (
                            <FormattedMessage id="download"/>
                        )}
                    </button>
                : (
                    <>
                        <button className="openButton" style={{position: "relative"}}
                                onClick={() => HandlerTrackerForOpen("Top")}>
                            {file?.addonTypeDownloading === slug ? (<ButtonLoader/>) : (
                                <FormattedMessage id="open"/>)}
                        </button>
                    </>
                )}
            {downloadAddonTooltipActive && <DownloadAddonTooltip addon={addon}
                                                                 handleOpenVersionList={handleOpenVersionList}
                                                                 getAddonVersionFile={getAddonVersionFile}/>}
        </>
    );
};
export default DownloadAddonButton;
