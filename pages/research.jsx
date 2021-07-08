// @flow
import React from "react";
import dynamic from "next/dynamic";
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
// const Aboutcompo = dynamic(import("../client/components/Research"), { ssr: false });

const Researchcompo = dynamic(import("../client/components/ComingSoon"), { ssr: false });

const Research = () => {
  return (
    <Researchcompo />
  )
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
  padding: 45px 0;
`

const BoxTable = styled.div`
  position: relative;
  
`




export default Research