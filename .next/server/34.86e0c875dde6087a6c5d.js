exports.ids = [34];
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
  }, __jsx(Title, null, "Wallet"), __jsx(Text, null, "Our wallet offers you a user\u2011friendly entry point to the DeFi space"), __jsx(SubText, null, "A highly protected and innovative solution for storing, receiving, sending and swapping crypto assets."))));
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
  font-size: 5rem;
  line-height: 1;
  font-weight: 700;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const SubText = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
const WrapperButtonApp = external_styled_components_default.a.div`
  max-width: 350px;
  /* margin: 0 auto; */
  /* width: 90%; */
  text-align: left;
  @media (max-width: 1200px) {
    display: block;
  }
  @media (max-width: 576px) {
    text-align: center;
    max-width: unset;
  }
`;
const ButtonBanner = external_styled_components_default.a.a`
  padding: 0.25rem 0.85rem;
  text-decoration: none;
  text-align: center;
  border-radius: 12px;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease 0s;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;
  width: fit-content;
  background-color: rgb(255, 255, 255);
  color: white;
  /* border: 1px solid transparent; */
  margin-right: 1rem;
  background-image: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  );
  width: 100%;
  width: 140px;
  background-size: 200%;
  background-position: 99%;
  color: white;

  &.forbitswap {
    background-size: 110%;
    background-position: 30%;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
/* harmony default export */ var components_Banner = (Banner);
// CONCATENATED MODULE: ./client/components/SelfCustody/components/MobileWallet.jsx
var MobileWallet_jsx = external_react_default.a.createElement;




const MobileWallet = () => {
  return MobileWallet_jsx(MobileWallet_BoxSection, null, MobileWallet_jsx(MobileWallet_WrapContainer, null, MobileWallet_jsx(MobileWallet_Content, null, MobileWallet_jsx(MobileWallet_Text, null, "Mobile wallet"), MobileWallet_jsx(MobileWallet_SubText, null)), MobileWallet_jsx(MobileWallet_WrapImg, null, MobileWallet_jsx(MobileWallet_ImgHalf, null, MobileWallet_jsx("img", {
    src: "../images/self-page/phone-1.png",
    alt: ""
  })))), MobileWallet_jsx(WrapWallet, null, MobileWallet_jsx("img", {
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
  gap: 20px;
  @media (min-width: 1400px) {
    max-width: 100% !important;
  }
  @media (min-width: 3650px) {
    max-width: 80%;
  }
  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;
const MobileWallet_WrapImg = external_styled_components_default.a.div`
  width: 50%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const MobileWallet_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 60%;
    height: auto;
    /* transform: scale(0.6); */
  }
`;
const MobileWallet_Content = external_styled_components_default.a.div`
  margin-left: 80px;
  width: 50%;
  text-align: left;
  max-width: 600px;
  @media (max-width: 576px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
const MobileWallet_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1px;
  text-align: center;
  @media (min-width: 1441px) {
    font-size: 5rem;
    line-height: unset;
  }
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const MobileWallet_SubText = external_styled_components_default.a.p`
  font-size: 1rem;
  font-weight: 300;
  @media (min-width: 1441px) {
    font-size: 2rem;
    font-weight: 400;
    line-height: unset;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
const WrapWallet = external_styled_components_default.a.div`
  margin-top: 12rem;
  width: 50%;
  padding: 0 3rem;
  @media (max-width: 576px) {
    margin-top: 2rem;
    width: 100%;
  }
`;
/* harmony default export */ var components_MobileWallet = (MobileWallet);
// CONCATENATED MODULE: ./client/components/SelfCustody/components/Numbers.jsx
var Numbers_jsx = external_react_default.a.createElement;




const Numbers = () => {
  return Numbers_jsx(Numbers_BoxSection, null, Numbers_jsx(Numbers_WrapContainer, null, Numbers_jsx(WrapContent, null, Numbers_jsx(BoxContent, null, Numbers_jsx(Head, null, "1,3M"), Numbers_jsx(Numbers_Text, null, "Total swaps")), Numbers_jsx(BoxContent, null, Numbers_jsx(Head, null, "1,5B"), Numbers_jsx(Numbers_Text, null, "Available liquidity")), Numbers_jsx(BoxContent, null, Numbers_jsx(Head, null, "72+"), Numbers_jsx(Numbers_Text, null, "Liquidity sources")), Numbers_jsx(BoxContent, null, Numbers_jsx(Head, null, "<500ms"), Numbers_jsx(Numbers_Text, null, "Response time")))));
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
const Numbers_Text = external_styled_components_default.a.div`
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

// CONCATENATED MODULE: ./client/components/SelfCustody/index.jsx
var SelfCustody_jsx = external_react_default.a.createElement;




 // import Mission from "./components/Mission";
// import Grant from "./components/Grant";
// import Timeline from "./components/Timeline";



const SelfCustody = () => {
  return SelfCustody_jsx(WrapperBackground, null, SelfCustody_jsx(components_Banner, null), SelfCustody_jsx(components_Numbers, null), SelfCustody_jsx(components_MobileWallet, null), SelfCustody_jsx(BackgroundImg, {
    src: "./images/background-line-min.png"
  }), SelfCustody_jsx(Footer["a" /* default */], null));
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