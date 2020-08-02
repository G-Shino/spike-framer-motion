import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  return (
    <WrapperDiv>
      <MainDiv
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      />
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
  width: 150px;
  height: 150px;
  background-color: white;
`;
