// @flow
import React from "react";
import dynamic from "next/dynamic";
const HomeComp = dynamic(import("../client/components/Home"), { ssr: false });

export default function Home() {
  return (
    <div>
      <HomeComp />
    </div>
  );
}
