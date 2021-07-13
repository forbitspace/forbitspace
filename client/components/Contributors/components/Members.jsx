import React from "react";
import styled from "styled-components";
// import { MemberData } from "../constants";

const Members = (props) => {
  const RenderMemberItem = ({ thumb, name, job, lang }) => {
    return (
      <StyledMemberItem>
        <WrapperIfo>
          <FlexItem>
            <Name>{name}</Name>
            <p>{job}</p>
            <p>{lang}</p>
            <Social>
              <i className="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-facebook-f"></i>
            </Social>
          </FlexItem>
          <Thumb>
            <img src={thumb} alt="icon member" />
          </Thumb>
        </WrapperIfo>
        <Background>
          <img src="./images/orbit-background-1.svg" alt="" />
        </Background>
      </StyledMemberItem>
    );
  };

  return (
    <WrapperMembers>
      <Title>{props.title}</Title>
      <GroupMembers>
        {props.data.map((item) => {
          return (
            <RenderMemberItem
              thumb={item.thumb}
              name={item.name}
              job={item.job}
              lang={item.lang}
            />
          );
        })}
      </GroupMembers>
    </WrapperMembers>
  );
};

const Social = styled.div`
  display: flex;
  i {
    margin-right: 5px;
  }
`;

const FlexItem = styled.div`
  margin-top: 50px;
  margin-right: 40px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const WrapperMembers = styled.div`
  margin-top: 4rem;
`;

const Title = styled.p`
  font-size: 3rem;
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const GroupMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 1075px){
    justify-content: flex-start;
  }
`;
const StyledMemberItem = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  margin: 0 auto;

  @media (min-width: 1075px){
    margin: 0 calc((100% - 1050px)/6);
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
  font-size: 14px;
`;
const Thumb = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  right: 6px;
  top: 4px;
`;

export default Members;
