exports.ids = [29];
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
  return __jsx(BoxSection, null, __jsx(WrapContainer, null, __jsx(WrapImg, null, __jsx(ImgHalf, null, __jsx("img", {
    src: "../images/about-page/crypto-space-02.png",
    alt: ""
  }))), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Title, null, "About"), __jsx(SubText, null, "As the DeFi market continues to boom and expands, new solutions emerge to simplify user navigation and improve user experiences. One of such recent innovations is the launch of DEX aggregators \u2013 platforms that unify numerous DEXs in the same merge space and allow users to conduct operations on all covered platforms without the need to create separate accounts and wallets.", __jsx("br", null), "While having a wide selection of different protocols is beneficial to diversify investments and getting the best yield rates from crypto lending, efficiency and convenience are hindered since the financial information is spread vastly across multiple protocols. That\u2019s where DeFi aggregators thrive.", __jsx("br", null), "forbitspace DEXs aggregator utilizes the power of blockchain to bring together trades across various decentralized finance platforms (DeFi) into one space, saving users time and increasing efficiency for cryptocurrency trades. We siphon the very best prices from DEXs, swap services, and liquidity pools into one place so that users can optimize their trades."))));
};

const BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 10vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
const WrapImg = external_styled_components_default.a.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
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
  margin-left: 80px;
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-size: 1rem;
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
/* harmony default export */ var components_Banner = (Banner);
// CONCATENATED MODULE: ./client/components/About/components/Numbers.jsx
var Numbers_jsx = external_react_default.a.createElement;




const Numbers = () => {
  return Numbers_jsx(Numbers_BoxSection, null, Numbers_jsx(Numbers_WrapContainer, null, Numbers_jsx(WrapContent, null, Numbers_jsx(BoxContent, null, Numbers_jsx(Head, null, "1,3M"), Numbers_jsx(Text, null, "Total swaps")), Numbers_jsx(BoxContent, null, Numbers_jsx(Head, null, "1,5B"), Numbers_jsx(Text, null, "Available liquidity")), Numbers_jsx(BoxContent, null, Numbers_jsx(Head, null, "72+"), Numbers_jsx(Text, null, "Liquidity sources")), Numbers_jsx(BoxContent, null, Numbers_jsx(Head, null, "<500ms"), Numbers_jsx(Text, null, "Response time")))));
};

const Numbers_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 10vh 0 20px;
  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const Numbers_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapContent = external_styled_components_default.a.div`
  width: 100%;
  max-width: 1320px;
  padding: 25px 60px;
  border-radius: 22px;
  background-image: linear-gradient(
    to right,
    #020a1a 0%,
    #012341 50%,
    #020a1a 100%
  );
  /* border: 2px solid #fff; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  ::after {
    content: "";
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background-image: linear-gradient(
      to right,
      #0168ff 0%,
      rgba(1, 104, 255, 0) 50%,
      #0ff 100%
    );
    border-radius: 22px;
    z-index: -1;

    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
    margin: 1.5rem 0;
    flex-wrap: wrap;
    ::after {
      content: "";
      width: calc(100% + 2px);
      height: calc(100% + 2px);

      position: absolute;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
    }
  }
`;
const BoxContent = external_styled_components_default.a.div`
  width: 20%;
  padding: 10px 30px;
  text-align: center;
  @media (max-width: 576px) {
    width: 50%;
  }
`;
const Head = external_styled_components_default.a.div`
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
  }
`;
const Text = external_styled_components_default.a.div`
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
  }
`;
/* harmony default export */ var components_Numbers = (Numbers);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/About/components/RoadMap.jsx
var RoadMap_jsx = external_react_default.a.createElement;




const RoadMap = () => {
  return RoadMap_jsx(RoadMap_BoxSection, null, RoadMap_jsx(RoadMap_WrapContainer, null, RoadMap_jsx(RoadMap_Content, {
    className: "title-banner text-dark text-visi"
  }, RoadMap_jsx(RoadMap_Title, null, "Road Map")), RoadMap_jsx(RoadMap_WrapImg, null, RoadMap_jsx(RoadMap_ImgHalf, null, RoadMap_jsx("img", {
    src: "../images/about-page/roadmap.png",
    alt: ""
  })))));
};

const RoadMap_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 10vh 0 0;
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
// CONCATENATED MODULE: ./client/components/About/index.jsx
var About_jsx = external_react_default.a.createElement;


 // import MobileWallet from "./components/MobileWallet";





const Foundation = () => {
  return About_jsx(WrapperBackground, null, About_jsx(components_Banner, null), About_jsx(components_Numbers, null), About_jsx(components_RoadMap, null), About_jsx(BackgroundImg, {
    src: "./images/background-line-min.png"
  }), About_jsx(Footer["a" /* default */], null));
};

const WrapperBackground = external_styled_components_default.a.section`
  position: relative;
  overflow-x: hidden;
  /* background-image: url("./images/background-line-min.png"); */
  background-size: auto;
`;
const Container = external_styled_components_default.a.div`
  @media (min-width: 1440px) {
    &.container {
      max-width: 90% !important;
    }
  }
`;
const BackgroundImg = external_styled_components_default.a.img`
  position: absolute;
  top: -100vh;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100% + 100vh);
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
  url: "./images/icon-social-footer/1.svg"
}, {
  url: "./images/icon-social-footer/2.svg"
}, {
  url: "./images/icon-social-footer/3.svg"
}, {
  url: "./images/icon-social-footer/4.svg"
}, {
  url: "./images/icon-social-footer/5.svg"
}, {
  url: "./images/icon-social-footer/6.svg"
}];
const navContent = [{
  nav: "Space Trade",
  contents: [{
    link: "",
    content: "Aggregation"
  }, {
    link: "",
    content: "Liquidity Protocol"
  }, {
    link: "",
    content: "Limit Order Protocol"
  }, {
    link: "",
    content: "Derivative Protocol"
  }]
}, {
  nav: "Governance",
  contents: [{
    link: "",
    content: "FBS Token"
  }, {
    link: "",
    content: "Space Dao Pools"
  }, {
    link: "",
    content: "Farming"
  }, {
    link: "",
    content: "Stacking"
  }]
}, {
  nav: "Developers",
  contents: [{
    link: "",
    content: "Documentation"
  }, {
    link: "",
    content: "Whitepaper"
  }, {
    link: "",
    content: "Github"
  }, {
    link: "",
    content: "Audits"
  }, {
    link: "",
    content: "Bug bounty"
  }]
}, {
  nav: "Self-custody",
  contents: [{
    link: "",
    content: "Mobile wallet"
  }, {
    link: "",
    content: "Smart contract wallet"
  }]
}, {
  nav: "Support",
  contents: [{
    link: "",
    content: "Help Center"
  }, {
    link: "",
    content: "Term of Use"
  }, {
    link: "",
    content: "Privacy Policy"
  }]
}, {
  nav: "More",
  contents: [{
    link: "",
    content: "About"
  }, {
    link: "",
    content: "Blog"
  }]
}];
// CONCATENATED MODULE: ./client/components/Footer/index.jsx
var __jsx = external_react_default.a.createElement;





const Index = () => {
  return __jsx("footer", {
    className: "footer"
  }, __jsx(FooterMenu, null, __jsx(external_reactstrap_["Container"], null, __jsx(ListMenu, null, navContent.map((item, index) => __jsx("ul", {
    className: "text-visi"
  }, __jsx(TitleFooter, null, item.nav), item.contents.map((item, index) => __jsx("li", null, __jsx("a", {
    href: item.link,
    target: "_blank"
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
  padding: 100px 0 0;
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
        background-position: right;

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