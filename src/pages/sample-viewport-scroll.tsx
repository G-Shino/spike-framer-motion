import React from "react";
import styled from "@emotion/styled";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Page: React.FC = () => {
  const [isComplete, setIsComplete] = React.useState(false);
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  React.useEffect(
    () => scrollYProgress.onChange((v) => setIsComplete(v >= 1)),
    [scrollYProgress]
  );
  console.log(scrollYProgress);
  return (
    <WrapperDiv>
      <MainDiv style={{ rotateZ: rotate, x: "-50%", y: "-50%" }}>
        {isComplete ? "Finish" : "Scroll !"}
      </MainDiv>
    </WrapperDiv>
  );
};

export default Page;

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300vh;
  background: linear-gradient(#0000ff 0%, #00ffff 100%);
`;

const MainDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  color: white;
  &:after,
  &:before {
    content: "";
    position: absolute;
    border-radius: 100%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center center;
  }
  &:after {
    box-shadow: inset 0 11.25px 0 rgba(250, 250, 0, 0.8),
      inset 11.25px 0 0 rgba(250, 200, 0, 0.8),
      inset 0 -11.25px 0 rgba(250, 150, 0, 0.8),
      inset -11.25px 0 0 rgba(250, 100, 0, 0.8);
    animation: rotar 1.5s linear infinite;
  }
  &:before {
    box-shadow: inset 0 11.25px 0 rgba(0, 250, 250, 0.8),
      inset 11.25px 0 0 rgba(0, 200, 200, 0.8),
      inset 0 -11.25px 0 rgba(0, 150, 200, 0.8),
      inset -11.25px 0 0 rgba(0, 200, 250, 0.8);
    animation: rotarIz 1.5s linear infinite;
  }
`;
