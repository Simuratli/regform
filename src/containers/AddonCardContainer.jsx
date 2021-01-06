import React, { useEffect, useState } from "react";
import AddonCard from "../components/AddonsCardsPage/AddonCard";
import { useDispatch, useSelector } from "react-redux";
import { getAddonCard } from "../store/actions/addonCardAction";

import get from "lodash/get";

const AddonCardContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addonCard } = state;

  useEffect(() => {
    if (!get(addonCard, "cards", []).length) {
      dispatch(getAddonCard());
      setIsLoading(false);
    }
  }, [get(addonCard, "cards", []).length]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {get(addonCard, "cards", []).map((addon) => (
        <AddonCard key={addon.id} addon={addon} />
      ))}
    </>
  );
};

export default AddonCardContainer;
