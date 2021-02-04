import React from "react";
import AddonCard from "../AddonsCardsPage/AddonCard";
import { AddonsBox } from "./style";
import { FormattedMessage } from "react-intl";

const AddonYouMayLikeCont = ({ addon, isVirtualMachine }) => {
  const adonCardsFromSS = JSON.parse(localStorage.getItem("cardsArr"));

  const randomAddons = adonCardsFromSS
    ? adonCardsFromSS
        .filter((r) => r.id !== addon.id)
        .sort(function () {
          return 0.5 - Math.random();
        })
        .slice(0, 2)
    : [];

  return (
    <AddonsBox isVirtualMachine={isVirtualMachine}>
      <span className="title">
        <FormattedMessage id="you.may.also.like" />
      </span>
      <div className="addons-cont">
        {randomAddons.map((r) => {
          return <AddonCard key={r.id} addon={r} className="addon-card" />;
        })}
      </div>
    </AddonsBox>
  );
};

export default AddonYouMayLikeCont;
