import React from "react";
import dynamic from "next/dynamic";

const Derivative = dynamic(import("../client/components/Derivative"), {
  ssr: false,
});

const DerivativePage = () => {
  return <Derivative />;
};

export default DerivativePage;
