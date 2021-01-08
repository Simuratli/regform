import React, { useEffect } from "react";
import AddonCard from "../components/AddonsCardsPage/AddonCard";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS

import AnimatedComponent from "../components/AuxiliaryComponents/AnimatedComponent";
import { getAddonCard } from "../store/actions/addonCardAction";

// LODASH

import get from "lodash/get";

const AddonCardContainer = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addonCard } = state;

  useEffect(() => {
    if (!get(addonCard, "cards", []).length) {
      dispatch(getAddonCard());
    }
  }, [get(addonCard, "cards", []).length]);

  return (
    <>
      {get(addonCard, "cards", [])
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((addon) => (
          <AnimatedComponent withScale>
            <AddonCard key={addon.id} addon={addon} />
          </AnimatedComponent>
        ))}
    </>
  );
};

export default AddonCardContainer;
