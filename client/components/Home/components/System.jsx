import styled from "styled-components";
import {
    AuditData,
    BackerData,
    DataSocialLinkFooter,
    EcosystemData,
    MediaData,
} from "../constants";
import LazyLoad from "react-lazyload";
const System = () => {
    const ContributorRender = ({ data, title }) => {
        return (
            <WrapperInner>
                <div className="header">{title}</div>
                <div className="img-content">
                    {data.map((item, index) => (
                        <div className="img-holder" key={index}>
                            <LazyLoad height={45}>
                                <img
                                    src={`./images/logo-contributor/${item.img}`}
                                    className={`img-${
                                        item.img?.split(".")[0]
                                            ? item.img.split(".")[0]
                                            : "eco-system"
                                    }`}
                                    alt={`logo-${item.img}`}
                                />
                            </LazyLoad>
                        </div>
                    ))}
                </div>
            </WrapperInner>
        );
    };
    const AuditorRender = ({ data, title }) => {
        return (
            <WrapperInner className="auditor">
                <div className="header">{title}</div>
                <div className="img-content">
                    {data.map((item, index) => (
                        <div className="img-holder" key={index}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer noreopenner"
                                className="link-to-web"
                            >
                                <LazyLoad height={45}>
                                    <img
                                        src={`./images/logo-contributor/${item.img}`}
                                        className={`img-${
                                            item.img.split(".")[0]
                                                ? item.img.split(".")[0]
                                                : "auditor"
                                        }`}
                                        alt={`logo-${item.img}`}
                                    />
                                </LazyLoad>
                            </a>
                        </div>
                    ))}
                </div>
            </WrapperInner>
        );
    };
    const MediaRender = ({ data, title }) => {
        return (
            <WrapperInner className="media">
                <div className="header">{title}</div>
                <div className="img-content">
                    {data.map((item, index) => (
                        <div className="img-holder" key={index}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer noreopenner"
                                className="link-to-web"
                            >
                                <LazyLoad height={45}>
                                    <img
                                        src={`./images/logo-contributor/${item.img}`}
                                        className={`img-${
                                            item.img.split(".")[0]
                                                ? item.img.split(".")[0]
                                                : "auditor"
                                        }`}
                                        alt={`logo-${item.img}`}
                                    />
                                </LazyLoad>
                            </a>
                        </div>
                    ))}
                </div>
            </WrapperInner>
        );
    };

    return (
        <WrapperSystem>
            <div className="container">
                <ContributorRender
                    data={EcosystemData}
                    title={"Ecosystem Partnership"}
                />
                <AuditorRender
                    data={AuditData}
                    title={"Security Audit Partners"}
                />
                <MediaRender data={MediaData} title={"Media Partners"} />
                <MediaRender
                    data={BackerData}
                    title={"Backers and Investors"}
                />
                <BecomeBox>
                    <div className="content">
                        <div className="header-content">Join the community</div>
                        <div className="inner-content">
                            Learn more about Maker, chat with the team, others
                            in the community,
                            <br />
                            and have your say in shaping the future of
                            decentralized finance.
                        </div>
                    </div>
                </BecomeBox>{" "}
                <SocialLink>
                    {DataSocialLinkFooter.map((item, index) => {
                        return (
                            <Link
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                key={index}
                            >
                                <Icon
                                    src={item.url}
                                    alt="icon social media"
                                ></Icon>
                            </Link>
                        );
                    })}
                </SocialLink>
            </div>
        </WrapperSystem>
    );
};

const WrapperSystem = styled.section`
    @media (min-width: 1440px) {
        max-width: 1320px;
        margin: 0 auto;
    }
    @media (min-width: 768px) {
        padding: 45px 0;
    }
`;
const WrapperInner = styled.div`
    &.auditor {
        .img-content {
            justify-content: center;
            padding: 15px 0 45px;
        }
        .img-holder {
            margin: 0 2rem;
        }
    }
    &.media {
        .img-content {
            justify-content: center;
            padding: 15px 0 45px;
        }
        .img-holder {
            width: 15%;
            @media (max-width: 945px) {
                width: 22.5%;
            }

            @media (max-width: 768px) {
                width: 32%;
            }

            @media (max-width: 574px) {
                width: 45%;
            }
        }
        img {
            transform: scale(0.85);
        }
        .img-song-ngu {
            margin-left: 50%;
            transform: translate(-50%) scale(1.2);
        }
        .img-bsc-news {
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }
    @media (max-width: 768px) {
        &.auditor {
            .img-holder {
                padding: 10px 0;
            }
            .img-hacken {
                width: 100%;
            }
        }
    }
    @media (max-width: 576px) {
        &.auditor {
            .img-holder {
                margin: 0;
            }
        }
        &.media {
            .img-holder {
                margin: 0;
            }
        }
    }
    .header {
        font-size: 2rem;
        font-weight: 500;
        line-height: 1.5;
        text-align: center;
        color: #fff;

        @media (max-width: 415px) {
            font-size: 26px;
        }
    }
    .img-content {
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 45px;
        gap: 10px;

        @media (max-width: 767px) {
            gap: 7px;
        }

        @media (max-width: 576px) {
            padding: 30px 10px;
            justify-content: space-between;
        }
    }
    .img-holder {
        width: 19%;
        padding: 25px 0;

        img {
            height: auto;
            width: auto;
            max-height: 65px;
        }
        .img-trust-wallet {
            height: 60px;
        }

        @media (max-width: 945px) {
            width: 22.5%;
        }

        @media (max-width: 768px) {
            width: 32%;
        }

        @media (max-width: 574px) {
            width: 45%;
        }
    }
`;

const BecomeBox = styled.div`
    .content {
        text-align: center;
    }
    .header-content {
        font-size: 2rem;
        font-weight: 500;
    }
    .inner-content {
        font-size: 1rem;
        font-weight: 200;
        letter-spacing: 1px;
    }
    @media (max-width: 786px) {
        .header-content {
            font-size: 26px;
        }
        .inner-content {
            font-size: 14px;
        }
    }
`;
const SocialLink = styled.div`
    width: 100%;
    text-align: center;
    padding: 30px 0;
`;
const Link = styled.a`
    margin-right: 20px;
    :hover {
        cursor: pointer;
    }
    @media (max-width: 576px) {
        margin-right: 10px;
    }
`;

const Icon = styled.img`
    max-width: 30px;
    width: 100%;
    transition: all ease-in-out 0.2s;
    :hover {
        transform: scale(1.2);
    }
    @media (max-width: 576px) {
        max-width: 24px;
    }
`;

export default System;
