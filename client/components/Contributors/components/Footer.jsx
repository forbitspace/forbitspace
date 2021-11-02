import styled from "styled-components";
// import { AdvisorData } from "../constants";
// import Members from "./Members";
const FooterContributor = () => {
    const ContributorRender = ({ data, title }) => {
        return (
            <WrapperInner>
                <div className="header">{title}</div>
                <div className="img-content">
                    {data.map((item) => (
                        <a href="/#">
                            <div className="img-holder">
                                <img
                                    src={`./images/logo-contributor/${item.img}.png`}
                                    alt="image-team"
                                />
                                <img
                                    className="background"
                                    src="../images/contributor-page/orbit-background.svg"
                                    alt="background-team"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </WrapperInner>
        );
    };

    return (
        <WrapperFooter>
            <div className="container">
                {/* <ContributorRender data={AdvisorData} title={"Advisors"} /> */}

                <BecomeBox>
                    <div className="content">
                        <div className="header-content">
                            Become a contributor
                        </div>
                        <div className="inner-content">
                            For onboarding, get in touch with the forbitswap
                            core contributors
                        </div>
                    </div>
                    <div className="apply-btn">
                        <a href="mailto:contacts@forbitspace.com">Apply</a>
                    </div>
                </BecomeBox>
            </div>
        </WrapperFooter>
    );
};

const WrapperFooter = styled.section`
    padding: 45px 0;
    @media (max-width: 576px) {
        padding: 10px 0;
    }
`;
const WrapperInner = styled.div`
    position: relative;
    .header {
        font-size: 3rem;
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
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 45px;
        gap: 10px;

        @media (max-width: 415px) {
            padding: 30px 40px;
        }
    }
    .img-holder {
        width: 100%;
        padding: 25px 0;
        max-width: 300px;
        position: absolute;

        img:nth-child(1) {
            height: 80px;
            width: 80px;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }

        img:nth-child(2) {
            height: auto;
            width: auto;
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

        @media (max-width: 415px) {
            width: 70%;
        }
    }
`;

const BecomeBox = styled.div`
    font-family: Montserrat, sans-serif;
    .content {
        text-align: center;
    }
    .header-content {
        font-size: 2rem;
        font-weight: 500;
        font-style: italic;
    }
    .inner-content {
        font-size: 1rem;
        font-weight: 300;
        line-height: 40px;
        font-style: italic;
    }
    .apply-btn {
        text-align: center;
        padding: 10px 0 60px;
        a {
            padding: 5px 30px;
            text-align: center;
            border-radius: 12px;
            transform: scale(0.98);
            transition: transform 0.25s ease 0s;
            box-sizing: border-box;
            font-weight: 500;
            font-size: 1.125rem;
            text-decoration: none;
            cursor: pointer;
            background-color: rgb(255, 255, 255);
            color: white;

            background-image: linear-gradient(
                38deg,
                #00ff36 -10%,
                #00ee57 3%,
                #00c5ad 32%,
                #00a4f1 53%,
                #0b18fc 102%,
                #0d00ff 111%
            );
            background-size: 200%;
            background-position: 90%;
            width: 100%;
        }
    }
    @media (max-width: 576px) {
        .header-content {
            font-size: 26px;
            font-weight: 600;
        }
        .inner-content {
            font-size: 14px;
            font-weight: 200;
        }
        .apply-btn {
            padding: 10px 0;
        }
    }
`;

export default FooterContributor;
