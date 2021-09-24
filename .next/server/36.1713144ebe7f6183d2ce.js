exports.ids = [36];
exports.modules = {

/***/ "1L5/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./client/components/About/components/Banner.jsx
var __jsx = external_react_default.a.createElement;




const Banner = () => {
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  return __jsx(BoxSection, null, __jsx(WrapContainer, null, __jsx(WrapImg, null, __jsx(ImgHalf, null, __jsx("img", {
    src: "../images/about-page/17-9-04.png",
    alt: ""
  }))), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Title, null, "Market"), __jsx(SubText, null, "As the DeFi market continues to boom and expands, new solutions emerge to simplify user navigation and improve user experiences. One of such recent innovations is the launch of DEX aggregators \u2013 platforms that unify numerous DEXs in the same merge space and allow users to conduct operations on all covered platforms without the need to create separate accounts and wallets."), open ? __jsx(external_react_default.a.Fragment, null, __jsx(SubText, null, "While having a wide selection of different protocols is beneficial to diversify investments and getting the best yield rates from crypto lending, efficiency and convenience are hindered since the financial information is spread vastly across multiple protocols. That\u2019s where DeFi aggregators thrive."), __jsx(SubText, null, "forbitspace DEXs aggregator utilizes the power of blockchain to bring together trades across various decentralized finance platforms (DeFi) into one space, saving users time and increasing efficiency for cryptocurrency trades. We siphon the very best prices from DEXs, swap services, and liquidity pools into one place so that users can optimize their trades.")) : __jsx(external_react_default.a.Fragment, null), __jsx(SubText, {
    onClick: () => setOpen(!open),
    className: "toggle__btn"
  }, open ? "Hide" : "Read more..."))));
};

const BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 2vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = external_styled_components_default.a.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 60%;
  }
`;
const ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const Content = external_styled_components_default.a.div`
  /* margin-left: 80px; */
  width: 60%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const Title = external_styled_components_default.a.h2`
  font-size: 55px;
  line-height: 1;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 39px;
    letter-spacing: 2px;
  }
`;
const SubText = external_styled_components_default.a.p`
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: right;
  &.toggle__btn {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    &.toggle__btn {
      font-size: 12px;
    }
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/About/components/RoadMap.jsx
var RoadMap_jsx = external_react_default.a.createElement;




const RoadMap = () => {
  return RoadMap_jsx(RoadMap_BoxSection, null, RoadMap_jsx(RoadMap_WrapContainer, null, RoadMap_jsx(RoadMap_Content, {
    className: "title-banner text-dark text-visi"
  }, RoadMap_jsx(RoadMap_Title, null, "Road map")), RoadMap_jsx(RoadMap_WrapImg, null, RoadMap_jsx(RoadMap_ImgHalf, null, RoadMap_jsx("img", {
    src: "../images/about-page/roadmap.png",
    alt: ""
  })))));
};

const RoadMap_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 2vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const RoadMap_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-direction: column;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 576px) {
    align-items: center;
  }
`;
const RoadMap_WrapImg = external_styled_components_default.a.div`
  width: 100%;
`;
const RoadMap_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: center;
  img {
    width: 100%;
    height: auto;
    max-width: 900px;
  }
`;
const RoadMap_Content = external_styled_components_default.a.div`
  margin-left: 80px;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const RoadMap_Title = external_styled_components_default.a.h2`
  font-size: 55px;
  line-height: 1;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 30px;
    letter-spacing: 2px;
  }
`;
/* harmony default export */ var components_RoadMap = (RoadMap);
// CONCATENATED MODULE: ./client/components/About/components/AboutUs.jsx
var AboutUs_jsx = external_react_default.a.createElement;




const AboutUs = () => {
  return AboutUs_jsx(AboutUs_BoxSection, null, AboutUs_jsx(GlobalStyle, null), AboutUs_jsx(AboutUs_WrapContainer, null, AboutUs_jsx(AboutUs_Content, {
    className: "title-banner text-dark text-visi"
  }, AboutUs_jsx(AboutUs_Title, null, "About us"), AboutUs_jsx(AboutUs_SubText, null)), AboutUs_jsx(AboutUs_WrapImg, null, AboutUs_jsx(AboutUs_ImgHalf, null, AboutUs_jsx("img", {
    src: "../images/about-page/team.png",
    alt: ""
  })))));
};

const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  body.dark-mode{
    /* background-image: radial-gradient(#00284b, #030d20 67%); */
  }
`;
const AboutUs_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 4vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const AboutUs_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;

  @media (max-width: 768px) {
  }
`;
const AboutUs_WrapImg = external_styled_components_default.a.div`
  width: 65%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -70px;

  @media (max-width: 768px) {
    width: 60%;
  }
`;
const AboutUs_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const AboutUs_Content = external_styled_components_default.a.div`
  margin-left: 80px;
  width: 35%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const AboutUs_Title = external_styled_components_default.a.h2`
  font-size: 55px;
  line-height: 1;
  font-weight: 500;
  text-align: right;
  @media (max-width: 576px) {
    font-size: 39px;
    letter-spacing: 2px;
  }
`;
const AboutUs_SubText = external_styled_components_default.a.p`
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  /* max-width: 600px; */
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
/* harmony default export */ var components_AboutUs = (AboutUs);
// CONCATENATED MODULE: ./client/components/About/index.jsx
var About_jsx = external_react_default.a.createElement;


 // import MobileWallet from "./components/MobileWallet";
// import Numbers from "./components/Numbers";





const Foundation = () => {
  return About_jsx(WrapperBackground, null, About_jsx(WrapContent, null, About_jsx(components_AboutUs, null), About_jsx(components_Banner, null), About_jsx(components_RoadMap, null), About_jsx(BackgroundImg, {
    src: "./images/background-line-min.png"
  })), About_jsx(Footer["a" /* default */], null));
};

const WrapperBackground = external_styled_components_default.a.section`
  position: relative;
  overflow-x: hidden;
  background-size: auto;
`;
const WrapContent = external_styled_components_default.a.div`
  @media (min-width: 1440px) {
    min-height: 100vh;
  }
`;
const BackgroundImg = external_styled_components_default.a.img`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  /* height: calc(100% + 100vh); */
  min-height: 100vh;
  opacity: 0.6;
  z-index: -1;
  @media (max-width: 576px) {
    position: fixed;
  }
`;
/* harmony default export */ var About = __webpack_exports__["default"] = (Foundation);

/***/ }),

/***/ "yZXQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./client/components/Footer/constants.js
const DataSocialLinkFooter = [{
  link: "",
  url: "./images/icon-social-footer/1.svg"
}, {
  link: "",
  url: "./images/icon-social-footer/2.svg"
}, {
  link: "",
  url: "./images/icon-social-footer/3.svg"
}, {
  link: "",
  url: "./images/icon-social-footer/4.svg"
}, {
  link: "",
  url: "./images/icon-social-footer/5.svg"
}, {
  link: "",
  url: "./images/icon-social-footer/6.svg"
}];
const navContent = [{
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
  nav: "Governance",
  contents: [{
    link: "/token",
    content: "FBS Token"
  }, {
    link: "/dao",
    content: "Space Dao"
  }, {
    link: "",
    content: "Pools",
    disable: true
  }, {
    link: "",
    content: "Farming",
    disable: true
  }, {
    link: "",
    content: "Stacking",
    disable: true
  }]
}, {
  nav: "Developers",
  contents: [{
    link: "",
    content: "Documentation"
  }, {
    link: "",
    content: "Whitepaper",
    disable: true
  }, {
    link: "",
    content: "Github"
  }, {
    link: "",
    content: "Audits",
    disable: true
  }, {
    link: "",
    content: "Bug bounty",
    disable: true
  }]
}, {
  nav: "Self-custody",
  link: "/selfcustody",
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
  disable: true,
  link: "/API",
  contents: [// {
    //   link: "",
    //   content: "Term of Use",
    // },
    // {
    //   link: "",
    //   content: "Privacy Policy",
    // },
  ]
}, {
  nav: "More",
  contents: [{
    link: "/about",
    content: "About"
  }, {
    link: "",
    content: "Blog"
  }, {
    link: "",
    content: "Help Center"
  }]
}];
// CONCATENATED MODULE: ./client/components/Footer/index.jsx
var __jsx = external_react_default.a.createElement;





const Index = () => {
  return __jsx("footer", {
    className: "footer"
  }, __jsx(FooterMenu, null, __jsx(external_reactstrap_["Container"], null, __jsx(ListMenu, null, navContent.map((item, index) => __jsx("ul", {
    className: "text-visi"
  }, __jsx(TitleFooter, null, item.nav), item.contents.map((item, index) => __jsx("li", null, !item.disable ? __jsx("a", {
    href: item.link,
    target: "_blank"
  }, item.content) : __jsx(Blank, {
    href: "/"
  }, item.content))))), __jsx("ul", {
    className: "text-visi"
  }, __jsx(TitleFooter, {
    size: "16px"
  }, "Subscribe to our newsletter for updates"), __jsx("form", {
    action: ""
  }, __jsx(WrapperInput, null, __jsx(Input, {
    type: "text",
    className: "text bg-input-dark",
    placeholder: "your@email.com",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
    required: true
  })), __jsx("button", {
    type: "submit"
  }, __jsx("i", {
    className: "fa fa-arrow-right"
  }))), __jsx(Copyright, {
    className: "text-dark"
  }, "\xA9 2021 forbitspace"), __jsx(SocialLink, null, DataSocialLinkFooter.map((item, index) => {
    return __jsx(Link, {
      href: item.link,
      target: "_blank",
      key: index
    }, __jsx(Icon, {
      src: item.url,
      alt: "icon social media"
    }));
  })))))), __jsx(BackgroundFooter, null));
};

const BackgroundFooter = external_styled_components_default.a.div`
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
`;
const Link = external_styled_components_default.a.a`
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;
const Icon = external_styled_components_default.a.img`
  max-width: 20px;
  width: 100%;
  transition: all ease-in-out 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;
const SocialLink = external_styled_components_default.a.div``;
const FooterMenu = external_styled_components_default.a.section`
  position: relative;
  padding: 30px 0 0;
  overflow: hidden;

  @media (max-width: 576px) {
    padding: 40px 0;

    &:after {
      content: none;
    }
  }
`;
const ListMenu = external_styled_components_default.a.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 25px;

  ul {
    padding-left: 0;
    width: calc(100% / 7);
    // text-align:right;

    form {
      display: flex;
      align-items: center;
      margin-bottom: 25px;

      input {
      }

      button {
        width: 60px;
        height: 30px;
        border: none;
        outline: none;
        background-image: linear-gradient(
          17deg,
          #00ff36 -68%,
          #00ee57 -43%,
          #00c5ad 14%,
          #00a4f1 57%,
          #0b18fc 154%,
          #0d00ff 171%
        );
        border-radius: 8px;
        transition: all 0.5s ease-in-out;
        background-size: 200%;
        background-position: 99%;

        i {
          color: #fff;
          font-size: 12px;
        }

        &:hover {
          background-size: 200%;
          background-position: right;
        }
      }
    }

    li {
      font-size: 12px;
      font-weight: 300;
      a {
        text-decoration: none;
        color: #4e4f50;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 1024px) {
      width: calc(100% / 6);
      margin-right: 0;
      text-align: left;
      form {
        justify-content: center;
      }
      :last-child {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 768px) {
      width: calc(100% / 6);
      margin-right: 0;
      text-align: left;
      form {
        justify-content: center;
      }
      :last-child {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 576px) {
      width: 50%;
    }
  }
`;
const Blank = external_styled_components_default.a.div`
  font-size: 12px;
`;
const TitleFooter = external_styled_components_default.a.h3`
  font-size: 16px;
  font-size: ${props => props.size};
  margin-bottom: 10px;
  color: #182239;
  font-weight: bold;
`;
const Copyright = external_styled_components_default.a.p`
  font-size: 14px;
  font-weight: 300;
`;
const Input = external_styled_components_default.a.input`
  width: 100%;
  height: 30px;
  margin-right: 5px;
  font-family: "Averta";
  font-size: 14px;
  padding: 10px 15px;
  line-height: 20px;
  outline: 0;
  transition: all 0.3s ease-in-out;
  background: transparent;
  border-radius: 10px;
  position: relative;
  border: none;
  background: #cff3f4;
  border: 1px solid #0047b2;
`;
const WrapperInput = external_styled_components_default.a.div`
  position: relative;
  border-radius: 10px;
  margin-right: 5px;
`;
const BorderInput = external_styled_components_default.a.div`
  position: absolute;
  z-index: -1;
  background: white;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border-radius: 11px;
  background-color: #0047b2;
  /* background-image: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  ); */
`;
/* harmony default export */ var Footer = __webpack_exports__["a"] = (Index);

/***/ })

};;