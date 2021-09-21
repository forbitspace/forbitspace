// @flow
import React from "react";
import dynamic from "next/dynamic";

const Tokens = dynamic(import("../../client/components/ComingSoon"), {
  ssr: false,
});

const Token = () => {
  return <Tokens />;
};

export default Token;
