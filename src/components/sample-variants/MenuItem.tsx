import React from "react";
import styled from "@emotion/styled";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 10000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#ff008c", "#d309e1", "#9c1aff", "#7700ff", "#4400ff"];

export const MenuItem: React.FC<{ i: number }> = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <WrapperLi
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconDiv style={style} />
      <TextDiv style={style} />
    </WrapperLi>
  );
};

const WrapperLi = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const IconDiv = styled.div`
  width: 40px;
  height: 40px;
  flex: 40px 0;
  margin-right: 20px;
  border-radius: 50%;
`;

const TextDiv = styled.div`
  width: 200px;
  height: 20px;
  flex: 1;
  border-radius: 5px;
`;
