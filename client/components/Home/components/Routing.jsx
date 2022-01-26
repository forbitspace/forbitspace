import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const images = [
    {icon:'eth'}, {icon: 'bsc'}, {icon: 'polygon'}, {icon: 'ava'}
]
// const delay = 2500;
const Routing = () => {
    const [idx, setIdx] = useState(0);
    const delay = idx === 0 || idx === 4 ? 2500 : 5000;
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
            <Slider style={{transform: `translateZ(-180px) rotateY(${(idx)/images.length*-360}deg)`, transition: idx === 0 ? 'transform 0s' : 'transform 2s'}}>
                {
                    images.map((item, index) => (
                        <Slide key={index} style={{opacity:`${index === (idx%4) ? "1" : "0"}`}}>
                            <img src={`../images/home-page/${item.icon}.png`} alt={`routing-${item.icon}`} />
                        </Slide>
                    ))
                }
            </Slider>
        </SlideShow>
    )
}

const SlideShow = styled.div`
    /* border: 1px solid #CCC; */
    margin: 40px 0;
    position: relative;
    width: 100%;
    max-width: 650px;
    margin: 40px auto;
    /* perspective: 1000px; */
`
const Slider = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    transform: translateZ(-180px);
    transform-style: preserve-3d;
    /* transition: transform 2s; */
`
const Slide = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    left: 10px;
    top: 10px;
    /* border: 2px solid black; */
    /* line-height: 116px; */
    font-size: 80px;
    font-weight: bold;
    color: white;
    text-align: center;
    transition: ease-in-out opacity 1s;
    &:nth-child(1) { transform: rotateY(   0deg) translateZ(305px); }
    &:nth-child(2) { transform: rotateY(  90deg) translateZ(305px); }
    &:nth-child(3) { transform: rotateY( 180deg) translateZ(305px); }
    &:nth-child(4) { transform: rotateY( 270deg) translateZ(305px); }
`

export default Routing;