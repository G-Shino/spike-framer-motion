import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import { Color } from "../constants/Color";

const Home: React.FC = () => {
  return (
    <div css={WrapperDiv}>
      <h1 css={TitleH1}>Framer Motion</h1>
      <ul css={ListUl}>
        <li>
          <Link href="/sample-keyframes">
            <a css={ListA}>sample keyframes</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

const WrapperDiv = css`
  width: 80%;
  margin: 32px auto;
`;

const TitleH1 = css`
  display: inline-block;
  padding-left: 1rem;
  border-left: 1rem solid ${Color.MAIN_COLOR};
  vertical-align: middle;
`;

const ListUl = css`
  margin-top: 16px;
`;

const ListA = css`
  display: inline-block;
  background: linear-gradient(transparent 80%, ${Color.ACCENT_COLOR_1} 80%);
  transition: color ease-out 0.3s;
  &:hover {
    color: ${Color.FONT_ACCENT_COLOR1};
  }
`;
