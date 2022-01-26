import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const images = [
    {icon:'eth'}, {icon: 'bsc'}, {icon: 'polygon'}, {icon: 'ava'}, {icon: 'eth'}
]
// const delay = 2500;
const Routing = () => {
    const [index, setIndex] = useState(0);
    const delay = index === 0 || index === 4 ? 2500 : 5000;
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
        delay);

        return(() => {
            resetTimeout();
        })
    }, [index]);


    return(
        <SlideShow>
            <Slider style={{transform: `translate3d(${-index * 100}%, 0, 0)`, transition: index === 0 ? "0s" :"ease 1s"}}>
                {
                    images.map((item, index) => (
                        <Slide key={index}>
                            <img src={`../images/home-page/${item.icon}.png`} alt="" />
                        </Slide>
                    ))
                }
            </Slider>
        </SlideShow>
    )
}

const SlideShow = styled.div`
    margin: 0 auto;
    overflow: hidden;
    max-width: 650px;
`
const Slider = styled.div`
    white-space: nowrap;
    transform-style: preserve-3d;
    /* transition: ease 1s; */
`
const Slide = styled.div`
    display: inline-block;
    height: auto;
    width: 100%;
    border-radius: 24px;
    /* background-color: yellow; */
`

export default Routing;