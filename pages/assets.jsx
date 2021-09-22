import React from "react";
import dynamic from "next/dynamic";

const Asset = dynamic(import("../client/components/AssetsManagement"), {
  ssr: false,
});

const AssetPage = () => {
  return <Asset />;
};

export default AssetPage;
