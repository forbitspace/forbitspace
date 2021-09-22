// @flow
import React from "react";
import dynamic from "next/dynamic";

const Tokencompo = dynamic(import("../client/components/Token"), {
  ssr: false,
});

const Token = () => {
  return <Tokencompo />;
};

export default Token;
