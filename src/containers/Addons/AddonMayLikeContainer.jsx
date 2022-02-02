import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AnimatedContainer from "../AnimatedContainer";
import get from "lodash/get";
import range from "lodash/range";
import {useParams} from "react-router-dom";
import AddonMayLikeComponent from "../../components/AddonsComponents/AddonMayLikeComponent";
import {FakeCardRow} from "../../components/ViewsComponents/FakeCardRow";
import {getAllAddonCard} from "../../store/reducers/addonReducer/actions/allAddonCardAction";

const AddonMayLikeContainer = () => {
    const {addon} = useSelector((state) => state);
    const dispatch = useDispatch();
    const {slug} = useParams();

    //Add-on cards that enter this component from the state are filtered by the slug
    // (example: if the Bug Handler page is open, we can see another 5 cards without the BH card).
    //Then the cards are sorted by name
    const filteredAddons = get(addon, "allCards", []).length
        ? get(addon, "allCards")
            .filter((item) => item.slug !== slug)
            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        : [];

    useEffect(() => {
        if (!get(addon, "allCards", []).length) {
            dispatch(getAllAddonCard());
        }
    }, []);

    return (
        <>
            {
                get(addon, "allCards", []).length
                    ? <AnimatedContainer withScale>
                        <AddonMayLikeComponent addons={filteredAddons}/>
                     </AnimatedContainer>
                    : range(0, 6, 1).map((r) => <FakeCardRow key={r}/>)
            }
        </>
    );
};

export default AddonMayLikeContainer;
