import React, { useEffect } from "react";
import AddonCard from "../components/AddonsCardsPage/AddonCard";
import { useDispatch, useSelector } from "react-redux";
import { getAddonCard } from "../store/actions/addonCardAction";

import get from "lodash/get";

const AddonCardContainer = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addonCard } = state;

  const { isLoading } = addonCard;

  useEffect(() => {
    if (!get(addonCard, "cards", []).length) {
      dispatch(getAddonCard());
    }
  }, [get(addonCard, "cards", []).length]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {get(addonCard, "cards", [])
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((addon) => (
          <AddonCard key={addon.id} addon={addon} />
        ))}
    </>
  );
};

export default AddonCardContainer;
