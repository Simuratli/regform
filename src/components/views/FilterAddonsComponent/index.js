import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { SortAddonsBox } from "./styles";
import { FormattedMessage } from "react-intl";

export const FilterAddonsComponent = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const [sortBy, setSortBy] = useState(
    localStorage.getItem("sortAddonsBy") || "All"
  );

  const dispatch = useDispatch();

  return (
    <SortAddonsBox
      onClick={() => {
        setIsOpenSelect((pr) => !pr);
      }}
      isOpenSelect={isOpenSelect}
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
                { type: "Portal", name: "Online" },
              ].map(({ type, name }) => {
                return (
                  <div
                    key={type}
                    className={`row  ${type === sortBy && "choosen"}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSortBy(name);
                      setIsOpenSelect(false);
                      dispatch({ type: "SET_ADDONS_SORT_BY", payload: type });
                      localStorage.setItem("sortAddonsBy", type);
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
