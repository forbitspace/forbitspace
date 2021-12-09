import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const Brands = () => {
    const forbitspaceLogo = [
        { number: "01" },
        { number: "02" },
        { number: "03" },
        { number: "04" },
        { number: "05" },
        { number: "06" },
        { number: "07" },
        { number: "08" },
        { number: "09" },
        { number: "10" },
        { number: "11" },
        { number: "12" },
        { number: "13" },
        { number: "14" },
        { number: "15" },
        { number: "16" },
        { number: "17" },
        { number: "18" },
        { number: "19" },
        { number: "20" },
        { number: "21" },
    ];
    const forbitspaceLogoNoise = [
        { number: "02" },
        { number: "03" },
        { number: "04" },
        { number: "05" },
        { number: "06" },
        { number: "07" },
        { number: "08" },
        { number: "09" },
        { number: "10" },
        { number: "11" },
    ];
    const forbitswapLogo = [
        { number: "01" },
        { number: "02" },
        { number: "03" },
        { number: "04" },
        { number: "05" },
        { number: "06" },
        { number: "07" },
        { number: "08" },
        { number: "09" },
        { number: "10" },
    ];
    const flybyLogo = [
        { number: "01" },
        { number: "02" },
        { number: "03" },
        { number: "04" },
    ];
    const nftsLogo = [
        { number: "01" },
        { number: "02" },
        { number: "03" },
        { number: "04" },
        { number: "05" },
    ];
    return (
        <BoxSection>
            <WrapContainer className="container">
                <WrapImg>
                    <LazyLoad height={400}>
                        <img
                            src="../images/home-page/space-header.png"
                            alt="header-brand-page-image"
                        />
                    </LazyLoad>
                </WrapImg>
                <WrapEmail>
                    <TitleHeader>Brandkit</TitleHeader>
                    <WrapContentMail>
                        <Text>Say Hello</Text>
                        <span>
                            Learn more about{" "}
                            <span className="forbitspace">forbitspace</span> and
                            see what makes it great.
                        </span>
                        <a
                            href="mailto:hello@forbitspace.com"
                            className="mail-hello"
                        >
                            hello@
                            <span className="forbitspace">forbitspace</span>.com
                        </a>
                        <span>
                            Please direct inquiries to:{" "}
                            <a href="mailto:press@forbitspace.com">
                                press@
                                <span className="forbitspace">forbitspace</span>
                                .com
                            </a>
                        </span>{" "}
                    </WrapContentMail>
                </WrapEmail>
                <Content>
                    <Title>
                        <span className="forbitspace">forbitspace</span> logo
                    </Title>
                    <WrapperLogo>
                        {forbitspaceLogo.map((item, index) => (
                            <BrandLogo key={index}>
                                <BackgroundImg>
                                    <LazyLoad height={100}>
                                        <img
                                            src="../images/contributor-page/orbit-background.svg"
                                            alt=""
                                        />
                                    </LazyLoad>
                                </BackgroundImg>
                                <LogoImg
                                    className={"logo-brandkit-" + item.number}
                                >
                                    <LazyLoad height={100}>
                                        <img
                                            src={`../images/brand-logo/brandkit-forbit/forbitspace/PNG/Logo-forbitspace-brandkit-${item.number}.png`}
                                            alt=""
                                        />
                                    </LazyLoad>
                                </LogoImg>
                                <LinkImg>
                                    <a
                                        href={`https://forbitspace.com/images/brand-logo/brandkit-forbit/forbitspace/SVG/Logo-forbitspace-brandkit-${item.number}.svg`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="../images/icons/image-regular.svg"
                                            alt=""
                                        />{" "}
                                        svg
                                    </a>{" "}
                                    <a
                                        href={`https://forbitspace.com/images/brand-logo/brandkit-forbit/forbitspace/PNG/Logo-forbitspace-brandkit-${item.number}.png`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="../images/icons/image-regular.svg"
                                            alt=""
                                        />{" "}
                                        png
                                    </a>
                                </LinkImg>
                            </BrandLogo>
                        ))}
                    </WrapperLogo>
                </Content>
                <Content>
                    <Title>
                        <span className="forbitspace">forbitspace</span> noise
                        logo
                    </Title>
                    <WrapperLogo>
                        {forbitspaceLogoNoise.map((item, index) => (
                            <BrandLogo key={index}>
                                <BackgroundImg>
                                    <LazyLoad height={100}>
                                        <img
                                            src="../images/contributor-page/orbit-background.svg"
                                            alt=""
                                        />
                                    </LazyLoad>
                                </BackgroundImg>
                                <LogoImg
                                    className={"logo-noise-" + item.number}
                                >
                                    <LazyLoad height={100}>
                                        <img
                                            src={`../images/brand-logo/brandkit-forbit/forbitspace-noise/PNG/Logo-forbitspace-noise-${item.number}.png`}
                                            alt=""
                                        />
                                    </LazyLoad>
                                </LogoImg>
                                <LinkImg>
                                    <a
                                        href={`https://forbitspace.com/images/brand-logo/brandkit-forbit/forbitspace-noise/PNG/Logo-forbitspace-noise-${item.number}.png`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="../images/icons/image-regular.svg"
                                            alt=""
                                        />{" "}
                                        png
                                    </a>
                                </LinkImg>
                            </BrandLogo>
                        ))}
                    </WrapperLogo>
                </Content>
                <Content>
                    <Title>
                        <span className="forbitspace">forbitswap</span> logo
                    </Title>
                    <WrapperLogo>
                        {forbitswapLogo.map((item, index) => (
                            <BrandLogo key={index}>
                                <BackgroundImg>
                                    <LazyLoad height={100}>
                                        <img
                                            src="../images/contributor-page/orbit-background.svg"
                                            alt=""
                                        />
                                    </LazyLoad>
                                </BackgroundImg>
                                <LogoImg className={"logo-swap-" + item.number}>
                                    <LazyLoad height={100}>
                                        <img
                                            src={`../images/brand-logo/brandkit-forbit/forbitswap/PNG/Logo-forbitswap-brandkit-${item.number}.png`}
                                            alt=""
                                        />
                                    </LazyLoad>
                                </LogoImg>
                                <LinkImg>
                                    <a
                                        href={`https://forbitspace.com/images/brand-logo/brandkit-forbit/forbitswap/PNG/Logo-forbitswap-brandkit-${item.number}.png`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="../images/icons/image-regular.svg"
                                            alt=""
                                        />{" "}
                                        png
                                    </a>
                                    <a
                                        href={`https://forbitspace.com/images/brand-logo/brandkit-forbit/forbitswap/SVG/Logo-forbitswap-brandkit-${item.number}.svg`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="../images/icons/image-regular.svg"
                                            alt=""
                                        />{" "}
                                        svg
                                    </a>
                                </LinkImg>
                            </BrandLogo>
                        ))}
                    </WrapperLogo>
                </Content>
                <Content>
                    <Title>flyby IDO launchpad logo</Title>
                    <WrapperLogo>
                        {flybyLogo.map((item, index) => (
                            <BrandLogo key={index}>
                                <BackgroundImg>
                                    <LazyLoad height={100}>
                                        <img
                                            src="../images/contributor-page/orbit-background.svg"
                                            alt=""
                                        />
                                    </LazyLoad>
                                </BackgroundImg>
                                <LogoImg
                                    className={"logo-flyby-" + item.number}
                                >
                                    <LazyLoad height={100}>
                                        <img
                                            src={`../images/brand-logo/brandkit-forbit/flyby-IDO/PNG/Flybyido-${item.number}.png`}
                                            alt=""
                                        />
                                    </LazyLoad>
                                </LogoImg>
                                <LinkImg>
                                    <a
                                        href={`https://forbitspace.com/images/brand-logo/brandkit-forbit/flyby-IDO/PNG/Flybyido-${item.number}.png`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="../images/icons/image-regular.svg"
                                            alt=""
                                        />{" "}
                                        png
                                    </a>
                                </LinkImg>
                            </BrandLogo>
                        ))}
                    </WrapperLogo>
                </Content>
                <Content>
                    <Title>NFTs space logo</Title>
                    <WrapperLogo>
                        {nftsLogo.map((item, index) => (
                            <BrandLogo key={index}>
                                <BackgroundImg>
                                    <LazyLoad height={100}>
                                        <img
                                            src="../images/contributor-page/orbit-background.svg"
                                            alt=""
                                        />
                                    </LazyLoad>
                                </BackgroundImg>
                                <LogoImg className={"logo-nfts-" + item.number}>
                                    <LazyLoad height={100}>
                                        <img
                                            src={`../images/brand-logo/brandkit-forbit/nfts-space/PNG/Logo-nftsspace-${item.number}.png`}
                                            alt=""
                                        />
                                    </LazyLoad>
                                </LogoImg>
                                <LinkImg>
                                    <a
                                        href={`https://forbitspace.com/images/brand-logo/brandkit-forbit/flyby-IDO/PNG/Flybyido-${item.number}.png`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="../images/icons/image-regular.svg"
                                            alt=""
                                        />{" "}
                                        png
                                    </a>
                                </LinkImg>
                            </BrandLogo>
                        ))}
                    </WrapperLogo>
                </Content>
                <Content>
                    <DownloadButton>
                        <BackgroundImg>
                            <LazyLoad height={100}>
                                <img
                                    src="../images/contributor-page/orbit-background.svg"
                                    alt=""
                                />
                            </LazyLoad>
                        </BackgroundImg>
                        <a
                            href="../images/brand-logo/brandkit-forbit.zip"
                            download="brandkit-forbit"
                        >
                            <img
                                src="../images/icons/file-archive-regular.svg"
                                alt=""
                            />{" "}
                            Download Full
                        </a>
                    </DownloadButton>
                </Content>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 8vh 0 0;
    margin: 0 0 2rem;
    .forbitspace {
        font-family: Montserrat, "helvetica neue", Roboto, sans-serif;
        font-weight: 900;
        font-style: italic;
    }
    @media (max-width: 770px) {
        padding-top: 60px;
        margin: 0 0 1rem;
    }
`;
const WrapContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 768px) {
        /* flex-direction: column-reverse; */
    }
`;
const WrapImg = styled.div`
    /* width: 40%; */
    /* max-width: 450px; */
    @media (max-width: 768px) {
        /* width: 50%; */
    }
`;
const WrapEmail = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const WrapContentMail = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    /* font-family: sans-serif; */
    font-style: italic;
    font-weight: 200;
    text-align: left;
    a {
        width: 100%;
        color: #0168ff;
        text-decoration: underline;
    }
    .mail-hello {
        text-align: center;
        /* padding-right: 5.5rem; */
    }
    span {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 75%;
    }
    @media (max-width: 768px) {
        width: 100%;
        .mail-hello {
            /* text-align: left; */
            padding-right: 0;
        }
    }
`;
const TitleHeader = styled.div`
    font-size: 36px;
    font-weight: 200;
`;
const Text = styled.div`
    font-size: 64px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    /* font-style: normal; */
`;
const Content = styled.div``;
const Title = styled.div`
    font-size: 28px;
    font-weight: normal;
`;
const WrapperLogo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;
const BrandLogo = styled.div`
    max-width: 450px;
    width: 30%;
    /* background-color: #0c3d68; */

    padding: 1rem;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    @media (max-width: 768px) {
        width: 45%;
    }
    @media (max-width: 576px) {
        width: 100%;
    }
`;
const LogoImg = styled.div`
    width: 55%;
    max-width: 250px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    &.logo-brandkit-20,
    &.logo-brandkit-21,
    &.logo-noise-11,
    &.logo-noise-10,
    &.logo-swap-09,
    &.logo-swap-10,
    &.logo-flyby-04,
    &.logo-nfts-05 {
        img {
            max-width: 80px;
        }
        @media (max-width: 1024px) {
            img {
                max-width: 60px;
            }
        }
    }
    @media (max-width: 1024px) {
        max-width: 140px;
    }
`;
const BackgroundImg = styled.div`
    opacity: 0.45;
`;
const LinkImg = styled.div`
    position: absolute;
    bottom: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    a {
        text-decoration: none;
        color: #fff;
    }
    img {
        width: 12px;
    }
`;
const DownloadButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        max-width: 250px;
    }
    a {
        position: absolute;
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        img {
            width: 14px;
        }
    }
`;
export default Brands;
