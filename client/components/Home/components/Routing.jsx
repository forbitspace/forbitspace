import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const images = [
    {icon:'eth'}, {icon: 'bsc'}, {icon: 'polygon'}, {icon: 'ava'}, {icon:'eth'}, {icon: 'bsc'}, {icon: 'polygon'}, {icon: 'ava'}
]
// const delay = 2500;
const Routing = () => {
    const [idx, setIdx] = useState(0);
    const delay = idx === 0 || idx === 8 ? 2000 : 4000;
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setIdx((prevIndex) => 
                prevIndex === images.length ? 0 : prevIndex + 1
            ),
            // () => setIdx(idx+1),
        delay);

        return(() => {
            resetTimeout();
        })
    }, [idx]);


    return(
        <SlideShow>
            <img src="../images/home-page/eth.png" alt="logo-icon" style={{opacity: 0}} />
            <Slider>
                {/*  style={{transform: `translateZ(-180px) rotateY(${(idx)/images.length*-360}deg)`, transition: idx === 0 ? 'transform 0s' : 'transform 2s'}} */}
                {
                    images.map((item, index) => (
                        <Slide>
                            {/*  key={index} style={{opacity:`${index === (idx %8) ? "1" : "0"}`}} */}
                            <img src={`../images/home-page/${item.icon}.png`} alt={`routing-${item.icon}`} />
                        </Slide>
                    ))
                }
            </Slider>
        </SlideShow>
    )
}
function template(i) {
    return `
        &:nth-child(${i + 1}) {
            transform: rotateY(${i * 45}deg) translateZ(500px);
            @media(max-width: 768px) {
                transform: rotateY(${i * 45}deg) translateZ(300px);
            }
            @media(max-width: 576px) {
                transform: rotateY(${i * 45}deg) translateZ(200px);
            }
        }
    `;
}
function getAnimations() {
    let str = "";
    for (let index = 0; index < 8; index += 1) {
    str += template(index);
    }
    return str;
}

function animation1(o, a, b, c) {
    let str = `
        0% {
            opacity: ${o};
        }
    `;
    for (let i = 1; i <= 8; i += 1) {
        str += `
            ${i * 12.5}% {
                opacity: ${i == c ? 1 : 0};
            }
        `;
    }
    return str;
}

const SlideShow = styled.div`
    /* border: 1px solid #CCC; */
    position: relative;
    width: 100%;
    max-width: 680px;
    margin: 20px auto;
    /* perspective: 1000px; */
    @media (max-width: 1800px){
        max-width: 600px;
    }
    @media (max-width: 1500px){
        max-width: 500px;
    }
    @media (max-width: 1375px){
        max-width: 460px;
    }
    @media (max-width: 1250px){
        max-width: 380px;
    }
    /* @media (max-width: 1024px){
        max-width: 320px;
    }
    @media (max-width: 768px){
        max-width: 240px;
    } */
    /* @media (max-width: 690px){
        max-width: 200px;
    } */
    @media (max-width: 576px){
        max-width: 300px;
    }
`
const Slider = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100vw;
    position: absolute;
    top: 0;
    transform: translateZ(-180px);
    transform-style: preserve-3d;
    animation: spin3d linear 70s infinite;

    @keyframes spin3d {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(-360deg);
        }
    }
`
const Slide = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    /* left: 10px; */
    top: 10px;
    /* border: 2px solid black; */
    /* line-height: 116px; */
    /* font-size: 80px; */
    font-weight: bold;
    color: white;
    text-align: center;
    overflow: hidden;

    img{
        width: 100%;
        max-width: 680px;
    }
    @media (max-width: 1800px){
        img{
            max-width: 600px;
        }
    }
    @media (max-width: 1500px){
        img{
            max-width: 500px;
        }
    }
    @media (max-width: 1375px){
        img{
            max-width: 460px;
        }
    }
    @media (max-width: 1250px){
        img{
            max-width: 380px;
        }
    }
    /* @media (max-width: 1024px){
        img{
            max-width: 320px;
        }
    }
    @media (max-width: 768px){
        img{
            max-width: 240px;
        }
    } */
    /* @media (max-width: 690px){
        img{
            max-width: 200px;
        }
    } */
    @media (max-width: 576px){
        img{
            max-width: 300px;
        }
    }

    ${getAnimations()}

    :nth-child(1) {
        animation: move1 linear infinite 70s;
        transform: rotateY(   0deg) translateZ(1115px);
        @keyframes move1 {
            ${animation1(1, 1, 7, 8)}
        }
    }
    :nth-child(2) {
        animation: move2 linear infinite 70s;
        transform: rotateY(  45deg) translateZ(1115px);
        @keyframes move2 {
            ${animation1(0, 2, 8, 1)}
        }
    }
    :nth-child(3) {
        animation: move3 linear infinite 70s;
        transform: rotateY(  90deg) translateZ(1115px);
        @keyframes move3 {
            ${animation1(0, 1, 3, 2)}
        }
    }
    :nth-child(4) {
        animation: move4 linear infinite 70s;
        transform: rotateY( 135deg) translateZ(1115px);
        @keyframes move4 {
            ${animation1(0, 2, 4, 3)}
        }
    }
    :nth-child(5) {
        animation: move5 linear infinite 70s;
        transform: rotateY( 180deg) translateZ(1115px);
        @keyframes move5 {
            ${animation1(0, 3, 5, 4)}
        }
    }
    :nth-child(6) {
        animation: move6 linear infinite 70s;
        transform: rotateY( 225deg) translateZ(1115px);
        @keyframes move6 {
            ${animation1(0, 4, 6, 5)}
        }
    }
    :nth-child(7) {
        animation: move7 linear infinite 70s;
        transform: rotateY( 270deg) translateZ(1115px);
        @keyframes move7 {
            ${animation1(0, 5, 7, 6)}
        }
    }
    :nth-child(8) {
        animation: move8 linear infinite 70s;
        transform: rotateY( 315deg) translateZ(1115px);
        @keyframes move8 {
            ${animation1(0, 6, 8, 7)}
        }
    }
    /* transition: ease-in-out opacity 1s;
    &:nth-child(1) { transform: rotateY(   0deg) translateZ(955px); }
    &:nth-child(2) { transform: rotateY(  45deg) translateZ(955px); }
    &:nth-child(3) { transform: rotateY(  90deg) translateZ(955px); }
    &:nth-child(4) { transform: rotateY( 135deg) translateZ(955px); }
    &:nth-child(5) { transform: rotateY( 180deg) translateZ(955px); }
    &:nth-child(6) { transform: rotateY( 225deg) translateZ(955px); }
    &:nth-child(7) { transform: rotateY( 270deg) translateZ(955px); }
    &:nth-child(8) { transform: rotateY( 315deg) translateZ(955px); } */
    @media (max-width: 1800px){
        &:nth-child(1) { transform: rotateY(   0deg) translateZ(925px); }
        &:nth-child(2) { transform: rotateY(  45deg) translateZ(925px); }
        &:nth-child(3) { transform: rotateY(  90deg) translateZ(925px); }
        &:nth-child(4) { transform: rotateY( 135deg) translateZ(925px); }
        &:nth-child(5) { transform: rotateY( 180deg) translateZ(925px); }
        &:nth-child(6) { transform: rotateY( 225deg) translateZ(925px); }
        &:nth-child(7) { transform: rotateY( 270deg) translateZ(925px); }
        &:nth-child(8) { transform: rotateY( 315deg) translateZ(925px); }
    }
    @media (max-width: 1500px){
        &:nth-child(1) { transform: rotateY(   0deg) translateZ(865px); }
        &:nth-child(2) { transform: rotateY(  45deg) translateZ(865px); }
        &:nth-child(3) { transform: rotateY(  90deg) translateZ(865px); }
        &:nth-child(4) { transform: rotateY( 135deg) translateZ(865px); }
        &:nth-child(5) { transform: rotateY( 180deg) translateZ(865px); }
        &:nth-child(6) { transform: rotateY( 225deg) translateZ(865px); }
        &:nth-child(7) { transform: rotateY( 270deg) translateZ(865px); }
        &:nth-child(8) { transform: rotateY( 315deg) translateZ(865px); }
    }
    @media (max-width: 1200px){
        &:nth-child(1) { transform: rotateY(   0deg) translateZ(625px); }
        &:nth-child(2) { transform: rotateY(  45deg) translateZ(625px); }
        &:nth-child(3) { transform: rotateY(  90deg) translateZ(625px); }
        &:nth-child(4) { transform: rotateY( 135deg) translateZ(625px); }
        &:nth-child(5) { transform: rotateY( 180deg) translateZ(625px); }
        &:nth-child(6) { transform: rotateY( 225deg) translateZ(625px); }
        &:nth-child(7) { transform: rotateY( 270deg) translateZ(625px); }
        &:nth-child(8) { transform: rotateY( 315deg) translateZ(625px); }
    }
    /* @media (max-width: 1250px){
        &:nth-child(1) { transform: rotateY(   0deg) translateZ(445px); }
        &:nth-child(2) { transform: rotateY(  45deg) translateZ(445px); }
        &:nth-child(3) { transform: rotateY(  90deg) translateZ(445px); }
        &:nth-child(4) { transform: rotateY( 135deg) translateZ(445px); }
        &:nth-child(5) { transform: rotateY( 180deg) translateZ(445px); }
        &:nth-child(6) { transform: rotateY( 225deg) translateZ(445px); }
        &:nth-child(7) { transform: rotateY( 270deg) translateZ(445px); }
        &:nth-child(8) { transform: rotateY( 315deg) translateZ(445px); }
    }
    @media (max-width: 1024px){
        &:nth-child(1) { transform: rotateY(   0deg) translateZ(385px); }
        &:nth-child(2) { transform: rotateY(  45deg) translateZ(385px); }
        &:nth-child(3) { transform: rotateY(  90deg) translateZ(385px); }
        &:nth-child(4) { transform: rotateY( 135deg) translateZ(385px); }
        &:nth-child(5) { transform: rotateY( 180deg) translateZ(385px); }
        &:nth-child(6) { transform: rotateY( 225deg) translateZ(385px); }
        &:nth-child(7) { transform: rotateY( 270deg) translateZ(385px); }
        &:nth-child(8) { transform: rotateY( 315deg) translateZ(385px); }
    }
    @media (max-width: 768px){
        &:nth-child(1) { transform: rotateY(   0deg) translateZ(305px); }
        &:nth-child(2) { transform: rotateY(  45deg) translateZ(305px); }
        &:nth-child(3) { transform: rotateY(  90deg) translateZ(305px); }
        &:nth-child(4) { transform: rotateY( 135deg) translateZ(305px); }
        &:nth-child(5) { transform: rotateY( 180deg) translateZ(305px); }
        &:nth-child(6) { transform: rotateY( 225deg) translateZ(305px); }
        &:nth-child(7) { transform: rotateY( 270deg) translateZ(305px); }
        &:nth-child(8) { transform: rotateY( 315deg) translateZ(305px); }
    }
    @media (max-width: 690px){
        &:nth-child(1) { transform: rotateY(   0deg) translateZ(265px); }
        &:nth-child(2) { transform: rotateY(  45deg) translateZ(265px); }
        &:nth-child(3) { transform: rotateY(  90deg) translateZ(265px); }
        &:nth-child(4) { transform: rotateY( 135deg) translateZ(265px); }
        &:nth-child(5) { transform: rotateY( 180deg) translateZ(265px); }
        &:nth-child(6) { transform: rotateY( 225deg) translateZ(265px); }
        &:nth-child(7) { transform: rotateY( 270deg) translateZ(265px); }
        &:nth-child(8) { transform: rotateY( 315deg) translateZ(265px); }
    } */
    @media (max-width: 576px){
        &:nth-child(1) { transform: rotateY(   0deg) translateZ(405px); }
        &:nth-child(2) { transform: rotateY(  45deg) translateZ(405px); }
        &:nth-child(3) { transform: rotateY(  90deg) translateZ(405px); }
        &:nth-child(4) { transform: rotateY( 135deg) translateZ(405px); }
        &:nth-child(5) { transform: rotateY( 180deg) translateZ(405px); }
        &:nth-child(6) { transform: rotateY( 225deg) translateZ(405px); }
        &:nth-child(7) { transform: rotateY( 270deg) translateZ(405px); }
        &:nth-child(8) { transform: rotateY( 315deg) translateZ(405px); }
    }
`

export default Routing;