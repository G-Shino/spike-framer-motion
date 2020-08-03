import React from "react";
import dynamic from "next/dynamic";

const DragSquare = dynamic(import("../components/sample-drag/DragSquare"), {
  ssr: false,
});

const Page: React.FC = () => {
  return <DragSquare />;
};

export default Page;
