import React from "react";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Page: React.FC<any> = () => {
  const x = useMotionValue(0);
  const xInput = [-320, 0, 320];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, #d30918 100%)",
    "linear-gradient(180deg, #7700ff 0%, #4400ff 100%)",
    "linear-gradient(180deg, #e6ff00 0%, #03d100 100%)",
  ]);
  const color = useTransform(x, xInput, ["#d30918", "#4400ff", "#03d100"]);
  React.useEffect(() => {
    console.log("x", x);
    console.log("bg", background);
  }, [x]);

  return (
    <WrapperDiv style={{ background }}>
      <MainDiv
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -320, right: 320 }}
      >
        <CircleDiv style={{ borderColor: color, color }}>← →</CircleDiv>
      </MainDiv>
    </WrapperDiv>
  );
};

export default Page;

const WrapperDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const MainDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  background-color: white;
  border-radius: 32px;
`;

const CircleDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: solid 8px;
  border-radius: 50%;
`;
