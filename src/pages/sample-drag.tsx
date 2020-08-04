import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  const areaRef = React.useRef(null);

  return (
    <WrapperDiv>
      <AreaDiv ref={areaRef} />
      <MainDiv drag dragConstraints={areaRef}>
        Drag Me!
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
  background: linear-gradient(#9c1aff 0%, #8800ff 100%);
`;

const AreaDiv = styled(motion.div)`
  position: absolute;
  top: calc(50% - 320px / 2);
  left: calc(50% - 320px / 2);
  width: 320px;
  height: 320px;
  opacity: 0.2;
  background-color: white;
  border-radius: 32px;
`;

const MainDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(50% - 160px / 2);
  left: calc(50% - 160px / 2);
  width: 160px;
  height: 160px;
  color: #8800ff;
  background-color: white;
  border-radius: 32px;
`;
