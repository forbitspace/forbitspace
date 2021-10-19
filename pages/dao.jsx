import React from "react";
import dynamic from "next/dynamic";

const DAO = dynamic(import("../client/components/SpaceDao/index.jsx"), {
  ssr: false,
});

const DAOPage = () => {
  return <DAO />;
};

export default DAOPage;
