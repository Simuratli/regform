import React, { useEffect } from "react";
import "../../scss/addonsCardsPage/addonsCardsPage.scss";
import orangeElement from "../../assets/images/orange_element.svg";
import AddonCardContainer from "../../containers/AddonCardContainer";
import { ERROR_LOADING_DATA } from "../../store/actions/fullAddonPageAction";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import AddonPaginationCont from "../views/AddonPaginationCont";

const AddonsCardsPage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { app } = state;
  const { error } = app;
  const { isError } = error;

  useEffect(() => {
    document.title = " UDS Add-ons";
  }, []);

  useEffect(() => {
    isError &&
      dispatch({
        type: ERROR_LOADING_DATA,
        payload: { isError: false, message: "", err: null },
      });
  }, [isError]);

  return (
    <div className="main_container">
      <div className="generalTitleBlock">
        <h1 className="headingParagraph">
          <FormattedMessage id="enhance.system.text" />
        </h1>
        <img
          className="orangeElement"
          src={orangeElement}
          alt="orange element"
        />
        <p className="paragraph">
          <FormattedMessage id="improve.dynamics.text" />
        </p>
      </div>
      <div className={"card"}>
        <AddonCardContainer />
      </div>

      {/*<AddonPaginationCont />*/}
    </div>
  );
};

export default AddonsCardsPage;
