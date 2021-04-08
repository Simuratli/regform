import React, {Component} from "react";
import AddonCard from "../AddonsCardsPage/AddonCard";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './addonMayLikeComponent.scss';
import shortid from "shortid";
import {Add} from "@material-ui/icons";

// list of items
const list = [];

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return (
    <div className={'addon-card-wrapper'} key={shortid.generate()}>
      <AddonCard addon={el}/>
    </div>
    )
  });

const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ className: 'addon-arrow-prev' });
const ArrowRight = Arrow({ className: 'addon-arrow-next' });

const selected = 'item1';

class AddonMayLikeComponent extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(this.props.addons, selected);
  }

  state = {
    selected
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    console.log(this.props.addons)

    return (
      <div className="addons">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          translate={2}
          scrollBy={2}
          wheel={false}
          alignCenter={false}
          clickWhenDrag={false}
          hideSingleArrow={'true'}
          disableTabindex={true}
          alignOnResiz={false}

          arrowClass={'scroll-addons-menu-arrow'}
          itemClass={'menu-addon-item-wrapper'}
          innerWrapperClass={'addon-wrapper--inner'}
          wrapperClass={'menu-addons-wrapper'}
        />
      </div>
    );
  }
}

export default AddonMayLikeComponent;

