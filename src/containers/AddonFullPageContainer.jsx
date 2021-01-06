import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AddonFullPage from "../components/AddonFullPage/AddonFullPage";
import { getFullAddonPage } from "../store/actions/fullAddonPageAction";

import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

const AddonFullPageContainer = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { fullAddonPage } = state;
  const { isLoading } = fullAddonPage;

  const { slug } = useParams();

  useEffect(() => {
    dispatch(getFullAddonPage(slug));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    !isEmpty(get(fullAddonPage, "fullAddonPage")) && (
      <AddonFullPage addon={get(fullAddonPage, "fullAddonPage")} />
    )
  );
};

export default AddonFullPageContainer;
