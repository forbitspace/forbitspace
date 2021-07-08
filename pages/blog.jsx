// @flow
import React from "react";
import dynamic from "next/dynamic";
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
// const BlogComp = dynamic(import("../client/components/Blog"), { ssr: false });

const BlogComp = dynamic(import("../client/components/ComingSoon"), { ssr: false });

const Blog = () => {
  return (
    <BlogComp />
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




export default Blog