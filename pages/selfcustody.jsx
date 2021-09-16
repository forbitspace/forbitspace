import React from "react";
import dynamic from "next/dynamic";

const SelfCustody = dynamic(import("../client/components/SelfCustody"), {
  ssr: false,
});

const SelfCustodyPage = () => {
  return <SelfCustody />;
};

export default SelfCustodyPage;
