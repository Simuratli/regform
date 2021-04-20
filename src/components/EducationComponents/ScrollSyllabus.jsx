import React from "react"
import shortid from 'shortid';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "../../scss/education/educationSyllabus.scss";

const Arrow = (className) => {
    return <div className={className}/>
};

const ScrollSyllabus = ({education}) => {

    const sortedSyllabus = education.syllabus.sort((a, b) =>
        a.position > b.position ? 1 : b.position > a.position ? -1 : 0
    );

    const scrollableSyllabus = sortedSyllabus.map(element => {
        return (
            <li className={'menu-item'} key={shortid.generate()}>
                <h4>Block {element.position}</h4>
                <p className={'menu-item-description'}>{element.description}</p>
            </li>
        )
    })

    return (
        <div className={"syllabus"}>
            <h2>Course outline</h2>
            <ScrollMenu
                data={scrollableSyllabus}
                arrowLeft={Arrow('arrow-prev')}
                arrowRight={Arrow('arrow-next')}
                translate={1}
                innerWrapperClass={'menu-wrapper--inner'}
                scrollBy={0}
                wheel={false}
                alignCenter={false}
                clickWhenDrag={false}
                hideSingleArrow={'true'}
                disableTabindex={true}
                alignOnResiz={true}
            />
            <a href={"https://myudssystemsstorageprod.blob.core.windows.net/uds-portal-assets/education/courses/ms-dynamics-365-consultant/assets/syllabus/Syllabus.docx"}
               download>
                <button className={"downloadButton"}>Download</button>
            </a>
        </div>
    );
}

export default ScrollSyllabus;

