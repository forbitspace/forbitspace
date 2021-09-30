import React from "react";
import styled from "styled-components";

import { Container } from "reactstrap";

import { DataSocialLinkFooter, navContent } from "./constants";

const Index = () => {
  return (
    <footer className="footer">
      <FooterMenu>
        <Container>
          <ListMenu>
            {navContent.map((item, index) => (
              <ul className="text-visi">
                <TitleFooter>{item.nav}</TitleFooter>
                {item.contents.map((item, index) => (
                  <li>
                    {!item.disable ? (
                      <a href={item.link} target={item.outLink ? "_blank" : ""}>
                        {item.content}
                      </a>
                    ) : (
                      <Blank href="/">{item.content}</Blank>
                    )}
                  </li>
                ))}
              </ul>
            ))}
            <ul className="text-visi">
              <TitleFooter size="16px">
                Subscribe to our newsletter for updates
              </TitleFooter>
              <form action="">
                <WrapperInput>
                  <Input
                    type="text"
                    className="text bg-input-dark"
                    placeholder="your@email.com"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                  />
                  {/* <BorderInput /> */}
                </WrapperInput>
                <button type="submit">
                  <i className="fa fa-arrow-right"></i>
                </button>
              </form>
              <Copyright className="text-dark">© 2021 forbitspace</Copyright>
              <SocialLink>
                {DataSocialLinkFooter.map((item, index) => {
                  return (
                    <Link href={item.link} target="_blank" key={index}>
                      <Icon src={item.url} alt="icon social media"></Icon>
                    </Link>
                  );
                })}
              </SocialLink>
            </ul>
          </ListMenu>
        </Container>
      </FooterMenu>
      <BackgroundFooter />
    </footer>
  );
};

const BackgroundFooter = styled.div`
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
`;

const Link = styled.a`
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  max-width: 20px;
  width: 100%;
  transition: all ease-in-out 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;

const SocialLink = styled.div``;

const FooterMenu = styled.section`
  position: relative;
  padding: 30px 0 0;
  overflow: hidden;

  @media (max-width: 576px) {
    padding: 40px 0;

    &:after {
      content: none;
    }
  }
`;

const ListMenu = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 25px;

  ul {
    padding-left: 0;
    width: calc(100% / 7);
    // text-align:right;

    form {
      display: flex;
      align-items: center;
      margin-bottom: 25px;

      input {
      }

      button {
        width: 60px;
        height: 30px;
        border: none;
        outline: none;
        background-image: linear-gradient(
          17deg,
          #00ff36 -68%,
          #00ee57 -43%,
          #00c5ad 14%,
          #00a4f1 57%,
          #0b18fc 154%,
          #0d00ff 171%
        );
        border-radius: 8px;
        transition: all 0.5s ease-in-out;
        background-size: 200%;
        background-position: 99%;

        i {
          color: #fff;
          font-size: 12px;
        }

        &:hover {
          background-size: 200%;
          background-position: right;
        }
      }
    }

    li {
      font-size: 12px;
      font-weight: 300;
      font-family: sans-serif;
      a {
        text-decoration: none;
        color: #4e4f50;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 1024px) {
      width: calc(100% / 5);
      margin-right: 0;
      text-align: left;
      form {
        justify-content: center;
      }
      :last-child {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 768px) {
      /* width: calc(100% / 6); */
      margin-right: 0;
      text-align: left;
      form {
        justify-content: center;
      }
      :last-child {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 576px) {
      width: 50%;
    }
  }
`;
const Blank = styled.div`
  font-size: 12px;
`;
const TitleFooter = styled.h3`
  font-size: 16px;
  font-size: ${(props) => props.size};
  margin-bottom: 10px;
  color: #182239;
  font-weight: bold;
`;

const Copyright = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-right: 5px;
  font-family: "Averta";
  font-size: 14px;
  padding: 10px 15px;
  line-height: 20px;
  outline: 0;
  transition: all 0.3s ease-in-out;
  background: transparent;
  border-radius: 10px;
  position: relative;
  border: none;
  background: #cff3f4;
  border: 1px solid #0047b2;
`;

const WrapperInput = styled.div`
  position: relative;
  border-radius: 10px;
  margin-right: 5px;
`;
export default Index;
