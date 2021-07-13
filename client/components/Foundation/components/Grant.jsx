import React from 'react';
import styled from 'styled-components';

const Grant = () => {
    const DataGrant = [
        {
            title: 'Submit',
            content: 'Applications are initially vetted for compliance with the 1inch Foundation’s formal and substantial requirements.'
        },
        {
            title: 'Review',
            content: 'Applications that pass the initial review  phase undergo tech due diligence and  evaluation.'
        },
        {
            title: 'Compliance',
            content: 'Applications that receive positive  recommendations complete a due diligence process before final decisions to approve, decline or revise grant applications.'
        },
        {
            title: 'Finalization',
            content: 'Final decisions on grant issuance are announced, approved applicants complete legal paperwork before grants are issued.'
        }
    ]

    const RenderBoxGrant = ({ data }) => {
        return (
            <BoxGrant>
                {data.map(item => (
                    <ContentGrant>
                        <SubTitle>{item.title}</SubTitle>
                        <Text>
                            {item.content}
                        </Text>
                    </ContentGrant>
                ))}
            </BoxGrant>
        );
    }
    return (
        <WrapperGrant>
            <HeaderContent>
                <Title>Grant program</Title>
                <Text>
                    The 1inch Foundation’s key activity is to provide funding to entities and initiatives
                    that contribute to long-term and sustainable growth<br />
                    of the 1inch Network.
                </Text>
            </HeaderContent>
            <RenderBoxGrant data={DataGrant} />
        </WrapperGrant>
    );
}

const WrapperGrant = styled.section`
    text-align: center;
    position: relative;
    margin-top: 50px;
    padding: 50px 0;
`
const HeaderContent = styled.div`

    @media (max-width: 576px) {
        margin-left: 0;
        margin-top: 40px;
    }
`

const Title = styled.h2`
    font-size: 4rem;
    line-height: 1.2;
    font-weight: 600;
    @media (max-width: 576px) {
      font-size: 45px;
      letter-spacing: 2px;
    }
    @media (max-width: 415px){
        font-size: 2rem;
    }
`

const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0;
    @media (max-width: 576px) {
        font-size: 14px;
    }
`

const BoxGrant = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
    justify-content: space-around;
    max-width: 856px;
    margin: 150px auto 50px;

    @media (max-width: 768px){
        padding: 0 20px;
    }

    @media (max-width: 576px){
        gap: 10px!important;
        margin: 50px auto;
    }
`

const ContentGrant = styled.div`
    width: calc((100% - 80px) / 2);
    text-align: left;

    padding: 80px 15px 15px;
    border-radius: 12px;
    border: solid 1px #0168ff;
    background-color: #02284d;
    transition: 0.2s;

    :nth-child(even){
        margin-top: 40px;
        margin-bottom: -40px;
    }

    :hover{
        transform: scale(1.12);
    }

    @media (max-width: 574px){
        width: calc(100% - 80px);
        margin: 10px 0!important;
    }
`

const SubTitle = styled.div`
    font-size: 1.3rem;
    font-weight: 600;
`

export default Grant;