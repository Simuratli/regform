import React, { useState } from "react";
import "../scss/mainNavigation.scss";
import "../scss/utils/utils.scss";
import { Link, NavLink } from "react-router-dom";
import authentication from "../b2c";
import logo from "../assets/images/uds_portal_logo.svg";
import logout from "../assets/images/logout.png";
import "../../src/scss/toggleButton/DrawerToggleButton.scss";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { changeAppLanguage } from "../store/actions/changeAppLanguage";

const getLang = (lang) => {
  switch (lang) {
    case "en":
      return "English";
    case "da":
      return "German";
    default:
      return lang;
  }
};

function MainNavigation(props) {
  const state = useSelector(({ app }) => app);
  const { lang } = state;

  const dispatch = useDispatch();

  const [isOpenLangSelect, setIsOpenLangSelect] = useState(false);

  return (
    <div className={"fullWidthWrapper"}>
      <div className={"navigationBar"}>
        <div className={"mainNavToggleButton"}>
          <DrawerToggleButton setSideDrawerOpen={props.setSideDrawerOpen} />
        </div>

        <div>
          <Link to={"/"}>
            <img className={"headerLogo"} src={logo} alt={"logo"} />
          </Link>
        </div>
        <div className={"rightBlock"}>
          <nav className={"navItems"}>
            <ul className={"navLinks"}>
              <li>
                <a className={"nav-link"} href="https://uds.systems">
                  <FormattedMessage id="UDS.website" />
                </a>
              </li>
              <li>
                <NavLink className={"nav-link"} to="/add-ons">
                  <FormattedMessage id="add.ons" />
                </NavLink>
              </li>
              <li>
                <button className={"bookACall"}>
                  <a
                    className={"bookACall"}
                    href="https://calendly.com/rsavran/dynamics"
                  >
                    <FormattedMessage id="book.call" />
                  </a>
                </button>
              </li>
            </ul>
          </nav>
          {/*<div*/}
          {/*  className="change-lang-box"*/}
          {/*  onClick={(e) => {*/}
          {/*    setIsOpenLangSelect((pr) => !pr);*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <div style={{ display: "flex", alignItems: "center" }}>*/}
          {/*    <img src={require("../assets/images/icon-lang.png")} alt="icon" />*/}
          {/*    <span className="lang-title">{getLang(lang)}</span>*/}
          {/*  </div>*/}
          {/*  <img*/}
          {/*    style={{*/}
          {/*      transform: isOpenLangSelect && "rotate(180deg)",*/}
          {/*      transition: "0.3s",*/}
          {/*    }}*/}
          {/*    src={require("../assets/images/lang-vector.png")}*/}
          {/*    alt="icon"*/}
          {/*  />*/}

          {/*  {isOpenLangSelect && (*/}
          {/*    <div className="custom-select">*/}
          {/*      {[*/}
          {/*        { language: "en", name: "English" },*/}
          {/*        { language: "da", name: "German" },*/}
          {/*      ].map(({ language, name }) => {*/}
          {/*        return (*/}
          {/*          <div*/}
          {/*            key={language}*/}
          {/*            className={`row  ${language === lang && "choosen"}`}*/}
          {/*            onClick={(e) => {*/}
          {/*              e.stopPropagation();*/}
          {/*              dispatch(changeAppLanguage(language));*/}
          {/*            }}*/}
          {/*          >*/}
          {/*            <div*/}
          {/*              style={{*/}
          {/*                display: "flex",*/}
          {/*                alignItems: "center",*/}
          {/*              }}*/}
          {/*            >*/}
          {/*              <img*/}
          {/*                src={require(`../assets/images/icon-${language}.png`)}*/}
          {/*                alt="lang"*/}
          {/*              />*/}
          {/*              <span style={{ margin: "0 0 0 15px" }}>{name}</span>*/}
          {/*            </div>*/}
          {/*            {language === lang && (*/}
          {/*              <img*/}
          {/*                src={require("../assets/images/lang-choosen.png")}*/}
          {/*                alt="icon"*/}
          {/*              />*/}
          {/*            )}*/}
          {/*          </div>*/}
          {/*        );*/}
          {/*      })}*/}
          {/*    </div>*/}
          {/*  )}*/}
          {/*</div>*/}
          <div>
            <a className={"logOut"} onClick={() => authentication.signOut()}>
              <img alt={"logout"} src={logout} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
