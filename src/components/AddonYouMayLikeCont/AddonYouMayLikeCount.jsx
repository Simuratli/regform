import React, { useEffect, useState } from "react";
import AddonCard from "../AddonsCardsPage/AddonCard";
import { AddonsBox } from "./style";
import "../../scss/youMayAlsoLike/youMayAlsoLikeBlock.scss";
import { FormattedMessage } from "react-intl";

const AddonYouMayLikeCont = ({ addon, isVirtualMachine }) => {
  const adonCardsFromSS = JSON.parse(
    localStorage.getItem("cardsArr") || "[]"
  ).filter((r) => r.id !== addon.id);

  const [sliceIndexs, setSliceIndexs] = useState({
    from: 0,
    to: 2,
  });

  const [currentAddons, setCurrentAddons] = useState([]);

  const isMobile = window.innerWidth < 400;
  useEffect(() => {
    isMobile && setSliceIndexs({ from: 0, to: 1 });
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setCurrentAddons(adonCardsFromSS.slice(sliceIndexs.from, sliceIndexs.to));
    } else if (
      sliceIndexs.to >= adonCardsFromSS.length &&
      !!(adonCardsFromSS.length % 2)
    ) {
      setCurrentAddons([
        adonCardsFromSS[adonCardsFromSS.length - 1],
        adonCardsFromSS[0],
      ]);
    } else {
      setCurrentAddons(adonCardsFromSS.slice(sliceIndexs.from, sliceIndexs.to));
    }
  }, [sliceIndexs.to]);

  return (
    <section className={'addonBox'} isVirtualMachine={isVirtualMachine}>
      <h2 className="alsoLikeTitle">
        <FormattedMessage id="you.may.also.like" />
      </h2>

      <div className="addons-cont">
        {!isMobile && (
          <button
            className="btn left-btn"
            onClick={() => {
              return setSliceIndexs((pr) => {
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
        )}
        <div className={"cardsContainer"}>

        {currentAddons.map((r) => {
          return (
            <div
              key={r.id}
              onTouchStart={(e) => {
                if (e.targetTouches[0].clientX > window.innerWidth / 2) {
                  return setSliceIndexs((pr) => {
                    return {
                      from: pr.to >= adonCardsFromSS.length ? 0 : pr.from + 1,
                      to: pr.to >= adonCardsFromSS.length ? 1 : pr.to + 1,
                    };
                  });
                } else {
                  return setSliceIndexs((pr) => {
                    return {
                      from:
                        pr.from === 0
                          ? adonCardsFromSS.length - 1
                          : pr.from - 1,
                      to: pr.from === 0 ? adonCardsFromSS.length : pr.to - 1,
                    };
                  });
                }
              }}
            >
              <AddonCard addon={r} className="addon-card" />
            </div>
          );
        })}

        </div>

        {!isMobile && (
          <button
            className="btn right-btn"
            onClick={() => {
              return setSliceIndexs((pr) => {
                return {
                  from: pr.to >= adonCardsFromSS.length ? 0 : pr.from + 2,
                  to: pr.to >= adonCardsFromSS.length ? 2 : pr.to + 2,
                };
              });
            }}
          >
            <img src={require("../../assets/images/next.svg")} alt="next" />
          </button>
        )}
      </div>
    </section>
  );
};

export default AddonYouMayLikeCont;
