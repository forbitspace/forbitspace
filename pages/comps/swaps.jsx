// @flow
import React from "react";
import dynamic from "next/dynamic";

const Swapscompo = dynamic(import("../../client/components/ComingSoon"), {
  ssr: false,
});

const Swaps = () => {
  return <Swapscompo />;
};

export default Swaps;
