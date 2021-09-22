import React from "react";
import dynamic from "next/dynamic";

const MobileWallet = dynamic(import("../client/components/MobileWallet"), {
  ssr: false,
});

const MobileWalletPage = () => {
  return <MobileWallet />;
};

export default MobileWalletPage;
