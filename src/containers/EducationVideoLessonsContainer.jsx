import React, {lazy, Suspense, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import isEmpty from "lodash/isEmpty";
import {getEducationVideoLessons} from "../store/reducers/educationReducer/actions/educationVideoLessonsAction";

const EducationVideoLessons = lazy(() => import("../components/EducationComponents/EducationVideoLessons"));

const EducationVideoLessonsContainer = () => {
    const {educationVideoLessons} = useSelector(({education}) => education);
    const dispatch = useDispatch();
    const {slug} = useParams();

    useEffect(() => {
        dispatch(getEducationVideoLessons(slug));
    }, [slug]);

    return (
        <div style={{minHeight: "70vh"}}>
            {!isEmpty(educationVideoLessons) && (
                <Suspense fallback={null}>
                    <EducationVideoLessons education={educationVideoLessons}/>
                </Suspense>
            )}
        </div>
    );
};

export default EducationVideoLessonsContainer;
