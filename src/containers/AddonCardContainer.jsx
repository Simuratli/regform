import React, { useEffect } from "react";
import AddonCard from "../components/AddonsCardsPage/AddonCard";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS

import AnimatedComponent from "../components/views/AnimatedComponent";
import { getAddonCard } from "../store/actions/addonCardAction";
import { FakeCardRow } from "../components/views/FakeCardRow";

// LODASH

import get from "lodash/get";
import range from "lodash/range";

const AddonCardContainer = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addonCard } = state;

  useEffect(() => {
    if (!get(addonCard, "cards", []).length) {
      dispatch(getAddonCard());
    }
  }, []);

  return (
    <>
      {get(addonCard, "cards", []).length
        ? get(addonCard, "cards", [])
            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
            .map((addon) => (
              <AnimatedComponent withScale key={addon.id}>
                <AddonCard addon={addon} />
              </AnimatedComponent>
            ))
        : range(0, 6, 1).map((r) => <FakeCardRow key={r} />)}
    </>
  );
};

export default AddonCardContainer;
