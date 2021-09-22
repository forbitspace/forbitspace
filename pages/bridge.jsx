import React from "react";
import dynamic from "next/dynamic";

const Bridge = dynamic(import("../client/components/Bridge"), {
  ssr: false,
});

const BridgePage = () => {
  return <Bridge />;
};

export default BridgePage;
