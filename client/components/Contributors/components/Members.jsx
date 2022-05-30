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
            <StyledMemberItem isAdvisor={props.isAdvisor}>
                <WrapperIfo>
                    <FlexItem>
                        <Name isAdvisor={props.isAdvisor}>{name}</Name>
                        <p style={{ marginLeft: "-10px" }}>{job}</p>
                        {jobb ? (
                            <p style={{ marginLeft: "-10px" }}>{jobb}</p>
                        ) : (
                            ""
                        )}
                        <p>{lang}</p>
                        <Social>
                            {twitter ? (
                                <a href={twitter} target="_blank">
                                    <img
                                        src="../images/icons/twitter.svg"
                                        alt=""
                                    />
                                </a>
                            ) : null}
                            {linked ? (
                                linked !== "/" ? (
                                    <a href={linked} target="_blank">
                                        <img
                                            src="../images/icons/linkedin.svg"
                                            alt=""
                                        />
                                    </a>
                                ) : (
                                    <span href={linked} target="_blank">
                                        <img
                                            src="../images/icons/linkedin.svg"
                                            alt=""
                                        />
                                    </span>
                                )
                            ) : null}
                        </Social>
                    </FlexItem>
                    <Thumb isAdvisor={props.isAdvisor}>
                        <img src={thumb} alt="icon member" />
                    </Thumb>
                </WrapperIfo>
                <Background>
                    <img
                        src="../images/contributor-page/orbit-background.svg"
                        alt="orbit-background-image"
                    />
                </Background>
            </StyledMemberItem>
        );
    };

    return (
        <WrapperMembers>
            <Title>{props.title}</Title>
            <GroupMembers gap={props.gap}>
                {props.data.map((item, index) => {
                    return (
                        <RenderMemberItem
                            thumb={item.thumb}
                            name={item.name}
                            job={item.job}
                            jobb={item.jobb}
                            lang={item.lang}
                            linked={item.linked}
                            twitter={item.twitter}
                            key={index}
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
    justify-content: space-between;
    gap: ${({ gap }) => (gap ? gap : 0)};
`;

const StyledMemberItem = styled.div`
    position: relative;
    max-width: ${({ isAdvisor }) => (isAdvisor ? "500px" : "350px")};
    width: ${({ isAdvisor }) => (isAdvisor ? "22%" : "30%")};
    height: 350px;
    margin: 0 auto;

    @media (min-width: 1200px) {
        margin: 0 calc((100% - 1050px) / 6);
    }
    @media (max-width: 1024px) {
        width: ${({ isAdvisor }) => (isAdvisor ? "22%" : "45%")};
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
    right: ${({ isAdvisor }) => (isAdvisor ? 0 : "15px")};
    top: ${({ isAdvisor }) => (isAdvisor ? "-120px" : "-10px")};
    bottom: ${({ isAdvisor }) => (isAdvisor ? 0 : "")};
    left: ${({ isAdvisor }) => (isAdvisor ? "35px" : "")};
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
