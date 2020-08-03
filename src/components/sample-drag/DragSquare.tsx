import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const DragSquare: React.FC = () => {
  const areaRef = React.useRef(null);

  return (
    <WrapperDiv>
      <AreaDiv ref={areaRef} />
      <MainDiv drag dragConstraints={areaRef} />
    </WrapperDiv>
  );
};

export default DragSquare;

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
  position: absolute;
  top: calc(50% - 160px / 2);
  left: calc(50% - 160px / 2);
  width: 160px;
  height: 160px;
  background-color: white;
  border-radius: 32px;
`;
