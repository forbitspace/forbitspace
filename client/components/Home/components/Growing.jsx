import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Title from "../../Title";

const Growing = () => {
    return (
        <BoxSection>
            <Container>
                <GroupGrow>
                    <Title title='Defi space a growing protocol ecosystem.' />
                    <DrepGrow className='text-dark'>
                        forbitswap is a space protocol an advanced transaction
                        builder made simple - a system where anyone can trading,
                        readily manage a range of different activities, from
                        yield farming to leveraged position and debt
                        refinancing, forbitswap protocol potentially to a more
                        robust and transparent financial infrastructure.
                    </DrepGrow>
                    <ThumGrow>
                        <img src='./images/200-defi.svg' alt='' />
                    </ThumGrow>
                </GroupGrow>
            </Container>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 45px 0;
`;

const GroupGrow = styled.div`
    text-align: center;
    @media (max-width: 576px) {
        text-align: left;
    }
`;

const DrepGrow = styled.p`
    font-size: 24px;
    color: #000;
    margin-bottom: 25px;
    font-weight: 300;
    font-family: helvetica neue;

    @media (max-width: 576px) {
        font-size: 1.25rem;
    }
`;

const BoxLight = styled.div`
    display: block;
    margin: 0px;
    border-radius: 50%;
    height: 600px;
    width: 600px;
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

const ThumGrow = styled.p`
    max-width: 700px;
    margin: 0 auto;

    img {
        width: 100;
    }
`;

export default Growing;
