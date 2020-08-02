import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  return (
    <WrapperDiv>
      <MainDiv animate={{ scale: 2 }} transition={{ duration: 0.5 }} />
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
  background: linear-gradient(#ff008c 0%, #df12ee 100%);
`;

const MainDiv = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 20%;
`;
