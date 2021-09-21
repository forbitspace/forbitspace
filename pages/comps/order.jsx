import React from "react";
import dynamic from "next/dynamic";

const Order = dynamic(import("../../client/components/Order"), { ssr: false });

const OrderPage = () => {
  return <Order />;
};

export default OrderPage;
