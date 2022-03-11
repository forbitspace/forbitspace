import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Title from "../../Title";
import { DataCom } from "../constants/index";

const Community = () => {
    const renderItem = (element, index) => {
        return (
            <ItemCom key={index}>
                <a href={element.link}>
                    <ThumIcon>
                        <img src={element.icon} alt="" />
                    </ThumIcon>
                </a>
            </ItemCom>
        );
    };

    return (
        <BoxSection>
            <Container>
                <div className="groupsuite">
                    <Title title="A global community." />
                    <DrepSuite className="text-dark">
                        Learn more about forbitswap, chat with the team, others
                        in the community, and have your say in shaping the
                        future of the forbitswap protocol.
                    </DrepSuite>
                    <ListCom>
                        {DataCom.map((item, index) => renderItem(item, index))}
                    </ListCom>
                </div>
            </Container>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 45px 0;
`;

const ListCom = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const ItemCom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease-in-out 0.3s all;
    cursor: pointer;

    :last-child {
        margin-right: 0;
    }

    a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;
        transition: all ease-in-out 0.3s;
    }

    &:hover a {
        transform: scale(1.2);
    }
`;

const DrepSuite = styled.p`
    font-size: 18px;
    color: #000;
    margin-bottom: 90px;
    text-align: center;
    font-weight: 100;

    @media (max-width: 576px) {
        font-size: 1.25rem;
        text-align: left;
    }
`;

const ThumIcon = styled.p`
    max-width: 80px;
    width: 100%;

    img {
        width: 100%;
    }
`;

const TitleIcon = styled.h4`
    font-size: 26px;
    color: ${(props) => props.color};
    margin-bottom: 25px;
    text-align: center;
    font-weight: bold;
`;

export default Community;
