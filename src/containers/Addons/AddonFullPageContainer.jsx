import React, {lazy, Suspense, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFullAddonPage, resetFullAddonPage} from "../../store/reducers/addonReducer/actions/fullAddonPageAction";
import isEmpty from "lodash/isEmpty";
import {getFullAddonMetadata} from "../../store/reducers/metadataReducer/actions/fullAddonMetadataAction";
import Metadata from "../../components/ViewsComponents/Metadata/MetadataComponent";
import {getAuthoriseCheck} from "../../store/reducers/userDataReducer/actions/userAuthorizeCheckAction";

const AddonFullPage = lazy(() => import("../../components/AddonsComponents/AddonFullPage/AddonFullPage"));

const AddonFullPageContainer = () => {
    const {currentFullAddonPage} = useSelector(({addon}) => addon);
    const {fullAddonMetadata} = useSelector(({metadata}) => metadata);
    const dispatch = useDispatch();
    const {slug} = useParams();

    async function asyncDispatch () {
        await dispatch(getAuthoriseCheck());
        await dispatch(resetFullAddonPage());
        await dispatch(getFullAddonPage(slug));
        await dispatch(getFullAddonMetadata(slug));
    }

    useEffect(() => {
        asyncDispatch();
    }, [slug]);

    return (
        <div style={{minHeight: "70vh"}}>
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
