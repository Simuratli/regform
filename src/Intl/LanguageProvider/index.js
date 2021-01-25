import EnLang from "./entries/en-US";
import DaLang from "./entries/da";

// if (!Intl.PluralRules) {
//   require("@formatjs/intl-pluralrules/polyfill");
//   require("@formatjs/intl-pluralrules/dist/locale-data/en");
// }
//
// if (!Intl.RelativeTimeFormat) {
//   require("@formatjs/intl-relativetimeformat/polyfill");
//   require("@formatjs/intl-relativetimeformat/dist/locale-data/en");
// }

const AppLocale = {
  en: EnLang,
  da: DaLang,
};

export default AppLocale;
