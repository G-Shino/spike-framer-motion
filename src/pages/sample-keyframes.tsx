import React from "react";
import { css } from "@emotion/core";
// import { motion } from "framer-motion";

const Page: React.FC = () => {
  return <div css={WrapperDiv}></div>;
};

export default Page;

const WrapperDiv = css`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#d309e1 0%, #9c1aff 100%);
`;
