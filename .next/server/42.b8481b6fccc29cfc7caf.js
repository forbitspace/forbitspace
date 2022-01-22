exports.ids = [42];
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

// CONCATENATED MODULE: ./client/components/Contributors/components/Footer.jsx

var __jsx = external_react_default.a.createElement;
 // import { AdvisorData } from "../constants";
// import Members from "./Members";

const FooterContributor = () => {
  const ContributorRender = ({
    data,
    title
  }) => {
    return __jsx(WrapperInner, null, __jsx("div", {
      className: "header"
    }, title), __jsx("div", {
      className: "img-content"
    }, data.map(item => __jsx("a", {
      href: "/#"
    }, __jsx("div", {
      className: "img-holder"
    }, __jsx("img", {
      src: `./images/logo-contributor/${item.img}.png`,
      alt: "image-team"
    }), __jsx("img", {
      className: "background",
      src: "../images/contributor-page/orbit-background.svg",
      alt: "background-team"
    }))))));
  };

  return __jsx(WrapperFooter, null, __jsx("div", {
    className: "container"
  }, __jsx(BecomeBox, null, __jsx("div", {
    className: "content"
  }, __jsx("div", {
    className: "header-content"
  }, "Become a contributor"), __jsx("div", {
    className: "inner-content"
  }, "For onboarding, get in touch with the", " ", __jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " ", "core contributors")), __jsx("div", {
    className: "apply-btn"
  }, __jsx("a", {
    href: "mailto:contacts@forbitspace.com"
  }, "Apply")))));
};

const WrapperFooter = external_styled_components_default.a.section`
    padding: 45px 0;
    .forbitspace {
        font-weight: 900;
        font-style: italic;
    }
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
  }, Banner_jsx(Title, null, "Financial Orbit Space"), Banner_jsx(Text, null, "We are a team that combines experienced professionals in financial markets, and young, dynamic, open-minded, and strong focused on research in the blockchain and decentralized finance ecosystem that aims to bring DeFi space to the wider community.")));
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
const Title = external_styled_components_default.a.h2`
    font-size: 3.5rem;
    text-align: center;
    /* font-family: Montserrat, sans-serif; */
    font-style: italic;
    font-weight: 500;
    @media (max-width: 576px) {
        font-size: 30px;
        letter-spacing: 2px;
    }
`;
const Text = external_styled_components_default.a.p`
    font-size: 24px;
    font-style: italic;
    font-weight: 300;
    line-height: 40px;
    line-height: 1.2;
    text-align: center;
    @media (max-width: 576px) {
        font-size: 18px;
        line-height: 1.5;
    }
`;
/* harmony default export */ var components_Banner = (Banner);
// CONCATENATED MODULE: ./client/components/Contributors/components/Members.jsx
var Members_jsx = external_react_default.a.createElement;



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
    return Members_jsx(StyledMemberItem, {
      isAdvisor: props.isAdvisor
    }, Members_jsx(WrapperIfo, null, Members_jsx(FlexItem, null, Members_jsx(Name, {
      isAdvisor: props.isAdvisor
    }, name), Members_jsx("p", {
      style: {
        marginLeft: "-18px"
      }
    }, job), jobb ? Members_jsx("p", {
      style: {
        marginLeft: "-13px"
      }
    }, jobb) : "", Members_jsx("p", null, lang), Members_jsx(Social, null, twitter ? Members_jsx("a", {
      href: twitter,
      target: "_blank"
    }, Members_jsx("img", {
      src: "../images/icons/twitter.svg",
      alt: ""
    })) : null, linked ? linked !== "/" ? Members_jsx("a", {
      href: linked,
      target: "_blank"
    }, Members_jsx("img", {
      src: "../images/icons/linkedin.svg",
      alt: ""
    })) : Members_jsx("span", {
      href: linked,
      target: "_blank"
    }, Members_jsx("img", {
      src: "../images/icons/linkedin.svg",
      alt: ""
    })) : null)), Members_jsx(Thumb, {
      isAdvisor: props.isAdvisor
    }, Members_jsx("img", {
      src: thumb,
      alt: "icon member"
    }))), Members_jsx(Background, null, Members_jsx("img", {
      src: "../images/contributor-page/orbit-background.svg",
      alt: "orbit-background-image"
    })));
  };

  return Members_jsx(WrapperMembers, null, Members_jsx(Members_Title, null, props.title), Members_jsx(GroupMembers, {
    gap: props.gap
  }, props.data.map((item, index) => {
    return Members_jsx(RenderMemberItem, {
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
    img {
        width: 16px;
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
const Members_Title = external_styled_components_default.a.p`
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
  isAdvisor
}) => isAdvisor ? "500px" : "350px"};
    width: ${({
  isAdvisor
}) => isAdvisor ? "22%" : "30%"};
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
}) => isAdvisor ? "-120px" : "-10px"};
    bottom: ${({
  isAdvisor
}) => isAdvisor ? 0 : ""};
    left: ${({
  isAdvisor
}) => isAdvisor ? "35px" : ""};
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
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var components_Footer = __webpack_require__("yZXQ");

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
  // linked: "https://www.linkedin.com/in/mat-luu/",
  linked: "/"
}, {
  name: "Pantinho Vo",
  thumb: "../images/contributor-page/pantinho.png",
  job: "Lead Blockchain Engineer",
  // linked: "https://www.linkedin.com/in/pantinho-vo/",
  linked: "/"
}, {
  name: "Jason Ly",
  thumb: "../images/contributor-page/jason.png",
  job: "Software Engineer (FE)",
  // linked: "https://www.linkedin.com/in/jasonlyy/",
  linked: "/"
}, {
  name: "Battisa Le",
  thumb: "../images/contributor-page/battisa.png",
  job: "Blockchain Engineer",
  linked: "/"
}, {
  name: "Jason Min",
  thumb: "../images/contributor-page/min.png",
  job: "Blockchain Engineer",
  linked: "/"
}, {
  name: "Brian Linh",
  thumb: "../images/contributor-page/linh.png",
  job: "Blockchain Engineer",
  linked: "/"
}, {
  name: "Arnold Nguyen",
  thumb: "../images/contributor-page/arnold.png",
  job: "Blockchain Engineer",
  linked: "/"
}, {
  name: "Alice Nguyen",
  thumb: "../images/contributor-page/alice.png",
  job: "Designer",
  linked: "/"
}, {
  name: "Chris Nguyen",
  thumb: "../images/contributor-page/chris.png",
  job: "Designer & Editor",
  linked: "/"
}, {
  name: "James Davis",
  thumb: "../images/contributor-page/davis.png",
  job: "Business Development",
  linked: "/"
}, {
  name: "Bekhnam",
  thumb: "../images/contributor-page/bekhnam.png",
  job: "Blockchain Lead",
  linked: "/"
}, {
  name: "Jacky Weerati",
  thumb: "../images/contributor-page/jacky.png",
  job: "Business Development",
  linked: "/"
}, {
  name: "Almira Nhu",
  thumb: "../images/contributor-page/almira.png",
  job: "Business Development ",
  linked: "/"
}, {
  name: "Ai Co",
  thumb: "../images/contributor-page/ai-co.png",
  job: "Marketing Manager",
  linked: "/"
}, {
  name: "Nina Nguyen",
  thumb: "../images/contributor-page/nina.png",
  job: "Business Development",
  // linked: "https://www.linkedin.com/in/nina-nguyen-192958224/",
  linked: "/"
}, {
  name: "Alysia Nguyen",
  thumb: "../images/contributor-page/alysia.png",
  job: "Business Development",
  // linked: "https://www.linkedin.com/in/alysia-space-97a64b227/",
  linked: "/"
}, {
  name: "Jennie Le",
  thumb: "../images/contributor-page/jennie.png",
  job: "Business Development",
  // linked: "http://linkedin.com/in/jennie-helen-11a677214/",
  linked: "/"
}, {
  name: "DiDy Nguyen",
  thumb: "../images/contributor-page/didy-nguyen.png",
  job: "R&D",
  linked: "/"
}, {
  name: "Anne Nguyen",
  thumb: "../images/contributor-page/anne.png",
  job: "R&D",
  linked: "/"
}, {
  name: "Heena Madan",
  thumb: "../images/contributor-page/heena.png",
  job: "Business Development",
  linked: "/"
}, {
  name: "Jacka Chanthy",
  thumb: "../images/contributor-page/jacka.png",
  job: "Business Development Lead",
  linked: "/"
}, {
  name: "Sim Sokheng",
  thumb: "../images/contributor-page/sokheng.png",
  job: "Business Development ",
  linked: "/"
}, {
  name: "Rawinda India",
  thumb: "../images/contributor-page/rawinda.png",
  job: "Business Development",
  linked: "/"
}];
const MemberData_1 = [];
const AdvisorData = [{
  thumb: "../images/logo-contributor/123-18.png",
  name: "Mr Oliver"
}, {
  thumb: "../images/logo-contributor/123-16.png",
  name: "Choki Dorji"
}, {
  thumb: "../images/logo-contributor/123-19.png",
  name: "Chard Lie"
}, {
  thumb: "../images/logo-contributor/123-17.png",
  name: "Denis Joris"
}];
// CONCATENATED MODULE: ./client/components/Contributors/components/Leader.jsx
var Leader_jsx = external_react_default.a.createElement;



const Leaders = () => {
  return Leader_jsx(Wrapper, null, Leader_jsx(Leader_Title, null, "Our team"), Leader_jsx(WrapperLeader, null, Leader_jsx(Leader, null, Leader_jsx(Leader_StyledMemberItem, null, Leader_jsx(Leader_WrapperIfo, null, Leader_jsx(Leader_FlexItem, null, Leader_jsx(Leader_Name, null, "Baroda Hoang"), Leader_jsx("p", {
    style: {
      marginLeft: "-18px"
    }
  }, "Founder"), Leader_jsx("p", {
    style: {
      marginLeft: "-13px"
    }
  }, "Lead Blockchain Engineer & Architect"), Leader_jsx("p", null), Leader_jsx(Leader_Social, null, Leader_jsx("a", {
    href: "https://twitter.com/barodahoang",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Leader_jsx("img", {
    src: "../images/icons/twitter.svg",
    alt: ""
  })), Leader_jsx("a", {
    href: "https://www.linkedin.com/in/barodahoang/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Leader_jsx("img", {
    src: "../images/icons/linkedin.svg",
    alt: ""
  })))), Leader_jsx(Leader_Thumb, null, Leader_jsx("img", {
    src: "../images/contributor-page/baroda.png",
    alt: "icon member"
  }))), Leader_jsx(Leader_Background, null, Leader_jsx("img", {
    src: "../images/contributor-page/orbit-background.svg",
    alt: "background-orbit-image"
  }))), Leader_jsx(Introduction, null, Leader_jsx("div", {
    className: "name"
  }, "Baroda Hoang"), Leader_jsx("div", {
    className: "content"
  }, "Before entering the crypto space. He is an expert in marketing and market research. He has been involved in the digital asset ecosystem since 2016 and has worked with and advised a variety of blockchain projects. When participate in some Blockchain events in the Asian market. He sees a huge demand for the Blockchain space especially the decentralized financial market."))), Leader_jsx(Leader, null, Leader_jsx(Leader_StyledMemberItem, null, Leader_jsx(Leader_WrapperIfo, null, Leader_jsx(Leader_FlexItem, null, Leader_jsx(Leader_Name, null, "Menardo Qui\xF1osa"), Leader_jsx("p", {
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
  }, Leader_jsx("img", {
    src: "../images/icons/twitter.svg",
    alt: ""
  })), Leader_jsx("a", {
    href: "https://www.linkedin.com/in/menardo-quinosa-823498222",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Leader_jsx("img", {
    src: "../images/icons/linkedin.svg",
    alt: ""
  })))), Leader_jsx(Leader_Thumb, null, Leader_jsx("img", {
    src: "../images/contributor-page/mernado.png",
    alt: "icon member"
  }))), Leader_jsx(Leader_Background, null, Leader_jsx("img", {
    src: "../images/contributor-page/orbit-background.svg",
    alt: "background-orbit-image"
  }))), Leader_jsx(Introduction, null, Leader_jsx("div", {
    className: "name"
  }, "Menardo Qui\xF1osa"), Leader_jsx("div", {
    className: "content"
  }, "He is a financial strategist, fund manager, analyst and currency trader. He has more than 9 years of experience in FINANCIAL MARKET. He also participated in multiple trading and crypto currency events in Dubai,Thailand, Vietnam, Singapore and Hongkong.")))), Leader_jsx(WrapperLeader, null, Leader_jsx(Leader, null, Leader_jsx(Leader_StyledMemberItem, null, Leader_jsx(Leader_WrapperIfo, null, Leader_jsx(Leader_FlexItem, null, Leader_jsx(Leader_Name, null, "Stella Vo"), Leader_jsx("p", {
    style: {
      marginLeft: "-18px"
    }
  }, "Head Strategist"), Leader_jsx("p", {
    style: {
      marginLeft: "-13px"
    }
  }, "Business Development Manager"), Leader_jsx("p", null), Leader_jsx(Leader_Social, null, Leader_jsx("a", {
    // href="https://www.linkedin.com/in/stella-vo-276627222"
    href: "/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Leader_jsx("img", {
    src: "../images/icons/linkedin.svg",
    alt: ""
  })))), Leader_jsx(Leader_Thumb, null, Leader_jsx("img", {
    src: "../images/contributor-page/stella-vo.png",
    alt: "icon member"
  }))), Leader_jsx(Leader_Background, null, Leader_jsx("img", {
    src: "../images/contributor-page/orbit-background.svg",
    alt: "background-orbit-image"
  }))), Leader_jsx(Introduction, {
    className: "vice-leader"
  }, Leader_jsx("div", {
    className: "name"
  }, "Stella Vo"), Leader_jsx("div", {
    className: "content"
  }, "He is an economist, he join space blockchain in early 2018. He has attended many seminars, given presentations on blockchain, cryptocurrency in many different countries. He belief the blockchain will opportunity the innovations necessary to usher and decentralized trading for all also the future of the whole world."))), Leader_jsx(Leader, null, Leader_jsx(Leader_StyledMemberItem, null, Leader_jsx(Leader_WrapperIfo, null, Leader_jsx(Leader_FlexItem, null, Leader_jsx(Leader_Name, null, "Emily Anh"), Leader_jsx("p", {
    style: {
      marginLeft: "-18px"
    }
  }, "CMO"), Leader_jsx("p", {
    style: {
      marginLeft: "-13px"
    }
  }, "Business Development"), Leader_jsx("p", null), Leader_jsx(Leader_Social, null, Leader_jsx("a", {
    href: "/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Leader_jsx("img", {
    src: "../images/icons/linkedin.svg",
    alt: ""
  })))), Leader_jsx(Leader_Thumb, null, Leader_jsx("img", {
    src: "../images/contributor-page/emily-anh.png",
    alt: "icon member"
  }))), Leader_jsx(Leader_Background, null, Leader_jsx("img", {
    src: "../images/contributor-page/orbit-background.svg",
    alt: "background-orbit-image"
  }))), Leader_jsx(Introduction, {
    className: "vice-leader"
  }, Leader_jsx("div", {
    className: "name"
  }, "Emily Anh"), Leader_jsx("div", {
    className: "content"
  }, "Blockchain technology geek, I am young which has just started. I goal looking for ambitious are motivated to make", " ", Leader_jsx("span", {
    className: "forbitspace"
  }, "forbitspace"), " one of the biggest DEX projects on all chains. Managing incoming media requests and building relationships with industry journalists executing, and measuring media campaigns, strategic marketing, and communications plans.")))));
};

const Wrapper = external_styled_components_default.a.div`
    padding: 1rem;
    font-family: inherit;
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
        width: 100%;
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
        line-height: 1.4;
    }
    .forbitspace {
        font-weight: 900;
        font-style: italic;
    }
    @media (max-width: 767px) {
        text-align: center;
        .content {
            line-height: 1.5;
            font-size: 16px;
        }
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
    font-weight: 600;
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
    img {
        width: 16px;
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
// CONCATENATED MODULE: ./client/components/Contributors/components/Advisors.jsx
var Advisors_jsx = external_react_default.a.createElement;



const Advisors = ({
  data
}) => {
  return Advisors_jsx(WrapperAdvisor, null, Advisors_jsx(Advisors_Title, null, "Advisors"), Advisors_jsx(GroupAdvisor, null, data.map((item, index) => Advisors_jsx(AdvisorItem, {
    key: index
  }, Advisors_jsx(WrapperInfo, null, Advisors_jsx(AdvisorImage, null, Advisors_jsx("img", {
    src: item.thumb,
    alt: "icon-advisor"
  })), Advisors_jsx(Advisors_Name, null, item.name)), Advisors_jsx(Advisors_Background, null, Advisors_jsx("img", {
    src: "../images/contributor-page/orbit-background.svg",
    alt: "orbit-background-image"
  }))))));
};

const WrapperAdvisor = external_styled_components_default.a.div`
    padding: 0;
`;
const GroupAdvisor = external_styled_components_default.a.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const AdvisorItem = external_styled_components_default.a.div`
    width: 24%;
    max-width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (max-width: 991px){
        width: 48%;
        max-width: 300px;
    }
    @media (max-width: 576px){
        width: 100%;
    }
`;
const WrapperInfo = external_styled_components_default.a.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const AdvisorImage = external_styled_components_default.a.div`
    width: 100%;
    max-width: 120px;
    img{
        width: 100%;
    }
`;
const Advisors_Title = external_styled_components_default.a.p`
    font-size: 3rem;
    text-align: center;
    padding: 4rem 0 3rem;
    @media (max-width: 576px) {
        font-size: 26px;
        padding: 2rem 0 1rem;
    }
`;
const Advisors_Name = external_styled_components_default.a.div``;
const Advisors_Background = external_styled_components_default.a.div`
    /* position: absolute; */
    width: 100%;
    height: 100%;
    z-index: -1;
`;
/* harmony default export */ var components_Advisors = (Advisors);
// CONCATENATED MODULE: ./client/components/Contributors/index.jsx
var Contributors_jsx = external_react_default.a.createElement;










const Index = () => {
  return Contributors_jsx(WrapperBackground, null, Contributors_jsx(Container, {
    className: "container"
  }, Contributors_jsx(components_Banner, null), Contributors_jsx(components_Leader, null), Contributors_jsx(components_Members, {
    title: "",
    data: MemberData
  }), Contributors_jsx(components_Advisors, {
    data: AdvisorData
  }), Contributors_jsx(Footer, null), Contributors_jsx(components_Footer["a" /* default */], null)));
};

const WrapperBackground = external_styled_components_default.a.section`
    position: relative;
    overflow-x: hidden;
    background-size: auto;
    font-family: Montserrat, sans-serif;
`;
const Container = external_styled_components_default.a.div``;
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
    content: "Terms of Service",
    outLink: true
  }, {
    link: "../documents/privacy-policy.pdf",
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