// @flow
import React from "react";
import dynamic from "next/dynamic";
import styled from 'styled-components'
const Aboutcompo = dynamic(import("../client/components/NotFoundPage"), { ssr: false });


const NotFoundPage = () => {
    return (
        <Aboutcompo />
    )
}


export default NotFoundPage