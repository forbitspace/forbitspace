exports.ids = [49];
exports.modules = {

/***/ "Nnsu":
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

// CONCATENATED MODULE: ./client/components/Foundation/components/Banner.jsx
var __jsx = external_react_default.a.createElement;



const Banner = () => {
  return __jsx(WrapperBanner, null, __jsx(BackgroundBanner, null, __jsx("img", {
    src: "./images/icon-foundation/earth-background-foundation.png",
    alt: "forbitspace foundation"
  })), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Title, null, "forbitspace", __jsx("br", null), "Foundation"), __jsx(SubText, null, "A non-profit organization that issued the forbitspace token and", __jsx("br", null), "is dedicated to fostering the forbitspace Network and initiatives", __jsx("br", null), "that benefit the network\u2019s community.")));
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
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  img {
    width: 100%;
  }
  @media (max-width: 576px) {
    position: absolute;
    opacity: 0.5;
    max-width: 350px;
    right: 0;
    margin: auto;
  }
`;
const Content = external_styled_components_default.a.div`
  margin-left: 100px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;
const Title = external_styled_components_default.a.h2`
  font-size: 6rem;
  line-height: 1;
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
// CONCATENATED MODULE: ./client/components/Foundation/constants/index.js
const MissionData = [{
  img: "community",
  title: "Community",
  content: "Engaging adopters and maximizing the network’s decentralization through growing stakeowner numbers and their participation in DAO governance."
}, {
  img: "grants",
  title: "Grants",
  content: "Incentivizing individual developers and teams to build on the forbitspace Network’s protocols and contribute to protocol evolution."
}, {
  img: "yield-farming",
  title: "Yield farimng",
  content: "Running yield farming programs that have proven to be efficient bootstrapping tools for otential blue chips of the DeFi space, while offering users lucrative pool rewards."
}];
// CONCATENATED MODULE: ./client/components/Foundation/components/Mission.jsx
var Mission_jsx = external_react_default.a.createElement;




const Misson = () => {
  const RenderMission = ({
    data
  }) => {
    return Mission_jsx(Community, null, data.map((item, index) => Mission_jsx(BoxRender, {
      key: index
    }, Mission_jsx(Thumb, {
      className: "thumb"
    }, Mission_jsx("img", {
      src: `./images/icon-foundation/${item.img}.svg`,
      alt: ""
    }), Mission_jsx(Liner, null)), Mission_jsx(BoxTitle, null, item.title), Mission_jsx(Mission_Text, null, item.content))));
  };

  return Mission_jsx(WrapperMission, null, Mission_jsx(HeaderContent, null, Mission_jsx(Mission_Title, null, "Mission"), Mission_jsx(Mission_Text, null, "The mission of the forbitspace Foundation is to foster growth and expansion of the forbitspace Network and incentivize contributions through grants and other capital deployment vehicles. The forbitspace Foundation is focused on the following areas:")), Mission_jsx(RenderMission, {
    data: MissionData
  }));
};

const WrapperMission = external_styled_components_default.a.section`
  text-align: center;
  position: relative;

  @media (max-width: 1024px) {
    padding: 50px 0 0;
  }
`;
const HeaderContent = external_styled_components_default.a.div`
  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;
const Mission_Title = external_styled_components_default.a.h2`
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 600;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
  @media (max-width: 415px) {
    font-size: 2rem;
  }
`;
const Mission_Text = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
const Community = external_styled_components_default.a.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 0;
`;
const BoxRender = external_styled_components_default.a.div`
  width: 32%;
  max-width: 370px;
  text-align: left;
  @media (max-width: 768px) {
    max-width: unset;
    width: auto;
  }
`;
const Thumb = external_styled_components_default.a.div`
  width: 100%;
  height: 80px;
  padding-left: 30px;
  position: relative;
`;
const Liner = external_styled_components_default.a.div`
  position: absolute;
  left: 35%;
  top: 30px;
  width: 70%;
  height: 1px;
  background-image: linear-gradient(to right, #0168ff 0%, rgba(2, 40, 77, 0));
  transform: translateX(30px);
`;
const BoxTitle = external_styled_components_default.a.div`
  font-size: 3rem;
  @media (max-width: 415px) {
    font-size: 1.6rem;
  }
`;
/* harmony default export */ var Mission = (Misson);
// CONCATENATED MODULE: ./client/components/Foundation/components/Grant.jsx
var Grant_jsx = external_react_default.a.createElement;



const Grant = () => {
  const DataGrant = [{
    title: "Submit",
    content: "Applications are initially vetted for compliance with the forbitspace Foundation’s formal and substantial requirements."
  }, {
    title: "Review",
    content: "Applications that pass the initial review  phase undergo tech due diligence and  evaluation."
  }, {
    title: "Compliance",
    content: "Applications that receive positive  recommendations complete a due diligence process before final decisions to approve, decline or revise grant applications."
  }, {
    title: "Finalization",
    content: "Final decisions on grant issuance are announced, approved applicants complete legal paperwork before grants are issued."
  }];

  const RenderBoxGrant = ({
    data
  }) => {
    return Grant_jsx(BoxGrant, null, data.map((item, index) => Grant_jsx(ContentGrant, {
      key: index
    }, Grant_jsx(SubTitle, null, item.title), Grant_jsx(Grant_Text, null, item.content))));
  };

  return Grant_jsx(WrapperGrant, null, Grant_jsx(Grant_HeaderContent, null, Grant_jsx(Grant_Title, null, "Grant program"), Grant_jsx(Grant_Text, null, "The forbitspace Foundation\u2019s key activity is to provide funding to entities and initiatives that contribute to long-term and sustainable growth", Grant_jsx("br", null), "of the forbitspace Network.")), Grant_jsx(RenderBoxGrant, {
    data: DataGrant
  }));
};

const WrapperGrant = external_styled_components_default.a.section`
  text-align: center;
  position: relative;
  margin-top: 50px;
  padding: 50px 0;
`;
const Grant_HeaderContent = external_styled_components_default.a.div`
  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;
const Grant_Title = external_styled_components_default.a.h2`
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 600;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
  @media (max-width: 415px) {
    font-size: 2rem;
  }
`;
const Grant_Text = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
const BoxGrant = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: space-around;
  max-width: 856px;
  margin: 150px auto 50px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 576px) {
    gap: 10px !important;
    margin: 50px auto;
  }
`;
const ContentGrant = external_styled_components_default.a.div`
  width: calc((100% - 80px) / 2);
  text-align: left;

  padding: 80px 15px 15px;
  border-radius: 12px;
  border: solid 1px #0168ff;
  background-color: #02284d;
  transition: 0.2s;

  :nth-child(even) {
    margin-top: 40px;
    margin-bottom: -40px;
  }

  :hover {
    transform: scale(1.12);
  }

  @media (max-width: 574px) {
    width: calc(100% - 20px);
    margin: 10px 0 !important;
  }
`;
const SubTitle = external_styled_components_default.a.div`
  font-size: 1.3rem;
  font-weight: 600;
`;
/* harmony default export */ var components_Grant = (Grant);
// CONCATENATED MODULE: ./client/components/Foundation/components/Timeline.jsx
var Timeline_jsx = external_react_default.a.createElement;



const Timeline = () => {
  return Timeline_jsx(WrapperTimeline, null, Timeline_jsx(AreaBox, null, Timeline_jsx(Timeline_Title, null, "Areas of interest"), Timeline_jsx(ContentBox, null, Timeline_jsx(Timeline_Text, {
    style: {
      display: "flex"
    }
  }, Timeline_jsx("img", {
    src: "./images/icon-foundation/network-integrations.svg",
    alt: ""
  }), "Network", Timeline_jsx("br", null), "itegrations"), Timeline_jsx(Timeline_Text, null, "Research and", Timeline_jsx("br", null), "developement"), Timeline_jsx(Timeline_Text, null, "Education"), Timeline_jsx(Timeline_Text, null, "Global adoption")), Timeline_jsx(ButtonApply, {
    href: "/#"
  }, "Apply for a grant")), Timeline_jsx(ActivityBox, null, Timeline_jsx(Timeline_Title, null, "Activity timeline"), Timeline_jsx(ContentActivity, null, Timeline_jsx(Timeline_Text, null, "May 7, 2021 \u2014 July 2, 2021"), Timeline_jsx(Timeline_Text, null, "Liquidity mining program"), Timeline_jsx(Timeline_Text, null, "A joint liquidity mining program with", Timeline_jsx("br", null), "Wirex offering rewards in forbitspace and WXT"))));
};

const WrapperTimeline = external_styled_components_default.a.section`
  text-align: center;
  position: relative;
  padding: 50px 0 0;
`;
const AreaBox = external_styled_components_default.a.div`
  padding: 50px 0;
`;
const ActivityBox = external_styled_components_default.a.div`
  padding: 50px 0;
`;
const ContentBox = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 14%;
  text-align: left;
  padding: 60px 40px;

  @media (max-width: 576px) {
    padding: 20px 0;
    p {
      width: 100%;
      text-align: center;
      padding: 20px 0;
      justify-content: center;
    }
  }
`;
const ContentActivity = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  text-align: left;
  padding: 60px 0;

  @media (max-width: 768px) {
    p {
      width: 100%;
      text-align: center;
      padding: 40px 0;
    }
  }
  @media (max-width: 415px) {
    padding: 20px 0;
  }
`;
const Timeline_Title = external_styled_components_default.a.h2`
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 600;
  @media (max-width: 576px) {
    letter-spacing: 2px;
  }
  @media (max-width: 415px) {
    font-size: 2rem;
  }
`;
const Timeline_Text = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 14px;
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
  background: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  );
  transition: 0.2s;

  :hover {
    color: #fff;
    background-size: 200%;
    background-position: right;
  }
`;
/* harmony default export */ var components_Timeline = (Timeline);
// CONCATENATED MODULE: ./client/components/Foundation/index.jsx
var Foundation_jsx = external_react_default.a.createElement;





 // import Footer from "../Footer/index";

const Foundation = () => {
  return Foundation_jsx(WrapperBackground, null, Foundation_jsx(Container, {
    className: "container"
  }, Foundation_jsx(components_Banner, null), Foundation_jsx(Mission, null), Foundation_jsx(components_Grant, null), Foundation_jsx(components_Timeline, null)));
};

const WrapperBackground = external_styled_components_default.a.section`
  position: relative;
  overflow-x: hidden;
  background-image: url("./images/background-line-min.png");
  background-size: auto;
`;
const Container = external_styled_components_default.a.div``;
/* harmony default export */ var components_Foundation = __webpack_exports__["default"] = (Foundation);

/***/ })

};;