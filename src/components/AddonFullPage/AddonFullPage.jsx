import React, {useEffect} from "react";
import '../../scss/addonFullPage/addonfullpage.scss';
import YouTube from 'react-youtube';
import ReactGa from "react-ga";
import ReactPixel from "react-facebook-pixel";

function AddonFullPage(props) {
    const {addon} = props;
    const {file} = props.file;

    const {
        name,
        slug,
        description,
        addOnPageSteps,
        applicationType,
        addOnPageTables,
        installationGuidePath,
        troubleshootGuidePath,
        cardLogo
    } = addon;
    useEffect(() => {
        document.title = "UDS Add-ons - " + name.slice(4)
    }, [name]);

    addOnPageSteps.sort((a, b) => (a.stepIndex > b.stepIndex) ? 1 : ((b.stepIndex > a.stepIndex) ? -1 : 0));

    const handleDownload = () => {
        props.getDownloadFile();
        props.getDownloadHashFile();
    }
    if (file && file.rootAddOnFilePathWithAccessToken) {
        const link = document.createElement("a");
        link.download = 'addon';//name;
        link.href = file.rootAddOnFilePathWithAccessToken;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        props.resetData()
    }
    const opts = {

        playerVars: {
            autoplay: 0,
        },

    };

    let creditionalInfo;
    addOnPageTables.forEach(item => {
        if (item.addOnPageTableCategory === "Credential info") {
            creditionalInfo = item.addOnPageTableRows
        }

    })

    const HandlerTrackerTopDownloads = () => {
        ReactGa.event({
            category: "Button",
            action: `${slug}_download_page_view_top_portal`
        })
        ReactPixel.track('DownloadPageViewTopPortal',
            {
                category: "Button",
                action: `${slug}_DownloadPageViewTopPortal`
            })
    }
    const HandlerTrackerBottomDownloads = () => {
        ReactGa.event({
            category: "Button",
            action: `${slug}_download_page_view_bottom_portal`
        })
        ReactPixel.track('DownloadPageViewBottomPortal',
            {
                category: "Button",
                action: `${slug}_DownloadPageViewBottomPortal`
            })
    }

    const handleMethodsForTopDownload = () => {
        handleDownload();
        HandlerTrackerTopDownloads();
    }
    const handleMethodsForBottomDownload = () => {
        handleDownload();
        HandlerTrackerBottomDownloads();
    }

    const HandlerTrackerForTopOpen = () => {
        ReactGa.event({
            category: "Button",
            action: `${slug}_top_open_portal`
        })
        ReactPixel.track('OpenPageViewTopPortal',
            {
                category: "Button",
                action: `${slug}_OpenPageViewTopPortal`
            })
        props.getLink(slug)
    }
    const HandlerTrackerForBottomOpen = () => {
        ReactGa.event({
            category: "Button",
            action: `${slug}_bottom_open_portal`
        })
        ReactPixel.track('OpenPageViewBottomPortal',
            {
                category: "Button",
                action: `${slug}_OpenPageViewBottomPortal`
            })
        props.getLink(slug)
    }

    return (
        <div className={'addonFullPage'}>
            <div className={'headerWrapper'}>
                <section className={'header'}>
                    <div className={'headerLeftSide'}>
                        <h1>{name}</h1>
                        {
                            applicationType === "Dynamics 365" ?
                                slug === 'uds-virtual-machine' ?
                                    <span className={'virtualMashineWarning'}><button
                                        onClick={handleMethodsForTopDownload}
                                        className={'downloadButton'}>Download</button>
                                        <p className={'virtualMashineWarningparagraph'}>*UDS Virtual Machine exceeds 15 GB. <br/> We recommend using Download
                                        Master to avoid breakdowns.</p></span> :
                                    <button onClick={handleDownload} className={'downloadButton'}>Download</button>
                                :
                                <>
                                        <button onClick={HandlerTrackerForTopOpen} className={'openButton'}>Open</button>
                                        <p>Free of charge until December 31, 2020</p>
                                </>

                        }
                    </div>
                    <div className={'headerRightSide'}>
                        <div className={'videoTutorial'}><img src={cardLogo.imageSource}
                                                              alt={cardLogo.alternateText}/></div>
                    </div>
                </section>
            </div>

            <div className={'topInfo'}>
                <h2>About add-on</h2>
                <section className={'aboutInfo commonStyles'}>
                    <p>{description}</p>
                </section>
                <h2>How to install and uninstall</h2>
                <section className={'installInfo commonStyles'}>

                    {
                        slug === "uds-data-migration-tool" ?
                            <div className={'blockWithPlayer'}>
                                <p>We designed UDS Data Migration Tool as an online solution with
                                    an intuitively comprehensive and convenient interface and functionality.
                                    Yet, for a better experience, we recommend the video tutorial first.</p>
                                <div className={'playerWrapper'}>
                                    <YouTube className={'reactPlayer'}
                                             videoId={installationGuidePath.split('v=')[1].split('&')[0]}
                                             opts={opts}/>
                                </div>
                            </div>
                            :
                            <>
                                <p>Download <a className={'installationGuide'}
                                               href={installationGuidePath} target={'_blank'}
                                               rel="noopener noreferrer">{name} Installation guide </a> for a
                                    faultless user experience.</p>
                                <p>Download <a className={'installationGuide'}
                                               href={troubleshootGuidePath} target={'_blank'}
                                               rel="noopener noreferrer">hints</a> for Safari users. </p>

                            </>
                    }

                </section>
            </div>

            <section className={'useInfo'}>
                <h2>How to use</h2>
                <ul className="timeline">
                    {
                        addOnPageSteps.map(item =>
                            <li className={'event'}>
                                <div className={'stepDescription'}>
                                    <span className={'stepTitle'}>{item.stepTitle}</span>
                                    <p className={'stepDescP'}>{item.stepDescription}</p>
                                </div>
                                <div className={'stepImage'}>
                                    <img src={item.stepImage.imageSource} alt={item.stepImage.alternateText}/>
                                </div>

                            </li>
                        )
                    }
                </ul>
            </section>
            <section className={'useInfoMobile'}>
                <h2>How to use</h2>
                <ul>
                    {
                        addOnPageSteps.map(item =>
                            <li>
                                <span className={'stepTitle'}>{item.stepTitle}</span>
                                <p>{item.stepDescription}</p>
                                <div className={'stepImage'}><img src={item.stepImage.imageSource}
                                                                  alt={item.stepImage.alternateText}/></div>
                            </li>
                        )
                    }
                </ul>
            </section>
            <section className={'additionalInfo'}>
                <h2>{addOnPageTables[0].addOnPageTableCategory}</h2>
                <section className={'technicalInfo commonStyles'}>
                    <div>
                        <ul>
                            {
                                addOnPageTables[0].addOnPageTableRows.map(row => <li className={'pageTables'}>
                                    <p>
                                        <span className={'rowKey'}>{row.key}</span> {row.value}</p></li>)
                            }
                        </ul>
                    </div>
                </section>
                {
                    creditionalInfo ?
                        <section className={'creditionalInfo commonStyles'}>
                            <div>
                                <ul>
                                    {
                                        creditionalInfo ? creditionalInfo.map(row => <li className={'pageTables'}>
                                                <p><span className={'rowKey'}>{row.key}</span> {row.value}</p></li>)
                                            : " "
                                    }
                                </ul>
                            </div>
                        </section>
                        : ""

                }
            </section>
            <div className={'bottomWrapper'}>
                <div className={'bottomInfo'}>
                    <section className={'downloadInfo commonStyles'}>
                        <h2>Ready to get started? </h2>
                        {
                            applicationType === "Dynamics 365" ?
                                <>
                                    <button onClick={handleMethodsForBottomDownload}
                                            className={'downloadButton'}>Download
                                    </button>
                                </> :
                                    <button onClick={HandlerTrackerForBottomOpen} className={'openButton'}>Open</button>

                        }
                    </section>
                    <section className={'helpInfo commonStyles'}>
                        <h2>Need help?</h2>
                        <p>Are you experiencing any difficulties? - Be sure that we are ready to help you.</p>
                        <ul className={"helpList"}>
                            <li className={'mailItem'}><a className={'mail'} href={'mailto:portal@uds.systems'}>portal@uds.systems</a></li>
                            <li className={'skypeItem'}><a className={'skype'} href={'skype:live:uds_ddt?chat'}>uds.systems</a></li>
                        </ul>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default AddonFullPage;
