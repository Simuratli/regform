import React from "react";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";

import PropTypes from "prop-types";
import AppLocale from "../LanguageProvider";

const IntelProviderWrapper = (props) => {
  const { children } = props;

  const { lang } = useSelector(({ app }) => app);

  const locale = navigator.language.slice(0, 2) || "en";

  const currentAppLocale = AppLocale[lang];
  return (
    <IntlProvider
      locale={locale}
      textComponent={React.Fragment}
      messages={currentAppLocale.messages}
    >
      {children}
    </IntlProvider>
  );
};

IntelProviderWrapper.propTypes = {
  children: PropTypes.node,
};

export default IntelProviderWrapper;
