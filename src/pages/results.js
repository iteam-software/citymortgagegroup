import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { Title } from "../css/shared";
export default () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cse.google.com/cse.js?cx=016648292332102846113:3gqiztiiug4";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div>
      <div
        css={css`
          height: 80px;
          width: 100%;
        `}
        className="bg-footer"
      ></div>
      <div
        css={css`
          margin: 0 40px;
        `}
      >
        <Title className="mt-10">Search Results</Title>
        <div class="gcse-searchresults-only"></div>
      </div>
    </div>
  );
};
