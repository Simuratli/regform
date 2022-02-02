import React from "react";
import {useSelector} from "react-redux";
import {get, range, orderBy} from "lodash";
import AddonCard from "../../components/AddonsComponents/AddonsCardsPage/AddonCard";
import {FakeCardRow} from "../../components/ViewsComponents/FakeCardRow";

const AddonCardContainer = () => {
    const {addon} = useSelector((state) => state);

    const cards = get(addon, "cards", [])
    const haveCards = !!cards.length

    const filteredAddons = orderBy(cards, (card)=>card.name, "asc")

    if (haveCards) {
        return filteredAddons.map((addon) => (
            <AddonCard addon={addon} key={addon.slug}/>
        ))
    }

    return range(0, 6, 1).map((r) => <FakeCardRow key={r}/>)

};

export default AddonCardContainer;

