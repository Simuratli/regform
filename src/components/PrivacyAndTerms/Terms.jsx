import React, { useEffect } from "react";
import "../../scss/privacyAndTerms/privacyAndTerms.scss";

import { injectIntl } from "react-intl";

import get from "lodash/get";

function Terms({ intl }) {
  useEffect(() => {
    document.title = "UDS Portal - Terms and Conditions";
  }, []);
  return (
    <div
      className={"termsContainer"}
      dangerouslySetInnerHTML={{ __html: get(intl, `messages["terms.page"]`) }}
    />
  );
}

export default injectIntl(Terms);
