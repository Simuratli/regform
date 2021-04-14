import React from "react";
import AddonCard from "../AddonsCardsPage/AddonCard";
import '../../scss/youMayAlsoLike/addonMayLikeComponent.scss';
import shortid from "shortid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const AddonMayLikeComponent = ({addons}) => {

    let carouselItems = []
    const isMobile = window.innerWidth < 1000;
    if (!isMobile) {
        for (let i = 0; i < addons.length; i += 2) {

            if (addons[i + 1]) {
                carouselItems.push(
                    <div key={shortid.generate()} className={'addon'}>
                        <div className={"firstCard"}>
                            <AddonCard addon={addons[i]}/>
                        </div>
                        <div>
                            <AddonCard addon={addons[i + 1]}/>
                        </div>
                    </div>
                )
            } else {
                carouselItems.push(
                    <div key={shortid.generate()} className={'addon'}>
                        <div className={"firstCard"}>
                            <AddonCard addon={addons[i]}/>
                        </div>
                    </div>
                )
            }

        }
    } else {
        carouselItems = addons.map(addon => (
            <div key={shortid.generate()} className={'addon'}>
                <AddonCard addon={addon}/>
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

export default AddonMayLikeComponent;
