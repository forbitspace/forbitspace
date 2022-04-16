exports.ids = [48];
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
    src: "../images/self-page/wallet-01-min.png",
    alt: "wallet-01"
  }))), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Text, null, "Self-custody"), __jsx(SubText, null, "In the world DeFi, your money becomes empowered. You can store it, lend it, trade it, zap it, and track it in real-time. It\u2019s a bit like a game but at the heart of this is more control, aka self-custody. We clearly see the importance of self-custody refers to individuals being 100% in control of their assets, similar to cash.", __jsx("br", null), __jsx("br", null), "Except this is digital cash, and it\u2019s not dependent on a bank or other entity to issue it or verify transactions. This is precisely why blockchain was such a huge innovation starting with Bitcoin then Ethereum and more crypto assets in the different blockchains."))));
};

const BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 10vh 0 5rem;
    @media (max-width: 770px) {
        padding: 60px 0 20px;
    }
`;
const WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const WrapImg = external_styled_components_default.a.div`
    width: 50%;
    @media (max-width: 768px) {
        width: 65%;
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
    width: 50%;
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
    line-height: 50px;
    letter-spacing: 1px;
    @media (max-width: 768px) {
        font-size: 26px;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 25px;
        padding: 1rem 0;
    }
`;
const SubText = external_styled_components_default.a.p`
    font-size: 18px;
    font-weight: 300;
    /* font-family: sans-serif; */
    text-align: right;
    line-height: 1.2;
    @media (max-width: 768px) {
        font-size: 18px;
        text-align: center;
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        font-size: 14px;
    }
`;
/* harmony default export */ var components_Banner = (Banner);
// CONCATENATED MODULE: ./client/components/SelfCustody/components/MobileWallet.jsx
var MobileWallet_jsx = external_react_default.a.createElement;




const MobileWallet = () => {
  return MobileWallet_jsx(MobileWallet_BoxSection, null, MobileWallet_jsx(MobileWallet_WrapContainer, {
    className: "container__bridge"
  }, MobileWallet_jsx(MobileWallet_Content, null, MobileWallet_jsx(MobileWallet_Text, null, "Bridge Space"), MobileWallet_jsx(MobileWallet_SubText, {
    className: "text-left"
  }, " ", MobileWallet_jsx("span", null, "forbitspace"), " will have extended the Cross-Chain Bridge, allowing users to swap tokens on different blockchains easily and conveniently with the release of Bridge Space Cross-Chain Bridge currently supports on different blockchain Bridge Space is a blockchain bridge that enables users to access the benefits of different blockchain technologies without having to choose between platforms.", MobileWallet_jsx("br", null), MobileWallet_jsx("br", null), "This not only helps take pressure off of Ethereum, but this is also particularly important as congestion issues persist on Ethereum, where the most popular DeFi network.")), MobileWallet_jsx(MobileWallet_WrapImg, null, MobileWallet_jsx(MobileWallet_ImgHalf, {
    className: "img__bridge"
  }, MobileWallet_jsx("img", {
    src: "../images/self-page/bridge.png",
    alt: "bridge"
  })))), MobileWallet_jsx(MobileWallet_WrapContainer, null, MobileWallet_jsx(MobileWallet_WrapImg, null, MobileWallet_jsx(MobileWallet_ImgHalf, {
    className: "img__phone"
  }, MobileWallet_jsx("img", {
    src: "../images/self-page/phone-1-min.png",
    alt: "phone-01"
  }))), MobileWallet_jsx(MobileWallet_Content, {
    className: "text__mobile-wallet"
  }, MobileWallet_jsx(MobileWallet_Text, null, "Mobile wallet"), MobileWallet_jsx(MobileWallet_SubText, {
    className: "text__mobile-wallet"
  }, "Mobile wallets are apps on your iOS or Android phone, convenient because they are always with you. Usually, the private key is generated and stored on your device with backup and recovery options, depending on the app."))), MobileWallet_jsx(WrapWallet, {
    className: "container"
  }, MobileWallet_jsx(MobileWallet_Content, null, MobileWallet_jsx(MobileWallet_Text, null, "Smart contract wallet"), MobileWallet_jsx(MobileWallet_SubText, {
    className: "text-left"
  }, "A smart contract is a program deployed to disparate blockchains like Ethereum, BNB Chain, and has a mobile app or desktop interface.", MobileWallet_jsx("br", null), MobileWallet_jsx("br", null), "Smart contract wallets are the most functional wallets because they can be programmed in many ways and have additional security measures like daily spend limits, further approval from a trusted party or another wallet if transactions are above a certain limit, and advanced recovery mechanisms. Private keys are generated on the mobile device or browser.")), MobileWallet_jsx("img", {
    src: "../images/self-page/wallett1-02.png",
    alt: "wallet-02"
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
    gap: 1rem;
    margin: 2rem auto 3rem;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 1rem;
        &.container__bridge {
            flex-direction: column;
        }
    }
`;
const MobileWallet_WrapImg = external_styled_components_default.a.div`
    width: 50%;
    @media (max-width: 768px) {
        /* width: 60%; */
    }
`;
const MobileWallet_ImgHalf = external_styled_components_default.a.div`
    width: 100%;
    text-align: center;
    img {
        max-width: 450px;
        height: auto;
    }
    @media (max-width: 1024px) {
        img {
            max-width: 350px;
        }
    }
    @media (max-width: 768px) {
        text-align: center !important;
        img {
            width: 65%;
            height: auto;
        }
    }
`;
const MobileWallet_Content = external_styled_components_default.a.div`
    width: 50%;
    text-align: left;
    &.text__mobile-wallet {
        text-align: right;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
        text-align: center !important;
    }
`;
const MobileWallet_Text = external_styled_components_default.a.p`
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
const MobileWallet_SubText = external_styled_components_default.a.p`
    font-size: 18px;
    font-weight: 300;
    /* font-family: sans-serif; */
    text-align: right;
    line-height: 1.2;
    span {
        font-style: italic;
        font-weight: 900;
    }
    &.text-left {
        text-align: left;
    }
    @media (max-width: 768px) {
        font-size: 18px;
        text-align: center !important;
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        font-size: 14px;
    }
`;
const WrapWallet = external_styled_components_default.a.div`
    margin-top: 4rem;
    width: 100%;
    /* padding: 0 3rem; */

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    img {
        width: 50%;
        max-width: 760px;
    }
    @media (max-width: 768px) {
        margin-top: 2rem;
        width: 100%;
        flex-direction: column;
        img {
            width: 60%;
        }
    }
`;
/* harmony default export */ var components_MobileWallet = (MobileWallet);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/SelfCustody/components/Assets.jsx
var Assets_jsx = external_react_default.a.createElement;




const Assets = () => {
  return Assets_jsx(Assets_BoxSection, null, Assets_jsx(Assets_WrapContainer, null, Assets_jsx(Assets_WrapImg, null, Assets_jsx(Assets_ImgHalf, null, Assets_jsx("img", {
    src: "../images/home-page/assets-management.png",
    alt: "assets"
  }))), Assets_jsx(Assets_Content, {
    className: "title-banner text-dark text-visi"
  }, Assets_jsx(Assets_Text, null, "Assets Management"), Assets_jsx(Assets_SubText, null, "Our building decentralized portfolio management protocol enabling users to use a token that represents a fully collateralized portfolio of other digital assets, including Bitcoin, Ethereum, and stablecoins.", Assets_jsx("br", null), Assets_jsx("br", null), "Asset management involves the oversight of financial assets for others and seeks to maximize the value of the whole portfolio based on risk preferences, time horizons, or other conditions. Asset management protocol bring greater transparency and efficiency in constructing and executing investment strategies, by incorporating the asset management life cycle into a DApp."))));
};

const Assets_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 1vh 0 6rem;
    @media (max-width: 770px) {
        padding: 60px 0 20px;
    }
`;
const Assets_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const Assets_WrapImg = external_styled_components_default.a.div`
    width: 45%;
    @media (max-width: 768px) {
        width: 60%;
    }
`;
const Assets_ImgHalf = external_styled_components_default.a.div`
    width: 100%;
    text-align: left;
    img {
        width: 100%;
        height: auto;
    }
`;
const Assets_Content = external_styled_components_default.a.div`
    /* margin-left: 80px; */
    width: 50%;
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
const Assets_Text = external_styled_components_default.a.p`
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
const Assets_SubText = external_styled_components_default.a.p`
    font-size: 18px;
    font-weight: 300;
    /* font-family: sans-serif; */
    text-align: right;
    line-height: 1.2;
    @media (max-width: 1024px) {
        font-size: 18px;
        text-align: center;
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        font-size: 14px;
    }
`;
/* harmony default export */ var components_Assets = (Assets);
// CONCATENATED MODULE: ./client/components/SelfCustody/index.jsx
var SelfCustody_jsx = external_react_default.a.createElement;



 // import Numbers from "./components/Numbers";
// import Mission from "./components/Mission";
// import Grant from "./components/Grant";
// import Timeline from "./components/Timeline";




const SelfCustody = () => {
  return SelfCustody_jsx(WrapperBackground, null, SelfCustody_jsx(components_Banner, null), SelfCustody_jsx(components_MobileWallet, null), SelfCustody_jsx(components_Assets, null), SelfCustody_jsx(Footer["a" /* default */], null));
};

const WrapperBackground = external_styled_components_default.a.section`
  position: relative;
  overflow-x: hidden;
  background-size: auto;
`; // const BackgroundImg = styled.img`
//   position: fixed;
//   top: -100vh;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   min-height: 200vh;
//   opacity: 0.6;
//   z-index: -1;
//   @media (max-width: 576px) {
//     position: fixed;
//   }
// `;

/* harmony default export */ var components_SelfCustody = __webpack_exports__["default"] = (SelfCustody);

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
  link: "https://medium.com/forbitspace",
  url: "../images/icon-social-footer/1.svg"
}, {
  // link: "https://discord.com/invite/forbitspace",
  link: "https://discord.gg/CnJqNa2wfG",
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
  contents: [{
    link: "/fbs-token",
    content: "FBS Token"
  }, {
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
    link: "../terms-of-service.pdf",
    content: "Terms of Service",
    outLink: true
  }, {
    link: "../privacy-policy.pdf",
    content: "Privacy Policy",
    outLink: true
  }, {
    link: "/brandkit",
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
        padding: 40px 0 80px;

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
            /* font-family: sans-serif; */
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
            width: 48%;
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
    /* font-family: sans-serif !important; */
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
    /* font-family: sans-serif; */
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