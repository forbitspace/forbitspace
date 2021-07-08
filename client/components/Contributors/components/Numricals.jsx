import React from "react";
import styled from "styled-components";
import { NumData } from '../constants'

const Numricals = () => {

    const RenderItem = ({ text, num }) => {
        return (
            <StyledItem>
                <Num>{num + '+'}</Num>
                <Text>{text}</Text>
            </StyledItem>
        )
    }



    return (
        <WrapperNumrical>
            <Container className='container text-dark text-visi'>
                {
                    NumData.map((item) => {
                        return (
                            <RenderItem text={item.text} num={item.num} />
                        )
                    })
                }
            </Container>
        </WrapperNumrical>
    );
};



const WrapperNumrical = styled.section`
    margin-top: 120px;
    @media(max-width: 768px) {
        margin-top: 100px;
    }
    @media(max-width: 576px) {
        margin-top: 150px;
    }
`
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

`

const StyledItem = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    text-align: center;
    padding-top: 1rem;
    position: relative;
    @media(max-width: 768px){
        margin-bottom: 1rem;
    }
    @media(max-width :576px) {
        width: 150px;
        height: 150px;
    }
    ::after {
        content: '';
        background: linear-gradient( 45deg,#0168ffcc,#0168ff,#0168ffcc);        
        z-index: -1;
        position: absolute;
        width: calc(99.9% + 1px);
        height: calc(99.9% + 1px);
        top: -1px;
        left: -1px;
        border-radius: inherit;
    }

    :nth-child(1) {
        background: linear-gradient(to right, #01203d, #021e3a); 
        @media(max-width: 576px) {
            background: linear-gradient(to right, #012545, #011b35); 
        }
    }
    :nth-child(2) {
        background: linear-gradient(to right, #021c37, #021a33); 
        @media(max-width: 576px) {
            background: linear-gradient(to right, #02172f, #020d20); 
        }
    }
    :nth-child(3) {
        background: linear-gradient(to right, #011831, #02162d); 
        @media(max-width: 576px) {
            background: linear-gradient(to right, #012545, #011b35); 
        }
    }
    :nth-child(4) {
        background: linear-gradient(to right, #01152a, #021327); 
        @media(max-width: 576px) {
            background: linear-gradient(to right, #02172f, #020d20); 
        }
    }
`
const Num = styled.p`
    font-size: 3.5rem;
    font-weight: 600;
    margin-bottom: 0;
`
const Text = styled.div`
    text-align: left;
    margin-left: 35px;
    white-space: nowrap;
    @media(max-width: 576px) {
        font-size: .8rem;
    }
`

export default Numricals;
