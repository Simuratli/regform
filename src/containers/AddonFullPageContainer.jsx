import React, { lazy, Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getFullAddonPage,
  resetFullAddonPage,
} from "../store/actions/fullAddonPageAction";

import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

const AddonFullPage = lazy(() =>
  import("../components/AddonFullPage/AddonFullPage")
);

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
      <Suspense fallback={null}>
        <AddonFullPage addon={get(fullAddonPage, "fullAddonPage")} />
      </Suspense>
    )
  );
};

export default AddonFullPageContainer;
