// @flow
import React from "react";
import dynamic from "next/dynamic";

const Researchcompo = dynamic(import("../../client/components/ComingSoon"), {
  ssr: false,
});

const Research = () => {
  return <Researchcompo />;
};

export default Research;
