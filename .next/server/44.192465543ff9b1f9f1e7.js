exports.ids = [44];
exports.modules = {

/***/ "1DnQ":
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

// CONCATENATED MODULE: ./client/components/SelfCustody/components/Banner.jsx
var __jsx = external_react_default.a.createElement;




const Banner = () => {
  return __jsx(BoxSection, null, __jsx(WrapContainer, null, __jsx(WrapImg, null, __jsx(ImgHalf, null, __jsx("img", {
    src: "../images/self-page/wallet-01.png",
    alt: ""
  }))), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Title, null, "Self-custody"), __jsx(SubText, null, "In the world DeFi, your money becomes empowered. You can store it, lend it, trade it, zap it, and track it in real-time. It\u2019s a bit like a game but at the heart of this is more control, aka self-custody. We clearly see the importance of self-custody refers to individuals being 100% in control of their assets, similar to cash. Except this is digital cash, and it\u2019s not dependent on a bank or other entity to issue it or verify transactions. This is precisely why blockchain was such a huge innovation starting with Bitcoin then Ethereum and more crypto assets in the different blockchains."))));
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
  justify-content: center;
  gap: 2rem;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = external_styled_components_default.a.div`
  width: 30%;
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
  width: 45%;
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
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const SubText = external_styled_components_default.a.p`
  font-size: 1rem;
  font-weight: 300;
  font-family: sans-serif;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
/* harmony default export */ var components_Banner = (Banner);
// CONCATENATED MODULE: ./client/components/SelfCustody/components/MobileWallet.jsx
var MobileWallet_jsx = external_react_default.a.createElement;




const MobileWallet = () => {
  return MobileWallet_jsx(MobileWallet_BoxSection, null, MobileWallet_jsx(MobileWallet_WrapContainer, {
    className: "container__bridge"
  }, MobileWallet_jsx(MobileWallet_Content, null, MobileWallet_jsx(Text, null, "Bridge Space"), MobileWallet_jsx(MobileWallet_SubText, null, " ", MobileWallet_jsx("span", null, "forbitspace"), " will have extended the Cross-Chain Bridge, allowing users to swap tokens on different blockchains easily and conveniently with the release of Bridge Space Cross-Chain Bridge currently supports on different blockchain Bridge Space is a blockchain bridge that enables users to access the benefits of different blockchain technologies without having to choose between platforms. This not only helps take pressure off of Ethereum, but This is also particularly important as congestion issues persist on Ethereum, where the most popular DeFi network.")), MobileWallet_jsx(MobileWallet_WrapImg, null, MobileWallet_jsx(MobileWallet_ImgHalf, {
    className: "img__bridge"
  }, MobileWallet_jsx("img", {
    src: "../images/self-page/bridge.png",
    alt: ""
  })))), MobileWallet_jsx(MobileWallet_WrapContainer, null, MobileWallet_jsx(MobileWallet_WrapImg, null, MobileWallet_jsx(MobileWallet_ImgHalf, null, MobileWallet_jsx("img", {
    src: "../images/self-page/phone-1.png",
    alt: ""
  }))), MobileWallet_jsx(MobileWallet_Content, null, MobileWallet_jsx(TitleText, null, "Mobile wallet"), MobileWallet_jsx(MobileWallet_SubText, null, "Mobile wallets are apps on your iOS or Android phone, convenient because they are always with you. Usually, the private key is generated and stored on your device with backup and recovery options, depending on the app."))), MobileWallet_jsx(WrapWallet, null, MobileWallet_jsx(MobileWallet_Content, null, MobileWallet_jsx(TitleText, null, "Smart contract wallet"), MobileWallet_jsx(MobileWallet_SubText, null, "A smart contract is a program deployed to disparate blockchains like Ethereum, Binance Smart Chain, and has a mobile app or desktop interface. Smart contract wallets are the most functional wallets because they can be programmed in many ways and have additional security measures like daily spend limits, further approval from a trusted party or another wallet if transactions are above a certain limit, and advanced recovery mechanisms. Private keys are generated on the mobile device or browser.")), MobileWallet_jsx("img", {
    src: "../images/self-page/wallett1-02.png",
    alt: ""
  })));
};

const MobileWallet_BoxSection = external_styled_components_default.a.section`
  position: relative;
  @media (min-width: 768px) {
    padding: 25px 0;
  }

  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const MobileWallet_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  @media (min-width: 1400px) {
    max-width: 100% !important;
  }
  @media (min-width: 3650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 1rem;
    &.container__bridge {
      flex-direction: column;
    }
  }
`;
const MobileWallet_WrapImg = external_styled_components_default.a.div`
  width: 20%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const MobileWallet_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: center;
  img {
    /* width: 50%; */
    height: auto;
  }
  &.img__bridge {
    text-align: center;
    img {
      /* width: 60%; */
      height: auto;
    }
  }
  @media (max-width: 768px) {
    text-align: center !important;
    img {
      width: 60%;
      height: auto;
    }
  }
`;
const MobileWallet_Content = external_styled_components_default.a.div`
  margin-left: 80px;
  width: 40%;
  text-align: left;
  max-width: 750px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
const Text = external_styled_components_default.a.p`
  font-size: 3rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
  }
`;
const TitleText = external_styled_components_default.a.p`
  font-size: 1.4rem;
  font-weight: bold;
`;
const MobileWallet_SubText = external_styled_components_default.a.p`
  font-size: 1rem;
  font-weight: 300;
  font-family: sans-serif;
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
const WrapWallet = external_styled_components_default.a.div`
  margin-top: 4rem;
  width: 100%;
  padding: 0 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  img {
    width: 35%;
    max-width: 760px;
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;
/* harmony default export */ var components_MobileWallet = (MobileWallet);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/SelfCustody/index.jsx
var SelfCustody_jsx = external_react_default.a.createElement;



 // import Numbers from "./components/Numbers";
// import Mission from "./components/Mission";
// import Grant from "./components/Grant";
// import Timeline from "./components/Timeline";



const SelfCustody = () => {
  return SelfCustody_jsx(WrapperBackground, null, SelfCustody_jsx(components_Banner, null), SelfCustody_jsx(components_MobileWallet, null), SelfCustody_jsx(BackgroundImg, {
    src: "./images/background-line-min.png"
  }), SelfCustody_jsx(Footer["a" /* default */], null));
};

const WrapperBackground = external_styled_components_default.a.section`
  position: relative;
  overflow-x: hidden;
  background-size: auto;
`;
const BackgroundImg = external_styled_components_default.a.img`
  position: fixed;
  top: -100vh;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 200vh;
  opacity: 0.6;
  z-index: -1;
  @media (max-width: 576px) {
    position: fixed;
  }
`;
/* harmony default export */ var components_SelfCustody = __webpack_exports__["default"] = (SelfCustody);

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