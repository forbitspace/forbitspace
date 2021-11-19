import React from "react";
import styled from "styled-components";

const Advisors = ({data}) => {
    return(
    <WrapperAdvisor>
        <Title>Advisors</Title>
        <GroupAdvisor>
            {data.map((item,index) => (
            <AdvisorItem key={index}>
                <WrapperInfo>
                    <AdvisorImage>
                        <img src={item.thumb} alt="icon-advisor" />
                    </AdvisorImage>
                    <Name>{item.name}</Name>
                </WrapperInfo>
                <Background>
                    <img
                        src="../images/contributor-page/orbit-background.svg"
                        alt="orbit-background-image"
                    />
                </Background>
            </AdvisorItem>

            ))}
        </GroupAdvisor>
    </WrapperAdvisor>

    )
}

const WrapperAdvisor = styled.div`
    padding: 0;
`
const GroupAdvisor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`
const AdvisorItem = styled.div`
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
`
const WrapperInfo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const AdvisorImage = styled.div`
    width: 100%;
    max-width: 120px;
    img{
        width: 100%;
    }
`

const Title = styled.p`
    font-size: 3rem;
    text-align: center;
    @media (max-width: 576px) {
        font-size: 26px;
    }
`;
const Name = styled.div``
const Background = styled.div`
    /* position: absolute; */
    width: 100%;
    height: 100%;
    z-index: -1;
`;
export default Advisors;
