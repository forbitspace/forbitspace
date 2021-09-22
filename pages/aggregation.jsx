import React from "react";
import dynamic from "next/dynamic";

const Aggregation = dynamic(import("../client/components/Aggregation"), {
  ssr: false,
});

const AggregationPage = () => {
  return <Aggregation />;
};

export default AggregationPage;
