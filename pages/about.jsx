// @flow
import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
// import { Container, Row, Col } from 'reactstrap';
// const Aboutcompo = dynamic(import("../client/components/About"), { ssr: false });
const Aboutcompo = dynamic(import("../client/components/About"), {
  ssr: false,
});

const About = () => {
  return <Aboutcompo />;
};

export default About;
