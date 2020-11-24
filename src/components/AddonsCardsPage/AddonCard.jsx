import React from "react";
import '../../scss/addonsCardsPage/addonCard.scss';
import {NavLink} from "react-router-dom";
import ReactGa from "react-ga";
import ReactPixel from 'react-facebook-pixel';

function AddonCard(props) {
    const {file} = props.file
    const {addon} = props;

    const {
        slug,
        name,
        shortDescription,
        cardLogo,
        isFree,
        applicationType,
        downloads,
        price
    } = addon;

    const handleDownload = () => {
        props.getDownloadFileCard(addon.filePath);
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

    const HandlerTrackerCardDownloads = () => {
        ReactGa.event({
            category: "Button",
            action: `${slug}_download_card_view_portal`
        })
        ReactPixel.track('DownloadCardViewPortal',{
            category: "Button",
            action: `${slug}_DownloadCardViewPortal`
        })
    }
    const HandlerTrackerCardMoreInfo = () => {
        ReactGa.event({
            category: "Button",
            action: `${slug}_more_info_portal`
        })
        ReactPixel.track('MoreInfoPortalCardView',
            {
                category: "Button",
                action: `${slug}_MoreInfoPortalCardView`
            })
    }
    const HandlerTrackerCardOpen = () => {
        ReactGa.event({
            category: "Button",
            action: `${slug}_open_portal`
        })
        ReactPixel.track('OpenPortalCardView',
            {
                category: "Button",
                action: `${slug}_OpenPortalCardView`
            })

    }

    const handleMethodsForDownload = () => {
        handleDownload();
        HandlerTrackerCardDownloads();
    }

    return (

        <div key={slug} className={'addonsCard'}>

            <NavLink to={'/add-ons/' + slug}>
                <div className={'cardLogo'}>
                    <img className={'logo'} src={cardLogo.imageSource} alt={cardLogo.alternateText}/>
                </div>
            </NavLink>
            <div className={'cardBody'}>
                <NavLink to={'/add-ons/' + slug}>
                    <div className={'cardDescription'}>
                        <h3>{name}</h3>
                        <p>{shortDescription}</p>
                    </div>
                </NavLink>
                <div className={'cardAction'}>
                    <NavLink to={'/add-ons/' + slug}>
                        <h5>{isFree ? 'FREE' : price}</h5>
                        <div className={'description'}>
                            <p>{applicationType}</p>
                            {applicationType === "Dynamics 365" ? <p>{downloads} downloads</p> : ''}
                        </div>
                    </NavLink>

                    <div className={'cardsButtons'}>
                        <NavLink className={'fullPageLink'} to={'/add-ons/' + slug}>
                            <button onClick={HandlerTrackerCardMoreInfo} className={'moreInfoButton'}>More info</button>
                        </NavLink>
                        {
                            applicationType === "Dynamics 365" ?
                                <button onClick={handleMethodsForDownload} className={'downloadButton'}>Download</button> :
                                <a href={'https://my.uds.systems/migration/'} target={'_blank'}
                                   rel="noopener noreferrer">
                                    <button onClick={HandlerTrackerCardOpen} className={'openButton'}>Open</button>
                                </a>
                        }
                    </div>
                </div>

            </div>

        </div>

    )
}

export default AddonCard;
