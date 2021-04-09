import React from "react";
import AddonCard from "../AddonsCardsPage/AddonCard";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../../scss/youMayAlsoLike/addonMayLikeComponent.scss';
import shortid from "shortid";

//TODO: Andrew, please, fix styles for all screens:)

const Arrow = (className) => {
    return <div className={className}/>
};

const AddonMayLikeComponent = ({addons}) => {

    const scrollableAddonCards = addons.map(element => {
        return <AddonCard addon={element} key={shortid.generate()}/>
    });

    return (
        <section className="bottomCards">
            <ScrollMenu
                data={scrollableAddonCards}
                arrowLeft={Arrow('addon-arrow-prev')}
                arrowRight={Arrow('addon-arrow-next')}
                translate={2}
                scrollBy={2}
                wheel={false}
                hideSingleArrow={'true'}
                disableTabindex={true}
                alignOnResiz={false}
                arrowClass={'arrows'}
                itemClass={'addonCardFromScroll'}
                innerWrapperClass={'wrapperForScrollableBlock'}
                wrapperClass={'menu-addons-wrapper'}
            />
        </section>
    );
}
export default AddonMayLikeComponent;

