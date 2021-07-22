import React from "react";
import {useSelector} from "react-redux";
import shortid from 'shortid';
import AnimatedContainer from "../AnimatedContainer";
import get from "lodash/get";
import range from "lodash/range";
import AddonCard from "../../components/AddonsComponents/AddonsCardsPage/AddonCard";
import {FakeCardRow} from "../../components/ViewsComponents/FakeCardRow";

const AddonCardContainer = () => {
    const state = useSelector((state) => state);
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

    return (
        <>
            {
                get(addon, "cards", []).length
                    ? filteredAddons.map((addon) => (
                        // <AnimatedContainer key={shortid.generate()} withScale>
                            <AddonCard addon={addon} key={shortid.generate()}/>
                        // </AnimatedContainer>
                    ))
                    : range(0, 6, 1).map((r) => <FakeCardRow key={r}/>)

            }
        </>
    );
};

export default AddonCardContainer;
