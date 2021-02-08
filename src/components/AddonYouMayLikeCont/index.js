import React, { useCallback, useEffect, useState } from "react";
import AddonCard from "../AddonsCardsPage/AddonCard";
import { AddonsBox } from "./style";
import { FormattedMessage } from "react-intl";

const AddonYouMayLikeCont = ({ addon, isVirtualMachine }) => {
  const adonCardsFromSS = JSON.parse(
    sessionStorage.getItem("cardsArr") || []
  ).filter((r) => r.id !== addon.id);

  const [a, setA] = useState({
    from: 0,
    to: 2,
  });

  const [currentAddons, setCurrentAddons] = useState([]);

  useEffect(() => {
    if (a.to >= adonCardsFromSS.length && !!(adonCardsFromSS.length % 2)) {
      setCurrentAddons([
        adonCardsFromSS[adonCardsFromSS.length - 1],
        adonCardsFromSS[0],
      ]);
    } else {
      setCurrentAddons(adonCardsFromSS.slice(a.from, a.to));
    }
  }, [a.from]);

  return (
    <AddonsBox isVirtualMachine={isVirtualMachine}>
      <span className="title">
        <FormattedMessage id="you.may.also.like" />
      </span>

      <div className="addons-cont">
        <button
          className="btn left-btn"
          onClick={() => {
            return setA((pr) => {
              return {
                from:
                  pr.from === 0
                    ? !!(adonCardsFromSS.length % 2)
                      ? adonCardsFromSS.length - 1
                      : adonCardsFromSS.length - 2
                    : pr.from - 2,
                to:
                  pr.from === 0
                    ? !!(adonCardsFromSS.length % 2)
                      ? adonCardsFromSS.length + 1
                      : adonCardsFromSS.length
                    : pr.to - 2,
              };
            });
          }}
        >
          <img src={require("../../assets/images/prev.svg")} alt="prev" />
        </button>

        {currentAddons.map((r) => {
          return <AddonCard key={r.id} addon={r} className="addon-card" />;
        })}

        <button
          className="btn right-btn"
          onClick={() => {
            return setA((pr) => {
              return {
                from: pr.to >= adonCardsFromSS.length ? 0 : pr.from + 2,
                to: pr.to >= adonCardsFromSS.length ? 2 : pr.to + 2,
              };
            });
          }}
        >
          <img src={require("../../assets/images/next.svg")} alt="next" />
        </button>
      </div>
    </AddonsBox>
  );
};

export default AddonYouMayLikeCont;
