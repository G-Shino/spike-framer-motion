import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Color } from "../constants/Color";

const pages = [
  "sample-animation",
  "sample-keyframes",
  "sample-gesture",
  "sample-variants",
  "sample-drag",
  "sample-motion-values",
];

const Home: React.FC = () => {
  return (
    <WrapperDiv>
      <TitleH1>Framer Motion</TitleH1>
      <ListUl>
        {pages.map((page, index) => (
          <li key={index}>
            <Link href={page}>
              <ListA
                animate={{
                  backgroundSize: ["0%", "0%", "100%"],
                  opacity: [0, 1, 1],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              >
                {page.replace("-", " ")}
              </ListA>
            </Link>
          </li>
        ))}
      </ListUl>
    </WrapperDiv>
  );
};

export default Home;

const WrapperDiv = styled.div`
  width: 80%;
  margin: 32px auto;
`;

const TitleH1 = styled.h1`
  display: inline-block;
  padding-left: 1rem;
  border-left: 1rem solid ${Color.MAIN_COLOR};
  vertical-align: middle;
`;

const ListUl = styled.ul`
  margin-top: 16px;
`;

const ListA = styled(motion.a)`
  display: inline-block;
  margin-bottom: 8px;
  line-height: 1.5;
  background-image: linear-gradient(
    transparent 85%,
    ${Color.ACCENT_COLOR_1} 85%
  );
  background-repeat: no-repeat;
  transition: color ease-out 0.3s;
  &:hover {
    color: ${Color.FONT_ACCENT_COLOR1};
  }
`;
