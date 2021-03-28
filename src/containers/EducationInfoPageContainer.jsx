import React, {lazy, Suspense, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import isEmpty from "lodash/isEmpty";
import {getEducationInfoPage} from "../store/reducers/educationReducer/actions/educationInfoPageAction";
import EducationInfoPage from "../components/EducationComponents/EducationInfoPage";

// const EducationInfoPage = lazy(() => import("../components/EducationComponents/EducationInfoPage"));

const EducationInfoPageContainer = () => {
    const {currentEducationInfoPage} = useSelector(({education}) => education);
    const dispatch = useDispatch();

    const {slug} = useParams();

    useEffect(() => {
        dispatch(getEducationInfoPage(slug));
    }, [slug]);

    return (
        // <div style={{minHeight: "70vh"}}>
        //     {!isEmpty(currentEducationInfoPage) && (
        //         <Suspense fallback={null}>
        //             <EducationInfoPage education={currentEducationInfoPage}/>
        //         </Suspense>
        //     )}
        // </div>
        <div style={{minHeight: "70vh"}}>
                    <EducationInfoPage education={currentEducationInfoPage}/>
        </div>
    );
};

export default EducationInfoPageContainer;