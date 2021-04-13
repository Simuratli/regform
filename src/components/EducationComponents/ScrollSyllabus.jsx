import React, {Component} from "react"
import "../../scss/education/educationSyllabus.scss";
import shortid from 'shortid';
import ScrollMenu from 'react-horizontal-scrolling-menu';

// list of items
let list = [];

// One item component
// selected prop will be passed
const MenuItem = ({header, description, selected, position}) => {
  return <li
    className={`menu-item ${selected ? 'active' : ''}`}
  >
    <h4>Block {position}:</h4>
    <p className={'menu-item-description'}>{description}</p>
  </li>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {description, header} = el;

    return <MenuItem description={description} header={header} key={shortid.generate()} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ className: 'arrow-prev' });
const ArrowRight = Arrow({ className: 'arrow-next' });

const selected = 'item1';

class ScrollSyllabus extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(this.props.education.syllabus, selected);
  }

  state = {
    selected
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    // console.log(this.props.education.syllabus)

    return (
      <div className={"syllabus"}>
        <h2>Course outline</h2>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
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
        <a href={"https://myudssystemsstorageprod.blob.core.windows.net/uds-portal-assets/education/courses/ms-dynamics-365-consultant/assets/syllabus/Syllabus.docx"} download>
          <button className={"downloadButton"}>Download</button>
        </a>
      </div>
    );
  }
}

export default ScrollSyllabus;

