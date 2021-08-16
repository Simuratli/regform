import React from "react";
import '../../../scss/addons/youMayAlsoLike/addonMayLikeComponent.scss';
import shortid from "shortid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import AddonCard from "../AddonsCardsPage/AddonCard";

const AddonMayLikeComponent = ({addons}) => {

    let carouselItems = []
    const isMobile = window.innerWidth < 1001;
    if (!isMobile) {
        for (let i = 0; i < addons.length; i += 2) {

            if (addons[i + 1]) {
                carouselItems.push(
                    <div key={shortid.generate()} className={'addon'}>
                        <div className={"firstCard mayAlsoCard cover"}>
                            <AddonCard addon={addons[i]}/>
                        </div>
                        <div className={"mayAlsoCard cover"}>
                            <AddonCard addon={addons[i + 1]}/>
                        </div>
                    </div>
                )
            } else {
                carouselItems.push(
                    <div key={shortid.generate()} className={'addon'}>
                        <div className={"firstCard mayAlsoCard cover"}>
                            <AddonCard addon={addons[i]}/>
                        </div>
                    </div>
                )
            }

        }
    } else {
        carouselItems = addons.map(addon => (
            <div key={shortid.generate()} className={'addon'}>
                <AddonCard className={"mayAlsoCard cover"} addon={addon}/>
            </div>
        ))
    }

    return (
        <div className={'bottomCards'}>
            <Carousel showThumbs={false}>
                    {carouselItems}
            </Carousel>
        </div>
    )
}

export default AddonMayLikeComponent
