exports.ids = [35];
exports.modules = {

/***/ "L9V2":
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

// CONCATENATED MODULE: ./client/components/API/components/Banner.jsx
var __jsx = external_react_default.a.createElement;




const Banner = () => {
  return __jsx(WrapperBanner, null, __jsx(WrapContainer, null, __jsx(WrapImg, null, __jsx("img", {
    src: "../images/api-page/api-space.png",
    alt: "forbitspace foundation"
  })), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Title, null, "API"), __jsx(SubText, null, "The forbitspace API is a cutting-edge discovery and routing custodial asset exchanges at the best rates on the biggest Ethereum, Binance Smart Chain and Polygon (Matic).", __jsx("br", null), "It finds the most efficient token swap paths, splitting swaps protocols and even different market depths within one protocol.", __jsx("br", null), "Who can integrate our forbitspace API?"), __jsx(WrapIntegration, null, __jsx(TopWrap, null, __jsx(SubContent, null, __jsx("img", {
    src: "../images/api-page/api-wallet.png",
    alt: ""
  }), " Wallets"), __jsx(SubContent, null, __jsx("img", {
    src: "../images/api-page/api-dapps.png",
    alt: ""
  }), " dApps"), __jsx(SubContent, null, __jsx("img", {
    src: "../images/api-page/api-swap.png",
    alt: ""
  }), " any platform that support swaps")), __jsx(BottomWrap, null, __jsx(ButtonWrap, null, "Start your integration"))))));
};

const WrapperBanner = external_styled_components_default.a.div`
  padding: 10vh 0 0;
  @media (max-width: 576px) {
    padding: 100px 0;
    text-align: left;
  }
`;
const WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapImg = external_styled_components_default.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  :first-child {
    width: 33%;
  }
  @media (max-width: 768px) {
    /* width: 100%; */
    /* min-height: 75vh; */
    justify-content: center;
    :first-child {
      width: 100%;
    }
  }
`;
const Content = external_styled_components_default.a.div`
  margin-left: 100px;
  padding: 0 10px;
  text-align: right;
  width: 60%;
  align-self: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
    padding: 10px;
  }
`;
const Title = external_styled_components_default.a.h2`
  font-size: 5rem;
  font-weight: 600;
  line-height: 1;
  img {
    max-width: 400px;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 2px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
    img {
      max-width: 200px;
    }
  }
`;
const SubText = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  font-family: sans-serif;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
const WrapIntegration = external_styled_components_default.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const TopWrap = external_styled_components_default.a.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  @media (max-width: 576px) {
    width: 100%;
    padding: 8px;
    flex-direction: column;
    gap: 10px;
  }
`;
const SubContent = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 25px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
const BottomWrap = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ButtonWrap = external_styled_components_default.a.div`
  padding: 5px 30px;
  margin-top: 30px;
  border-radius: 12px;
  transform: scale(0.98);
  transition: transform 0.25s ease 0s;
  box-sizing: border-box;
  text-align: center;
  font-weight: 500;
  font-size: 1.125rem;
  text-decoration: none;
  cursor: pointer;
  color: white;
  background: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  );
  transition: 0.2s;

  /* :hover { */
  color: #fff;
  background-size: 200%;
  background-position: right;
  /* } */
`;
/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/API/index.jsx
var API_jsx = external_react_default.a.createElement;





const API = () => {
  return API_jsx(WrapperBackground, null, API_jsx(WrapContent, null, API_jsx(components_Banner, null), API_jsx(BackgroundImg, {
    src: "./images/background-line-min.png"
  })), API_jsx(Footer["a" /* default */], null));
};

const WrapperBackground = external_styled_components_default.a.section`
  position: relative;
  overflow-x: hidden;
  background-size: auto;
`;
const WrapContent = external_styled_components_default.a.div`
  min-height: calc(100vh - 330px);
`;
const BackgroundImg = external_styled_components_default.a.img`
  position: fixed;
  top: 0;
  left: 0;
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
/* harmony default export */ var components_API = __webpack_exports__["default"] = (API);

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