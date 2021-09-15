import React from "react";
import dynamic from "next/dynamic";

const Limit = dynamic(import("../client/components/LimitOrder"), {
  ssr: false,
});

const LimitPage = () => {
  return <Limit />;
};

export default LimitPage;
