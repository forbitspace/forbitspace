import React, { useState } from "react";
import styled from "styled-components";

const FlybyBanner = () => {
    const [active, setActive] = useState(true);

    return active ? (
        <Wrapper>
            <Content>
                <a
                    href="https://flyby.forbitswap.com/#/live"
                    target="_blank"
                    rel="noreferrer"
                    className="box"
                >
                    <img
                        src="../images/icons/flyby-rocket.png"
                        alt="join background"
                        className="join-bg"
                    />
                </a>
                <div className="title">flyby IDO Launchpad</div>
            </Content>
            <BlurDiv onClick={() => setActive(false)} />
        </Wrapper>
    ) : (
        <></>
    );
};

const Wrapper = styled.div`
    text-align: center;
    width: 100vw;
    height: 100vh;
    z-index: 9999999999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: #00000080; */
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Content = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 400px;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    position: relative;
    .title {
        position: absolute;
        left: 75%;
        top: 20px;
        white-space: nowrap;
        font-size: 26px;
    }
`;
const BlurDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: #000000bb;
    width: 100%;
    height: 100%;
`;
export default FlybyBanner;
