import React from "react";
import dynamic from "next/dynamic";

const Branding = dynamic(import("../client/components/Branding"), {
    ssr: false,
});

const BrandingPage = () => {
    return <Branding />;
};

export default BrandingPage;
