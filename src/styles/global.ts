import { css } from "@emotion/core";
import emotionReset from "emotion-reset";
import { Color } from "./../constants/Color";

const globalCSS = css`
  ${emotionReset}
  html {
    font-size: 62.5%;
  }

  body {
    color: ${Color.FONT_COLOR};
    font-size: 1.6rem;
    font-family: "Noto Sans JP", "YuGothic", "Yu Gothic", "游ゴシック", "Meiryo",
      "メイリオ", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
      -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    background-color: ${Color.BASE_COLOR};
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3.2rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 1.6rem;
  }
`;

export default globalCSS;
