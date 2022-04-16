exports.ids = [41];
exports.modules = {

/***/ "E249":
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__("90Kz")();

routes.add("/:username", "profilepage");

/***/ }),

/***/ "hMcs":
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

// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// EXTERNAL MODULE: external "react-google-recaptcha"
var external_react_google_recaptcha_ = __webpack_require__("1cau");
var external_react_google_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_react_google_recaptcha_);

// EXTERNAL MODULE: external "emailjs-com"
var external_emailjs_com_ = __webpack_require__("u8Nd");

// CONCATENATED MODULE: ./client/components/Contact/components/Contact.jsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ContactUs = () => {
  const {
    0: x,
    1: setX
  } = Object(external_react_["useState"])();
  const {
    0: y,
    1: setY
  } = Object(external_react_["useState"])();
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])(false);
  const {
    0: captcha,
    1: setCaptcha
  } = Object(external_react_["useState"])(false);
  const {
    0: scrollPos,
    1: setScrollPos
  } = Object(external_react_["useState"])(); //config email sender

  const {
    0: toSend,
    1: setToSend
  } = Object(external_react_["useState"])({
    from_name: "",
    email: "",
    position: "",
    message: ""
  }); //ref for send button object

  const buttonRef = Object(external_react_["useRef"])();

  const getMouseOver = e => {
    var parentOffset = buttonRef.current.getBoundingClientRect();
    setX(e.clientX - parentOffset.left);
    setY(e.clientY - parentOffset.top);
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onSubmit = e => {
    e.preventDefault();

    if (validateEmail(toSend.email) && captcha) {
      Object(external_emailjs_com_["send"])("service_hrt6uaf", "template_0rpmrcr", toSend, "user_rUwQTrKEeiiqxSanQorG7").then(response => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus(true);
      }).catch(err => {
        console.log("FAILED...", err);
      });
    } else {
      if (!validateEmail(toSend.email) || !toSend.email === "") {
        alert("Your email is invalid. Please try again!");
      } else if (!captcha) {
        alert("Please fill the captcha validation!");
      }
    }
  };

  const handleChange = e => {
    setToSend(_objectSpread(_objectSpread({}, toSend), {}, {
      [e.target.name]: e.target.value
    }));
  };

  function onChange(value) {
    console.log("Captcha value:", value);

    if (value) {
      setCaptcha(true);
    }
  }

  Object(external_react_["useEffect"])(() => {
    window.addEventListener("scroll", () => {
      var currentScrollPos = window.pageYOffset;
      setScrollPos(currentScrollPos);
    });
  }, [scrollPos]);
  return __jsx(BoxSection, null, __jsx(WrapContainer, null, __jsx(Header, null, "Contact Us"), status ? __jsx(ThankyouMessage, {
    onClick: () => {
      setStatus(false);
    }
  }, __jsx("span", null, "Thank you! Your submission has been received!")) : __jsx(WrapperSubmit // action="mailto:ryanspace46@gmail.com"
  , {
    method: "post",
    enctype: "text/plain",
    onSubmit: onSubmit,
    autocomplete: "off"
  }, __jsx(WrapperInput, null, __jsx("input", {
    type: "text",
    placeholder: "Your Name",
    name: "from_name",
    autoComplete: "off",
    value: toSend.from_name,
    onChange: handleChange
  })), __jsx(WrapperInput, null, __jsx("input", {
    type: "text",
    placeholder: "Your Email",
    name: "email",
    autoComplete: "off",
    value: toSend.email,
    onChange: handleChange
  })), __jsx(WrapperInput, null, __jsx("input", {
    type: "text",
    placeholder: "Who Are You",
    name: "position",
    autoComplete: "off",
    value: toSend.position,
    onChange: handleChange
  })), __jsx(WrapperMessage, null, __jsx("textarea", {
    name: "message",
    rows: "14",
    cols: "100%",
    wrap: "soft",
    placeholder: "Write your message here",
    value: toSend.message,
    onChange: handleChange
  })), __jsx(external_react_google_recaptcha_default.a, {
    theme: "dark",
    sitekey: "6Le9OhkdAAAAADCZ2pcfaQA59QVZ2m5wL71VWh7q",
    onChange: onChange
  }), __jsx(WrapperButton, null, __jsx(SubmitButton, {
    ref: buttonRef,
    onMouseMove: e => getMouseOver(e),
    onMouseLeave: e => getMouseOver(e),
    type: "submit",
    value: "Send"
  }, __jsx("input", {
    type: "submit",
    value: "Send"
  }), __jsx("span", {
    style: {
      top: y + "px",
      left: x + "px"
    }
  }), " ")))));
};

const BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 8vh 0 0;
    margin: 0 0 2rem;
    @media (max-width: 770px) {
        padding-top: 120px;
        margin: 0 0 1rem;
    }
`;
const WrapContainer = external_styled_components_default.a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 3rem;
    @media (max-width: 576px) {
        gap: 20px;
    }
`;
const Header = external_styled_components_default.a.div`
    font-size: 56px;
    font-weight: 800;
    @media (max-width: 576px) {
        font-size: 45px;
    }
`;
const WrapperSubmit = external_styled_components_default.a.form`
    padding: 1rem;
    width: 100%;
    max-width: 650px;
    font-weight: 400;
    input,
    textarea {
        width: 100%;
        background-color: transparent;
        border: none;
        color: #fff;
        font-family: "Montserrat", "helvetica neue", sans-serif;
        ::placeholder {
            font-family: "Montserrat", "helvetica neue", sans-serif;
            color: #ffffff8a;
        }
        :focus-visible {
            outline: none;
        }
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        box-shadow: 0 0 0 1000px #02182f inset !important;
        -webkit-box-shadow: 0 0 0 1000px #02182f inset !important;
        -webkit-text-fill-color: white !important;
    }
`;
const WrapperInput = external_styled_components_default.a.div`
    width: 100%;
    padding: 12px 1rem;
    margin: 10px auto;
    border: 1px solid;
    border-radius: 12px;
    :hover {
        box-shadow: 2px 2px 5px #ffffff8a;
    }
`;
const WrapperMessage = external_styled_components_default.a.div`
    max-width: 650px;
    padding: 1rem;
    margin: 10px auto;
    border: 1px solid;
    border-radius: 12px;
    :hover {
        box-shadow: 2px 2px 5px #ffffff8a;
    }

    textarea {
        max-width: 100%;
        word-wrap: break-word;
        word-break: break-all;
        height: 80px;
        font-family: "Montserrat", "helvetica neue", sans-serif;
    }
`;
const WrapperButton = external_styled_components_default.a.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 0;
`;
const SubmitButton = external_styled_components_default.a.div`
    color: #fff;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 160px;
    border-radius: 12px;
    font: normal 18px/40px "Montserrat", "helvetica neue", sans-serif;
    text-align: center;
    text-decoration: none;
    border: 2px solid #fff;
    cursor: pointer;

    span {
        position: absolute;

        display: block;
        width: 0;
        height: 0;
        border-radius: 50%;
        cursor: pointer;
        background-image: linear-gradient(
            38deg,
            #00a4f1 -10%,
            #00a2ee 3%,
            #00c4ff 32%,
            #004af1 53%,
            #0b18fc 102%,
            #0d00ff 111%
        );
        -webkit-transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: -1;
    }
    input {
        cursor: pointer;
    }
    :hover span {
        width: 400px;
        height: 400px;
    }
`;
const background_move = external_styled_components_["keyframes"]`
    from {
            background-position: 100%;
    }
    to {
        background-position: -100%;
    }
`;
const ThankyouMessage = external_styled_components_default.a.div`
    width: 100%;
    max-width: 820px;
    padding: 25px 60px;
    margin-top: 4rem;
    border-radius: 22px;
    background-image: linear-gradient(
        to right,
        #020a1a 0%,
        #012341 50%,
        #020a1a 100%
    );
    display: flex;
    align-items: center;
    justify-content: flex-start;

    position: relative;

    ::after {
        content: "";
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        background-image: linear-gradient(
            to right,
            #0168ff 0%,
            rgba(1, 104, 255, 0.3) 25%,
            #0ff 50%,
            rgba(1, 104, 255, 0.3) 75%,
            #0168ff 100%
        );
        background-size: 200%;
        animation: ${background_move} 15s infinite linear;
        border-radius: 22px;
        z-index: -1;

        position: absolute;
        top: -2px;
        left: -2px;
        bottom: -2px;
        right: -2px;
    }
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 18px;
        width: 100%;
        text-align: center;
        margin: auto;
    }
    @media (max-width: 576px) {
        span {
            font-size: 14px;
        }
    }
`;
/* harmony default export */ var Contact = (ContactUs);
// CONCATENATED MODULE: ./client/components/Contact/index.jsx
var Contact_jsx = external_react_default.a.createElement;





const Contact_Contact = () => {
  return Contact_jsx(WrapperBackground, {
    className: "container"
  }, Contact_jsx(WrapContent, null, Contact_jsx(Contact, null)), Contact_jsx(Footer["a" /* default */], null));
};

const WrapperBackground = external_styled_components_default.a.section`
    position: relative;
    overflow-x: hidden;
    background-size: auto;
`;
const WrapContent = external_styled_components_default.a.div`
    min-height: calc(100vh - 330px);
`;
/* harmony default export */ var components_Contact = __webpack_exports__["default"] = (Contact_Contact);

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