import styled from "styled-components";

const Planet = () => {
    const DataRender = [
        {
            img: "Planet-1",
        },
        {
            img: "Planet-2",
        },
        {
            img: "Planet-3",
        },
        {
            img: "Planet-4",
        },
        {
            img: "Planet-5",
        },
        {
            img: "Planet-6",
        },
        {
            img: "Planet-7",
        },
        {
            img: "Planet-8",
        },
    ];

    const RenderSystem = ({ data }) => {
        return (
            <System>
                {data.map((item, index) => (
                    <Planets key={index}>
                        <img
                            src={`./images/SpacePlanets/${item.img}.png`}
                            alt=''
                        />
                    </Planets>
                ))}
            </System>
        );
    };

    return (
        <Main>
            <HeaderContent>
                <LogoSpace>
                    <img
                        src='./images/Forbitspace-comming/logo-forbitspace.png'
                        alt=''
                    />
                </LogoSpace>
                <UseBtn href='/#'>Use App</UseBtn>
            </HeaderContent>
            <Orbit>
                <WrapperPlanet>
                    <Circle>
                        <Logo>
                            <img
                                src='./images/SpacePlanets/space-12-02.png'
                                alt=''
                            />
                        </Logo>
                        <RenderSystem data={DataRender} />
                        <Earth>
                            <img src='./images/SpacePlanets/earth.png' alt='' />
                            <Moon>
                                <img
                                    src='./images/SpacePlanets/moon.png'
                                    alt=''
                                />
                            </Moon>
                        </Earth>
                    </Circle>
                </WrapperPlanet>
            </Orbit>
        </Main>
    );
};

const Main = styled.div`
    height: 100vh;
    display: flex;
    background-image: url("./images/Forbitspace-comming/background.jpg");
    background-size: cover;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
`;

const Orbit = styled.div`
    height: 80%;
    width: 100%;
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WrapperPlanet = styled.div`
    display: flex;
    justify-content: center;
    @media (min-height: 1260px) {
        transform: scale(1.3);
    }
    @media (min-width: 1281px) {
        transform: scale(1.3);
    }

    @media (min-width: 1024px) {
        transform: scale(1);
    }

    @media (max-height: 768px) {
        transform: scale(0.7);
    }

    @media (max-height: 768px) {
        transform: scale(0.7);
    }

    @media (max-height: 600px) {
        transform: scale(0.5);
    }

    @media (max-width: 415px) {
        transform: scale(0.5);
    }

    @media (max-height: 425px) {
        transform: scale(0.4);
    }

    @media (max-width: 320px) {
        transform: scale(0.4);
    }

    @media (max-height: 350px) {
        transform: scale(0.3);
    }
`;
const System = styled.div``;
const Circle = styled.div`
    width: 800px;
    height: 800px;
    max-width: 800px;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("./images/SpacePlanets/space-12-03.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    animation-name: spin;
    animation-duration: 30000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }
`;
const Logo = styled.div`
    width: auto;
    max-width: 20%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    animation-name: spins;
    animation-duration: 30000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    img {
        height: auto;
        width: auto;
    }
    @keyframes spins {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
const Planets = styled.div`
    position: absolute;
    width: auto;
    max-width: 24%;

    img {
        animation-name: spinning;
        animation-duration: 30000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    :nth-child(1) {
        right: 15%;
        top: 16%;
    }

    :nth-child(2) {
        left: 11%;
        top: 58%;
    }

    :nth-child(3) {
        right: 11%;
        bottom: 16%;
    }

    :nth-child(4) {
        left: 35%;
        top: 20%;
    }

    :nth-child(5) {
        right: 45%;
        top: -4%;
    }

    :nth-child(6) {
        right: 45%;
        top: 32%;
    }

    :nth-child(7) {
        right: 28%;
        top: 54%;
    }

    :nth-child(8) {
        left: 35%;
        bottom: -1%;
    }
    @keyframes spinning {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
const Earth = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 47%;
    bottom: 21%;
    img {
        animation-name: spinning;
        animation-duration: 30000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`;
const Moon = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    /* background: #fff; */
    animation-name: spin;
    animation-duration: 10000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    img {
        position: absolute;
        top: -16px;
        right: 0;
    }
`;
const HeaderContent = styled.div`
    max-height: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: transparent;
    padding: 0 120px;
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;
const LogoSpace = styled.div`
    max-height: 80px;
    img {
        width: 150px;
        height: auto;
    }
`;
const UseBtn = styled.a`
    padding: 5px 30px;
    border-radius: 12px;
    transform: scale(0.98);
    transition: transform 0.25s ease 0s;
    box-sizing: border-box;
    text-align: center;
    font-weight: 500;
    font-size: 1.125rem;
    text-decoration: none;
    cursor: pointer;
    color: white;
    background: linear-gradient(
        38deg,
        #00ff36 -10%,
        #00ee57 3%,
        #00c5ad 32%,
        #00a4f1 53%,
        #0b18fc 102%,
        #0d00ff 111%
    );
    transition: 0.2s;
    max-width: 150px;

    :hover {
        color: #fff;
        background-size: 200%;
        background-position: right;
    }
    @media (max-width: 576px) {
        font-size: 0.8rem;
    }
`;

export default Planet;
