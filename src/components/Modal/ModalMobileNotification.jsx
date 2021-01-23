import React from "react";
import "../../scss/modal/modal.scss";

import Modal from "./Modal";
import { FormattedMessage } from "react-intl";

const ModalMobileNotification = ({ active, setActive }) => {
  return (
    <Modal active={active} setActive={setActive}>
      <p>
        <FormattedMessage id="present.mobile.v" />
        <span className={"boldText"}>
          <FormattedMessage id="recomend.text" />
        </span>
      </p>
      <button className={"agreeButton"} onClick={() => setActive(false)}>
        <FormattedMessage id="ok" />
      </button>
    </Modal>
  );
};
export default ModalMobileNotification;
