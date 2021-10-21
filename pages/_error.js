// @flow
import React from "react";
import dynamic from "next/dynamic";
const Page404 = dynamic(import("../client/components/NotFoundPage"), {
  ssr: false,
});

const Custom404 = () => {
  return <Page404 />;
};

export default Custom404;
