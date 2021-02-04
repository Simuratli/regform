import React, { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { SortAddonsBox } from "./styles";
import { FormattedMessage } from "react-intl";

function useOutsideAlerter(ref) {
  const [isOutsideClick, setIsOutsideClick] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutsideClick(true);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { isOutsideClick, setIsOutsideClick };
}

export const FilterAddonsComponent = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const [sortBy, setSortBy] = useState(
    localStorage.getItem("sortAddonsBy") || "All"
  );

  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const { isOutsideClick, setIsOutsideClick } = useOutsideAlerter(wrapperRef);

  useEffect(() => {
    isOutsideClick && setIsOpenSelect(false);
  }, [isOutsideClick]);

  return (
    <SortAddonsBox
      onClick={() => {
        setIsOutsideClick(false);
        setIsOpenSelect((pr) => !pr);
      }}
      isOpenSelect={isOpenSelect}
      ref={wrapperRef}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span className="title">
          <FormattedMessage id="sort.by" />
        </span>
        <span className="sort-box">
          <FormattedMessage id="technology" /> <b>{sortBy}</b>
          <img
            className="arrow"
            src={require("../../../assets/images/select-arr.png")}
            alt="icon"
          />
          {isOpenSelect && (
            <div className="custom-select">
              {[
                { type: "All", name: "All" },
                { type: "Dynamics 365", name: "Dynamics 365" },
                { type: "Portal", name: "Portal" },
              ].map(({ type, name }) => {
                return (
                  <div
                    key={type}
                    className={`row  ${type === sortBy && "choosen"}`}
                    onClick={(e) => {
                      setSortBy(name);
                      dispatch({ type: "SET_ADDONS_SORT_BY", payload: type });
                      localStorage.setItem("sortAddonsBy", type);
                      setIsOpenSelect(false);
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ margin: "0 0 0 15px" }}>{name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </span>
      </div>
    </SortAddonsBox>
  );
};
