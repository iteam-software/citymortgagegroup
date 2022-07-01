import React from "react";
import { css } from "@emotion/core";
import { Body, Spacer } from "../css/shared";
const ValueAdds = ({ valueAdds, separator }) => {
  let valueAddItems = valueAdds.map(({ img, title, content }, i) => {
    return (
      <div
        key={i}
        className="mt-20 mx-8 md:mx-24"
        css={css`
          flex-basis: 33%;
        `}
      >
        <img src={img} alt="Value Add" className="mx-auto" />
        <h1
          className="my-5"
          css={css`
            font-size: 27px;
            line-height: 140%;
            /* or 38px */
            text-align: center;
          `}
        >
          {title}
        </h1>
        {content && <Body>{content}</Body>}
      </div>
    );
  });
  return (
    <>
      <div
        className="flex lg:mx-40 mb-20 px-8 md:px-24"
        css={css`
          @media (max-width: 1024px) {
            flex-direction: column;
          }
        `}
      >
        {valueAddItems}
      </div>
      {separator && (
        <>
        <div
          className="w-1/4 mx-auto"
          css={css`
            border: 1px solid rgba(0, 0, 0, 0.43);
          `}
        ></div>
        <Spacer height={80}/>
        </>
      )}
    </>
  );
};

export default ValueAdds;
