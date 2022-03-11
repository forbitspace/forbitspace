import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Title from "../../Title";
import { DataSuite } from "../constants/index";

const Suite = () => {
    const renderItem = (element, index) => {
        return (
            <Itemsuite href={element.link} key={index}>
                <WrapperImg>
                    <BackgroundItem src={element.background} />
                </WrapperImg>
                <WrapperContent>
                    <TitleSuite className="text-dark text-visi">
                        {element.title}
                    </TitleSuite>
                    <DrepSuite className="text-dark text-visi">
                        {element.dreption}
                    </DrepSuite>
                </WrapperContent>
            </Itemsuite>
        );
    };

    return (
        <BoxSection>
            <Container>
                <div className="groupsuite">
                    <Title title="The decentralized trading Protocol a highly scalable and global ecosystem." />
                    <Dreption className="text-dark">
                        We build state-of-the-art open-source DeFi applications
                        develop more intuitive user interfaces and simplify to
                        access the forbitswap protocol and contribute to the
                        world of deventralized finance.
                    </Dreption>
                    <ListSuite>
                        {DataSuite.map((item, index) =>
                            renderItem(item, index)
                        )}
                    </ListSuite>
                </div>
            </Container>
        </BoxSection>
    );
};

const WrapperImg = styled.div`
    max-width: 250px;
    width: 100%;
    max-height: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 576px) {
        max-width: 150px;
        margin-bottom: 10px;
    }
`;

const BackgroundItem = styled.img``;

const WrapperContent = styled.div``;

const BoxSection = styled.section`
    position: relative;
    margin-bottom: 5rem;
`;

const ListSuite = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

const Itemsuite = styled.a`
    text-align: center;
    text-decoration: none;
    @media (max-width: 576px) {
        margin-bottom: 20px;
        width: 80%;
        margin: 0 auto;
    }
`;

const Dreption = styled.p`
    font-size: 24px;
    color: #000;
    margin-bottom: 45px;
    text-align: center;
    font-weight: 300;

    @media (max-width: 576px) {
        font-size: 1.25rem;
    }
`;

const ThumSuite = styled.p`
    max-width: 60px;
    width: 100%;

    img {
        width: 100%;
    }
`;

const TitleSuite = styled.h4`
    font-size: 18px;
    color: #fff;
    margin: 0 auto 5px;
    text-align: center;
    width: fit-content;

    @media (max-width: 576px) {
        text-align: center;
    }
`;

const DrepSuite = styled.p`
    font-size: 16px;
    color: #fff;
    text-align: center;
    width: 100%;
    margin: 0;
    max-width: 200px;
    margin: 0 auto;
    font-weight: 300;

    @media (max-width: 576px) {
        font-size: 1.25rem;
        width: 100%;
        margin: unset;
        max-width: unset;
    }
`;

export default Suite;
