import styled from "styled-components";
import { ImplementData } from "../constants";

const Implementation = () => {
    const RenderImplement = ({ data }) => {
        return (
            <BoxContent>
                {data.map((item, index) => (
                    <Content key={index}>
                        <Title>{item.title}</Title>
                        <Text>{item.text}</Text>
                    </Content>
                ))}
            </BoxContent>
        );
    };
    return (
        <WrapperImplement>
            <HeaderContent>
                <Title>Implementations</Title>
                <Text>
                    Below are some use cases for the 1inch Limit Order Protocol.
                    But the protocol is very flexible, and you can build much
                    more on top of it!
                </Text>
            </HeaderContent>
            <RenderImplement data={ImplementData} />
        </WrapperImplement>
    );
};

const WrapperImplement = styled.section`
    text-align: center;
    position: relative;
    padding: 50px 0;
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
    @media (max-width: 375px) {
        font-size: 35px;
    }
`;

const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0;
    @media (max-width: 576px) {
        font-size: 14px;
    }
    @media (max-width: 320px) {
        font-size: 12px;
    }
`;

const BoxContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 240px;
    justify-content: space-between;

    margin: 150px auto 50px;

    @media (max-width: 768px) {
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        gap: 10px !important;
        margin: 20px auto;
    }
`;

const Content = styled.div`
    width: calc((100% - 80px));
    text-align: left;

    padding: 15px 35px;
    border-radius: 12px;

    transition: 0.2s;

    h2 {
        font-size: 44px;
    }

    :nth-child(odd) {
        padding-right: 50%;
        @media (max-width: 1024px) {
            padding-right: 40%;
        }
    }
    :nth-child(even) {
        text-align: right;
        padding-left: 50%;
        @media (max-width: 1024px) {
            padding-left: 35%;
        }
    }
    :nth-child(4) {
        padding-left: 40%;
        @media (max-width: 1024px) {
            padding-left: 30%;
        }
    }

    :hover {
        transform: scale(1.12);
    }

    @media (max-width: 768px) {
        width: calc(100% - 20px);
        text-align: left !important;
        padding: 10px !important;
        margin: 40px 0 !important;

        h2 {
            font-size: 30px;
            font-weight: 600;
            letter-spacing: unset;
        }
    }

    @media (max-width: 415px) {
        padding: 0px !important;
        margin: 20px 0 !important;

        h2 {
            font-size: 20px;
            font-weight: 500;
        }
    }
`;

export default Implementation;
