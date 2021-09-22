// @flow
import React from "react";
import dynamic from "next/dynamic";

const Poolscompo = dynamic(import("../../client/components/ComingSoon"), {
  ssr: false,
});

const Pools = () => {
  return <Poolscompo />;
};

export default Pools;
