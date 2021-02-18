import React, { lazy, Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getFullAddonPage,
  resetFullAddonPage,
} from "../store/reducers/addonReducer/actions/fullAddonPageAction";

import isEmpty from "lodash/isEmpty";

const AddonFullPage = lazy(() =>
  import("../components/AddonFullPage/AddonFullPage")
);

const AddonFullPageContainer = () => {
  const { currentFullAddonPage } = useSelector(({ addon }) => addon);
  const dispatch = useDispatch();

  const { slug } = useParams();

  useEffect(() => {
    dispatch(resetFullAddonPage());
    dispatch(getFullAddonPage(slug));
  }, [slug]);

  return (
    !isEmpty(currentFullAddonPage) && (
      <Suspense fallback={null}>
        <AddonFullPage addon={currentFullAddonPage} />
      </Suspense>
    )
  );
};

export default AddonFullPageContainer;
