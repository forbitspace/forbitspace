import styled from "styled-components";
import { ContributorData } from "../constants";
const Footer = () => {

    const ContributorRender = ({ data, title }) => {
        console.log(data);
        return (
            <WrapperInner >
                <div className="header">{title}</div>
                <div className="img-content">
                    {data.map(item => (
                        <div className="img-holder">
                            <a href="/#">
                                <img src={`./images/logo-contributor/${item.img}.svg`} alt="" />
                            </a>
                        </div>
                    ))}
                </div>
            </WrapperInner>
        );
    };

    return (
        <WrapperFooter>
            <div className="container">
                <ContributorRender
                    data={ContributorData}
                    title={"Ecosystem partners"} />
                <ContributorRender
                    data={ContributorData}
                    title={"Contributors"} />
                <BecomeBox>
                    <div className="content">
                        <div className="header-content">Become a contributor</div>
                        <div className="inner-content">For onboarding, get in touch with the forbitswap core contributors</div>
                    </div>
                    <div className="apply-btn">
                        <a href="/#">Apply</a>
                    </div>
                </BecomeBox>
            </div>
        </WrapperFooter>
    );
}

const WrapperFooter = styled.section`
    padding: 45px 0;
`
const WrapperInner = styled.div`

    .header{
        font-size: 40px;
        font-weight: 500;
        line-height: 1.5;
        text-align: left;
        color: #fff;

        @media (max-width: 415px){
            font-size: 30px;
        }
    }
    .img-content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 45px;
        gap: 10px;
        
        @media (max-width: 415px){
            padding: 30px 40px;
        }
    }
    .img-holder{
        width: 19%;
        padding: 25px 0;
        
        img{
            height: auto;
            width: auto;
        }

        @media (max-width: 945px){
            width: 22.5%;
        }

        @media (max-width: 768px){
            width: 32%;
        }

        @media (max-width: 574px){
            width: 45%;
        }

        @media (max-width: 415px){
            width: 70%;
        }
    }

`

const BecomeBox = styled.div`

    .content{
        text-align: center;
    }
    .header-content{
        font-size: 50px;
        font-weight: 600;
    }
    .inner-content{
        font-size: 24px;
    }
    .apply-btn{
        text-align: center;
        padding: 60px 0;
        a{
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
            background-color: rgb(255,255,255);
            color: white;
            
            background-image: linear-gradient( 38deg, #00ff36 -10%, #00ee57 3%, #00c5ad 32%, #00a4f1 53%, #0b18fc 102%, #0d00ff 111% );
            width: 100%;
        }
    }
    
`

export default Footer;