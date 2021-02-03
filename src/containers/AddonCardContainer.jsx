import React, { useEffect } from "react";
import AddonCard from "../components/AddonsCardsPage/AddonCard";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS

import AnimatedContainer from "./AnimatedContainer";
import { getAddonCard } from "../store/actions/addonCardAction";
import { FakeCardRow } from "../components/views/FakeCardRow";

// LODASH

import get from "lodash/get";
import range from "lodash/range";

const AddonCardContainer = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addonCard, app } = state;
  const { addonsSortBy } = app;

  console.log(addonCard.cards, addonsSortBy, "addonCard");

  const filteredAddons = get(addonCard, "cards", []).length
    ? get(addonCard, "cards")
        .filter((r) =>
          addonsSortBy === "All" ? true : r?.applicationType === addonsSortBy
        )
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    : [];

  useEffect(() => {
    if (!get(addonCard, "cards", []).length) {
      dispatch(getAddonCard());
    }
  }, []);

  useEffect(() => {}, [addonsSortBy]);

  return (
    <>
      {get(addonCard, "cards", []).length
        ? filteredAddons.map((addon) => (
            <AnimatedContainer withScale key={addon.id}>
              <AddonCard addon={addon} />
            </AnimatedContainer>
          ))
        : range(0, 6, 1).map((r) => <FakeCardRow key={r} />)}
    </>
  );
};

export default AddonCardContainer;
