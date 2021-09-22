import React from "react";
import dynamic from "next/dynamic";

const SmartContracts = dynamic(import("../client/components/SmartContracts"), {
  ssr: false,
});

const SmartContractsPage = () => {
  return <SmartContracts />;
};

export default SmartContractsPage;
