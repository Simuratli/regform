import React from "react";
import closeButton from "../../assets/images/close_download_btn.svg";
import attachedFile from "../../assets/images/attached_file.svg";
import appSource from "../../assets/images/web_icon.svg";

const DownloadAddonTooltip = ({addon, handleOpenVersionList, getAddonVersionFile,}) => {

    addon.resources.sort((a, b) => (a.isAppSourceLink < b.isAppSourceLink ? 1 : b.isAppSourceLink < a.isAppSourceLink ? -1 : 0))

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
                                After click the field you will be redirected to the official Microsoft resource.
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
                                </section> : ""
                        }
                        </>

                ))}
            </div>
        </div>
    );
};
export default DownloadAddonTooltip;
