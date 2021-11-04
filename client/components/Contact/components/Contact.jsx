import React, { useRef, useState } from "react";
import styled from "styled-components";
import { send } from "emailjs-com";

const ContactUs = () => {
    const [x, setX] = useState();
    const [y, setY] = useState();
    //config email sender
    const [toSend, setToSend] = useState({
        from_name: "",
        reply_to: "",
        position: "",
        message: "",
    });
    //ref for send button object
    const buttonRef = useRef();

    const getMouseOver = (e) => {
        var parentOffset = buttonRef.current.getBoundingClientRect();
        setX(e.pageX - parentOffset.left);
        setY(e.pageY - parentOffset.top);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        send("SERVICE ID", "TEMPLATE ID", toSend, "User Id")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <BoxSection>
            <WrapContainer>
                <Header>Contact Us.</Header>
                <WrapperSubmit
                    // action="mailto:ryanspace46@gmail.com"
                    method="post"
                    enctype="text/plain"
                    onSubmit={onSubmit}
                >
                    <WrapperInput>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="from_name"
                            value={toSend.from_name}
                            onChange={handleChange}
                        />
                    </WrapperInput>
                    <WrapperInput>
                        <input
                            type="text"
                            placeholder="Your Email"
                            name="reply_to"
                            value={toSend.reply_to}
                            onChange={handleChange}
                        />
                    </WrapperInput>
                    <WrapperInput>
                        <input
                            type="text"
                            placeholder="Who Are You"
                            name="position"
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
                        <button type="submit">Send</button>
                    </WrapperButton>
                </WrapperSubmit>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 8vh 0 0;
    margin: 0 0 2rem;
    @media (max-width: 770px) {
        padding-top: 60px;
        margin: 0 0 1rem;
    }
`;
const WrapContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 576px) {
    }
`;
const Header = styled.div`
    font-size: 56px;
    font-weight: 800;
`;
const WrapperSubmit = styled.form`
    padding: 1rem;
    width: 100%;
    max-width: 650px;
    font-family: sans-serif;
    font-weight: 400;
    input,
    textarea {
        width: 100%;
        background-color: transparent;
        border: none;
        color: #fff;
        ::placeholder {
            color: #ffffff8a;
        }
        :focus-visible {
            outline: none;
        }
    }
`;
const WrapperInput = styled.div`
    width: 100%;
    padding: 1rem;
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
    font: normal 18px/40px "proxima-nova", sans-serif;
    text-align: center;
    text-decoration: none;
    border: 2px solid #fff;
    cursor: pointer;

    :hover {
        /* color: #000000; */
    }

    span {
        position: absolute;
        /* left: ${({ x }) => x}px; */
        /* top: ${({ y }) => y}px; */

        display: block;
        width: 0;
        height: 0;
        border-radius: 50%;
        background-image: linear-gradient(
            38deg,
            #00a4f1 35%,
            #0060f1 56%,
            #003cf1 70%,
            #0d00ff 85%
        );
        -webkit-transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: -1;
    }
    :hover span {
        width: 400px;
        height: 400px;
    }
`;

export default ContactUs;
