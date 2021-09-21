// @flow
import React from "react";
import dynamic from "next/dynamic";
const Aboutcompo = dynamic(import("../client/components/NotFoundPage"), {
  ssr: false,
});

const NotFoundPage = () => {
  return <Aboutcompo />;
};

export default NotFoundPage;
