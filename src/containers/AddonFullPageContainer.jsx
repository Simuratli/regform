import React, { lazy, Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFullAddonPage, resetFullAddonPage} from "../store/reducers/addonReducer/actions/fullAddonPageAction";
import isEmpty from "lodash/isEmpty";
import {getFullAddonMetadata} from "../store/reducers/metadataReducer/actions/fullAddonMetadataAction";
import Metadata from "../components/Metadata/MetadataComponent";

const AddonFullPage = lazy(() => import("../components/AddonFullPage/AddonFullPage"));

const AddonFullPageContainer = () => {
  const { currentFullAddonPage } = useSelector(({ addon }) => addon);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { slug } = useParams();
  const { fullAddonMetadata } = state.metadata;

  useEffect(() => {
    dispatch(resetFullAddonPage());
    dispatch(getFullAddonPage(slug));
    dispatch(getFullAddonMetadata(slug))
  }, [slug]);

  return (
    <div style={{ minHeight: "70vh" }}>
      {!isEmpty(currentFullAddonPage) && (
        <Suspense fallback={null}>
          <AddonFullPage addon={currentFullAddonPage}>
            <Metadata metadata={fullAddonMetadata}/>
          </AddonFullPage>
        </Suspense>
      )}
    </div>
  );
};

export default AddonFullPageContainer;
