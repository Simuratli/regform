import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AddonFullPage from "../components/AddonFullPage/AddonFullPage";
import { getFullAddonPage } from "../store/actions/fullAddonPageAction";

import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

const AddonFullPageContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { fullAddonPage } = state;
  const { slug } = useParams();

  console.log(fullAddonPage, "fullAddonPage");

  useEffect(() => {
    if (isLoading) {
      dispatch(getFullAddonPage(slug));
      setIsLoading(false);
    }
  }, [isEmpty(fullAddonPage)]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    !isEmpty(fullAddonPage) && (
      <AddonFullPage addon={get(fullAddonPage, "fullAddonPage")} />
    )
  );
};

export default AddonFullPageContainer;
