import React from "react";
import dynamic from "next/dynamic";

const Foundation = dynamic(import("../client/components/Foundation"), {
  ssr: false,
});

const FoundationPage = () => {
  return <Foundation />;
};

export default FoundationPage;
