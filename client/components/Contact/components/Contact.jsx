import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import { send } from "emailjs-com";

const ContactUs = () => {
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [status, setStatus] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    const [scrollPos, setScrollPos] = useState();

    //config email sender
    const [toSend, setToSend] = useState({
        from_name: "",
        email: "",
        position: "",
        message: "",
    });
    //ref for send button object
    const buttonRef = useRef();

    const getMouseOver = (e) => {
        var parentOffset = buttonRef.current.getBoundingClientRect();

        setX(e.clientX - parentOffset.left);
        setY(e.clientY - parentOffset.top);
    };

    function validateEmail(email) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(toSend.email) && captcha) {
            send(
                "service_hrt6uaf",
                "template_0rpmrcr",
                toSend,
                "user_rUwQTrKEeiiqxSanQorG7"
            )
                .then((response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setStatus(true);
                })
                .catch((err) => {
                    console.log("FAILED...", err);
                });
        } else {
            if (!validateEmail(toSend.email) || !toSend.email === "") {
                alert("Your email is invalid. Please try again!");
            } else if (!captcha) {
                alert("Please fill the captcha validation!");
            }
        }
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    function onChange(value) {
        console.log("Captcha value:", value);
        if (value) {
            setCaptcha(true);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            var currentScrollPos = window.pageYOffset;
            setScrollPos(currentScrollPos);
        });
    }, [scrollPos]);

    return (
        <BoxSection>
            <WrapContainer>
                <Header>Contact Us</Header>
                {status ? (
                    <ThankyouMessage
                        onClick={() => {
                            setStatus(false);
                        }}
                    >
                        <span>
                            Thank you! Your submission has been received!
                        </span>
                    </ThankyouMessage>
                ) : (
                    <WrapperSubmit
                        // action="mailto:ryanspace46@gmail.com"
                        method="post"
                        enctype="text/plain"
                        onSubmit={onSubmit}
                        autocomplete="off"
                    >
                        <WrapperInput>
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="from_name"
                                autoComplete="off"
                                value={toSend.from_name}
                                onChange={handleChange}
                            />
                        </WrapperInput>
                        <WrapperInput>
                            <input
                                type="text"
                                placeholder="Your Email"
                                name="email"
                                autoComplete="off"
                                value={toSend.email}
                                onChange={handleChange}
                            />
                        </WrapperInput>
                        <WrapperInput>
                            <input
                                type="text"
                                placeholder="Who Are You"
                                name="position"
                                autoComplete="off"
                                value={toSend.position}
                                onChange={handleChange}
                            />
                        </WrapperInput>
                        <WrapperMessage>
                            <textarea
                                name="message"
                                rows="14"
                                cols="100%"
                                wrap="soft"
                                placeholder="Write your message here"
                                value={toSend.message}
                                onChange={handleChange}
                            ></textarea>
                        </WrapperMessage>
                        <ReCAPTCHA
                            theme="dark"
                            sitekey="6Le9OhkdAAAAADCZ2pcfaQA59QVZ2m5wL71VWh7q"
                            onChange={onChange}
                        />
                        <WrapperButton>
                            <SubmitButton
                                ref={buttonRef}
                                onMouseMove={(e) => getMouseOver(e)}
                                onMouseLeave={(e) => getMouseOver(e)}
                                type="submit"
                                value="Send"
                            >
                                <input type="submit" value="Send" />
                                <span
                                    style={{ top: y + "px", left: x + "px" }}
                                ></span>{" "}
                            </SubmitButton>
                        </WrapperButton>
                    </WrapperSubmit>
                )}
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 8vh 0 0;
    margin: 0 0 2rem;
    @media (max-width: 770px) {
        padding-top: 120px;
        margin: 0 0 1rem;
    }
`;
const WrapContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 3rem;
    @media (max-width: 576px) {
        gap: 20px;
    }
`;
const Header = styled.div`
    font-size: 56px;
    font-weight: 800;
    @media (max-width: 576px) {
        font-size: 45px;
    }
`;
const WrapperSubmit = styled.form`
    padding: 1rem;
    width: 100%;
    max-width: 650px;
    /* font-family: sans-serif; */
    font-weight: 400;
    input,
    textarea {
        width: 100%;
        background-color: transparent;
        border: none;
        color: #fff;
        ::placeholder {
            font-family: inherit;
            color: #ffffff8a;
        }
        :focus-visible {
            outline: none;
        }
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        box-shadow: 0 0 0 1000px #02182f inset !important;
        -webkit-box-shadow: 0 0 0 1000px #02182f inset !important;
        -webkit-text-fill-color: white !important;
    }
`;
const WrapperInput = styled.div`
    width: 100%;
    padding: 12px 1rem;
    margin: 10px auto;
    border: 1px solid;
    border-radius: 12px;
    :hover {
        box-shadow: 2px 2px 5px #ffffff8a;
    }
`;
const WrapperMessage = styled.div`
    max-width: 650px;
    padding: 1rem;
    margin: 10px auto;
    border: 1px solid;
    border-radius: 12px;
    :hover {
        box-shadow: 2px 2px 5px #ffffff8a;
    }

    textarea {
        max-width: 100%;
        word-wrap: break-word;
        word-break: break-all;
        height: 80px;
        font-family: sans-serif;
    }
`;
const WrapperButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 0;
`;
const SubmitButton = styled.div`
    color: #fff;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 160px;
    border-radius: 12px;
    font: normal 18px/40px "helvetica neue", sans-serif;
    text-align: center;
    text-decoration: none;
    border: 2px solid #fff;
    cursor: pointer;

    span {
        position: absolute;

        display: block;
        width: 0;
        height: 0;
        border-radius: 50%;
        cursor: pointer;
        background-image: linear-gradient(
            38deg,
            #00a4f1 -10%,
            #00a2ee 3%,
            #00c4ff 32%,
            #004af1 53%,
            #0b18fc 102%,
            #0d00ff 111%
        );
        -webkit-transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: -1;
    }
    input {
        cursor: pointer;
    }
    :hover span {
        width: 400px;
        height: 400px;
    }
`;

const background_move = keyframes`
    from {
            background-position: 100%;
    }
    to {
        background-position: -100%;
    }
`;

const ThankyouMessage = styled.div`
    width: 100%;
    max-width: 820px;
    padding: 25px 60px;
    margin-top: 4rem;
    border-radius: 22px;
    background-image: linear-gradient(
        to right,
        #020a1a 0%,
        #012341 50%,
        #020a1a 100%
    );
    display: flex;
    align-items: center;
    justify-content: flex-start;

    position: relative;

    ::after {
        content: "";
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        background-image: linear-gradient(
            to right,
            #0168ff 0%,
            rgba(1, 104, 255, 0.3) 25%,
            #0ff 50%,
            rgba(1, 104, 255, 0.3) 75%,
            #0168ff 100%
        );
        background-size: 200%;
        animation: ${background_move} 15s infinite linear;
        border-radius: 22px;
        z-index: -1;

        position: absolute;
        top: -2px;
        left: -2px;
        bottom: -2px;
        right: -2px;
    }
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 22px;
        width: 100%;
        text-align: center;
        margin: auto;
    }
    @media (max-width: 576px) {
        span {
            font-size: 14px;
        }
    }
`;

export default ContactUs;
