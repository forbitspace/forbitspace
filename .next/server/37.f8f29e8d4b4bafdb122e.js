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

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// CONCATENATED MODULE: ./client/components/Aggregation/components/Banner.jsx
var __jsx = external_react_default.a.createElement;





const Banner = () => {
  return __jsx(BoxSection, null, __jsx(WrapContainer, null, __jsx(WrapImg, null, __jsx(ImgHalf, null, __jsx(external_react_lazyload_default.a, {
    height: 200
  }, __jsx("img", {
    src: "../gif/gif_aggregation-protocol.gif",
    alt: "aggregation-protocols"
  })))), __jsx(Content, {
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
    text-align: left;
    line-height: 1.2;
    padding-right: 4rem;
    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 768px) {
        padding-right: 0;
    }
    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        font-size: 16px;
    }
`;
/* harmony default export */ var components_Banner = (Banner);
// CONCATENATED MODULE: ./client/components/Aggregation/components/HowItWorks.jsx
var HowItWorks_jsx = external_react_default.a.createElement;




const HowItWorks = () => {
  return HowItWorks_jsx(HowItWorks_BoxSection, null, HowItWorks_jsx(HowItWorks_WrapContainer, null, HowItWorks_jsx(HowItWorks_Content, {
    className: "title-banner text-dark text-visi"
  }, HowItWorks_jsx(HowItWorks_Text, null, "How Do DEX Aggregators Work")), HowItWorks_jsx(HowItWorks_WrapImg, null, HowItWorks_jsx(HowItWorks_ImgHalf, null, HowItWorks_jsx("img", {
    src: "../images/home-page/howitwork-min.png",
    alt: "image-how-it-work"
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
    /* font-family: sans-serif; */
    text-align: left;
    line-height: 1.2;
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
        line-height: 1.5;
        font-size: 16px;
    }
`;
/* harmony default export */ var components_HowItWorks = (HowItWorks);
// CONCATENATED MODULE: ./client/components/Aggregation/components/Finder.jsx
var Finder_jsx = external_react_default.a.createElement;




const Finder = () => {
  return Finder_jsx(Finder_BoxSection, null, Finder_jsx(Finder_WrapContainer, null, Finder_jsx(Finder_Content, {
    className: "title-banner text-dark text-visi"
  }, Finder_jsx(Finder_SubText, null, Finder_jsx("span", null, "forbitspace"), " use an algorithm smart order routing that split a single transaction into multiple orders across various DEX\u2019s, also route orders through allows crypto traders to tap deep liquidity and receive better pricing low cost & efficient the most liquidity.")), Finder_jsx(Finder_WrapImg, null, Finder_jsx(Finder_ImgHalf, null, Finder_jsx("img", {
    src: "../images/home-page/pafider.png",
    alt: "logo-path-finder"
  })))));
};

const Finder_BoxSection = external_styled_components_default.a.section`
    position: relative;
    margin: 0rem 0 1rem; //temporary margin
    padding: 10vh 0 5rem;
    @media (max-width: 1440px) {
        padding: 1rem 0;
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
    transform: translate(-6rem);
    img {
        width: 100%;
        height: auto;
    }
    @media (max-width: 1440px) {
        transform: translate(-8rem);
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
    /* font-family: sans-serif; */
    text-align: left;
    line-height: 1.2;
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
        line-height: 1.5;
        font-size: 16px;
    }
`;
/* harmony default export */ var components_Finder = (Finder);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/Aggregation/components/Integrate.jsx
var Integrate_jsx = external_react_default.a.createElement;




const Integrate = () => {
  const network = [// { networkName: "eth" },
  {
    networkName: "bsc"
  }, {
    networkName: "plg"
  }, {
    networkName: "ava"
  }];
  return Integrate_jsx(Integrate_BoxSection, null, Integrate_jsx(Integrate_WrapContainer, null, Integrate_jsx(Integrate_Content, {
    className: "title-banner text-dark text-visi"
  }, Integrate_jsx(Integrate_Text, null, "Integrated protocols")), Integrate_jsx(WrapNetwork, null, Integrate_jsx(Network, null, Integrate_jsx(NetworkIcon, {
    className: "eth-gif"
  }, Integrate_jsx(WrapIcon, null, Integrate_jsx("img", {
    src: `../images/aggregation-page/network/eth-network.png`,
    alt: "eth-network"
  }))), Integrate_jsx(NetworkOrbit, null, Integrate_jsx(WrapOrbit, null, Integrate_jsx("img", {
    src: `../gif/gif-network.gif`,
    alt: "gif-eth-orbit"
  })))), network.map((item, index) => Integrate_jsx(Network, {
    key: index
  }, Integrate_jsx(NetworkIcon, null, Integrate_jsx(WrapIcon, null, Integrate_jsx("img", {
    src: `../images/aggregation-page/network/${item.networkName}-network.png`,
    alt: item.networkName + "-network"
  }))), Integrate_jsx(NetworkOrbit, null, Integrate_jsx(WrapOrbit, null, Integrate_jsx("img", {
    src: `../images/aggregation-page/network/${item.networkName}-orbit.png`,
    alt: item.networkName + "-orbit"
  }))))))));
};

const Integrate_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 0vh 0 0;
    @media (max-width: 770px) {
        padding-top: 40px;
    }
`;
const Integrate_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 576px) {
    }
`;
const WrapNetwork = external_styled_components_default.a.div``;
const Network = external_styled_components_default.a.div`
    padding: 3rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    :nth-child(2n) {
        flex-direction: row-reverse;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        :nth-child(2n) {
            flex-direction: column;
        }
    }
`;
const NetworkIcon = external_styled_components_default.a.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 40%;
        &.eth-gif {
            margin-right: -4rem;
        }
    }
`;
const WrapIcon = external_styled_components_default.a.div`
    img {
        max-width: 360px;
    }
    @media (max-width: 768px) {
        img {
            max-width: 220px;
        }
    }
    @media (max-width: 768px) {
        img {
            max-width: 160px;
        }
    }
`;
const NetworkOrbit = external_styled_components_default.a.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 60%;
    }
`;
const WrapOrbit = external_styled_components_default.a.div`
    img {
        /* width: 80%; */
        max-width: 100%;
    }
`;
const Integrate_Content = external_styled_components_default.a.div`
    /* margin-left: 80px; */
    /* width: 70%; */
    width: 100%;
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
const Integrate_Text = external_styled_components_default.a.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 1px;
    @media (max-width: 768px) {
        font-size: 36px;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 25px;
    }
    @media (max-width: 576px) {
        font-size: 22px;
    }
`;
/* harmony default export */ var components_Integrate = (Integrate);
// CONCATENATED MODULE: ./client/components/Aggregation/index.jsx
var Aggregation_jsx = external_react_default.a.createElement;









const Aggregation = () => {
  return Aggregation_jsx(WrapperBackground, null, Aggregation_jsx(WrapContent, null, Aggregation_jsx(external_react_lazyload_default.a, {
    height: 200
  }, Aggregation_jsx(components_Banner, null)), Aggregation_jsx(external_react_lazyload_default.a, {
    height: 200
  }, Aggregation_jsx(components_HowItWorks, null)), Aggregation_jsx(external_react_lazyload_default.a, {
    height: 200
  }, Aggregation_jsx(components_Finder, null)), Aggregation_jsx(external_react_lazyload_default.a, {
    height: 200
  }, Aggregation_jsx(components_Integrate, null))), Aggregation_jsx(Footer["a" /* default */], null));
};

const WrapperBackground = external_styled_components_default.a.section`
    position: relative;
    overflow-x: hidden;
    background-size: auto;
`;
const WrapContent = external_styled_components_default.a.div`
    min-height: calc(100vh - 330px);
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
    link: "https://docs.forbitspace.com/",
    content: "Documentation",
    outLink: true
  }, {
    link: "../forbitspace-whitepaper.pdf",
    content: "Whitepaper",
    outLink: true
  }, {
    link: "https://github.com/forbitspace",
    content: "Github",
    outLink: true
  }, {
    link: "https://github.com/forbitspace/forbitspace-audits",
    content: "Audit",
    outLink: true
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
  nav: "Support",
  // disable: true,
  link: "",
  contents: [{
    link: "https://blog.forbitspace.com/",
    content: "Blog",
    outLink: true
  }, {
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
  }, {
    link: "/branding",
    content: "Press & Brand" // outLink: true,

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
  })), __jsx(ButtonSend, {
    type: "button",
    "aria-label": "send-email-address",
    onClick: handleSubmit
  }, __jsx("img", {
    src: "../images/icons/arrow-right.svg",
    className: "arrow-right",
    alt: "arrow-right-icon"
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
    padding: 30px 0;
    overflow: hidden;
    .arrow-right {
        width: 12px;
    }

    @media (max-width: 576px) {
        padding: 40px 0;

        &:after {
            content: none;
        }
    }
`;
const ListMenu = external_styled_components_default.a.div`
    width: 100%;
    display: flex;
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
        }

        li {
            font-size: 12px;
            font-weight: 300;
            font-family: sans-serif;
            margin-bottom: 4px;
            font-style: italic;
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
    @media (max-width: 576px) {
        gap: 2%;

        .input-field {
            padding: 1rem 0;
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
    font-style: normal !important;
    a {
        text-decoration: none;
    }
    @media (max-width: 576px) {
        overflow: hidden;
        text-overflow: ellipsis;
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
    margin-bottom: 6px;
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
    /* width: 100%; */
    max-width: 100%;
    height: 30px;
    margin-right: 5px;
    font-style: italic;
    font-size: 14px;
    padding: 0px 15px;
    line-height: 20px;
    outline: 0;
    transition: all 0.3s ease-in-out;
    background: transparent;
    border-radius: 10px;
    position: relative;
    border: none;
    background: #cff3f4;
    border: 1px solid #0047b2;
    background: #001225;
    color: #ffffff;
    ::placeholder {
        font-weight: 100;
    }
`;
const WrapperInput = external_styled_components_default.a.div`
    position: relative;
    border-radius: 10px;
    margin-right: 5px;
`;
const ButtonSend = external_styled_components_default.a.button`
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

    display: flex;
    align-items: center;
    justify-content: center;

    i {
        color: #fff;
        font-size: 12px;
    }

    :hover {
        background-size: 200%;
        background-position: right;
    }
`;
/* harmony default export */ var Footer = __webpack_exports__["a"] = (Index);

/***/ })

};;