import React, {lazy, Suspense, useEffect} from "react";
import {Redirect, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import isEmpty from "lodash/isEmpty";
import {getEducationVideoLessons} from "../store/reducers/educationReducer/actions/educationVideoLessonsAction";
import {getEducationAccessStatus} from "../store/reducers/educationReducer/actions/educationGetAccessAction";

const EducationVideoLessons = lazy(() => import("../components/EducationComponents/EducationVideoLessons"));

const EducationVideoLessonsContainer = () => {
    const {educationVideoLessons, educationAccessStatus} = useSelector(({education}) => education);
    const dispatch = useDispatch();
    const {slug} = useParams();

    useEffect(() => {
        dispatch(getEducationAccessStatus(slug))
        dispatch(getEducationVideoLessons(slug));
    }, [slug]);

    if(!isEmpty(educationAccessStatus) && educationAccessStatus.coursePermissionState !== 'Allowed'){
        return <Redirect to={"/education/"+slug} />
        // return <ErrorComponent />
    }
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
