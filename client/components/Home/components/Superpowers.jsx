import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Title from "../../Title";
import { DataToken } from "../constants/index";

const Superpowers = () => {
    const renderItem = (element, index) => {
        return (
            <ItemPower className='item-power' key={index}>
                <a href={element.link} className='text'>
                    <ThumItem>
                        <Img src={element.icon} alt='' />
                    </ThumItem>
                    <h4 className='titleitem'>{element.title}</h4>
                    <p className='drepitem text-dark'>{element.dreption}</p>
                </a>
            </ItemPower>
        );
    };

    return (
        <BoxSection>
            <Container>
                <div className='grouppower'>
                    <Title title='Space special for infrastructure tooling and Developer Defi' />
                    <DrepPower className='text-dark'>
                        The protocol’s core design is composability, different
                        components of a system can easily connect and
                        interoperate. Integrated DeFi applications, composable
                        code has created a powerful network effect and launch
                        DeFi protocols with the full-stack tooling and security
                        integrations
                    </DrepPower>
                    <ListSuper>
                        {DataToken.map((item, index) =>
                            renderItem(item, index)
                        )}
                        <ItemCenter
                            href='#'
                            target='_blank'
                            className='text item-power-center'
                        >
                            <ThumItem>
                                <Img
                                    src='./images/space-special/multi-chain.svg'
                                    alt=''
                                ></Img>
                            </ThumItem>
                            <h4 className='titleitem'>Multi-Chain</h4>
                            <p className='drepitem text-dark'>
                                Bridging blockchain platforms Multi-Chain
                                Connectivity
                            </p>
                        </ItemCenter>
                    </ListSuper>
                </div>
            </Container>
            {/* <BoxRound className="box-light"></BoxRound> */}
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 45px 0;
    @media (max-width: 576px) {
        padding-top: 0;
    }
`;

const BoxRound = styled.section`
    display: block;
    margin: 0px;
    border-radius: 50%;
    height: 550px;
    width: 550px;
    background: linear-gradient(
        to bottom,
        rgb(255 255 255) 0%,
        rgb(213 243 255) 0%,
        rgb(220 250 255) 10%,
        rgb(222 247 255) 21%,
        rgb(167 235 255) 52%,
        rgb(255 255 255) 100%
    );
    position: absolute;
    left: -10%;
    top: 0%;
    bottom: auto;
    opacity: 0.5;
    z-index: -1;
    -webkit-transform: rotate(220deg);
    -ms-transform: rotate(220deg);
    transform: rotate(220deg);
`;

const ListSuper = styled.div`
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 120px;
    justify-content: space-around;
    position: relative;

    @media (max-width: 576px) {
        justify-content: center;
    }
    @media (max-width: 850px) {
        gap: 20px;
    }
`;

const DrepPower = styled.p`
    font-size: 24px;
    color: #000;
    margin: 0 auto;
    margin-bottom: 45px;
    text-align: center;
    font-weight: 300;

    @media (max-width: 576px) {
        font-size: 1.25rem;
        text-align: left;
    }
`;

const ThumItem = styled.span`
    max-width: 80px;
`;

const Img = styled.img`
    max-width: 80px;
    width: 100%;
    margin: 15px 0;
`;

const ItemCenter = styled.div`
    max-width: 300px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    max-height: 300px;
    text-align: center;
    padding-top: 50px;
    border: 1px solid #0168ff;
    p {
        max-width: 220px;
        margin: 0 auto;
    }

    @media (max-width: 850px) {
        position: unset;
        max-width: 340px;
        box-shadow: rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 2%) 0px 4px 8px,
            rgb(0 0 0 / 2%) 0px 16px 24px, rgb(0 0 0 / 2%) 0px 24px 32px;
        background: #fff;
        transition: ease-in-out 0.3s all;
        text-align: center;
        border-radius: 33px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border: 1px solid #0168ff;
        display: block;
        width: 100%;
        height: 100%;
        padding: 13px 15px;
        text-decoration: none;
        color: black;
        &:hover {
            transform: scale(1.05);
        }
    }
`;

const ItemPower = styled.div`
    max-width: 340px;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 2%) 0px 4px 8px,
        rgb(0 0 0 / 2%) 0px 16px 24px, rgb(0 0 0 / 2%) 0px 24px 32px;
    background: #fff;
    transition: ease-in-out 0.3s all;
    text-align: center;
    border-radius: 33px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border: 1px solid #0168ff;

    a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 13px 15px;
        text-decoration: none;
        color: black;
    }

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 770px) {
        margin: 0 auto 10px;
    }

    @media (max-width: 576px) {
        p {
            font-size: 1.25rem;
            font-weight: 300;
        }
    }
`;

export default Superpowers;
