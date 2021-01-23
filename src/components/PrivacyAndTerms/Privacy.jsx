import React, { useEffect } from "react";
import "../../scss/privacyAndTerms/privacyAndTerms.scss";

import { injectIntl } from "react-intl";

import get from "lodash/get";

function Privacy({ intl }) {
  useEffect(() => {
    document.title = "UDS Portal - Privacy Policy";
  }, []);
  return (
    <div
      className={"privacyContainer"}
      dangerouslySetInnerHTML={{
        __html: get(intl, `messages["privacy.page"]`),
      }}
    />
  );
}

export default injectIntl(Privacy);
