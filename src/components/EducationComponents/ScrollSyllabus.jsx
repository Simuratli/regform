import React from "react"
import "../../scss/education/educationCard.scss";
import ScrollMenu from 'react-horizontal-scrolling-menu';

const ScrollSyllabus = ({education}) => {

    const {
        syllabus
    } = education;

    const Arrow = ({ text, className }) => {
        return (
            <div className={className}>{text}</div>
        );
    };
    const MenuItem = ({text, selected}) => {
        return <div
            className={`menu-item ${selected ? 'active' : ''}`}
        >{text}</div>;
    };

    const Menu = (list, selected) => {
        return (
            <ul>
                {syllabus.map(syllabusItem =>
                    <li>
                        <h4>{syllabusItem.header}</h4>
                        <p>{syllabusItem.description}</p>
                    </li>)}
            </ul>
        )
    }

    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });


    return (
        <section className={"syllabus"}>
            <h2>Course outline</h2>
            {/*<ScrollMenu*/}
            {/*    data={syllabusItem}*/}
            {/*    arrowLeft={ArrowLeft}*/}
            {/*    arrowRight={ArrowRight}*/}
            {/*    selected={selected}*/}
            {/*    onSelect={this.onSelect}*/}
            {/*/>*/}
            <ul>
                {syllabus.map(syllabusItem =>
                    <li>
                        <h4>{syllabusItem.header}</h4>
                        <p>{syllabusItem.description}</p>
                    </li>)}
            </ul>
            <button className={"downloadButton"}>Download curriculum</button>
        </section>
    );
};

export default ScrollSyllabus;
