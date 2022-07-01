import React from "react";
import { css } from "@emotion/core";
const Title = ({ title, position, fontSize }) => {
  return (
    <div
      className={`text-${position} mx-8 md:mx-20 lg:mx-64 pt-20 pb-10`}
      css={css`
        font-size: ${fontSize ? fontSize : "64px"};
        font-weight: 700;
        @media (max-width: 756px) {
          font-size: 48px;
        }
      `}
    >
      {title}
    </div>
  );
};

export default Title;
