exports.ids = [48];
exports.modules = {

/***/ "ClIX":
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

// CONCATENATED MODULE: ./client/components/Contributors/components/Banner.jsx
var __jsx = external_react_default.a.createElement;



const Banner = () => {
  return __jsx(WrapperBanner, null, __jsx(BackgroundBanner, null, __jsx("img", {
    src: "./images/orbit-contributors-min.png",
    alt: "orbit contributors"
  })), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Title, null, "Contributors"), __jsx(Text, null, "Efficiency in decentralized ", __jsx("br", null), " finance is just forbitswap away"), __jsx(SubText, null, "forbitswap offers the most innovative solutions in de DeFi space, focusing ", __jsx("br", null), " primarily on security, speed and efficiency.")));
};

const WrapperBanner = external_styled_components_default.a.div`
  text-align: right;
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
  max-width: 750px;
  img {
    width: 100%;
  }
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  @media (max-width: 576px) {
    position: absolute;
    opacity: 0.5;
    max-width: 350px;
    right: 0;
    margin: auto;
  }
`;
const Content = external_styled_components_default.a.div`
  margin-left: -100px;
  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;
const Title = external_styled_components_default.a.h2`
  font-size: 6rem;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const Text = external_styled_components_default.a.p`
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 576px) {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 200;
    line-height: 25px;
  }
`;
const SubText = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
/* harmony default export */ var components_Banner = (Banner);
// CONCATENATED MODULE: ./client/components/Contributors/constants/index.js
const NumData = [{
  num: 50,
  text: 'Contributors'
}, {
  num: 20,
  text: 'Backers'
}, {
  num: 50,
  text: 'Partners & Supporters'
}, {
  num: 10,
  text: 'Countries'
}];
const MemberData = [{
  name: 'Meliora Lily',
  thumb: './images/thumb-members.png',
  job: 'Designer',
  lang: 'En, Vi'
}, {
  name: 'Meliora Lily',
  thumb: './images/thumb-members.png',
  job: 'Designer',
  lang: 'En, Vi'
}, {
  name: 'Meliora Lily',
  thumb: './images/thumb-members.png',
  job: 'Designer',
  lang: 'En, Vi'
}, {
  name: 'Meliora Lily',
  thumb: './images/thumb-members.png',
  job: 'Designer',
  lang: 'En, Vi'
}, {
  name: 'Meliora Lily',
  thumb: './images/thumb-members.png',
  job: 'Designer',
  lang: 'En, Vi'
}, {
  name: 'Meliora Lily',
  thumb: './images/thumb-members.png',
  job: 'Designer',
  lang: 'En, Vi'
}];
const AuditorData = [{
  name: 'Meliora Lily',
  thumb: './images/thumb-members.png',
  job: 'Founder',
  lang: 'En, Vi'
}, {
  name: 'Meliora Lily',
  thumb: './images/thumb-members.png',
  job: 'Founder',
  lang: 'En, Vi'
} // ,
// {
//     name: 'Meliora Lily',
//     thumb: './images/thumb-members.png',
//     job: 'Founder',
//     lang: 'En, Vi'
// }
];
const ContributorData = [{
  img: 'coingecko'
}, {
  img: 'chainlink'
}, {
  img: 'graph'
}, {
  img: 'metamask'
}, {
  img: 'dune'
}, {
  img: 'wallet'
}, {
  img: 'binance'
}, {
  img: 'polygon'
}, {
  img: 'coinbase'
}];
// CONCATENATED MODULE: ./client/components/Contributors/components/Numricals.jsx
var Numricals_jsx = external_react_default.a.createElement;




const Numricals = () => {
  const RenderItem = ({
    text,
    num
  }) => {
    return Numricals_jsx(StyledItem, null, Numricals_jsx(Num, null, num + "+"), Numricals_jsx(Numricals_Text, null, text));
  };

  return Numricals_jsx(WrapperNumrical, null, Numricals_jsx(Container, {
    className: "container text-dark text-visi"
  }, NumData.map(item => {
    return Numricals_jsx(RenderItem, {
      text: item.text,
      num: item.num
    });
  })));
};

const WrapperNumrical = external_styled_components_default.a.section`
    margin-top: 120px;
    @media (max-width: 768px) {
        margin-top: 100px;
    }
    @media (max-width: 576px) {
        margin-top: 150px;
    }
`;
const Container = external_styled_components_default.a.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const StyledItem = external_styled_components_default.a.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    text-align: center;
    padding-top: 1rem;
    position: relative;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
    @media (max-width: 576px) {
        width: 150px;
        height: 150px;
    }
    ::after {
        content: "";
        background: linear-gradient(45deg, #0168ffcc, #0168ff, #0168ffcc);
        z-index: -1;
        position: absolute;
        width: calc(99.9% + 1px);
        height: calc(99.9% + 1px);
        top: -1px;
        left: -1px;
        border-radius: inherit;
    }

    :nth-child(1) {
        background: linear-gradient(to right, #01203d, #021e3a);
        @media (max-width: 576px) {
            background: linear-gradient(to right, #012545, #011b35);
        }
    }
    :nth-child(2) {
        background: linear-gradient(to right, #021c37, #021a33);
        @media (max-width: 576px) {
            background: linear-gradient(to right, #02172f, #020d20);
        }
    }
    :nth-child(3) {
        background: linear-gradient(to right, #011831, #02162d);
        @media (max-width: 576px) {
            background: linear-gradient(to right, #012545, #011b35);

            div {
                margin-left: 15px;
            }
        }
    }
    :nth-child(4) {
        background: linear-gradient(to right, #01152a, #021327);
        @media (max-width: 576px) {
            background: linear-gradient(to right, #02172f, #020d20);
        }
    }
`;
const Num = external_styled_components_default.a.p`
    font-size: 3.5rem;
    font-weight: 600;
    margin-bottom: 0;
`;
const Numricals_Text = external_styled_components_default.a.div`
    text-align: left;
    margin-left: 35px;
    white-space: nowrap;
    @media (max-width: 576px) {
        font-size: 0.8rem;
    }
`;
/* harmony default export */ var components_Numricals = (Numricals);
// CONCATENATED MODULE: ./client/components/Contributors/components/Members.jsx
var Members_jsx = external_react_default.a.createElement;

 // import { MemberData } from "../constants";

const Members = props => {
  const RenderMemberItem = ({
    thumb,
    name,
    job,
    lang
  }) => {
    return Members_jsx(StyledMemberItem, null, Members_jsx(WrapperIfo, null, Members_jsx(FlexItem, null, Members_jsx(Name, null, name), Members_jsx("p", null, job), Members_jsx("p", null, lang), Members_jsx(Social, null, Members_jsx("i", {
      className: "fab fa-twitter"
    }), Members_jsx("i", {
      class: "fab fa-instagram"
    }), Members_jsx("i", {
      class: "fab fa-facebook-f"
    }))), Members_jsx(Thumb, null, Members_jsx("img", {
      src: thumb,
      alt: "icon member"
    }))), Members_jsx(Background, null, Members_jsx("img", {
      src: "./images/orbit-background-1.svg",
      alt: ""
    })));
  };

  return Members_jsx(WrapperMembers, null, Members_jsx(Members_Title, null, props.title), Members_jsx(GroupMembers, null, props.data.map(item => {
    return Members_jsx(RenderMemberItem, {
      thumb: item.thumb,
      name: item.name,
      job: item.job,
      lang: item.lang
    });
  })));
};

const Social = external_styled_components_default.a.div`
  display: flex;
  i {
    margin-right: 5px;
  }
`;
const FlexItem = external_styled_components_default.a.div`
  margin-top: 50px;
  margin-right: 40px;
`;
const Background = external_styled_components_default.a.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const WrapperMembers = external_styled_components_default.a.div`
  margin-top: 4rem;
`;
const Members_Title = external_styled_components_default.a.p`
  font-size: 3rem;
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
const GroupMembers = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 1075px){
    justify-content: flex-start;
  }
`;
const StyledMemberItem = external_styled_components_default.a.div`
  position: relative;
  width: 350px;
  height: 350px;
  margin: 0 auto;

  @media (min-width: 1075px){
    margin: 0 calc((100% - 1050px)/6);
  }
`;
const WrapperIfo = external_styled_components_default.a.div`
  p {
    font-size: 13px;
    font-weight: 100;
    margin-bottom: 0;
    line-height: 22px;
  }
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  right: 40px;
  bottom: 0;
  margin: auto 0;
  display: flex;
`;
const Name = external_styled_components_default.a.h3`
  font-size: 14px;
`;
const Thumb = external_styled_components_default.a.div`
  width: 100px;
  height: 100px;
  position: absolute;
  right: 6px;
  top: 4px;
`;
/* harmony default export */ var components_Members = (Members);
// CONCATENATED MODULE: ./client/components/Contributors/index.jsx
var Contributors_jsx = external_react_default.a.createElement;

 // import Footer from "./components/Footer";




 // import {}

const Index = () => {
  return Contributors_jsx(WrapperBackground, null, Contributors_jsx(Contributors_Container, {
    className: "container"
  }, Contributors_jsx(components_Banner, null), Contributors_jsx(components_Numricals, null), Contributors_jsx(components_Members, {
    title: "Active core contributors",
    data: MemberData
  }), Contributors_jsx(components_Members, {
    title: "Auditors",
    data: AuditorData
  })), Contributors_jsx(BackgroundImg, {
    src: "./images/background-line-min.png"
  }));
};

const WrapperBackground = external_styled_components_default.a.section`
  position: relative;
  overflow-x: hidden;
  /* background-image: url(./images/background-line-min.png); */
  background-size: auto;
`;
const Contributors_Container = external_styled_components_default.a.div``;
const BackgroundImg = external_styled_components_default.a.img`
  position: absolute;
  top: -100vh;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(100% + 100vh);
  opacity: 0.6;
  z-index: -1;
  @media (max-width: 576px) {
    position: fixed;
  }
`;
/* harmony default export */ var Contributors = __webpack_exports__["default"] = (Index);

/***/ })

};;