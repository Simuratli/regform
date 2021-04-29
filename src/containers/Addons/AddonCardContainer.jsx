import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import shortid from 'shortid';
import AnimatedContainer from "../AnimatedContainer";
import {getAddonCard} from "../../store/reducers/addonReducer/actions/addonCardAction";
import get from "lodash/get";
import range from "lodash/range";
import AddonCard from "../../components/AddonsComponents/AddonsCardsPage/AddonCard";
import {FakeCardRow} from "../../components/ViewsComponents/FakeCardRow";

const AddonCardContainer = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {addon, app} = state;
    const {addonsSortBy} = app;

    const sortAddonsType = localStorage.getItem("sortAddonsBy") || addonsSortBy;

    const filteredAddons = get(addon, "cards", []).length
        ? get(addon, "cards")
            .filter((r) =>
                sortAddonsType === "All"
                    ? true
                    : r?.applicationType === sortAddonsType
            )
            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        : [];

    useEffect(() => {
        if (!get(addon, "cards", []).length) {
            dispatch(getAddonCard());
        }
    }, []);

    useEffect(() => {
    }, [addonsSortBy]);

    return (
        <>

            {
                get(addon, "cards", []).length
                    ? filteredAddons.map((addon) => (
                        <AnimatedContainer
                          key={shortid.generate()}
                          withScale
                        >
                            <AddonCard addon={addon}/>
                        </AnimatedContainer>
                    ))
                    : range(0, 6, 1).map((r) => <FakeCardRow key={r}/>)

            }

        </>
    );
};

export default AddonCardContainer;
