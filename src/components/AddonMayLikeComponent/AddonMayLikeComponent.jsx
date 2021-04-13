import React, { Component } from "react";
import AddonCard from "../AddonsCardsPage/AddonCard";
import '../../scss/youMayAlsoLike/addonMayLikeComponent.scss';
import shortid from "shortid";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const AddonMayLikeComponent = ({addons}) => {
  return (
    <div className={'bottomCards'}>
      <Carousel showThumbs = {false}>

        {addons.map(addon => (
          <div
            key={shortid.generate()}
            className={'addon'}
          >
            <AddonCard addon={addon}/>
          </div>
        ))}

      </Carousel>
    </div>
  )
}

export default AddonMayLikeComponent;
