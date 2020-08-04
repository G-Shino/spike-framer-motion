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
  "sample-viewport-scroll",
];

const Home: React.FC = () => {
  return (
    <WrapperDiv>
      <TitleH1>Framer Motion</TitleH1>
      <MessageP
        animate={{
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      >
        sample-dragで2.0.0以前のversionだとhomeに戻る時errorが出る <br />
        一方で、2.0.0以上だとsample-motion-valuesが機能しない
        <br />
        githubにissueが上がっていたので、そのうち修正されそう →
        <a
          href="https://github.com/framer/motion/pull/633"
          target="_blank"
          rel="noopener noreferrer"
        >
          これ
        </a>
        や
        <a
          href="https://github.com/framer/motion/issues/656"
          target="_blank"
          rel="noopener noreferrer"
        >
          これ
        </a>
        <br />
        本サイトではver1.10.0を利用している
      </MessageP>
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
                {page.split("-").join(" ")}
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
  margin-bottom: 16px;
  border-left: 1rem solid ${Color.MAIN_COLOR};
  vertical-align: middle;
`;

const ListUl = styled.ul`
  margin-top: 16px;
`;

const MessageP = styled(motion.p)``;

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
