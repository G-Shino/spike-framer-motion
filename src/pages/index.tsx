import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { Color } from "../constants/Color";

const Home: React.FC = () => {
  return (
    <WrapperDiv>
      <TitleH1>Framer Motion</TitleH1>
      <ListUl>
        <li>
          <Link href="/sample-keyframes">
            <ListA>sample keyframes</ListA>
          </Link>
        </li>
        <li>
          <Link href="/sample-animation">
            <ListA>sample animation</ListA>
          </Link>
        </li>
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

const ListA = styled.a`
  display: inline-block;
  margin-bottom: 8px;
  line-height: 1.5;
  background: linear-gradient(transparent 85%, ${Color.ACCENT_COLOR_1} 85%);
  transition: color ease-out 0.3s;
  &:hover {
    color: ${Color.FONT_ACCENT_COLOR1};
  }
`;
