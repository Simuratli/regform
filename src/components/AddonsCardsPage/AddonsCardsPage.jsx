import React, { useEffect } from "react";
import "../../scss/addonsCardsPage/addonsCardsPage.scss";
import orangeElement from "../../assets/images/orange_element.svg";
import AddonCardContainer from "../../containers/AddonCardContainer";
import { ERROR_LOADING_DATA } from "../../store/actions/fullAddonPageAction";
import { useDispatch, useSelector } from "react-redux";

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
    <div className={"main_container"}>
      <div className={"generalTitleBlock"}>
        <h1 className={"headingParagraph"}>
          Enhance your system with Dynamics 365 add-ons{" "}
        </h1>
        <img
          className={"orangeElement"}
          src={orangeElement}
          alt={"orange element"}
        />
        <p className={"paragraph"}>
          Improve your Dynamics 365 system and Dynamics 365 Portal. We offer our
          add-ons and installation guides for free download and use
        </p>
      </div>
      <div className={"card"}>
        <AddonCardContainer />
      </div>
    </div>
  );
};

export default AddonsCardsPage;
