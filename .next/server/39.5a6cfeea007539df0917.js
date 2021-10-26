exports.ids = [39];
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

// CONCATENATED MODULE: ./client/components/Contributors/constants/index.js
const NumData = [{
  num: 50,
  text: "Contributors"
}, {
  num: 20,
  text: "Backers"
}, {
  num: 50,
  text: "Partners & Supporters"
}, {
  num: 10,
  text: "Countries"
}]; // export const DirectorMemberData = [

const MemberData = [// {
//   name: "Menardo QuiÑosa",
//   thumb: "../images/contributor-page/menardo.png",
//   job: "CO - Founder",
//   jobb: "Head Strategist",
//   linked: "https://www.linkedin.com/in/menardo-quinosa-823498222",
//   twitter: "https://twitter.com/MenardoQuinosa",
// },
// {
//   name: "Baroda Hoang",
//   thumb: "../images/contributor-page/baroda.png",
//   job: "CO - Founder",
//   jobb: "Lead Blockchain Engineer & Architect",
//   linked: "https://www.linkedin.com/in/barodahoang/",
//   twitter: "https://twitter.com/barodahoang",
// },
// {
//   name: "Stella Vo",
//   thumb: "../images/contributor-page/stella-vo.png",
//   job: "Head Strategist",
//   jobb: "Business Development",
//   linked: "https://www.linkedin.com/in/stella-vo-276627222",
// },
{
  name: "Joseph Miller",
  thumb: "../images/contributor-page/miller.png",
  job: "Technical Manager",
  jobb: "Lead Blockchain Engineer",
  linked: "/"
}, {
  name: "Mat Luu",
  thumb: "../images/contributor-page/mat-mind.png",
  jobb: "Lead Blockchain Engineer",
  linked: "https://www.linkedin.com/in/mat-luu/"
}, {
  name: "Pantinho Vo",
  thumb: "../images/contributor-page/pantinho.png",
  job: "Lead Blockchain Engineer",
  linked: "https://www.linkedin.com/in/pantinho-vo/"
}, {
  name: "Mars III",
  thumb: "../images/contributor-page/mars-iii.png",
  job: "Blockchain Engineer",
  linked: "https://www.linkedin.com/in/mars-iii-phan/"
}, {
  name: "Richard Nguyen",
  thumb: "../images/contributor-page/richard.png",
  job: "Blockchain Engineer",
  linked: "www.linkedin.com/in/richardnguyen25"
}, {
  name: "Peter Tran",
  thumb: "../images/contributor-page/peter.png",
  job: "Blockchain Engineer",
  linked: "https://www.linkedin.com/in/space-peter-tran/"
}, {
  name: "Jason Ly",
  thumb: "../images/contributor-page/jason.png",
  job: "Software Engineer (FE)",
  linked: "https://www.linkedin.com/in/jasonlyy/"
}, {
  name: "Mr Lee",
  thumb: "../images/contributor-page/lee.png",
  job: "Software Engineer (FE)",
  linked: "https://www.linkedin.com/in/mr-lee-930745222/"
}, {
  name: "Meliora Lily",
  thumb: "../images/contributor-page/lily.png",
  job: "Art & Design Lead",
  linked: "https://www.linkedin.com/in/meliora-lily-103663222/"
}, {
  name: "Chris Nguyen",
  thumb: "../images/contributor-page/chris.png",
  job: "Designer & Editor",
  linked: "/"
}, {
  name: "Anthea Le",
  thumb: "../images/contributor-page/anthea-le.png",
  job: "Support and Community",
  linked: "https://www.linkedin.com/in/anthea-le-83b663222/"
}];
const MemberData_1 = [{
  name: "Almira Nhu",
  thumb: "../images/contributor-page/almira.png",
  job: "Business Development ",
  linked: "/"
}, {
  name: "DiDy Nguyen",
  thumb: "../images/contributor-page/didy-nguyen.png",
  job: "R&D",
  linked: "/"
}, {
  name: "Ai Co",
  thumb: "../images/contributor-page/ai-co.png",
  job: "Marketing Manager",
  linked: "/"
}, {
  name: "Rawinda India",
  thumb: "../images/contributor-page/rawinda.png",
  job: "Business Development",
  linked: "/"
}, {
  name: "Jacka Chanthy",
  thumb: "../images/contributor-page/jacka.png",
  job: "Business Development Lead",
  linked: "/"
}];
const MemberData_2 = [{
  name: "Jacky Weerati",
  thumb: "../images/contributor-page/jacky.png",
  job: "Business Development",
  linked: "/"
}, {
  name: "Sim Sokheng",
  thumb: "../images/contributor-page/sokheng.png",
  job: "Business Development ",
  linked: "/"
}, {
  name: "Heena Madan",
  thumb: "../images/contributor-page/heena.png",
  job: "Business Development",
  linked: "/"
}];
const AuditorData = [{
  name: "Meliora Lily",
  thumb: "./images/thumb-members.png",
  job: "Founder",
  lang: "En, Vi",
  linked: "/",
  twitter: "/"
}, {
  name: "Meliora Lily",
  thumb: "./images/thumb-members.png",
  job: "Founder",
  lang: "En, Vi",
  linked: "/",
  twitter: "/"
}];
const AdvisorData = [{
  thumb: "../images/logo-contributor/123-16.png",
  name: "Choki Dorji"
}, {
  thumb: "../images/logo-contributor/123-19.png",
  name: "Chard Lie"
}, {
  thumb: "../images/logo-contributor/123-18.png",
  name: "Mr Oliver"
}, {
  thumb: "../images/logo-contributor/123-17.png",
  name: "Denis Joris"
}];
// CONCATENATED MODULE: ./client/components/Contributors/components/Members.jsx
var __jsx = external_react_default.a.createElement;



const Members = props => {
  const RenderMemberItem = ({
    thumb,
    name,
    job,
    jobb,
    lang,
    linked,
    twitter
  }) => {
    return __jsx(StyledMemberItem, {
      width: props.width
    }, __jsx(WrapperIfo, null, __jsx(FlexItem, null, __jsx(Name, {
      isAdvisor: props.isAdvisor
    }, name), __jsx("p", {
      style: {
        marginLeft: "-18px"
      }
    }, job), jobb ? __jsx("p", {
      style: {
        marginLeft: "-13px"
      }
    }, jobb) : "", __jsx("p", null, lang), __jsx(Social, null, twitter ? __jsx("a", {
      href: twitter,
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-twitter"
    })) : null, linked ? linked !== "/" ? __jsx("a", {
      href: linked,
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-linkedin"
    })) : __jsx("span", {
      href: linked,
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-linkedin"
    })) : null)), __jsx(Thumb, {
      isAdvisor: props.isAdvisor
    }, __jsx("img", {
      src: thumb,
      alt: "icon member"
    }))), __jsx(Background, null, __jsx("img", {
      src: "../images/contributor-page/orbit-background.svg",
      alt: ""
    })));
  };

  return __jsx(WrapperMembers, null, __jsx(Title, null, props.title), __jsx(GroupMembers, {
    gap: props.gap
  }, props.data.map((item, index) => {
    return __jsx(RenderMemberItem, {
      thumb: item.thumb,
      name: item.name,
      job: item.job,
      jobb: item.jobb,
      lang: item.lang,
      linked: item.linked,
      twitter: item.twitter,
      key: index
    });
  })));
};

const Social = external_styled_components_default.a.div`
  display: flex;
  a {
    color: #fff;
    :hover {
      color: #0168ff;
    }
  }
  span {
    color: #fff;
    :hover {
      color: #0168ff;
    }
  }
  i {
    margin-right: 5px;
  }
`;
const FlexItem = external_styled_components_default.a.div`
  margin-top: 75px;
  margin-right: 40px;
  @media (max-width: 420px) {
    margin-top: 54px;
    margin-right: 40px;
    margin-left: 24px;
  }
`;
const Background = external_styled_components_default.a.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const WrapperMembers = external_styled_components_default.a.div`
  margin-top: 4rem;
`;
const Title = external_styled_components_default.a.p`
  font-size: 3rem;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 26px;
  }
`;
const GroupMembers = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({
  gap
}) => gap ? gap : 0};
`;
const StyledMemberItem = external_styled_components_default.a.div`
  position: relative;
  max-width: ${({
  width
}) => width ? "500px" : "350px"};
  width: ${({
  width
}) => width ? width : "30%"};
  height: 350px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    margin: 0 calc((100% - 1050px) / 6);
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
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
  font-size: ${({
  isAdvisor
}) => isAdvisor ? "18px" : "14px"};
  position: ${({
  isAdvisor
}) => isAdvisor ? "absolute" : ""};
  bottom: 30px;
  left: -60px;
  right: 0;
  margin: ${({
  isAdvisor
}) => isAdvisor ? "0 auto" : "0 0 0 -10px"};
  width: fit-content;

  @media (max-width: 576px) {
    left: -8px;
  }
`;
const Thumb = external_styled_components_default.a.div`
  width: ${({
  isAdvisor
}) => isAdvisor ? "130px" : "100px"};
  height: ${({
  isAdvisor
}) => isAdvisor ? "130px" : "100px"};
  position: absolute;
  right: ${({
  isAdvisor
}) => isAdvisor ? 0 : "15px"};
  top: ${({
  isAdvisor
}) => isAdvisor ? "-50px" : "-10px"};
  bottom: ${({
  isAdvisor
}) => isAdvisor ? 0 : ""};
  left: ${({
  isAdvisor
}) => isAdvisor ? "-55px" : ""};
  margin: ${({
  isAdvisor
}) => isAdvisor ? "auto" : "0"};

  @media (max-width: 576px) {
    left: ${({
  isAdvisor
}) => isAdvisor ? "-13px" : ""};
    top: ${({
  isAdvisor
}) => isAdvisor ? "-50px" : "0"};
    right: ${({
  isAdvisor
}) => isAdvisor ? 0 : "-16px"};
    width: ${({
  isAdvisor
}) => isAdvisor ? "130px" : "80px"};
    height: ${({
  isAdvisor
}) => isAdvisor ? "130px" : "80px"};
  }
`;
/* harmony default export */ var components_Members = (Members);
// CONCATENATED MODULE: ./client/components/Contributors/components/Footer.jsx

var Footer_jsx = external_react_default.a.createElement;




const FooterContributor = () => {
  const ContributorRender = ({
    data,
    title
  }) => {
    return Footer_jsx(WrapperInner, null, Footer_jsx("div", {
      className: "header"
    }, title), Footer_jsx("div", {
      className: "img-content"
    }, data.map(item => Footer_jsx("a", {
      href: "/#"
    }, Footer_jsx("div", {
      className: "img-holder"
    }, Footer_jsx("img", {
      src: `./images/logo-contributor/${item.img}.png`,
      alt: ""
    }), Footer_jsx("img", {
      className: "background",
      src: "../images/contributor-page/orbit-background.svg",
      alt: ""
    }))))));
  };

  return Footer_jsx(WrapperFooter, null, Footer_jsx("div", {
    className: "container"
  }, Footer_jsx(BecomeBox, null, Footer_jsx("div", {
    className: "content"
  }, Footer_jsx("div", {
    className: "header-content"
  }, "Become a contributor"), Footer_jsx("div", {
    className: "inner-content"
  }, "For onboarding, get in touch with the forbitswap core contributors")), Footer_jsx("div", {
    className: "apply-btn"
  }, Footer_jsx("a", {
    href: "mailto:contacts@forbitspace.com"
  }, "Apply")))));
};

const WrapperFooter = external_styled_components_default.a.section`
  padding: 45px 0;
  @media (max-width: 576px) {
    padding: 10px 0;
  }
`;
const WrapperInner = external_styled_components_default.a.div`
  position: relative;
  .header {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    color: #fff;

    @media (max-width: 415px) {
      font-size: 26px;
    }
  }
  .img-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 45px;
    gap: 10px;

    @media (max-width: 415px) {
      padding: 30px 40px;
    }
  }
  .img-holder {
    width: 100%;
    padding: 25px 0;
    max-width: 300px;
    position: absolute;

    img:nth-child(1) {
      height: 80px;
      width: 80px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }

    img:nth-child(2) {
      height: auto;
      width: auto;
    }

    @media (max-width: 945px) {
      width: 22.5%;
    }

    @media (max-width: 768px) {
      width: 32%;
    }

    @media (max-width: 574px) {
      width: 45%;
    }

    @media (max-width: 415px) {
      width: 70%;
    }
  }
`;
const BecomeBox = external_styled_components_default.a.div`
  font-family: Montserrat, sans-serif;
  .content {
    text-align: center;
  }
  .header-content {
    font-size: 2rem;
    font-weight: 500;
    font-style: italic;
  }
  .inner-content {
    font-size: 1rem;
    font-weight: 300;
    line-height: 40px;
    font-style: italic;
  }
  .apply-btn {
    text-align: center;
    padding: 10px 0 60px;
    a {
      padding: 5px 30px;
      text-align: center;
      border-radius: 12px;
      transform: scale(0.98);
      transition: transform 0.25s ease 0s;
      box-sizing: border-box;
      font-weight: 500;
      font-size: 1.125rem;
      text-decoration: none;
      cursor: pointer;
      background-color: rgb(255, 255, 255);
      color: white;

      background-image: linear-gradient(
        38deg,
        #00ff36 -10%,
        #00ee57 3%,
        #00c5ad 32%,
        #00a4f1 53%,
        #0b18fc 102%,
        #0d00ff 111%
      );
      background-size: 200%;
      background-position: 90%;
      width: 100%;
    }
  }
  @media (max-width: 576px) {
    .header-content {
      font-size: 26px;
      font-weight: 600;
    }
    .inner-content {
      font-size: 14px;
      font-weight: 200;
    }
    .apply-btn {
      padding: 10px 0;
    }
  }
`;
/* harmony default export */ var Footer = (FooterContributor);
// CONCATENATED MODULE: ./client/components/Contributors/components/Banner.jsx
var Banner_jsx = external_react_default.a.createElement;



const Banner = () => {
  return Banner_jsx(WrapperBanner, null, Banner_jsx(BackgroundBanner, null, Banner_jsx("img", {
    src: "../images/contributor-page/spaceship-min.png",
    alt: "orbit contributors"
  })), Banner_jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, Banner_jsx(Banner_Title, null, "Financial Orbit Space"), Banner_jsx(Text, null, "We are a team that combines experienced professionals in financial markets, and young, dynamic, open-minded, and strong focused on research in the blockchain and decentralized finance ecosystem that aims to bring DeFi space to the wider community.")));
};

const WrapperBanner = external_styled_components_default.a.div`
  text-align: right;
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column; */
  @media (max-width: 576px) {
    text-align: left;
    min-height: 83vh;
    padding-top: 3rem;
  }
`;
const BackgroundBanner = external_styled_components_default.a.div`
  img {
    width: 100%;
  }
  margin: auto 0;
`;
const Content = external_styled_components_default.a.div`
  margin-top: 3rem;
  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 80px;
  }
`;
const Banner_Title = external_styled_components_default.a.h2`
  font-size: 3.5rem;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-style: italic;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 30px;
    letter-spacing: 2px;
  }
`;
const Text = external_styled_components_default.a.p`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 40px;
  font-family: Montserrat, sans-serif;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 200;
    line-height: 25px;
  }
`;
/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var components_Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/Contributors/components/Leader.jsx
var Leader_jsx = external_react_default.a.createElement;



const Leaders = () => {
  return Leader_jsx(Wrapper, null, Leader_jsx(Leader_Title, null, "Our team"), Leader_jsx(WrapperLeader, null, Leader_jsx(Leader, null, Leader_jsx(Leader_StyledMemberItem, null, Leader_jsx(Leader_WrapperIfo, null, Leader_jsx(Leader_FlexItem, null, Leader_jsx(Leader_Name, null), Leader_jsx("p", {
    style: {
      marginLeft: "-18px"
    }
  }, "CO - Founder"), Leader_jsx("p", {
    style: {
      marginLeft: "-13px"
    }
  }, "Lead Blockchain Engineer & Architect"), Leader_jsx("p", null), Leader_jsx(Leader_Social, null, Leader_jsx("a", {
    href: "https://twitter.com/barodahoang",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Leader_jsx("i", {
    className: "fab fa-twitter"
  })), Leader_jsx("a", {
    href: "https://www.linkedin.com/in/barodahoang/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Leader_jsx("i", {
    className: "fab fa-linkedin"
  })))), Leader_jsx(Leader_Thumb, null, Leader_jsx("img", {
    src: "../images/contributor-page/baroda.png",
    alt: "icon member"
  }))), Leader_jsx(Leader_Background, null, Leader_jsx("img", {
    src: "../images/contributor-page/orbit-background.svg",
    alt: ""
  }))), Leader_jsx(Introduction, null, Leader_jsx("div", {
    className: "name"
  }, "Baroda Hoang"), Leader_jsx("div", {
    className: "content"
  }, "Before entering the crypto space. He is an expert in marketing and market research. He has been involved in the digital asset ecosystem since 2016 and has worked with and advised a variety of blockchain projects. When participate in some Blockchain events in the Asian market He sees a huge demand for the Blockchain space especially the decentralized financial market."))), Leader_jsx(Leader, null, Leader_jsx(Leader_StyledMemberItem, null, Leader_jsx(Leader_WrapperIfo, null, Leader_jsx(Leader_FlexItem, null, Leader_jsx(Leader_Name, null), Leader_jsx("p", {
    style: {
      marginLeft: "-18px"
    }
  }, "CO - Founder"), Leader_jsx("p", {
    style: {
      marginLeft: "-13px"
    }
  }, "Head Strategist"), Leader_jsx("p", null), Leader_jsx(Leader_Social, null, Leader_jsx("a", {
    href: "https://twitter.com/MenardoQuinosa",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Leader_jsx("i", {
    className: "fab fa-twitter"
  })), Leader_jsx("a", {
    href: "https://www.linkedin.com/in/menardo-quinosa-823498222",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Leader_jsx("i", {
    className: "fab fa-linkedin"
  })))), Leader_jsx(Leader_Thumb, null, Leader_jsx("img", {
    src: "../images/contributor-page/mernado.png",
    alt: "icon member"
  }))), Leader_jsx(Leader_Background, null, Leader_jsx("img", {
    src: "../images/contributor-page/orbit-background.svg",
    alt: ""
  }))), Leader_jsx(Introduction, null, Leader_jsx("div", {
    className: "name"
  }, "Menardo Qui\xF1osa"), Leader_jsx("div", {
    className: "content"
  }, "He is a financial strategist, fund manager, analyst and currency trader. He has more than 9 years of experience in FINANCIAL MARKET. He also participated in multiple trading and crypto currency events in Dubai,Thailand, Vietnam, Singapore and Hongkong.")))), Leader_jsx(ViceLeader, null, Leader_jsx(Leader_StyledMemberItem, null, Leader_jsx(Leader_WrapperIfo, null, Leader_jsx(Leader_FlexItem, null, Leader_jsx(Leader_Name, null), Leader_jsx("p", {
    style: {
      marginLeft: "-18px"
    }
  }, "Head Strategist"), Leader_jsx("p", {
    style: {
      marginLeft: "-13px"
    }
  }, "Business Development"), Leader_jsx("p", null), Leader_jsx(Leader_Social, null, Leader_jsx("a", {
    href: "https://www.linkedin.com/in/stella-vo-276627222",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Leader_jsx("i", {
    className: "fab fa-linkedin"
  })))), Leader_jsx(Leader_Thumb, null, Leader_jsx("img", {
    src: "../images/contributor-page/stella-vo.png",
    alt: "icon member"
  }))), Leader_jsx(Leader_Background, null, Leader_jsx("img", {
    src: "../images/contributor-page/orbit-background.svg",
    alt: ""
  }))), Leader_jsx(Introduction, {
    className: "vice-leader"
  }, Leader_jsx("div", {
    className: "name"
  }, "Stella Vo"), Leader_jsx("div", {
    className: "content"
  }, "He is an economist, he join space blockchain in early 2018. He has attended many seminars, given presentations on blockchain, cryptocurrency in many different countries. He belief the blockchain will opportunity the innovations necessary to usher and decentralized trading for all also the future of the whole world."))));
}; //
// {
//   name: "Menardo QuiÑosa",
//   thumb: "../images/contributor-page/menardo.png",
//   job: "CO - Founder",
//   jobb: "Head Strategist",
//   linked: "https://www.linkedin.com/in/menardo-quinosa-823498222",
//   twitter: "https://twitter.com/MenardoQuinosa",
// },
// {
//   name: "Baroda Hoang",
//   thumb: "../images/contributor-page/baroda.png",
//   job: "CO - Founder",
//   jobb: "Lead Blockchain Engineer & Architect",
//   linked: "https://www.linkedin.com/in/barodahoang/",
//   twitter: "https://twitter.com/barodahoang",
// },
// {
//   name: "Stella Vo",
//   thumb: "../images/contributor-page/stella-vo.png",
//   job: "Head Strategist",
//   jobb: "Business Development",
//   linked: "https://www.linkedin.com/in/stella-vo-276627222",
// },


const Wrapper = external_styled_components_default.a.div`
  padding: 1rem;
`;
const Leader_Title = external_styled_components_default.a.p`
  font-size: 3rem;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 26px;
  }
`;
const WrapperLeader = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Leader = external_styled_components_default.a.div`
  width: 45%;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const ViceLeader = external_styled_components_default.a.div`
  /* width: 90%; */
  display: flex;
  align-items: center;
  .vice-leader {
    width: 60%;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    .vice-leader {
      width: 90%;
    }
  }
`;
const Introduction = external_styled_components_default.a.div`
  .name {
    font-size: 20px;
    font-weight: bold;
  }
  .content {
    font-size: 18px;
    font-weight: 100;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`;
const Leader_StyledMemberItem = external_styled_components_default.a.div`
  position: relative;
  width: 350px;
  height: 350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const Leader_WrapperIfo = external_styled_components_default.a.div`
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
const Leader_Name = external_styled_components_default.a.h3`
  font-size: ${({
  isAdvisor
}) => isAdvisor ? "18px" : "14px"};
  position: ${({
  isAdvisor
}) => isAdvisor ? "absolute" : ""};
  bottom: 30px;
  left: -60px;
  right: 0;
  margin: ${({
  isAdvisor
}) => isAdvisor ? "0 auto" : "0 0 0 -10px"};
  width: fit-content;

  @media (max-width: 576px) {
    left: -8px;
  }
`;
const Leader_Thumb = external_styled_components_default.a.div`
  width: ${({
  isAdvisor
}) => isAdvisor ? "130px" : "100px"};
  height: ${({
  isAdvisor
}) => isAdvisor ? "130px" : "100px"};
  position: absolute;
  right: ${({
  isAdvisor
}) => isAdvisor ? 0 : "15px"};
  top: ${({
  isAdvisor
}) => isAdvisor ? "-50px" : "-10px"};
  bottom: ${({
  isAdvisor
}) => isAdvisor ? 0 : ""};
  left: ${({
  isAdvisor
}) => isAdvisor ? "-55px" : ""};
  margin: ${({
  isAdvisor
}) => isAdvisor ? "auto" : "0"};

  @media (max-width: 576px) {
    left: ${({
  isAdvisor
}) => isAdvisor ? "-13px" : ""};
    top: ${({
  isAdvisor
}) => isAdvisor ? "-50px" : "0"};
    right: ${({
  isAdvisor
}) => isAdvisor ? 0 : "-16px"};
    width: ${({
  isAdvisor
}) => isAdvisor ? "130px" : "80px"};
    height: ${({
  isAdvisor
}) => isAdvisor ? "130px" : "80px"};
  }
`;
const Leader_Social = external_styled_components_default.a.div`
  display: flex;
  a {
    color: #fff;
    :hover {
      color: #0168ff;
    }
  }
  span {
    color: #fff;
    :hover {
      color: #0168ff;
    }
  }
  i {
    margin-right: 5px;
  }
`;
const Leader_FlexItem = external_styled_components_default.a.div`
  margin-top: 75px;
  margin-right: 40px;
  @media (max-width: 420px) {
    margin-top: 54px;
    margin-right: 40px;
    margin-left: 24px;
  }
`;
const Leader_Background = external_styled_components_default.a.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
/* harmony default export */ var components_Leader = (Leaders);
// CONCATENATED MODULE: ./client/components/Contributors/index.jsx
var Contributors_jsx = external_react_default.a.createElement;









const Index = () => {
  return Contributors_jsx(WrapperBackground, null, Contributors_jsx(Container, {
    className: "container"
  }, Contributors_jsx(components_Banner, null), Contributors_jsx(components_Leader, null), Contributors_jsx(components_Members, {
    title: "",
    data: MemberData
  }), Contributors_jsx(components_Members, {
    title: "",
    data: MemberData_1
  }), Contributors_jsx(components_Members, {
    title: "",
    data: MemberData_2
  }), Contributors_jsx(components_Members, {
    title: "Advisors",
    data: AdvisorData,
    isAdvisor: true,
    gap: "10%",
    imgCenter: true
  }), Contributors_jsx(Footer, null), Contributors_jsx(components_Footer["a" /* default */], null)));
};

const WrapperBackground = external_styled_components_default.a.section`
  position: relative;
  overflow-x: hidden;
  background-size: auto;
  font-family: Montserrat, sans-serif;
`;
const Container = external_styled_components_default.a.div``; // const BackgroundImg = styled.img`
//   position: absolute;
//   top: -100vh;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: calc(100% + 100vh);
//   opacity: 0.3;
//   z-index: -1;
//   @media (max-width: 576px) {
//     position: fixed;
//   }
// `;
// const BackgroundImg = styled.img`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
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

/* harmony default export */ var Contributors = __webpack_exports__["default"] = (Index);

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
  })), __jsx("button", {
    type: "button",
    "aria-label": "send-email-address",
    onClick: handleSubmit
  }, __jsx("i", {
    className: "fa fa-arrow-right"
  }))), __jsx(Copyright, {
    className: "text-dark foundation"
  }, "forbitspace foundation LLC"), __jsx(Copyright, {
    className: "text-dark"
  }, "\xA9 2021 @forbitspace, All Rights Reserved"), __jsx(SocialLink, null, DataSocialLinkFooter.map((item, index) => {
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
  .input-field {
    width: 23%;
  }
  ul {
    padding-left: 0;
    width: 15%;
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
const TitleFooter = external_styled_components_default.a.li`
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
  font-style: italic;
`;
const Copyright = external_styled_components_default.a.p`
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
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
  width: 100%;
  height: 30px;
  margin-right: 5px;
  font-style: italic;
  /* font-family: "Averta"; */
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
  ::placeholder {
    font-weight: 100;
  }
`;
const WrapperInput = external_styled_components_default.a.div`
  position: relative;
  border-radius: 10px;
  margin-right: 5px;
`;
/* harmony default export */ var Footer = __webpack_exports__["a"] = (Index);

/***/ })

};;