import React from "react";
import styled from "styled-components";
import { MissionData } from "../constants";

const Misson = () => {
    const RenderMission = ({ data }) => {
        return (
            <Community>
                {data.map((item, index) => (
                    <BoxRender key={index}>
                        <Thumb className='thumb'>
                            <img
                                src={`./images/icon-foundation/${item.img}.svg`}
                                alt=''
                            />
                            <Liner />
                        </Thumb>
                        <BoxTitle>{item.title}</BoxTitle>
                        <Text>{item.content}</Text>
                    </BoxRender>
                ))}
            </Community>
        );
    };
    return (
        <WrapperMission>
            <HeaderContent>
                <Title>Mission</Title>
                <Text>
                    The mission of the 1inch Foundation is to foster growth and
                    expansion of the 1inch Network and incentivize contributions
                    through grants and other capital deployment vehicles. The
                    1inch Foundation is focused on the following areas:
                </Text>
            </HeaderContent>
            <RenderMission data={MissionData} />
        </WrapperMission>
    );
};

const WrapperMission = styled.section`
    text-align: center;
    position: relative;

    @media (max-width: 1024px) {
        padding: 50px 0 0;
    }
`;

const HeaderContent = styled.div`
    @media (max-width: 576px) {
        margin-left: 0;
        margin-top: 40px;
    }
`;

const Title = styled.h2`
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

const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    @media (max-width: 576px) {
        font-size: 14px;
    }
`;

const Community = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px 0;
`;

const BoxRender = styled.div`
    width: 32%;
    max-width: 370px;
    text-align: left;
    @media (max-width: 768px) {
        max-width: unset;
        width: auto;
    }
`;

const Thumb = styled.div`
    width: 100%;
    height: 80px;
    padding-left: 30px;
    position: relative;
`;
const Liner = styled.div`
    position: absolute;
    left: 35%;
    top: 30px;
    width: 70%;
    height: 1px;
    background-image: linear-gradient(to right, #0168ff 0%, rgba(2, 40, 77, 0));
    transform: translateX(30px);
`;

const BoxTitle = styled.div`
    font-size: 3rem;
    @media (max-width: 415px) {
        font-size: 1.6rem;
    }
`;

export default Misson;
