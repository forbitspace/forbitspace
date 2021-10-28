exports.ids = [35];
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
  return __jsx(BoxSection, {
    open: open
  }, __jsx(WrapContainer, null, __jsx(WrapImg, null, __jsx(ImgHalf, null, __jsx("img", {
    src: "../images/about-page/crypto-space-min.png",
    alt: ""
  }))), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Text, null, "Market"), __jsx(SubText, null, "As the DeFi market continues to boom and expands, new solutions emerge to simplify user navigation and improve user experiences. One of such recent innovations is the launch of DEX aggregators \u2013 platforms that unify numerous DEXs in the same merge space and allow users to conduct operations on all covered platforms without the need to create separate accounts and wallets."), open ? __jsx(external_react_default.a.Fragment, null, __jsx(SubText, null, "While having a wide selection of different protocols is beneficial to diversify investments and getting the best yield rates from crypto lending, efficiency and convenience are hindered since the financial information is spread vastly across multiple protocols. That\u2019s where DeFi aggregators thrive."), __jsx(SubText, null, "forbitspace DEXs aggregator utilizes the power of blockchain to bring together trades across various decentralized finance platforms (DeFi) into one space, saving users time and increasing efficiency for cryptocurrency trades. We siphon the very best prices from DEXs, swap services, and liquidity pools into one place so that users can optimize their trades.")) : __jsx(external_react_default.a.Fragment, null), __jsx(SubText, {
    onClick: () => setOpen(!open),
    className: "toggle__btn"
  }, open ? "Hide" : "Read more..."))));
};

const BoxSection = external_styled_components_default.a.section`
  position: relative;
  padding: 2vh 0 0;
  margin-top: ${({
  open
}) => open ? "0" : "-6rem"};
  @media (max-width: 1024px) {
    padding-top: 20px;
    margin-top: 0;
  }
`;
const WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
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
const Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
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
    font-size: 16px;
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
  }, RoadMap_jsx(RoadMap_Text, null, "Road map")), RoadMap_jsx(RoadMap_WrapImg, null, RoadMap_jsx(RoadMap_ImgHalf, null, RoadMap_jsx("img", {
    src: "../images/about-page/roadmap.png",
    alt: ""
  })))));
};

const RoadMap_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 2vh 0 1vh;
  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const RoadMap_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-direction: column;
  :last-child {
    padding: 4rem 0;
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
    max-width: 1200px;
  }
`;
const RoadMap_Content = external_styled_components_default.a.div`
  /* margin-left: 80px; */
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
const RoadMap_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
/* harmony default export */ var components_RoadMap = (RoadMap);
// CONCATENATED MODULE: ./client/components/About/components/AboutUs.jsx
var AboutUs_jsx = external_react_default.a.createElement;




const AboutUs = () => {
  return AboutUs_jsx(AboutUs_BoxSection, null, AboutUs_jsx(AboutUs_WrapContainer, null, AboutUs_jsx(AboutUs_Content, {
    className: "title-banner text-dark text-visi"
  }, AboutUs_jsx(AboutUs_Text, null, "About us"), AboutUs_jsx(AboutUs_SubText, null, "We are a team that combines experienced professionals across financial markets, and a young, dynamic, open-minded, and strong focused on research in the blockchain and decentralized finance ecosystem aim to bring DeFi space to the wider community.")), AboutUs_jsx(AboutUs_WrapImg, null, AboutUs_jsx(AboutUs_ImgHalf, null, AboutUs_jsx("img", {
    src: "../images/about-page/team-min.png",
    alt: ""
  })))));
};

const AboutUs_BoxSection = external_styled_components_default.a.section`
  position: relative;
  padding: 6vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
  }
`;
const AboutUs_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const AboutUs_WrapImg = external_styled_components_default.a.div`
  width: 55%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

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
    transform: scale(1.4);
    transform-origin: top;
  }
`;
const AboutUs_Content = external_styled_components_default.a.div`
  /* margin-left: 80px; */
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
const AboutUs_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const AboutUs_SubText = external_styled_components_default.a.p`
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ var components_AboutUs = (AboutUs);
// CONCATENATED MODULE: ./client/components/About/components/BallonCrypto.jsx
var BallonCrypto_jsx = external_react_default.a.createElement;




const BallonCrypto = () => {
  return BallonCrypto_jsx(BallonCrypto_BoxSection, null, BallonCrypto_jsx(BallonCrypto_WrapContainer, null, BallonCrypto_jsx(WrapText, null, BallonCrypto_jsx(BallonCrypto_Text, null, "What We Do"), BallonCrypto_jsx(BallonCrypto_SubText, null, "\u201CWe believe that crypto is just getting started. We have an optimistic view of the future and believe in crypto\u2019s potential and the use of the blockchain as the main underlying technology.", BallonCrypto_jsx("br", null), BallonCrypto_jsx("br", null), "To succeed in this nascent and accelerating space requires active management and deep, multi-disciplinary knowledge across financial markets, economics, early-stage investing, community building, and technology \u2014 all qualities that we believe the team always positive energy continuous learning."))), BallonCrypto_jsx(BallonCrypto_WrapContainer, null, BallonCrypto_jsx(BallonCrypto_Content, {
    className: "title-banner text-dark text-visi"
  }, BallonCrypto_jsx(BallonCrypto_SubText, {
    className: "w-90"
  }, "We are determined to co-create solutions and improve scaling solutions to enable the system to expand. A scaling solution is a method of enable a system to expand."), BallonCrypto_jsx(BallonCrypto_Text, null, "Core Value"), BallonCrypto_jsx(BallonCrypto_SubText, {
    className: "w-98"
  }, "We build and leverage technology to decode market dynamics.", BallonCrypto_jsx("br", null), BallonCrypto_jsx("br", null), "We continuously seek to harness novel technology systems and software across our firm\u2014from risk management, trade execution, custody, and day-to-day operations. We thrive as problem solvers and emphasize analytical rigor crypto-economic protocols.", BallonCrypto_jsx("br", null), BallonCrypto_jsx("br", null), "System Approach We work synergistically to identify opportunities, build technology, and manage risk. We believe in value investments using a rigorous institutional due diligence approach and bring the deep domain expertise of our investment team. Scalability, raising the Ceiling It\u2019s not about the destination, It\u2019s about a user experience journey and provides simple and intuitive products that anyone can use."), BallonCrypto_jsx(BallonCrypto_Text, null, "Principles"), BallonCrypto_jsx(BallonCrypto_Text, {
    className: "sub-header"
  }, "Independent Thinking"), BallonCrypto_jsx(BallonCrypto_SubText, null, "Our vision is to be limitless. We aim to be an important part of the defi space that is creates transparency for a global economy built on the blockchain of the decentralized financial space.")), BallonCrypto_jsx(BallonCrypto_WrapImg, null, BallonCrypto_jsx(BallonCrypto_ImgHalf, null, BallonCrypto_jsx("img", {
    src: "../images/about-page/abloutus-min.png",
    alt: ""
  })))), BallonCrypto_jsx(BallonCrypto_WrapContainer, null, BallonCrypto_jsx(BallonCrypto_Content, null, BallonCrypto_jsx(BallonCrypto_Text, {
    className: "sub-header"
  }, "Long Term Compass share "), BallonCrypto_jsx(BallonCrypto_SubText, null, "We aim to build an enduring technology finance firm open up the world to newfound . We are radically optimistic about crypto\u2019s potential to restore trust and enable new kinds of governance where communities collectively make important decisions about how networks evolve strategic relationships and sustainable growth.", BallonCrypto_jsx("br", null), BallonCrypto_jsx("br", null), "While having a wide selection of different protocols is beneficial to diversify investments and getting the best yield rates from crypto lending, efficiency and convenience are hindered since the financial information is spread vastly across multiple protocols. That\u2019s where DeFi aggregators thrive.", BallonCrypto_jsx("br", null), BallonCrypto_jsx("br", null), BallonCrypto_jsx("span", null, "forbitspace"), " DEXs aggregator utilizes the power of blockchain to bring together trades across various decentralized finance platforms (DeFi) into one space, saving users time and increasing efficiency for cryptocurrency trades. We siphon the very best prices from DEXs, swap services, and liquidity pools into one place so that users can optimize their trades."))));
};

const BallonCrypto_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 2vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const BallonCrypto_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  :last-child {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const BallonCrypto_WrapImg = external_styled_components_default.a.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 60%;
  }
`;
const BallonCrypto_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
    transform: scale(1.6);
    transform-origin: left;
    margin: 0 0 0 -2rem;
  }
  @media (max-width: 1440px) {
    img {
      transform: scale(1.2);
    }
  }
  @media (max-width: 1024px) {
    img {
      transform: scale(1);
      margin: 0;
      transform-origin: unset;
    }
  }
`;
const WrapText = external_styled_components_default.a.div`
  width: 100%;
`;
const BallonCrypto_Content = external_styled_components_default.a.div`
  /* margin-left: 80px; */
  width: 60%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  :last-child {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const BallonCrypto_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  &.sub-header {
    font-size: 1.6rem;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const BallonCrypto_SubText = external_styled_components_default.a.p`
  font-size: 20px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: left;
  margin-bottom: 4rem;
  &.toggle__btn {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
  }
  &.w-72 {
    width: 72%;
  }

  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    margin-bottom: 2rem;
    width: 100% !important;
    &.toggle__btn {
      font-size: 12px;
    }
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ var components_BallonCrypto = (BallonCrypto);
// CONCATENATED MODULE: ./client/components/About/index.jsx
var About_jsx = external_react_default.a.createElement;


 // import MobileWallet from "./components/MobileWallet";
// import Numbers from "./components/Numbers";






const Foundation = () => {
  return About_jsx(WrapperBackground, null, About_jsx(WrapContent, null, About_jsx(components_AboutUs, null), About_jsx(components_Banner, null), About_jsx(components_BallonCrypto, null), About_jsx(components_RoadMap, null)), About_jsx(Footer["a" /* default */], null));
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
`; // const BackgroundImg = styled.img`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   /* height: calc(100% + 100vh); */
//   min-height: 100vh;
//   opacity: 0.6;
//   z-index: -1;
//   @media (max-width: 576px) {
//     position: fixed;
//   }
// `;

/* harmony default export */ var About = __webpack_exports__["default"] = (Foundation);

/***/ }),

/***/ "E249":
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__("90Kz")();

routes.add("/:username", "profilepage");

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

// EXTERNAL MODULE: ./client/components/route/index.js
var route = __webpack_require__("E249");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./client/components/Footer/constants.js
const DataSocialLinkFooter = [{
  link: "https://twitter.com/forbitspace",
  url: "../images/icon-social-footer/6.svg"
}, {
  link: "https://t.me/forbitspace",
  url: "../images/icon-social-footer/5.svg"
}, {
  link: "https://github.com/forbitspace",
  url: "../images/icon-social-footer/4.svg"
}, {
  link: "https://medium.com/@forbitspace",
  url: "../images/icon-social-footer/1.svg"
}, {
  link: "https://discord.com/invite/forbitspace",
  url: "../images/icon-social-footer/3.svg"
}, {
  link: "https://www.reddit.com/r/forbitspace/",
  url: "../images/icon-social-footer/2.svg"
}, {
  link: "https://www.youtube.com/channel/UCU9ejvfmL6p2Pdwp2-q163w",
  url: "../images/icon-social-footer/7.svg"
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
  //   link: "/token", //.../images/pdf/fbs-token-1.pdf
  //   content: "FBS Token",
  //   outLink: true,
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
  }, // {
  //   link: "",
  //   content: "Audits",
  //   disable: true,
  // },
  {
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
  nav: "Support",
  // disable: true,
  link: "",
  contents: [{
    link: "https://help.forbitspace.com/",
    content: "Help Center",
    outLink: true
  }, {
    link: "../documents/terms-of-service.pdf",
    content: "Term of Service",
    outLink: true
  }, {
    link: "../documents/privacy-policy.pdf",
    content: "Privacy Policy",
    outLink: true
  }]
}];
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./client/components/Footer/index.jsx
var __jsx = external_react_default.a.createElement;







const Index = () => {
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])("");

  const sendMail = async () => {
    await external_axios_default()({
      method: "GET",
      url: `http://192.168.31.132:1234/v1/mailer?email=${email}`
    });
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = () => {
    // console.log(validateEmail(email));
    if (validateEmail(email)) {
      sendMail();
      alert("Success! Thank you for joining us!");
    } else {
      alert("Your email is invalid. Please try again!");
    }
  };

  return __jsx("footer", {
    className: "footer"
  }, __jsx(FooterMenu, null, __jsx(external_reactstrap_["Container"], null, __jsx(ListMenu, null, navContent.map((item, index) => __jsx("ul", {
    className: "text-visi",
    key: index
  }, __jsx(TitleFooter, null, " ", item.link ? __jsx(route["Link"], {
    href: item.link
  }, item.nav) : item.nav, " "), item.contents.map((item, index) => __jsx("li", {
    key: index
  }, !item.disable ? item.outLink ? __jsx("a", {
    href: item.link,
    target: "_blank",
    rel: "noreferrer"
  }, item.content) : __jsx(route["Link"], {
    href: item.link
  }, item.content) : __jsx(Blank, {
    href: "/"
  }, item.content))))), __jsx("ul", {
    className: "text-visi input-field"
  }, __jsx(SubTitleFooter, null, "Subscribe to our newsletter for updates"), __jsx("div", {
    className: "form-wrap",
    action: ""
  }, __jsx(WrapperInput, null, __jsx(Input, {
    type: "text",
    className: "text bg-input-dark",
    placeholder: "your@email.com",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
    required: true,
    onChange: e => handleChange(e),
    onSubmit: e => {
      sendMail(), e.preventDefault();
    }
  })), __jsx("button", {
    type: "button",
    "aria-label": "send-email-address",
    onClick: handleSubmit
  }, __jsx("i", {
    className: "fa fa-arrow-right"
  }))), __jsx(Copyright, {
    className: "text-dark foundation"
  }, "forbitspace foundation LLC"), __jsx(Copyright, {
    className: "text-dark"
  }, "\xA9 2021 @forbitspace, All Rights Reserved, Disclaimer"), __jsx(SocialLink, null, DataSocialLinkFooter.map((item, index) => {
    return __jsx("a", {
      href: item.link,
      target: "_blank",
      rel: "noreferrer",
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
const Icon = external_styled_components_default.a.img`
  max-width: 20px;
  width: 100%;
  transition: all ease-in-out 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;
const SocialLink = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (min-width: 1025px) {
    justify-content: flex-start;
  }
`;
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
  .input-field {
    width: 30%;
  }
  ul {
    padding-left: 0;
    width: 14%;
    // text-align:right;

    .form-wrap {
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
        background-position: 95%;

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
      font-family: sans-serif;
      margin-bottom: 4px;
      a {
        text-decoration: none;
        color: #4e4f50;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 1024px) {
      width: calc(100% / 5);
      margin-right: 0;
      text-align: left;
      form {
        justify-content: center;
      }
      .form-wrap {
        justify-content: center;
      }
      :last-child {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 768px) {
      /* width: calc(100% / 6); */
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
      width: 32%;
    }
    @media (max-width: 320px) {
      width: 50%;
    }
  }
`;
const Blank = external_styled_components_default.a.div`
  font-size: 12px;
`;
const TitleFooter = external_styled_components_default.a.li`
  margin-bottom: 10px !important;
  color: #ffffff;
  font-family: sans-serif !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  a {
    text-decoration: none;
  }
`;
const SubTitleFooter = external_styled_components_default.a.div`
  margin-bottom: 10px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 100;
  font-style: italic;
`;
const Copyright = external_styled_components_default.a.p`
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  &.foundation {
    padding-left: 1.5rem;
    margin-bottom: 3px;
  }
  @media (max-width: 1024px) {
    &.foundation {
      padding-left: unset;
    }
  }
`;
const Input = external_styled_components_default.a.input`
  width: 100%;
  height: 30px;
  margin-right: 5px;
  font-style: italic;
  /* font-family: "Averta"; */
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
  ::placeholder {
    font-weight: 100;
  }
`;
const WrapperInput = external_styled_components_default.a.div`
  position: relative;
  border-radius: 10px;
  margin-right: 5px;
`;
/* harmony default export */ var Footer = __webpack_exports__["a"] = (Index);

/***/ })

};;