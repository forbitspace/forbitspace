exports.ids = [48];
exports.modules = {

/***/ "E249":
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__("90Kz")();

routes.add("/:username", "profilepage");

/***/ }),

/***/ "MTiB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AppLink = ({
  marginRight
}) => {
  return __jsx(ButtonBanner, {
    href: "https://app.forbitspace.com/",
    target: "_blank",
    rel: "noreferrer",
    marginRight: marginRight
  }, " ", "Launch App");
};

const ButtonBanner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  padding: 0.35rem 0.85rem;
  text-decoration: none;
  text-align: center;
  border-radius: 12px;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease 0s;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  font-style: italic;
  cursor: pointer;
  width: fit-content;
  background-color: rgb(255, 255, 255);
  color: white;
  /* border: 1px solid transparent; */
  margin-right: 1rem;
  background-image: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  );
  width: 100%;
  max-width: 210px;
  /* &:hover { */
  background-size: 200%;
  background-position: right;
  color: white;
  /* } */
  :hover {
    color: white;
  }
`;
/* harmony default export */ __webpack_exports__["a"] = (AppLink);

/***/ }),

/***/ "dFpG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Index; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./client/components/Header/components/Darkmode.jsx
var __jsx = external_react_default.a.createElement;



const Darkmode = () => {
  const {
    0: isActive,
    1: setActive
  } = Object(external_react_["useState"])(false);

  const handleToggle = () => {
    if (!document.body.classList.contains("dark-mode")) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const {
    0: Status,
    1: setStatus
  } = Object(external_react_["useState"])(false);
  return __jsx("div", {
    className: "dark-mode"
  }, __jsx(Dark_mode, {
    onClick: handleToggle
  }, __jsx("span", {
    className: "mon-sun"
  }, __jsx("img", {
    src: "../images/sun.svg",
    alt: "sun icon"
  })), __jsx("span", {
    className: "moon-dark"
  }, __jsx("img", {
    src: "../images/moon.svg",
    alt: "moon icon"
  }))));
};

const Dark_mode = external_styled_components_default.a.div`
  margin-right: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    line-height: 18px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
  }
`;
/* harmony default export */ var components_Darkmode = (Darkmode);
// CONCATENATED MODULE: ./client/components/Header/constants/index.js
const supportedLanguge = [// Perm Menu
{
  name: "English",
  abbreviation: "EN"
}, {
  name: "العربية",
  abbreviation: "AR"
}, {
  name: "Català",
  abbreviation: "CA"
}, {
  name: "简体中文",
  abbreviation: "ZH-CN"
}, {
  name: "繁體中文",
  abbreviation: "ZH-TW"
}, {
  name: "Čeština",
  abbreviation: "CS"
}, {
  name: "Dansk",
  abbreviation: "DA"
}, {
  name: "Deutsch",
  abbreviation: "DE"
}, {
  name: "Nederlands",
  abbreviation: "NL"
}, {
  name: "Filipino",
  abbreviation: "FIL"
}, {
  name: "Suomalainen",
  abbreviation: "FI"
}, {
  name: "Français",
  abbreviation: "FR"
}, {
  name: "Ελληνικά",
  abbreviation: "EL"
}, {
  name: "हिंदी",
  abbreviation: "HI"
}, {
  name: "Magyar",
  abbreviation: "HU"
}, {
  name: "Bahasa Indonesia",
  abbreviation: "ID"
}, {
  name: "Italiano",
  abbreviation: "IT"
}, {
  name: "日本語",
  abbreviation: "JA"
}, {
  name: "한국어",
  abbreviation: "KO"
}, {
  name: "Português",
  abbreviation: "PT-BR"
}, {
  name: "Română",
  abbreviation: "RO"
}, {
  name: "Русский",
  abbreviation: "RU"
}, {
  name: "Српски",
  abbreviation: "SR"
}, {
  name: "Español",
  abbreviation: "ES-ES"
}, {
  name: "Svenska",
  abbreviation: "SV-SE"
}, {
  name: "தமிழ்",
  abbreviation: "TA"
}, {
  name: "Türkçe",
  abbreviation: "TR"
}, {
  name: "Українська",
  abbreviation: "UK"
}, {
  name: "Tiếng Việt",
  abbreviation: "VI"
}];
const navContent = [{
  link: "",
  nav: "Space Trade",
  contents: [{
    link: "/aggregation",
    content: "Aggregation Protocol"
  }, {
    link: "/liquidity",
    content: "Liquidity Protocol"
  }, {
    link: "/limit",
    content: "Limit Order Protocol"
  }, {
    link: "/derivative",
    content: "Derivative Protocol"
  }]
}, {
  link: "",
  nav: "Governance",
  contents: [// {
  //   link: "/token", //../images/pdf/fbs-token-1.pdf
  //   content: "FBS Token",
  //   // outLink: true,
  //   disable: true,
  // },
  {
    link: "/dao",
    content: "Space Dao"
  } // {
  //   link: "",
  //   content: "Pools",
  //   disable: true,
  // },
  // {
  //   link: "",
  //   content: "Farming",
  //   disable: true,
  // },
  // {
  //   link: "",
  //   content: "Stacking",
  //   disable: true,
  // },
  ]
}, {
  link: "",
  nav: "Developers",
  show: true,
  contents: [{
    link: "",
    content: "Documentation"
  }, {
    link: "../forbitspace-whitepaper.pdf",
    content: "Whitepaper",
    outLink: true
  }, {
    link: "https://github.com/forbitspace",
    content: "Github",
    outLink: true
  } // {
  //   link: "",
  //   content: "Audits",
  //   disable: true,
  // },
  // {
  //   link: "",
  //   content: "Bug bounty",
  //   disable: true,
  // },
  ]
}, {
  nav: "Self-custody",
  link: "/selfcustody",
  clickable: true,
  contents: [{
    link: "/bridge",
    content: "Bridge Space"
  }, {
    link: "/mobile-wallet",
    content: "Mobile wallet"
  }, {
    link: "/smart-contract",
    content: "Smart contract wallet"
  }, {
    link: "/assets",
    content: "Asset management"
  }]
}, {
  nav: "API",
  // disable: true,
  link: "",
  contents: [{
    link: "/API",
    content: "API"
  }]
}, {
  link: "",
  nav: "More",
  show: true,
  contents: [{
    link: "/about",
    content: "About"
  }, {
    link: "/team",
    //
    content: "Team" // disabled: true,

  }, {
    link: "https://blog.forbitspace.com/",
    content: "Blog",
    outLink: true
  }, {
    link: "https://help.forbitspace.com/",
    content: "Help Center",
    outLink: true
  }]
}];
// CONCATENATED MODULE: ./client/components/Header/components/Languge.jsx
var Languge_jsx = external_react_default.a.createElement;




const Languge = () => {
  const {
    0: Langs,
    1: setLangs
  } = Object(external_react_["useState"])('En');
  return Languge_jsx(StyledLanguge, null, Languge_jsx("button", {
    className: "name"
  }, Languge_jsx("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, Languge_jsx("svg", {
    viewBox: "0 0 24 24",
    color: "#4593f8",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    className: "sc-hBEYos kbqutz icon-dark"
  }, Languge_jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
  }))), Languge_jsx("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    className: "text"
  }, Langs)), Languge_jsx(StyledRow, {
    className: "row row-bg-darkmode"
  }, Languge_jsx(external_react_default.a.Fragment, null, supportedLanguge.map((item, i) => {
    return Languge_jsx(Row, {
      onChoose: () => setLangs(item.abbreviation),
      key: `card_${i}`,
      name: item.name
    });
  }))));
};

const Row = ({
  name,
  onChoose
}) => {
  return Languge_jsx(StyledButton, {
    onClick: onChoose
  }, name);
};

const StyledLanguge = external_styled_components_default.a.div`
  position: relative;
  margin-right: 15px;
  z-index:15;
  &:hover .row,
  
  &:focus-within .row{
    display: flex;
  }

  span {
    color: black;
  }
  .name{
    -webkit-box-align: center;
    align-items: center;
    background-color: transparent;
    border: 0px;
    border-radius: 16px;
    box-shadow: none;
    color: #4593f8 !important;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: max-content;
    height: 32px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    padding: 0px 16px;
    transition: background-color 0.2s ease 0s;
    margin-left: 5px;

    padding: 0;
    border-radius: 8px;
    svg{
        fill: black;
        margin-top: -3px;
    }
  }
`;
const StyledButton = external_styled_components_default.a.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  border: 0px;
  border-radius: 8px;
  box-shadow: none;
  color: #4593f8;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  height: 32px;
  line-height: 1;
  letter-spacing: 0.03em;
  -webkit-box-pack: center;
  justify-content: center;
  outline: 0px;
  padding: 0px 16px;
  transition: background-color 0.2s ease 0s;
  min-height: 32px;
  height: auto;

  &:focus{
    outline: none;
    background: #cfdfe9;
    border-radius: 0;
  }

  &:hover { 
    background: #0e182d;
  }
`;
const StyledRow = external_styled_components_default.a.div`
  width: 200px;
  display: none;
  position: absolute;
  top: 30px;
  transform: translate(-50%, 0px);
  padding: 10px;
  max-height: 400px;
  overflow-y: scroll;
  z-index: 15;
  border-radius: 0;
  background: white;
  border-radius: 12px;

  &::-webkit-scrollbar-thumb {
    background: #169eff; 
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar {
    width: 4px;
  }
`;
/* harmony default export */ var components_Languge = (Languge);
// EXTERNAL MODULE: ./client/components/route/index.js
var route = __webpack_require__("E249");

// CONCATENATED MODULE: ./client/components/Header/components/Logo.jsx
var Logo_jsx = external_react_default.a.createElement;




const Logo = () => {
  return Logo_jsx(BoxLogo, null, Logo_jsx(route["Link"], {
    href: "/"
  }, Logo_jsx("a", null, Logo_jsx("img", {
    src: "../images/logo/logo-forbitspace-dark.png",
    alt: "forbitspace",
    className: "logo--desktop"
  }), Logo_jsx("img", {
    src: "../images/logo/logo-sm-dark.png",
    alt: "forbitspace",
    className: "logo--mobile"
  }))));
};

const BoxLogo = external_styled_components_default.a.div`
  position: relative;
  a {
    display: block;
    overflow: hidden;
    width: 100%;
    max-width: 180px;
    transition: ease-in-out 1s all;

    img {
      width: 100%;
    }
  }
  .logo--mobile {
    display: none;
    max-width: 45px;
  }
  @media (max-width: 576px) {
    max-width: 120px;
    .logo--desktop {
      display: none;
    }
    .logo--mobile {
      display: block;
    }
  }
`;
/* harmony default export */ var components_Logo = (Logo);
// CONCATENATED MODULE: ./client/components/Header/components/Nav.jsx
var Nav_jsx = external_react_default.a.createElement;





const Nav = () => {
  return Nav_jsx(StyledNav, null, Nav_jsx("div", {
    className: "main-menu"
  }, Nav_jsx("ul", {
    className: "main-menu-nav"
  }, navContent.map((item, index) => Nav_jsx("li", {
    key: index
  }, item.link ? Nav_jsx(route["Link"], {
    href: item.link,
    className: "text-dark text-visi"
  }, item.nav) : item.nav, Nav_jsx(DropdownMenu, {
    className: "dropdown-content"
  }, item.contents.map((item, index) => !item.disable ? item.outLink ? Nav_jsx("a", {
    key: index,
    href: item.link,
    target: "_blank",
    rel: "noreferrer",
    className: "text-dark text-visi"
  }, item.content) : Nav_jsx(route["Link"], {
    key: index,
    href: item.link,
    className: "text-dark text-visi"
  }, item.content) : Nav_jsx(DisableLink, {
    key: index // target="_blank"
    ,
    className: "text-dark text-visi",
    id: "disable"
  }, item.content)))))), Nav_jsx("div", {
    className: "main-menu-overlay"
  })));
};

const StyledNav = external_styled_components_default.a.div`
  li {
    display: flex;
    align-items: center;
    cursor: default;
    :hover {
      .dropdown-content {
        max-height: 300px;
      }
    }
    .text-visi {
      font-weight: 800;
    }
  }
`;
const DropdownMenu = external_styled_components_default.a.div`
  max-height: 0;
  height: auto;
  position: absolute;
  top: 35px;
  width: max-content;
  overflow: hidden;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  a {
    margin-bottom: 10px !important;
    font-weight: 500 !important;
    font-size: 12px !important;
    font-style: italic;
  }
  #disable {
    opacity: 0.3;
    z-index: -1;
  }
`;
const DisableLink = external_styled_components_default.a.div`
  margin-bottom: 10px !important;
  font-weight: 500 !important;
  font-size: 12px !important;
  font-style: italic;
`;
/* harmony default export */ var components_Nav = (Nav);
// CONCATENATED MODULE: ./client/components/Header/components/MenuMobile.jsx
var MenuMobile_jsx = external_react_default.a.createElement;






const MenuMobile = () => {
  const {
    0: menu,
    1: setMenu
  } = Object(external_react_["useState"])(false);

  const toggle = () => {
    setMenu(!menu);
  };

  return MenuMobile_jsx(StyledMenu, null, menu ? MenuMobile_jsx(GlobalStyle, null) : MenuMobile_jsx(external_react_default.a.Fragment, null), MenuMobile_jsx(ButtonBanner, {
    href: "https://app.forbitspace.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, " ", "Launch App"), MenuMobile_jsx(ButtonMenu, {
    onClick: toggle,
    isOpen: menu
  }, MenuMobile_jsx("div", {
    className: "logo-light-mode"
  }, MenuMobile_jsx("span", null), MenuMobile_jsx("span", null)), MenuMobile_jsx("div", {
    className: "logo-dark-mode"
  }, MenuMobile_jsx("span", null), MenuMobile_jsx("span", null))), MenuMobile_jsx(MenuMobile_Nav, {
    className: "bg-nav-mobile",
    style: {
      left: !menu ? "-100%" : "0"
    }
  }, MenuMobile_jsx("div", null, MenuMobile_jsx("ul", null, MenuMobile_jsx("li", {
    style: {
      margin: "0 0 20px -10px"
    }
  }, MenuMobile_jsx(components_Logo, null)), navContent.map((item, index) => MenuMobile_jsx("li", {
    className: "title",
    key: index
  }, MenuMobile_jsx(route["Link"], {
    href: item.link,
    className: "text",
    onClick: item.link ? toggle : null
  }, item.nav), MenuMobile_jsx("img", {
    src: "../images/light-icon/chevron.svg",
    alt: ""
  }), MenuMobile_jsx(Ul, {
    className: "submenu",
    show: item.show
  }, item.contents.map((item, index) => MenuMobile_jsx("li", {
    id: item.disable ? "disable" : "",
    onClick: toggle,
    key: index
  }, !item.outLink ? MenuMobile_jsx(route["Link"], {
    href: item.link
  }, MenuMobile_jsx("a", {
    className: "text"
  }, item.content)) : MenuMobile_jsx("a", {
    href: item.link,
    target: "_blank",
    rel: "noreferrer"
  }, MenuMobile_jsx("span", {
    className: "text"
  }, item.content)))))))))), MenuMobile_jsx(BlurDiv, {
    style: {
      display: !menu ? "none" : "block"
    },
    onClick: toggle
  }));
};

const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  body{
      overflow: hidden;
  }
`;
const MenuMobile_Nav = external_styled_components_default.a.div`
  padding: 1rem 0.5rem;
  position: fixed;
  z-index: 999;
  width: 60vw;
  height: 100%;
  left: -100%;
  top: 0;
  transition: all ease-in-out 0.5s;
  background-image: linear-gradient(268deg, #c4f1f2 3%, #ffffff 97%);
  overflow-y: auto;
  img {
    width: 20px;
    margin-left: 0.5rem;
  }
  ul {
    li {
      margin-top: 5px;
      a {
        text-decoration: none;
        color: #ffffff;
      }
    }
  }
  .title {
    :hover {
      .submenu {
        max-height: 500px;
      }
    }
  }
  /* .submenu {
    max-height: 0;
    transition: max-height 0.5s ease-in-out;
    overflow: hidden;
    a {
      margin-bottom: 10px !important;
      font-weight: 500 !important;
      font-size: 12px !important;
      font-style: italic;
    }
    #disable {
      opacity: 0.3;
      z-index: -1;
    }
  } */
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const StyledMenu = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  @media (min-width: 770px) {
    display: none;
  }
`;
const Ul = external_styled_components_default.a.ul`
  max-height: ${({
  show
}) => show ? "500px" : "0"};
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
  a {
    margin-bottom: 10px !important;
    font-weight: 500 !important;
    font-size: 12px !important;
    font-style: italic;
  }
  #disable {
    opacity: 0.3;
    z-index: -1;
  }
`;
const ButtonMenu = external_styled_components_default.a.div`
  .logo-dark-mode {
    display: none;
  }

  div {
    width: 20px;
    height: 2px;
    position: relative;
    margin-bottom: 3px;
    z-index: 10000;

    span {
      position: absolute;
      width: 20px;
      height: 2px;
      background: black;
      transition: all ease-in-out 0.2s;
      border-radius: 5px;
    }

    span:nth-child(1) {
      transform: ${props => !props.isOpen ? "rotate(0deg)" : "rotate(45deg)"};
    }
    span:nth-child(2) {
      transform: ${props => !props.isOpen ? "rotate(0deg)" : "rotate(-45deg)"};
    }

    &::before {
      content: "";
      height: 2px;
      background-color: black;
      position: absolute;
      bottom: -6px;
      transition: all ease-in-out 0.2s;
      width: ${props => !props.isOpen ? "20px" : "0px"};
      transform-origin: center;
      border-radius: 5px;
    }
    &::after {
      content: "";
      width: 20px;
      height: 2px;
      background-color: black;
      position: absolute;
      top: -6px;
      transition: all ease-in-out 0.2s;
      width: ${props => !props.isOpen ? "20px" : "0px"};
      transform-origin: center;
      border-radius: 5px;
    }
  }

  div.logo-dark-mode {
    width: 20px;
    height: 2px;
    position: relative;
    margin-bottom: 3px;
    z-index: 10000;

    span {
      position: absolute;
      width: 20px;
      height: 2px;
      background: white;
      transition: all ease-in-out 0.2s;
      border-radius: 5px;
    }

    span:nth-child(1) {
      transform: ${props => !props.isOpen ? "rotate(0deg)" : "rotate(45deg)"};
    }
    span:nth-child(2) {
      transform: ${props => !props.isOpen ? "rotate(0deg)" : "rotate(-45deg)"};
    }

    &::before {
      content: "";
      height: 2px;
      background-color: white;
      position: absolute;
      bottom: -6px;
      transition: all ease-in-out 0.2s;
      width: ${props => !props.isOpen ? "20px" : "0px"};
      transform-origin: center;
      border-radius: 5px;
    }
    &::after {
      content: "";
      width: 20px;
      height: 2px;
      background-color: white;
      position: absolute;
      top: -6px;
      transition: all ease-in-out 0.2s;
      width: ${props => !props.isOpen ? "20px" : "0px"};
      transform-origin: center;
      border-radius: 5px;
    }
  }
`;
const BlurDiv = external_styled_components_default.a.div`
  background: #000000b5;
  z-index: 998;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  animation: opacity 0.5s 1;

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const ButtonBanner = external_styled_components_default.a.a`
  padding: 0.35rem 0.85rem;
  text-decoration: none;
  text-align: center;
  border-radius: 12px;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease 0s;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 14px;
  font-style: italic;
  cursor: pointer;
  width: fit-content;
  background-color: rgb(255, 255, 255);
  color: white;
  /* border: 1px solid transparent; */
  margin-right: 1rem;
  background-image: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  );
  width: 100%;
  max-width: 210px;
  /* &:hover { */
  background-size: 200%;
  background-position: 95%;
  color: white;
  /* } */
  :hover {
    color: white;
  }
`;
/* harmony default export */ var components_MenuMobile = (MenuMobile);
// EXTERNAL MODULE: ./client/components/Header/components/AppLink.jsx
var AppLink = __webpack_require__("MTiB");

// CONCATENATED MODULE: ./client/components/Header/index.js
var Header_jsx = external_react_default.a.createElement;








function Index() {
  const {
    0: showNav,
    1: setShowNav
  } = Object(external_react_["useState"])(false);
  window.addEventListener("scroll", () => {
    // console.log("scroll -----------> ", window.scrollY);
    window.scrollY > 100 ? setShowNav(true) : setShowNav(false);
  });
  return Header_jsx(external_react_default.a.Fragment, null, Header_jsx(Header_GlobalStyle, null), Header_jsx("header", {
    className: showNav ? "header header--nav header--active" : "header header--nav"
  }, Header_jsx("div", {
    className: "container"
  }, Header_jsx("div", {
    className: "main-header"
  }, Header_jsx(components_Logo, null), Header_jsx(components_Nav, null), Header_jsx(ButtonGroup, null, Header_jsx(WrapperButtonApp, null, Header_jsx(AppLink["a" /* default */], null)), Header_jsx(components_MenuMobile, null))))));
}
const Header_GlobalStyle = external_styled_components_["createGlobalStyle"]`
  .header--active{
    background: linear-gradient(180deg, #020c1d95 65%, transparent);
  }
  .header--nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.5s;
    /* font-family: sans-serif; */
  }
`;
const WrapperButtonApp = external_styled_components_default.a.div`
  max-width: 200px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const ButtonGroup = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
`;

/***/ })

};;