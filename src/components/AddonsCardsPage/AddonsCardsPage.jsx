import React, {useEffect, useState} from "react";
import "../../scss/addonsCardsPage/addonsCardsPage.scss";
import orangeElement from "../../assets/images/orange_element.svg";
import AddonCardContainer from "../../containers/AddonCardContainer";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { FilterAddonsComponent } from "../FilterAddonsComponent/FilterAddonComponent";
import { setError } from "../../store/reducers/appReducer/actions/appAction";
import isEmpty from "lodash/isEmpty";
import {getAddonMetadata} from "../../store/reducers/metadataReducer/actions/addonsMetadataAction";
import Metadata from "../Metadata/MetadataComponent";
import ModalMobileNotification from "../Modal/ModalMobileNotification";
import AddonPaginationCont from "../views/AddonPaginationCont";
import {getAddonCard} from "../../store/reducers/addonReducer/actions/addonCardAction";

const AddonsCardsPage = () => {
  const [modalActive, setModalActive] = useState(true)
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { app } = state;
  const { error } = app;
  const { addonsMetadata } = state.metadata;
  const cards = useSelector(({addon}) => addon.cards)

  useEffect(() => {
    document.title = "Add-ons | UDS Portal";
    dispatch(getAddonMetadata())
    dispatch(getAddonCard());
  }, []);

  console.log("aaddd", cards);

  useEffect(() => {
    !isEmpty(error) && dispatch(setError({}));
  }, [!isEmpty(error)]);

  return (
    <div className="main_container">
      <ModalMobileNotification setActive={setModalActive}/>
      <Metadata metadata={addonsMetadata}/>

      <div className="generalTitleBlock">
        <h1 className="headingParagraph">
          <FormattedMessage id="enhance.system.text" />
        </h1>
        <img className="orangeElement" src={orangeElement} alt="orange element"/>
        <p className="paragraph">
          <FormattedMessage id="improve.dynamics.text" />
        </p>
      </div>
      <FilterAddonsComponent cards={cards} />
      <div className={"card"}>
        <AddonCardContainer />
      </div>

      <AddonPaginationCont />
    </div>
  );
};

export default AddonsCardsPage;
