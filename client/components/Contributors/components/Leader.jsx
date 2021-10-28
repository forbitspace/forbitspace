import React from "react";
import styled from "styled-components";

const Leaders = () => {
  return (
    <Wrapper>
      <Title>Our team</Title>
      <WrapperLeader>
        <Leader>
          <StyledMemberItem>
            <WrapperIfo>
              <FlexItem>
                <Name></Name>
                <p style={{ marginLeft: "-18px" }}>CO - Founder</p>
                <p style={{ marginLeft: "-13px" }}>
                  Lead Blockchain Engineer & Architect
                </p>
                <p></p>
                <Social>
                  <a
                    href="https://twitter.com/barodahoang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/barodahoang/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </Social>
              </FlexItem>
              <Thumb>
                <img
                  src="../images/contributor-page/baroda.png"
                  alt="icon member"
                />
              </Thumb>
            </WrapperIfo>
            <Background>
              <img
                src="../images/contributor-page/orbit-background.svg"
                alt=""
              />
            </Background>
          </StyledMemberItem>
          <Introduction>
            <div className="name">Baroda Hoang</div>
            <div className="content">
              Before entering the crypto space. He is an expert in marketing and
              market research. He has been involved in the digital asset
              ecosystem since 2016 and has worked with and advised a variety of
              blockchain projects. When participate in some Blockchain events in
              the Asian market He sees a huge demand for the Blockchain space
              especially the decentralized financial market.
            </div>
          </Introduction>
        </Leader>
        <Leader>
          <StyledMemberItem>
            <WrapperIfo>
              <FlexItem>
                <Name></Name>
                <p style={{ marginLeft: "-18px" }}>CO - Founder</p>
                <p style={{ marginLeft: "-13px" }}>Head Strategist</p>
                <p></p>
                <Social>
                  <a
                    href="https://twitter.com/MenardoQuinosa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/menardo-quinosa-823498222"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </Social>
              </FlexItem>
              <Thumb>
                <img
                  src="../images/contributor-page/mernado.png"
                  alt="icon member"
                />
              </Thumb>
            </WrapperIfo>
            <Background>
              <img
                src="../images/contributor-page/orbit-background.svg"
                alt=""
              />
            </Background>
          </StyledMemberItem>
          <Introduction>
            <div className="name">Menardo Quiñosa</div>
            <div className="content">
              He is a financial strategist, fund manager, analyst and currency
              trader. He has more than 9 years of experience in FINANCIAL
              MARKET. He also participated in multiple trading and crypto
              currency events in Dubai,Thailand, Vietnam, Singapore and
              Hongkong.
            </div>
          </Introduction>
        </Leader>
      </WrapperLeader>
      <ViceLeader>
        <StyledMemberItem>
          <WrapperIfo>
            <FlexItem>
              <Name></Name>
              <p style={{ marginLeft: "-18px" }}>Head Strategist</p>
              <p style={{ marginLeft: "-13px" }}>Business Development</p>
              <p></p>
              <Social>
                <a
                  href="https://www.linkedin.com/in/stella-vo-276627222"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </Social>
            </FlexItem>
            <Thumb>
              <img
                src="../images/contributor-page/stella-vo.png"
                alt="icon member"
              />
            </Thumb>
          </WrapperIfo>
          <Background>
            <img src="../images/contributor-page/orbit-background.svg" alt="" />
          </Background>
        </StyledMemberItem>
        <Introduction className="vice-leader">
          <div className="name">Stella Vo</div>
          <div className="content">
            He is an economist, he join space blockchain in early 2018. He has
            attended many seminars, given presentations on blockchain,
            cryptocurrency in many different countries. He belief the blockchain
            will opportunity the innovations necessary to usher and
            decentralized trading for all also the future of the whole world.
          </div>
        </Introduction>
      </ViceLeader>
    </Wrapper>
  );
};
//
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
const Wrapper = styled.div`
  padding: 1rem;
`;
const Title = styled.p`
  font-size: 3rem;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 26px;
  }
`;
const WrapperLeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Leader = styled.div`
  width: 45%;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const ViceLeader = styled.div`
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
const Introduction = styled.div`
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

const StyledMemberItem = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const WrapperIfo = styled.div`
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
const Name = styled.h3`
  font-size: ${({ isAdvisor }) => (isAdvisor ? "18px" : "14px")};
  position: ${({ isAdvisor }) => (isAdvisor ? "absolute" : "")};
  bottom: 30px;
  left: -60px;
  right: 0;
  margin: ${({ isAdvisor }) => (isAdvisor ? "0 auto" : "0 0 0 -10px")};
  width: fit-content;

  @media (max-width: 576px) {
    left: -8px;
  }
`;
const Thumb = styled.div`
  width: ${({ isAdvisor }) => (isAdvisor ? "130px" : "100px")};
  height: ${({ isAdvisor }) => (isAdvisor ? "130px" : "100px")};
  position: absolute;
  right: ${({ isAdvisor }) => (isAdvisor ? 0 : "15px")};
  top: ${({ isAdvisor }) => (isAdvisor ? "-50px" : "-10px")};
  bottom: ${({ isAdvisor }) => (isAdvisor ? 0 : "")};
  left: ${({ isAdvisor }) => (isAdvisor ? "-55px" : "")};
  margin: ${({ isAdvisor }) => (isAdvisor ? "auto" : "0")};

  @media (max-width: 576px) {
    left: ${({ isAdvisor }) => (isAdvisor ? "-13px" : "")};
    top: ${({ isAdvisor }) => (isAdvisor ? "-50px" : "0")};
    right: ${({ isAdvisor }) => (isAdvisor ? 0 : "-16px")};
    width: ${({ isAdvisor }) => (isAdvisor ? "130px" : "80px")};
    height: ${({ isAdvisor }) => (isAdvisor ? "130px" : "80px")};
  }
`;
const Social = styled.div`
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

const FlexItem = styled.div`
  margin-top: 75px;
  margin-right: 40px;
  @media (max-width: 420px) {
    margin-top: 54px;
    margin-right: 40px;
    margin-left: 24px;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export default Leaders;