import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import get from "lodash/get";
import {getEducationCard} from "../store/reducers/educationReducer/actions/educationCardAction";
import EducationCard from "../components/EducationComponents/EducationCard";

const EducationCardContainer = () => {
    const {education} = useSelector((state) => state);
    const dispatch = useDispatch();

    console.log(education, 'my education')
    useEffect(() => {
        if (!get(education, "educationCards", []).length) {
            dispatch(getEducationCard());
        }
    }, []);

    return (
        <>
            {
                get(education, "educationCards", []).map((educationCard) => (
                            <EducationCard educationCard={educationCard}/>
                    ))

            }
        </>
    );
};

export default EducationCardContainer;
