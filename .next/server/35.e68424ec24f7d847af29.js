exports.ids = [35];
exports.modules = {

/***/ "E249":
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__("90Kz")();

routes.add("/:username", "profilepage");

/***/ }),

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
    src: "../images/api-page/api-space-min.png",
    alt: "forbitspace foundation"
  })), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Title, null, "API"), __jsx(SubText, null, "The ", __jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " API is a cutting-edge discovery and routing custodial asset exchanges at the best rates on the biggest Ethereum, BNB Chain and Polygon (Matic)."), __jsx(SubText, null, "It finds the most efficient token swap paths, splitting swaps protocols and even different market depths within one protocol."))));
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
    max-width: 900px;
    @media (max-width: 768px) {
        justify-content: center;
        :first-child {
            width: 100%;
        }
    }
`;
const Content = external_styled_components_default.a.div`
    /* margin-left: 100px; */
    padding: 0 10px;
    text-align: right;
    width: 85%;
    align-self: flex-end;
    @media (max-width: 1024px) {
        width: 100%;
        margin-left: 0;
        margin-top: 40px;
        padding: 10px;
    }
`;
const Title = external_styled_components_default.a.h2`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
    padding: 10px 0;
    img {
        max-width: 400px;
    }
    @media (max-width: 768px) {
        font-size: 26px;
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
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2;
    padding: 10px 0;
    .forbitspace {
        font-weight: 900;
        font-style: italic;
    }
    @media (max-width: 768px) {
        text-align: center;
    }
    @media (max-width: 576px) {
        font-size: 14px;
        line-height: 1.5;
    }
`;
/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/API/components/Swap.jsx
var Swap_jsx = external_react_default.a.createElement;




const Swap = () => {
  return Swap_jsx(Swap_WrapperBanner, null, Swap_jsx(Swap_WrapContainer, null, Swap_jsx(Swap_WrapImg, null, Swap_jsx("img", {
    src: "../images/api-page/swap.png",
    alt: "forbitspace foundation"
  }))));
};

const Swap_WrapperBanner = external_styled_components_default.a.div`
  padding: 2vh 0 0;
  @media (max-width: 576px) {
    padding: 100px 0;
    text-align: left;
  }
`;
const Swap_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Swap_WrapImg = external_styled_components_default.a.div`
  width: 60%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    :first-child {
      width: 100%;
    }
  }
`;
/* harmony default export */ var components_Swap = (Swap);
// CONCATENATED MODULE: ./client/components/API/components/Features.jsx
var Features_jsx = external_react_default.a.createElement;




const Features = () => {
  return Features_jsx(BoxSection, null, Features_jsx(Features_WrapContainer, null, Features_jsx(Features_Content, {
    className: "title-banner text-dark text-visi"
  }, Features_jsx(Text, null, "Why use ", Features_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " ", "API?"), Features_jsx(Features_SubText, null)), Features_jsx(Features_WrapImg, null, Features_jsx(ImgHalf, null, Features_jsx("img", {
    src: "../images/api-page/api-02.png",
    alt: "image-space-api"
  })))));
};

const BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 25px 0;
    @media (max-width: 770px) {
        padding: 15px;
        /* min-height: 80vh; */
    }
`;
const Features_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-direction: column;
    @media (max-width: 768px) {
    }
`;
const Features_WrapImg = external_styled_components_default.a.div`
    width: 60%;
    @media (min-width: 2100px) {
        width: 65%;
    }
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
const Features_Content = external_styled_components_default.a.div`
    /* margin-left: 80px; */
    width: 100%;
    text-align: left;
    /* max-width: 600px; */
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
        max-width: unset;
    }
`;
const Text = external_styled_components_default.a.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 1px;
    .forbitspace {
        font-weight: 900;
        font-style: italic;
    }
    @media (max-width: 768px) {
        font-size: 26px;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 25px;
    }
`;
const Features_SubText = external_styled_components_default.a.p`
    font-size: 18px;
    font-weight: 300;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 576px) {
        font-size: 14px;
    }
`;
/* harmony default export */ var components_Features = (Features);
// CONCATENATED MODULE: ./client/components/API/index.jsx
var API_jsx = external_react_default.a.createElement;





 // import About from "./components/About";

const API = () => {
  return API_jsx(WrapperBackground, null, API_jsx(WrapContent, null, API_jsx(components_Banner, null), API_jsx(components_Features, null), API_jsx(components_Swap, null)), API_jsx(Footer["a" /* default */], null));
};

const WrapperBackground = external_styled_components_default.a.section`
  position: relative;
  overflow-x: hidden;
  background-size: auto;
`;
const WrapContent = external_styled_components_default.a.div`
  min-height: calc(100vh - 330px);
`; // const BackgroundImg = styled.img`
//   position: fixed;
//   top: 0;
//   left: 0;
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