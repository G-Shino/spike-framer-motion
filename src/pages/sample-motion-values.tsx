import React from "react";
import dynamic from "next/dynamic";
const DragItem = dynamic(
  import("../components/sample-motion-values/DragItem"),
  {
    ssr: false,
  }
);

const Page: React.FC = () => {
  return <DragItem />;
};

export default Page;
