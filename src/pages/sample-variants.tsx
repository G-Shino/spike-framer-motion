import React from "react";
import styled from "@emotion/styled";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "../components/sample-variants/Navigation";

const Page: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  return (
    <WrapperDiv>
      <MainDiv
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <StyledButton
          onClick={() => {
            toggleOpen();
          }}
        >
          {isOpen ? "閉じる" : "開く"}
        </StyledButton>
        <Navigation />
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
  background: linear-gradient(#0000ff 0%, #00ffff);
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  margin-bottom: 16px;
  &:focus {
    outline: none;
  }
`;

const MainDiv = styled(motion.div)`
  width: 50%;
  padding: 48px;
  background-color: white;
  border-radius: 16px;
`;
