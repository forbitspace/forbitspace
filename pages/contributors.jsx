// @flow
import React from "react";
import dynamic from "next/dynamic";

const Contributors = dynamic(import("../client/components/Contributors"), { ssr: false });

const Page = () => {
  return (
    <Contributors />
  )
}

export default Page