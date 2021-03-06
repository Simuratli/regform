import React, {useEffect, useState} from "react";
import "../../../scss/addons/addonsCardsPage/addonsCardsPage.scss";
import orangeElement from "../../../assets/images/education/gradient_orange_element.svg";
import {useDispatch, useSelector} from "react-redux";
import {FormattedMessage} from "react-intl";
import {setError} from "../../../store/reducers/appReducer/actions/appAction";
import isEmpty from "lodash/isEmpty";
import {getAddonMetadata} from "../../../store/reducers/metadataReducer/actions/addonsMetadataAction";
import Metadata from "../../ViewsComponents/Metadata/MetadataComponent";
import {getAddonCard} from "../../../store/reducers/addonReducer/actions/addonCardAction";
import {FilterAddonsComponent} from "../FilterAddonsComponent/FilterAddonComponent";
import AddonCardContainer from "../../../containers/Addons/AddonCardContainer";
import ModalMobileNotification from "../../ViewsComponents/Modal/ModalMobileNotification";
import get from "lodash/get";
import AddonPaginationCont from "../../ViewsComponents/AddonPaginationCont";
import PendingNotificationModal from "../../ViewsComponents/Modal/PendingNotificationModal";

const AddonsCardsPage = () => {
    const [, setModalActive] = useState(true)
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {addon, app} = state;
    const {error} = app;
    const {addonsMetadata} = state.metadata;

    useEffect(() => {
        document.title = "Add-ons | UDS Portal";
        if (!get(addon, "cards", []).length) {
            dispatch(getAddonCard(1));
        }
        dispatch(getAddonMetadata());
    }, []);

    useEffect(() => {
        !isEmpty(error) && dispatch(setError({}));
    }, [!isEmpty(error)]);

    return (
        <div className="main_container">
            <ModalMobileNotification setActive={setModalActive}/>
            <Metadata metadata={addonsMetadata}/>
            <div className="generalTitleBlock">
                <h1 className="headingParagraph">
                    <FormattedMessage id="enhance.system.text"/>
                </h1>
                <img className="orangeElement" src={orangeElement} alt="orange element"/>
                <p className="paragraph">
                    <FormattedMessage id="improve.dynamics.text"/>
                </p>
            </div>
            <FilterAddonsComponent/>
            <div className={"card"}>
                <AddonCardContainer/>
            </div>

            {
                addon.totalPages.length > 1
                && <AddonPaginationCont/>
            }
        </div>
    );
};

export default AddonsCardsPage;
