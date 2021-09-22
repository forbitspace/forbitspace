// @flow
import React from "react";
import dynamic from "next/dynamic";

const Securitycompo = dynamic(import("../../client/components/ComingSoon"), {
  ssr: false,
});

const Security = () => {
  return <Securitycompo />;
};

export default Security;
