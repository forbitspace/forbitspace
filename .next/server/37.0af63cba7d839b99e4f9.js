exports.ids = [37];
exports.modules = {

/***/ "E249":
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__("90Kz")();

routes.add("/:username", "profilepage");

/***/ }),

/***/ "gKn3":
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

// CONCATENATED MODULE: ./client/components/Aggregation/components/Banner.jsx
var __jsx = external_react_default.a.createElement;




const Banner = () => {
  return __jsx(BoxSection, null, __jsx(WrapContainer, null, __jsx(WrapImg, null, __jsx(ImgHalf, null, __jsx("img", {
    src: "../images/home-page/aggregation.png",
    alt: ""
  }))), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Text, null, "Aggregation Protocol"), __jsx(SubText, null, __jsx("span", null, "forbitspace"), " use an algorithm smart order routing that split a single transaction into multiple orders across various DEX\u2019s, also route orders through allows crypto traders to tap deep liquidity and receive better pricing low cost & efficient the most liquidity."))));
};

const BoxSection = external_styled_components_default.a.section`
  position: relative;
  padding: 8vh 0 0;
  margin: 0 0 2rem;
  @media (max-width: 770px) {
    padding-top: 60px;
    margin: 0 0 1rem;
  }
`;
const WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 576px) {
  }
`;
const WrapImg = external_styled_components_default.a.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 80%;
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
  /* width: 70%; */
  text-align: center;
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
  text-align: left;
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/Aggregation/components/HowItWorks.jsx
var HowItWorks_jsx = external_react_default.a.createElement;




const HowItWorks = () => {
  return HowItWorks_jsx(HowItWorks_BoxSection, null, HowItWorks_jsx(HowItWorks_WrapContainer, null, HowItWorks_jsx(HowItWorks_Content, {
    className: "title-banner text-dark text-visi"
  }, HowItWorks_jsx(HowItWorks_Text, null, "How Do DEX Aggregators Work")), HowItWorks_jsx(HowItWorks_WrapImg, null, HowItWorks_jsx(HowItWorks_ImgHalf, null, HowItWorks_jsx("img", {
    src: "../images/home-page/howitwork.png",
    alt: ""
  }))), HowItWorks_jsx(HowItWorks_Content, null, HowItWorks_jsx(HowItWorks_SubText, null, HowItWorks_jsx("span", null, "forbitspace"), "'s aggregators source liquidity from different DEXs and thus offer users better token swap rates than they could get on any single DEX. DEX aggregators have the ability to optimize slippage, swap fees and token prices which, when done right, offer a better rate for users."))));
};

const HowItWorks_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 0vh 0 0;
  @media (max-width: 770px) {
    padding-top: 40px;
    /* min-height: 80vh; */
  }
`;
const HowItWorks_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  /* @media (min-width: 1650px) {
    max-width: 80%;
  } */
  @media (max-width: 576px) {
  }
`;
const HowItWorks_WrapImg = external_styled_components_default.a.div`
  width: 60%;
  /* transform: rotate(-5deg); */
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const HowItWorks_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const HowItWorks_Content = external_styled_components_default.a.div`
  /* margin-left: 80px; */
  /* width: 70%; */
  text-align: center;
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
const HowItWorks_Text = external_styled_components_default.a.p`
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
const HowItWorks_SubText = external_styled_components_default.a.p`
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: left;
  &.toggle__btn {
    font-style: italic;
    font-weight: 400;
  }
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ var components_HowItWorks = (HowItWorks);
// CONCATENATED MODULE: ./client/components/Aggregation/components/Finder.jsx
var Finder_jsx = external_react_default.a.createElement;




const Finder = () => {
  return Finder_jsx(Finder_BoxSection, null, Finder_jsx(Finder_WrapContainer, null, Finder_jsx(Finder_Content, {
    className: "title-banner text-dark text-visi"
  }, Finder_jsx(Finder_SubText, null, Finder_jsx("span", null, "forbitspace"), " use an algorithm smart order routing that split a single transaction into multiple orders across various DEX\u2019s, also route orders through allows crypto traders to tap deep liquidity and receive better pricing low cost & efficient the most liquidity")), Finder_jsx(Finder_WrapImg, null, Finder_jsx(Finder_ImgHalf, null, Finder_jsx("img", {
    src: "../images/home-page/pafider.png",
    alt: ""
  })))));
};

const Finder_BoxSection = external_styled_components_default.a.section`
  position: relative;
  margin: 0rem 0 3rem; //temporary margin
  padding: 10vh 0 5rem;
  @media (max-width: 1440px) {
    padding: 3rem 0 1rem;
  }
  @media (max-width: 770px) {
    padding: 20px 0 0;
    /* min-height: 80vh; */
  }
`;
const Finder_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  /* @media (min-width: 1650px) {
    max-width: 80%;
  } */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Finder_WrapImg = external_styled_components_default.a.div`
  width: 65%;
  /* transform: rotate(-5deg); */
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const Finder_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  transform: scale(1.5) translate(-6rem);
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1440px) {
    transform: scale(1) translate(-8rem);
  }
  @media (max-width: 768px) {
    transform: scale(1);
  }
`;
const Finder_Content = external_styled_components_default.a.div`
  /* margin-left: 80px; */
  width: 50%;
  text-align: center;
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
const Finder_SubText = external_styled_components_default.a.p`
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: left;
  &.toggle__btn {
    font-style: italic;
    font-weight: 400;
  }
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ var components_Finder = (Finder);
// CONCATENATED MODULE: ./client/components/Aggregation/index.jsx
var Aggregation_jsx = external_react_default.a.createElement;







const Aggregation = () => {
  return Aggregation_jsx(WrapperBackground, null, Aggregation_jsx(WrapContent, null, Aggregation_jsx(components_Banner, null), Aggregation_jsx(components_HowItWorks, null), Aggregation_jsx(components_Finder, null), Aggregation_jsx(BackgroundImg, {
    src: "../images/background-line-min.png"
  })), Aggregation_jsx(Footer["a" /* default */], null));
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
/* harmony default export */ var components_Aggregation = __webpack_exports__["default"] = (Aggregation);

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
    className: "text-visi"
  }, __jsx(TitleFooter, null, " ", item.link ? __jsx(route["Link"], {
    href: item.link
  }, item.nav) : item.nav, " "), item.contents.map((item, index) => __jsx("li", null, !item.disable ? item.outLink ? __jsx("a", {
    href: item.link,
    target: "_blank"
  }, item.content) : __jsx(route["Link"], {
    href: item.link
  }, item.content) : __jsx(Blank, {
    href: "/"
  }, item.content))))), __jsx("ul", {
    className: "text-visi"
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
    className: "text-dark"
  }, "\xA9 2021 forbitspace"), __jsx(SocialLink, null, DataSocialLinkFooter.map((item, index) => {
    return __jsx("a", {
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

  ul {
    padding-left: 0;
    width: calc(100% / 6);
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
const TitleFooter = external_styled_components_default.a.div`
  margin-bottom: 10px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
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
/* harmony default export */ var Footer = __webpack_exports__["a"] = (Index);

/***/ })

};;