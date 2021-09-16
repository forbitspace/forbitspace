exports.ids = [33];
exports.modules = {

/***/ "Uelo":
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

// CONCATENATED MODULE: ./client/components/Order/components/Banner.jsx
var __jsx = external_react_default.a.createElement;



const Banner = () => {
  return __jsx(WrapperBanner, null, __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Title, null, "forbitspace Limit", __jsx("br", null), "Order Protocol"), __jsx(SubText, null, "Enjoy the most innovative and flexible limit order functionality in DeFi"), __jsx(ButtonApply, {
    href: "/#"
  }, "View docs")), __jsx(BackgroundBanner, null, __jsx("img", {
    src: "./images/icon-foundation/earth-background-foundation.png",
    alt: "forbitspace foundation"
  })));
};

const WrapperBanner = external_styled_components_default.a.div`
    text-align: left;
    position: relative;
    display: flex;
    align-items: center;
    @media (max-width: 576px) {
      text-align: left;
    }
  `;
const BackgroundBanner = external_styled_components_default.a.div`
    position: relative;
    z-index: -1;
    max-width: 950px;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    img {
      width: 100%;
    }
    @media (max-width: 768px) {
      position: absolute;
      opacity: 0.5;
      max-width: 350px;
      right: 0;
      margin: auto;
    }
  `;
const Content = external_styled_components_default.a.div`
    margin-right: -200px;
    @media (min-width: 768px){
      min-width: 600px;
    }
    
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 40px;
    }
  `;
const Title = external_styled_components_default.a.h2`
    font-size: 5rem;
    line-height: 1.5;
    @media (max-width: 1024px) {
      font-size: 70px;
    }
    @media (max-width: 576px) {
      font-size: 40px;
      letter-spacing: 2px;
    }
    @media (max-width: 320px) {
      font-size: 35px;
    }
  `;
const SubText = external_styled_components_default.a.p`
    font-size: 1.2rem;
    font-weight: 300;
    @media (max-width: 576px) {
      font-size: 14px;
    }
    @media (max-width: 415px) {
      font-size: 11px;
    }
  `;
const ButtonApply = external_styled_components_default.a.a`
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
  background: linear-gradient( 38deg, #00ff36 -10%, #00ee57 3%, #00c5ad 32%, #00a4f1 53%, #0b18fc 102%, #0d00ff 111% );
  transition: 0.2s;

  :hover {
      color: #fff;
      background-size: 200%;
      background-position: right;
  }
`;
/* harmony default export */ var components_Banner = (Banner);
// CONCATENATED MODULE: ./client/components/Order/constants/index.js
const FeatureData = [{
  title: "No fees",
  content: "Unlike legacy protocols, including 0x, the forbitspace Limit Order Protocol charges no fees. This makes the protocol extremely efficient in terms of gas."
}, {
  title: "Dynamic Pricing",
  content: "Price calculation is done by smart contracts, based on demand and supply, facilitating the best deals for users. The feature is especially useful for auctions."
}, {
  title: "Conditional orders",
  content: "Users can set specific conditions for execution of their orders to maximize earning on trading operations."
}, {
  title: "Extra RFQ support",
  content: "The protocol enables the fulfillment of requests for quotations (RFQs) - orders for a specific amount of cryptocurrency to buy or sell."
}, {
  title: "Multichain",
  content: "The protocol is operable on Ethereum, Binance Smart Chain and Polygon."
}];
const ImplementData = [{
  title: "Stop-loss-order",
  text: "Based on the conditional orders feature, a stop-loss order is executed when it reaches a particular price point set by the user. When the price limit is reached, the open position will close to prevent further losses."
}, {
  title: "Trailing Stop Order",
  text: "In a sell trailing stop order, also implemented on the conditional order feature, the user sets the stop price  at a fixed amount below market with an attached ‘trailing’ amount. If the market price increases, the stop price rises by the trailing amount. If the price falls, the stop-loss price remains unchanged."
}, {
  title: "Auction",
  text: "Thanks to the dynamic pricing feature, the protocol can be used to power auctions. For instance, Maker DAO’s Liquidation 2.0 Module is based on the auction model, and users could take part in Maker DAO auctions, using the forbitspace Limit Order Protocol."
}, {
  title: "forbitspace Grants program",
  text: "We have implemented some use cases based on the forbitspace Limit Order Protocol, such as, for instance, stop loss and trailing stop orders. However, there are still plentiful opportunities for implementing use cases on the forbitspace Limit Order Protocol, such as auctions. If you are a developer interested in building a specific solution on  the protocol, you can apply for a grant from the forbitspace Foundation."
}];
// CONCATENATED MODULE: ./client/components/Order/components/Feature.jsx

var Feature_jsx = external_react_default.a.createElement;



const Feature = () => {
  const RenderContent = ({
    data
  }) => {
    return Feature_jsx(BoxContent, null, data.map((item, index) => Feature_jsx(Feature_Content, {
      key: index
    }, Feature_jsx(SubTitle, null, item.title), Feature_jsx(Text, null, item.content))));
  };

  return Feature_jsx(WrapperFeature, null, Feature_jsx(Feature_Title, null, "Features"), Feature_jsx(RenderContent, {
    data: FeatureData
  }));
};

const WrapperFeature = external_styled_components_default.a.section`
    text-align: center;
    position: relative;

    @media (max-width: 1024px) {
        padding: 50px 0;
    }
    @media (max-width: 768px) {
        margin-top: 50px;
    }
`;
const Feature_Title = external_styled_components_default.a.h2`
    font-size: 4rem;
    line-height: 1.2;
    font-weight: 600;
    @media (max-width: 576px) {
        font-size: 45px;
        letter-spacing: 2px;
    }
    @media (max-width: 375px) {
        font-size: 35px;
    }
`;
const BoxContent = external_styled_components_default.a.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    text-align: left;
`;
const Feature_Content = external_styled_components_default.a.div`
    width: 33%;
    margin: 10px calc(1% / 6);
    padding: 10px 42px 10px 10px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
const SubTitle = external_styled_components_default.a.div`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        min-height: 70px;
        display: flex;
        align-items: flex-end;
    }

    @media (max-width: 415px) {
        min-height: 30px;
        font-size: 20px;
        margin-bottom: 15px;
        font-weight: 500;
    }
`;
const Text = external_styled_components_default.a.p`
    font-size: 1.2rem;
    font-weight: 300;
    @media (max-width: 576px) {
        font-size: 14px;
    }
    @media (max-width: 320px) {
        font-size: 12px;
    }
`;
/* harmony default export */ var components_Feature = (Feature);
// CONCATENATED MODULE: ./client/components/Order/components/Implementation.jsx

var Implementation_jsx = external_react_default.a.createElement;



const Implementation = () => {
  const RenderImplement = ({
    data
  }) => {
    return Implementation_jsx(Implementation_BoxContent, null, data.map((item, index) => Implementation_jsx(Implementation_Content, {
      key: index
    }, Implementation_jsx(Implementation_Title, null, item.title), Implementation_jsx(Implementation_Text, null, item.text))));
  };

  return Implementation_jsx(WrapperImplement, null, Implementation_jsx(HeaderContent, null, Implementation_jsx(Implementation_Title, null, "Implementations"), Implementation_jsx(Implementation_Text, null, "Below are some use cases for the forbitspace Limit Order Protocol. But the protocol is very flexible, and you can build much more on top of it!")), Implementation_jsx(RenderImplement, {
    data: ImplementData
  }));
};

const WrapperImplement = external_styled_components_default.a.section`
  text-align: center;
  position: relative;
  padding: 50px 0;
`;
const HeaderContent = external_styled_components_default.a.div`
  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;
const Implementation_Title = external_styled_components_default.a.h2`
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 600;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
  @media (max-width: 375px) {
    font-size: 35px;
  }
`;
const Implementation_Text = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
  @media (max-width: 576px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
const Implementation_BoxContent = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 240px;
  justify-content: space-between;

  margin: 150px auto 50px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    gap: 10px !important;
    margin: 20px auto;
  }
`;
const Implementation_Content = external_styled_components_default.a.div`
  width: calc((100% - 80px));
  text-align: left;

  padding: 15px 35px;
  border-radius: 12px;

  transition: 0.2s;

  h2 {
    font-size: 44px;
  }

  :nth-child(odd) {
    padding-right: 50%;
    @media (max-width: 1024px) {
      padding-right: 40%;
    }
  }
  :nth-child(even) {
    text-align: right;
    padding-left: 50%;
    @media (max-width: 1024px) {
      padding-left: 35%;
    }
  }
  :nth-child(4) {
    padding-left: 40%;
    @media (max-width: 1024px) {
      padding-left: 30%;
    }
  }

  :hover {
    transform: scale(1.12);
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    text-align: left !important;
    padding: 10px !important;
    margin: 40px 0 !important;

    h2 {
      font-size: 30px;
      font-weight: 600;
      letter-spacing: unset;
    }
  }

  @media (max-width: 415px) {
    padding: 0px !important;
    margin: 20px 0 !important;

    h2 {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
/* harmony default export */ var components_Implementation = (Implementation);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/Order/index.jsx
var Order_jsx = external_react_default.a.createElement;







const Order = () => {
  return Order_jsx(WrapperBackground, null, Order_jsx(Container, {
    className: "container"
  }, Order_jsx(components_Banner, null), Order_jsx(components_Feature, null), Order_jsx(components_Implementation, null), Order_jsx(Footer["a" /* default */], null)));
};

const WrapperBackground = external_styled_components_default.a.section`
    position: relative;
    overflow-x: hidden;
    // background-image: url(./images/background-line-min.png);
    background-size: auto;
`;
const Container = external_styled_components_default.a.div`
    
`;
/* harmony default export */ var components_Order = __webpack_exports__["default"] = (Order);

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