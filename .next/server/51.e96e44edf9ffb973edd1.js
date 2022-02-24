exports.ids = [51];
exports.modules = {

/***/ "E249":
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__("90Kz")();

routes.add("/:username", "profilepage");

/***/ }),

/***/ "JoM1":
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

// CONCATENATED MODULE: ./client/components/Token/components/Banner.jsx
var __jsx = external_react_default.a.createElement;




const Banner = () => {
  return __jsx(BoxSection, null, __jsx(Content, null, __jsx(Title, null, "Introducing FBS")), __jsx(WrapContainer, null, __jsx(WrapImg, null, __jsx("img", {
    src: "../images/token-page/token-banner-min.png",
    alt: ""
  })), __jsx(WrapLogo, null, __jsx("img", {
    src: "../images/token-page/logo-full-gray.png",
    alt: ""
  }))));
};

const BoxSection = external_styled_components_default.a.section`
    position: relative;
    font-family: sans-serif;
    /* min-height: 88vh; */
    padding: 8vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
`;
const WrapImg = external_styled_components_default.a.div`
    width: 100%;
    max-width: 980px;
    img {
        width: 100%;
        margin: auto;
    }
`;
const WrapLogo = external_styled_components_default.a.div`
    width: 100%;
    max-width: 420px;
    img {
        width: 100%;
    }
`;
const Content = external_styled_components_default.a.div`
    /* margin-left: 80px; */
    text-align: center;
`;
const Title = external_styled_components_default.a.p`
    font-size: 3rem;
    font-weight: 900;
    font-style: italic;
    line-height: 40px;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 2rem 0;
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
    max-width: 600px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 576px) {
        font-size: 16px;
    }
`;
/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// CONCATENATED MODULE: ./client/components/Token/components/Introduction.jsx
var Introduction_jsx = external_react_default.a.createElement;





const Introduction = () => {
  return Introduction_jsx(Introduction_BoxSection, null, Introduction_jsx(Introduction_WrapContainer, null, Introduction_jsx(Text, null, Introduction_jsx("p", {
    className: "content"
  }, "The ", Introduction_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " DEX Super Aggregator is an interoperability protocol that unites decentralized applications across disparate blockchains, simultaneously uniting liquidity across chains and making it possible to transact in, out, and across disparate networks with ease. The", " ", Introduction_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " DEX Super Aggregator allows crypto traders to tap deep liquidity and receive better pricing with one single interface.", Introduction_jsx("br", null), Introduction_jsx("br", null)), Introduction_jsx("p", {
    className: "content"
  }, Introduction_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " DEX Super Aggregator employs a smart order routing algorithm to source liquidity from different DEXs and thus offer users better token swap rates than they could get on any single DEX.", " ", Introduction_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " DEX Super Aggregator has the ability to optimize slippage, swap fees, and minimize slippage on large orders for users and offer traders the best possible price in the shortest possible time.", Introduction_jsx("br", null), Introduction_jsx("br", null), Introduction_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " DEX Super Aggregator uses a Spaceflight algorithm smart order routing to split a single transaction into multiple orders across various DEXs, also route orders through allowing crypto traders to tap deep liquidity and receive better pricing, low cost & efficiency in the most of liquidity.")), Introduction_jsx(Introduction_WrapImg, null, Introduction_jsx(external_react_lazyload_default.a, {
    height: 400,
    once: true,
    placeholder: Introduction_jsx("img", {
      width: "1251",
      height: "409.79",
      src: "../images/aggregation-page/aggregation-banner.png",
      alt: "aggregation-picture"
    })
  }, Introduction_jsx("img", {
    src: "../gif/gif_aggregation-protocol.gif",
    alt: "aggregation-protocols"
  })))));
};

const Introduction_BoxSection = external_styled_components_default.a.section`
    position: relative;
    font-family: sans-serif;
    /* min-height: 88vh; */
    padding: 4vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const Introduction_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
`;
const Text = external_styled_components_default.a.div`
    line-height: 1.2;
    .header {
        font-size: 28px;
        font-weight: bold;
        margin: 12px 0;
        font-style: italic;
    }
    .content {
        font-size: 22px;
        font-weight: 300;
        text-align: justify;
    }
    @media (max-width: 576px) {
        .header {
            font-size: 22px;
        }
        .content {
            text-align: left;
            font-size: 16px;
        }
    }
`;
const Introduction_WrapImg = external_styled_components_default.a.div`
    width: 100%;
    max-width: 720px;
    img {
        width: 100%;
        margin: auto;
    }
`;
/* harmony default export */ var components_Introduction = (Introduction);
// CONCATENATED MODULE: ./client/components/Token/components/Highlights.jsx
var Highlights_jsx = external_react_default.a.createElement;




const Highlights = () => {
  return Highlights_jsx(Highlights_BoxSection, null, Highlights_jsx(Highlights_WrapContainer, null, Highlights_jsx(Highlights_Text, null, Highlights_jsx("p", {
    className: "header"
  }, "Key Highlights"), Highlights_jsx("p", {
    className: "header dex"
  }, Highlights_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " DEX Super Aggregator"), Highlights_jsx("p", {
    className: "title"
  }, "\u2022 Aggregation Protocol"), Highlights_jsx("p", {
    className: "content"
  }, "The ", Highlights_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " DEX Super Aggregator is an interoperability protocol that unites decentralized applications across disparate blockchains, simultaneously uniting liquidity across chains and making it possible to transact in, out, and across disparate networks with ease.", Highlights_jsx("br", null), Highlights_jsx("br", null)), Highlights_jsx("p", {
    className: "title"
  }, "\u2022 Liquidity Protocol"), Highlights_jsx("p", {
    className: "content"
  }, "The ", Highlights_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " ", "decentralized protocol empowers traders to provide liquidity to pools and collect extra rewards in", " ", Highlights_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " tokens for participating in liquidity mining programs.", Highlights_jsx("br", null), Highlights_jsx("br", null)), Highlights_jsx("p", {
    className: "title"
  }, "\u2022 Limit Order Protocol"), Highlights_jsx("p", {
    className: "content"
  }, "A limit order places a specific price that a trader wants to buy or sell at and is only executed if the market hits that price. ", Highlights_jsx("br", null), "Whereas market orders are executed immediately, limit orders are executed at a predefined price, which is generally better than the current market price.", Highlights_jsx("br", null), Highlights_jsx("br", null)), Highlights_jsx("p", {
    className: "title"
  }, "\u2022 Derivative protocol"), Highlights_jsx("p", {
    className: "content"
  }, Highlights_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " ", "derivatives protocol is used to create custom assets by using forward-looking features of locking the price in and the ability to either buy or sell an asset.", " ", Highlights_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " uses a contract that represents an asset bought or sold at a future date for a future price, synthetics are the very underlying asset representative of other assets.", Highlights_jsx("br", null), Highlights_jsx("br", null)), Highlights_jsx("p", {
    className: "title"
  }, "\u2022 Self-custody"), Highlights_jsx("p", {
    className: "content"
  }, "- Our vision:", " ", Highlights_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " sees crypto quickly mature to the trading of thousands of new assets and the adoption of new use cases, including DeFi, non-fungible tokens (NFT), smart contracts, decentralized autonomous organizations (DAOs), and more. Our app is built on decentralized crypto for customers to do self-custody of their crypto in the main", " ", Highlights_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " app.", Highlights_jsx("br", null), " ", Highlights_jsx("br", null), "- Space DAO:", " ", Highlights_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " ", "protocols integrate decentralized autonomous organizations (DAOs) into protocols to facilitate decentralized blockchain governance. Space DAOs utilizes blockchain-based tokens to represent voting rights. As a result, only token holders can participate in network governance. These smart contracts can greatly reduce \u2014 or even eliminate \u2014 the need for intermediaries that might compromise decentralized decision-making.")), Highlights_jsx(Highlights_WrapImg, null, Highlights_jsx("img", {
    src: "../images/token-page/ecosystem.png",
    alt: "token-ecosystem"
  })), Highlights_jsx(Highlights_Text, null, Highlights_jsx("p", {
    className: "content"
  }, Highlights_jsx("span", {
    className: "forbitspace"
  }, "forbitswap"), " is a capital-efficient AMM that combines the liquidity on Ethereum blockchain and Binance Smart Chain with the scalability of a Layer 2 platform deployed on the Polygon Network, Avalanche, Arbitrum, and will soon be functional on other blockchains including Solana and more.", Highlights_jsx("br", null), " ", Highlights_jsx("br", null), Highlights_jsx("span", {
    className: "forbitspace"
  }, "forbitswap"), " will also work to provide a comprehensive platform for social tokens and NFTs."), Highlights_jsx("p", {
    className: "sub content"
  }, Highlights_jsx("img", {
    src: "../images/icons/star.svg",
    alt: "star icon"
  }), " ", "Swap"), Highlights_jsx("p", {
    className: "sub content"
  }, Highlights_jsx("img", {
    src: "../images/icons/star.svg",
    alt: "star icon"
  }), " ", "Staking"), Highlights_jsx("p", {
    className: "sub content"
  }, Highlights_jsx("img", {
    src: "../images/icons/star.svg",
    alt: "star icon"
  }), " ", "Liquidity mining"), Highlights_jsx("p", {
    className: "sub content"
  }, Highlights_jsx("img", {
    src: "../images/icons/star.svg",
    alt: "star icon"
  }), " ", "NFTs space marketplace"), Highlights_jsx("p", {
    className: "sub content"
  }, Highlights_jsx("img", {
    src: "../images/icons/star.svg",
    alt: "star icon"
  }), " ", "flyby IDO platform Launching multiple chains"))));
};

const Highlights_BoxSection = external_styled_components_default.a.section`
    position: relative;
    font-family: sans-serif;
    /* min-height: 88vh; */
    padding: 4vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const Highlights_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
`;
const Highlights_Text = external_styled_components_default.a.div`
    line-height: 1.2;
    .header {
        font-size: 28px;
        font-weight: bold;
        margin: 12px 0;
        /* font-style: italic; */
    }
    .title {
        font-size: 23px;
        margin: 2rem 0 1rem;
        /* font-style: italic; */
    }
    .dex {
        font-size: 23px;
        margin-bottom: 1rem;
        font-weight: 500;
        font-style: italic;
    }
    .content {
        font-size: 22px;
        font-weight: 300;
        text-align: justify;
    }
    .sub {
        padding-left: 1rem;
        font-size: 20px;
        color: white;
        display: flex;
        align-items: center;
        /* justify-content: space-around; */
        img {
            width: 10px;
            margin-right: 6px;
        }
    }
    @media (max-width: 576px) {
        .key {
            font-size: 24px;
            margin: 1rem 0;
        }
        .header {
            font-size: 22px;
        }
        .dex {
            font-size: 20px;
        }
        .title {
            font-size: 20px;
            margin: 1rem 0;
        }
        .content {
            text-align: left;
            font-size: 16px;
        }
    }
`;
const Highlights_WrapImg = external_styled_components_default.a.div`
    width: 100%;
    /* max-width: 720px; */
    img {
        width: 100%;
        margin: auto;
    }
`;
/* harmony default export */ var components_Highlights = (Highlights);
// CONCATENATED MODULE: ./client/components/Token/components/Metrics.jsx
var Metrics_jsx = external_react_default.a.createElement;




const Metrics = () => {
  return Metrics_jsx(Metrics_BoxSection, null, Metrics_jsx(Metrics_WrapContainer, null, Metrics_jsx(Metrics_Text, null, Metrics_jsx("p", {
    className: "header"
  }, "Key Metrics"), Metrics_jsx("p", {
    className: "content"
  }, "\u2022 Token type: Utility Governance and Multi-chain.", Metrics_jsx("br", null)), Metrics_jsx("p", {
    className: "content"
  }, "\u2022 Max Supply: 9,999,999,999", " ", Metrics_jsx("span", {
    className: "forbitspace"
  }, "FBS"), ".", Metrics_jsx("br", null))), Metrics_jsx(Metrics_Text, {
    className: "contract"
  }, Metrics_jsx("p", {
    className: "header"
  }, "Contract:"), Metrics_jsx("p", {
    className: "title"
  }, "\u2022 ERC20:"), Metrics_jsx("p", {
    className: "content link"
  }, Metrics_jsx("a", {
    href: "https://etherscan.io/token/0xa953736904e23fafb42e353d4122420899999999",
    target: "_blank",
    rel: "noreferrer"
  }, "https://etherscan.io/token/0xa953736904e23fafb42e353d4122420899999999"), Metrics_jsx("br", null)), Metrics_jsx("p", {
    className: "title"
  }, "\u2022 Bep20:"), Metrics_jsx("p", {
    className: "content link"
  }, Metrics_jsx("a", {
    href: "https://bscscan.com/token/0xA953736904e23Fafb42e353D4122420899999999",
    target: "_blank",
    rel: "noreferrer"
  }, "https://bscscan.com/token/0xA953736904e23Fafb42e353D4122420899999999"), Metrics_jsx("br", null)), Metrics_jsx("p", {
    className: "title"
  }, "\u2022 SLP:"), Metrics_jsx("p", {
    className: "content link"
  }, Metrics_jsx("a", {
    href: "https://solanabeach.io/address/Hwv5ecNoHv5kNnQ2ungWN6PSq1pMq89McysSQtiELTTH",
    target: "_blank",
    rel: "noreferrer"
  }, "https://solanabeach.io/address/Hwv5ecNoHv5kNnQ2ungWN6PSq1pMq89McysSQtiELTTH"), Metrics_jsx("br", null)), Metrics_jsx("p", {
    className: "title"
  }, "\u2022 Polygon:"), Metrics_jsx("p", {
    className: "content link"
  }, Metrics_jsx("a", {
    href: "https://polygonscan.com/token/0xA953736904e23Fafb42e353D4122420899999999",
    target: "_blank",
    rel: "noreferrer"
  }, "https://polygonscan.com/token/0xA953736904e23Fafb42e353D4122420899999999"), Metrics_jsx("br", null)), Metrics_jsx("p", {
    className: "title"
  }, "\u2022 Avalanche:"), Metrics_jsx("p", {
    className: "content link"
  }, Metrics_jsx("a", {
    href: "https://snowtrace.io/address/0xA953736904e23Fafb42e353D4122420899999999",
    target: "_blank",
    rel: "noreferrer"
  }, "https://snowtrace.io/address/0xA953736904e23Fafb42e353D4122420899999999"), Metrics_jsx("br", null))), Metrics_jsx(Metrics_WrapImg, null, Metrics_jsx("img", {
    src: "../images/token-page/fbs-ticker.png",
    alt: ""
  })), Metrics_jsx(Metrics_Text, null)));
};

const Metrics_BoxSection = external_styled_components_default.a.section`
    position: relative;
    font-family: sans-serif;
    /* min-height: 88vh; */
    padding: 4vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const Metrics_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])``;
const Metrics_Text = external_styled_components_default.a.div`
    line-height: 1.2;
    &.contract {
        overflow: auto;
        padding: 10px 0;
    }
    .header {
        font-size: 28px;
        font-weight: bold;
        margin: 12px 0;
    }
    .title {
        font-size: 23px;
        margin: 6px 0;
    }
    .dex {
        font-weight: 500;
        font-style: italic;
    }
    .content {
        font-size: 22px;
        font-weight: 300;
        text-align: justify;
    }
    .title {
        font-size: 20px;
    }
    .link {
        padding-left: 1rem;
        font-size: 22px;
    }
    @media (max-width: 576px) {
        .header {
            font-size: 22px;
        }
        .content,
        .link {
            text-align: left;
            font-size: 16px;
        }
    }
`;
const Metrics_WrapImg = external_styled_components_default.a.div`
    width: 100%;
    margin: 3rem 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        /* max-width: 920px; */
        border-radius: 16px;
        /* margin: auto; */
    }
`;
/* harmony default export */ var components_Metrics = (Metrics);
// CONCATENATED MODULE: ./client/components/Token/components/Allocation.jsx
var Allocation_jsx = external_react_default.a.createElement;




const Allocation = () => {
  return Allocation_jsx(Allocation_BoxSection, null, Allocation_jsx(Allocation_WrapContainer, null, Allocation_jsx(Allocation_Text, null, Allocation_jsx("p", {
    className: "header"
  }, "Allocation"), Allocation_jsx("p", {
    className: "title"
  }, "Token distribution")), Allocation_jsx(Allocation_WrapImg, null, Allocation_jsx("img", {
    src: "../images/token-page/token-allocation.png",
    alt: "aggregation-protocols"
  })), Allocation_jsx(Allocation_Text, null, Allocation_jsx("p", {
    className: "content"
  }, "\u2022 56,0% to", " ", Allocation_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " ", "Community member."), Allocation_jsx("p", {
    className: "content"
  }, "\u2022 10,0% Network growth funds."), Allocation_jsx("p", {
    className: "content"
  }, "\u2022 9,0% Early Backers 5-year vesting."), Allocation_jsx("p", {
    className: "content"
  }, "\u2022 6,0% Backers 5-year vesting."), Allocation_jsx("p", {
    className: "content"
  }, "\u2022 8,0% Core contributors and future employees with a 5-year vesting."), Allocation_jsx("p", {
    className: "content"
  }, "\u2022 5,0% Strategic Sale IDO, IEO."), Allocation_jsx("p", {
    className: "content"
  }, "\u2022 3,0% Small backers 5-year vesting."), Allocation_jsx("p", {
    className: "content"
  }, "\u2022 3,0% Advisor with a 5-year vesting."), Allocation_jsx("p", {
    className: "content"
  }, "\u2022 A perpetual inflation rate of 3% per year will start after 5 years, ensuring continued participation and contribution to the", " ", Allocation_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " ", "protocol and ecosystem at the expense of passive", " ", Allocation_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " holders."), Allocation_jsx("p", {
    className: "header"
  }, "Token unlock schedule"), Allocation_jsx("p", {
    className: "content"
  }, "IEO funding for the liquidity provider protocol was unlocked with a 10% network expansion fund of tokens already accessible. 5,0% Strategic sale private and IDO. The ", Allocation_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " tokens will be gradually unlocked to distribute community initiatives, liquidity mining, and other programs over a five-year period."))));
};

const Allocation_BoxSection = external_styled_components_default.a.section`
    position: relative;
    font-family: sans-serif;
    /* min-height: 88vh; */
    padding: 4vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const Allocation_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])``;
const Allocation_Text = external_styled_components_default.a.div`
    line-height: 1.2;
    .header {
        font-size: 28px;
        font-weight: bold;
        margin: 12px 0;
        /* font-style: italic; */
    }
    .title {
        font-size: 23px;
        margin: 16px 0 6px;
        /* font-style: italic; */
    }
    .content {
        font-size: 22px;
        font-weight: 300;
        text-align: justify;
        padding: 5px 0;
    }
    @media (max-width: 576px) {
        .header {
            font-size: 22px;
        }
        .title {
            font-size: 20px;
        }
        .content {
            text-align: left;
            font-size: 16px;
        }
    }
`;
const Allocation_WrapImg = external_styled_components_default.a.div`
    width: 100%;
    /* max-width: 720px; */
    img {
        width: 100%;
        margin: auto;
    }
`;
/* harmony default export */ var components_Allocation = (Allocation);
// CONCATENATED MODULE: ./client/components/Token/components/Schedules.jsx
var Schedules_jsx = external_react_default.a.createElement;




const Schedules = () => {
  return Schedules_jsx(Schedules_BoxSection, null, Schedules_jsx(Schedules_WrapContainer, null, Schedules_jsx(Schedules_Text, null, Schedules_jsx("p", {
    className: "header"
  }, "FBS Token Release schedule")), Schedules_jsx(Schedules_WrapImg, null, Schedules_jsx("img", {
    src: "../images/token-page/token-release.png",
    alt: "aggregation-protocols"
  })), Schedules_jsx(Schedules_Text, null, Schedules_jsx("p", {
    className: "header"
  }, "FBS Token Unlock schedule")), Schedules_jsx(Schedules_WrapImg, null, Schedules_jsx("img", {
    src: "../images/token-page/token-unlock.png",
    alt: "aggregation-protocols"
  })), Schedules_jsx(Schedules_Text, null, Schedules_jsx("p", {
    className: "header"
  }, "FBS will vest to the governance treasury on a continuous basis according to the following schedule")), Schedules_jsx(Schedules_WrapImg, null, Schedules_jsx("img", {
    src: "../images/token-page/token-treasury.png",
    alt: "aggregation-protocols"
  })), Schedules_jsx(Schedules_Text, null, Schedules_jsx("p", {
    className: "header"
  }, "FBS is the native utility token of the platform and is used in the following functions:"), Schedules_jsx("p", {
    className: "content"
  }, "\u2022 Protocol Governance: The", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " token holders can submit and vote on network governance proposals in futures protocol, exchange parameters, and protocol upgrades via a DAO structure."), Schedules_jsx("p", {
    className: "content"
  }, "\u2022 Liquidity mining Incentives:", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), "'s protocols multi-chain incorporates a liquidity mining scheme and distributes a fixed number of", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " tokens daily weighted by the liquidity each network participant provides on", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " ", "protocol or", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "forbitswap"), " ", "protocol."), Schedules_jsx("p", {
    className: "content"
  }, "\u2022 Protocol Incentivization: Users can earn", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " tokens as rewards based on their trading volume on the", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " platform."), Schedules_jsx("p", {
    className: "content"
  }, "\u2022 Staking: Users can stake", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " tokens to the Safety Module to earn staking rewards in", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " tokens. Note that staked ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " ", "will balance by the following time."), Schedules_jsx("p", {
    className: "content"
  }, "\u2022 Collateral Backing for Derivatives:", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " will be utilized as an alternative to stablecoins as margin and collateral for", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), "'s derivatives markets. In some futures markets,", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " can also be used for collateral backing or insurance pool staking where stakes can earn interest on their locked tokens.", Schedules_jsx("br", null), Schedules_jsx("br", null)), Schedules_jsx("p", {
    className: "content"
  }, "Platform Service Fees: After the relayer reward distribution, the exchange platform fee will undergo an on-chain buy-back-and-burn event to accrue value for", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS")), Schedules_jsx("p", {
    className: "content"
  }, "Utility holders:", " ", Schedules_jsx("span", {
    className: "forbitspace"
  }, "FBS"), " token holders can participate in an auction with options such as Crowdsale, Dutch & Batch auction on Flyby IDO launchpad - a multi-chain platform, and NFTs Space."))));
};

const Schedules_BoxSection = external_styled_components_default.a.section`
    position: relative;
    font-family: sans-serif;
    /* min-height: 88vh; */
    padding: 4vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const Schedules_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])``;
const Schedules_Text = external_styled_components_default.a.div`
    line-height: 1.2;
    .header {
        font-size: 28px;
        font-weight: bold;
        margin: 12px 0;
        /* font-style: italic; */
    }
    .title {
        font-size: 23px;
        margin: 6px 0;
        /* font-style: italic; */
    }
    .content {
        font-size: 22px;
        font-weight: 300;
        text-align: justify;
        padding: 5px 0;
    }
    @media (max-width: 576px) {
        .header {
            font-size: 22px;
        }
        .content {
            text-align: left;
            font-size: 16px;
        }
    }
`;
const Schedules_WrapImg = external_styled_components_default.a.div`
    width: 100%;
    /* max-width: 720px; */
    img {
        width: 100%;
        margin: auto;
    }
`;
/* harmony default export */ var components_Schedules = (Schedules);
// CONCATENATED MODULE: ./client/components/Token/components/Roadmap.jsx
var Roadmap_jsx = external_react_default.a.createElement;




const RoadMap = () => {
  return Roadmap_jsx(Roadmap_BoxSection, null, Roadmap_jsx(Roadmap_WrapContainer, null, Roadmap_jsx(Roadmap_Text, null, Roadmap_jsx("p", {
    className: "content"
  }, Roadmap_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " DEX super aggregator successfully solves one of the disjointed liquidity that is inherent in decentralized exchanges\u2019 biggest issues \u2014 liquidity \u2014 by sourcing it through the aggregation of many leading DEXs \u2013 at the same time."), Roadmap_jsx("p", {
    className: "content"
  }, Roadmap_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " DEX Super Aggregator uses the power of blockchain to bring a multichain ecosystem to explore the possibilities of protocols working together to create scalability and efficiency."), Roadmap_jsx("p", {
    className: "content"
  }, Roadmap_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " DEX Super Aggregator connects different blockchains to give users access to hundreds of new assets, a secure, easy-to-use decentralized exchange, and the blockchain industry's fastest smart contracts platform, which is blazingly fast, low-cost, and eco friendly."), Roadmap_jsx("p", {
    className: "header"
  }, "Our Roadmap")), Roadmap_jsx(Roadmap_WrapImg, null, Roadmap_jsx("img", {
    src: "../images/about-page/roadmap.png",
    alt: "road-map"
  })), Roadmap_jsx(WrapFooter, null, Roadmap_jsx("a", {
    href: "https://forbitspace.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "Website"), Roadmap_jsx("a", {
    href: "https://docs.forbitspace.com/english",
    target: "_blank",
    rel: "noreferrer"
  }, "Docs"), Roadmap_jsx("a", {
    href: "https://twitter.com/forbitspace",
    target: "_blank",
    rel: "noreferrer"
  }, "Twitter"), Roadmap_jsx("a", {
    href: "https://t.me/forbitspace",
    target: "_blank",
    rel: "noreferrer"
  }, "Telegram"), Roadmap_jsx("a", {
    href: "https://discord.com/invite/forbitspace",
    target: "_blank",
    rel: "noreferrer"
  }, "Discord"), Roadmap_jsx("a", {
    href: "https://help.forbitspace.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "Tutorial"), Roadmap_jsx("a", {
    href: "https://www.reddit.com/r/forbitspace/",
    target: "_blank",
    rel: "noreferrer"
  }, "Reddit"), Roadmap_jsx("a", {
    href: "https://www.facebook.com/forbitspace",
    target: "_blank",
    rel: "noreferrer"
  }, "Facebook"), Roadmap_jsx("a", {
    href: "https://github.com/forbitspace",
    target: "_blank",
    rel: "noreferrer"
  }, "Github"))));
};

const Roadmap_BoxSection = external_styled_components_default.a.section`
    position: relative;
    font-family: sans-serif;
    /* min-height: 88vh; */
    padding: 4vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const Roadmap_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])``;
const Roadmap_Text = external_styled_components_default.a.div`
    line-height: 1.2;
    .header {
        font-size: 28px;
        font-weight: bold;
        margin: 2rem 0 1rem;
        /* font-style: italic; */
    }
    .title {
        font-size: 23px;
        margin: 6px 0;
    }
    .content {
        font-size: 22px;
        font-weight: 300;
        text-align: justify;
        padding: 5px 0;
    }
    @media (max-width: 576px) {
        .header {
            font-size: 22px;
        }
        .content {
            text-align: left;
            font-size: 16px;
        }
    }
`;
const Roadmap_WrapImg = external_styled_components_default.a.div`
    width: 100%;
    /* max-width: 720px; */
    img {
        width: 100%;
        margin: auto;
    }
`;
const WrapFooter = external_styled_components_default.a.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 2rem 0;
    a {
        font-size: 20px;
        font-style: italic;
        color: #0168ff;
        max-width: 150px;
        margin-right: 20px;
    }
    @media (max-width: 576px) {
        a {
            font-size: 14px;
            margin-right: 12px;
        }
    }
`;
/* harmony default export */ var Roadmap = (RoadMap);
// CONCATENATED MODULE: ./client/components/Token/index.jsx
var Token_jsx = external_react_default.a.createElement;











const Index = () => {
  return Token_jsx(WrapperBackground, null, Token_jsx(WrapContent, null, Token_jsx(components_Banner, null), Token_jsx(components_Introduction, null), Token_jsx(components_Highlights, null), Token_jsx(components_Metrics, null), Token_jsx(components_Allocation, null), Token_jsx(components_Schedules, null), Token_jsx(Roadmap, null)), Token_jsx(Footer["a" /* default */], null));
};

const WrapperBackground = external_styled_components_default.a.div`
    div,
    span,
    p {
        font-family: "helvetica neue", "Roboto", sans-serif;
    }
    position: relative;
    font-family: helvetica neue;
    position: relative;
    overflow-x: hidden;
    background-size: auto;

    .forbitspace {
        font-style: italic;
        font-weight: 900 !important;
    }

    @media (max-width: 576px) {
        overflow-x: hidden;
    }
`;
const WrapContent = external_styled_components_default.a.div`
    min-height: calc(100vh - 330px);
`;
/* harmony default export */ var Token = __webpack_exports__["default"] = (Index);

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
  // link: "https://discord.com/invite/forbitspace",
  link: "https://discord.gg/PkCehXfe3t",
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