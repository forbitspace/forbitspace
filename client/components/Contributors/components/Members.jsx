import React from "react";
import styled from "styled-components";

const Members = (props) => {
  const RenderMemberItem = ({
    thumb,
    name,
    job,
    jobb,
    lang,
    linked,
    twitter,
  }) => {
    return (
      <StyledMemberItem width={props.width}>
        <WrapperIfo>
          <FlexItem>
            <Name isAdvisor={props.isAdvisor}>{name}</Name>
            <p style={{ marginLeft: "-18px" }}>{job}</p>
            {jobb ? <p style={{ marginLeft: "-13px" }}>{jobb}</p> : ""}
            <p>{lang}</p>
            <Social>
              {twitter ? (
                <a href={twitter} target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              ) : null}
              {linked ? (
                <a href={linked} target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
              ) : null}
            </Social>
          </FlexItem>
          <Thumb isAdvisor={props.isAdvisor}>
            <img src={thumb} alt="icon member" />
          </Thumb>
        </WrapperIfo>
        <Background>
          <img src="../images/contributor-page/orbit-background.svg" alt="" />
        </Background>
      </StyledMemberItem>
    );
  };

  return (
    <WrapperMembers>
      <Title>{props.title}</Title>
      <GroupMembers gap={props.gap}>
        {props.data.map((item) => {
          return (
            <RenderMemberItem
              thumb={item.thumb}
              name={item.name}
              job={item.job}
              jobb={item.jobb}
              lang={item.lang}
              linked={item.linked}
              twitter={item.twitter}
            />
          );
        })}
      </GroupMembers>
    </WrapperMembers>
  );
};

const Social = styled.div`
  display: flex;
  a {
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
  margin-top: 50px;
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

const WrapperMembers = styled.div`
  margin-top: 4rem;
`;

const Title = styled.p`
  font-size: 3rem;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 26px;
  }
`;

const GroupMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ gap }) => (gap ? gap : 0)};
`;

const StyledMemberItem = styled.div`
  position: relative;
  max-width: ${({ width }) => (width ? "500px" : "350px")};
  width: ${({ width }) => (width ? width : "30%")};
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
  right: ${({ isAdvisor }) => (isAdvisor ? 0 : "-11px")};
  top: ${({ isAdvisor }) => (isAdvisor ? "-50px" : "-16px")};
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

export default Members;
