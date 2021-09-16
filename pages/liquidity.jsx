import React from "react";
import dynamic from "next/dynamic";

const Liquidity = dynamic(import("../client/components/Liquidity"), {
  ssr: false,
});

const LiquidityPage = () => {
  return <Liquidity />;
};

export default LiquidityPage;
