import React, {lazy, Suspense, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import isEmpty from "lodash/isEmpty";
import {
    getEducationInfoPage,
    resetEducationInfoPage
} from "../../store/reducers/educationReducer/actions/educationInfoPageAction";
import {getEducationAccessStatus} from "../../store/reducers/educationReducer/actions/educationGetAccessAction";

const EducationInfoPage = lazy(() => import("../../components/EducationComponents/EducationInfoPage"));

const EducationInfoPageContainer = () => {
    const {educationInfoPage, educationAccessStatus} = useSelector(({education}) => education);
    const dispatch = useDispatch();
    const {slug} = useParams();

    useEffect(() => {
        // if()
        dispatch(getEducationInfoPage(slug));
        dispatch(resetEducationInfoPage());
        dispatch(getEducationAccessStatus(slug));
    }, [slug]);


    return (
        <div style={{minHeight: "70vh"}}>
            {!isEmpty(educationInfoPage) && educationInfoPage.slug === slug && !isEmpty(educationAccessStatus) && (
                <Suspense fallback={null}>
                    <EducationInfoPage education={educationInfoPage}/>
                </Suspense>
            )}
        </div>
    );
};

export default EducationInfoPageContainer;
