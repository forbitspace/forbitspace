import React from "react";
import { keyframes } from "styled-components";
const NetworkAnimation = () => {
    return (
        <WrapContent>
            <BackgroundImg>
                <img
                    src="../images/network-animation/bg.png"
                    alt="network-circle-background"
                />
            </BackgroundImg>
            <ItemImg>
                <ImgWrap>
                    <img
                        src="../images/network-animation/arb.png"
                        alt="arb-icon"
                    />
                </ImgWrap>
            </ItemImg>
        </WrapContent>
    );
};

const WrapContent = styled.div`
    position: relative;
`;
const BackgroundImg = styled.div`
    width: 100%;
`;
const ItemImg = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;
const ImgWrap = styled.div`
    position: absolute;
`;

export default NetworkAnimation;
