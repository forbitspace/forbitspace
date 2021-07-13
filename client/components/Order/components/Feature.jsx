import styled from "styled-components";
import { FeatureData } from "../constants";

const Feature = () => {

    const RenderContent = ({ data }) => {
        return (
            <BoxContent>
                {data.map(item => (
                    <Content>
                        <SubTitle>{item.title}</SubTitle>
                        <Text>
                            {item.content}
                        </Text>
                    </Content>
                ))}
            </BoxContent>
        );
    }
    return (
        <WrapperFeature>
            <Title>Features</Title>
            <RenderContent data={FeatureData} />
        </WrapperFeature>
    );
}

const WrapperFeature = styled.section`
    text-align: center;
    position: relative;

    @media (max-width: 1024px){
        padding: 50px 0;
    }
    @media (max-width: 768px){
        margin-top: 50px;
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
    @media (max-width: 375px) {
      font-size: 35px;
    }
`
const BoxContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    text-align: left;
`
const Content = styled.div`
    width: 33%;
    margin: 10px calc(1% / 6);
    padding: 10px 42px 10px 10px;

    @media (max-width: 768px){
        width: 100%;
    }
`

const SubTitle = styled.div`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 30px;

    @media (max-width: 768px){
        min-height: 70px;
        display: flex;
        align-items: flex-end;
    }

    @media (max-width: 415px){
        min-height: 30px;
        font-size: 20px;
        margin-bottom: 15px;
        font-weight: 500;
    }
`
const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    @media (max-width: 576px) {
        font-size: 14px;
    }
    @media (max-width: 320px) {
        font-size: 12px;
    }
`
export default Feature;