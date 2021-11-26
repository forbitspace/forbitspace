import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import Title from "../../Title";
import { DataFBTC } from "../constants/index";

const FBTCToken = () => {
    const renderItem = (element, index) => {
        return (
            <ItemCom key={index}>
                <ThumIcon className='thumb-icon'>
                    <img className='img-dark' src={element.icon} alt='' />
                    <img className='img-light' src={element.iconLight} alt='' />
                </ThumIcon>
                <TitleIcon color={element.color}>{element.title}</TitleIcon>
                <Desc className='text-dark'>{element.description}</Desc>
            </ItemCom>
        );
    };

    return (
        <BoxSection>
            <Container>
                <div className='groupsuite'>
                    <Title title='Community Collaboration in an Open Environment' />
                    <ListCom>
                        {DataFBTC.map((item, index) => renderItem(item, index))}
                    </ListCom>
                </div>
            </Container>
        </BoxSection>
    );
};

const Desc = styled.p`
    font-size: 24px;
    font-weight: 300;
    @media (max-width: 576px) {
        font-size: 1.25rem;
        text-align: center;
    }
`;

const BoxSection = styled.section`
    position: relative;
    padding: 45px 0;
    @media (max-width: 576px) {
        padding: 0;
    }
`;

const ListCom = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 100px;
    margin-top: 50px;
    gap: 25px;
    @media (max-width: 576px) {
        padding-left: unset;
    }
`;

const ItemCom = styled.div`
    width: 30%;
    height: fit-content;
    overflow: hidden;
    transition: ease-in-out 0.3s all;
    cursor: pointer;

    a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        border-radius: 50%;
        background: #fff;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;
        transition: all ease-in-out 0.3s;
    }

    @media (max-width: 770px) {
        width: 45%;
        margin-right: 30px;
        margin-bottom: 25px;
    }
    &:hover a {
        transform: scale(1.2);
    }
    @media (max-width: 576px) {
        width: 90%;
        margin: 0 auto;
    }
`;

const ThumIcon = styled.p`
    max-width: 80px;
    width: 100%;
    margin-bottom: 1rem;
    img {
        width: 100%;
    }

    @media (max-width: 768px) {
        max-width: 100px;
        margin: 0 auto;
    }
`;

const TitleIcon = styled.h4`
    font-size: 26px;
    color: ${(props) => props.color};
    margin-bottom: 10px;
    @media (max-width: 576px) {
        text-align: center;
    }
`;

export default FBTCToken;
