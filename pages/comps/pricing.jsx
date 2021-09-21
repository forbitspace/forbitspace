// @flow
import React from "react";
import dynamic from "next/dynamic";

const Pricingcompo = dynamic(import("../../client/components/ComingSoon"), {
  ssr: false,
});

const Pricing = () => {
  return <Pricingcompo />;
};

export default Pricing;
