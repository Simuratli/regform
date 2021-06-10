import React, {useEffect, useRef, useState} from "react";
import "../../../scss/addons/addonsCardsPage/addonsCardsPage.scss";
import {useDispatch, useSelector} from "react-redux";
import {FormattedMessage} from "react-intl";
import {setAddonsSortBy} from "../../../store/reducers/appReducer/actions/appAction";
import {getTypesCard} from "../../../store/reducers/addonReducer/actions/addonTypesAction";

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

    return {isOutsideClick, setIsOutsideClick};
}

export const FilterAddonsComponent = () => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [sortBy, setSortBy] = useState(
        localStorage.getItem("sortAddonsBy") || "All"
    );
    const dispatch = useDispatch();
    const wrapperRef = useRef(null);
    const {isOutsideClick, setIsOutsideClick} = useOutsideAlerter(wrapperRef);
    const types = useSelector(({addon}) => addon.types)

  useEffect(() => {
    dispatch(getTypesCard());
  }, []);

    useEffect(() => {
        isOutsideClick && setIsOpenSelect(false);
    }, [isOutsideClick]);

  const sortData = types.map((type) => {
        return (
            <div key={type}
                 className={`row  ${type === sortBy && "chosen"}`}
                 onClick={(e) => {
                     e.stopPropagation();
                     setIsOpenSelect(false);
                     setSortBy(type);
                     dispatch(setAddonsSortBy(type));
                     localStorage.setItem("sortAddonsBy", type);
                 }}>
                <div>
                    <p className="type">{type}</p>
                </div>
            </div>
        );
    })

    const handleOpenOptions = () => {
        setIsOutsideClick(false);
        setIsOpenSelect((pr) => !pr);
    };

    return (
        <section className={'sortField'} onClick={handleOpenOptions} isOpenSelect={isOpenSelect} ref={wrapperRef}>
                <div className="title">
                    <FormattedMessage id="sort.by"/>
                </div>
                <div className="sortBox">
                    <FormattedMessage id="type"/> <b>{sortBy}</b>
                    <img className="arrow" src={require("../../../assets/images/select-arr.svg")} alt="icon"/>
                    {isOpenSelect && (
                        <div className="customSelect">
                            {sortData}
                        </div>
                    )}
                </div>
        </section>
    );
};
