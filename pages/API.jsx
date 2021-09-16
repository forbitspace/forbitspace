import React from "react";
import dynamic from "next/dynamic";

const API = dynamic(import("../client/components/API"), { ssr: false });

const APIPage = () => {
  return <API />;
};

export default APIPage;
