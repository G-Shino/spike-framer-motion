import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  return (
    <WrapperDiv>
      <MainDiv whileHover={{ scale: 1.2 }} whileTap={{ rotate: 90 }}>
        Tap Me !
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
  height: 100vh;
  background: linear-gradient(#d309e1 0%, #9c1aff 100%);
`;

const MainDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  color: #9c1aff;
  background-color: white;
  border-radius: 20%;
`;
