import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AddonFullPage from "../components/AddonFullPage/AddonFullPage";
import {
  getFullAddonPage,
  resetFullAddonPage,
} from "../store/actions/fullAddonPageAction";

import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

const AddonFullPageContainer = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { fullAddonPage } = state;

  const { slug } = useParams();

  useEffect(() => {
    dispatch(resetFullAddonPage());
    dispatch(getFullAddonPage(slug));
  }, [slug]);

  return (
    !isEmpty(get(fullAddonPage, "fullAddonPage")) && (
      <AddonFullPage addon={get(fullAddonPage, "fullAddonPage")} />
    )
  );
};

export default AddonFullPageContainer;
