import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import get from "lodash/get";
import {getEducationCard} from "../../store/reducers/educationReducer/actions/educationCardAction";
import EducationCard from "../../components/EducationComponents/EducationCard";
import shortid from 'shortid';
import {getAddonMetadata} from "../../store/reducers/metadataReducer/actions/addonsMetadataAction";

const EducationCardContainer = () => {
    const {education} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!get(education, "educationCards", []).length) {
            dispatch(getEducationCard());
        }
        dispatch(getAddonMetadata());
    }, []);

    return (
        <>
            {
                get(education, "educationCards", []).map((educationCard) => (
                    <EducationCard key={shortid.generate()} educationCard={educationCard}/>))
            }
        </>
    );
};

export default EducationCardContainer;
