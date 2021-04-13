import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import shortid from 'shortid';
import AnimatedContainer from "./AnimatedContainer";
import {getAddonCard} from "../store/reducers/addonReducer/actions/addonCardAction";
import {FakeCardRow} from "../components/views/FakeCardRow";
import get from "lodash/get";
import range from "lodash/range";
import AddonMayLikeComponent from "../components/AddonMayLikeComponent/AddonMayLikeComponent";
import {useParams} from "react-router-dom";

const YouMayAlsoLikeContainer = () => {
    const {addon} = useSelector((state) => state);
    const dispatch = useDispatch();
    const {slug} = useParams();

    //Add-on cards that enter this component from the state are filtered by the slug
    // (example: if the Bug Handler page is open, we can see another 5 cards without the BH card).
    //Then the cards are sorted by name
    const filteredAddons = get(addon, "cards", []).length
        ? get(addon, "cards")
            .filter((item) => item.slug !== slug)
            .slice()
            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        : [];

    useEffect(() => {
        if (!get(addon, "cards", []).length) {
            dispatch(getAddonCard());
        }
    }, []);

    return (
        <>
            {
                get(addon, "cards", []).length
                    ? <AnimatedContainer key={shortid.generate()} withScale>
                        <AddonMayLikeComponent addons={filteredAddons}/>
                     </AnimatedContainer>
                    : range(0, 6, 1).map((r) => <FakeCardRow key={r}/>)
            }
        </>
    );
};

export default YouMayAlsoLikeContainer;
