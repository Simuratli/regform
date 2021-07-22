import React from "react";
import closeButton from "../../assets/images/close_download_btn.svg";
import attachedFile from "../../assets/images/attached_file.svg";

const DownloadAddonTooltip = ({
                                  addon,
                                  handleOpenVersionList,
                                  getAddonVersionFile,
                              }) => {
    return (
        <div className={'downloadModal'}>
            <button className='closeBtn' onClick={handleOpenVersionList}>
                <img src={closeButton} alt="close"/>
            </button>
            <div className={'downloadModalContent'}>
                <h2>
                    Choose the archive compatible with your version.
                </h2>
                {addon.resources.map(file => (
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
                ))}
            </div>
        </div>
    );
};
export default DownloadAddonTooltip;
