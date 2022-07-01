import React from "react";
import { css } from "@emotion/core";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Body } from "../css/shared";
const CompanyCallouts = ({ title, testimonials }) => {
  const callouts = testimonials.map(({ name, pic, content, date }, i) => (
    <div key={i} className="mt-10 mx-8 md:mx-32 lg:mx-20">
      <FontAwesomeIcon icon="quote-left" className="mx-auto block" />
      <Body>{content}</Body>
      <div className="flex my-10">
        <img src={pic} alt="" />
        <div
          className="mx-5 font-content"
          css={css`
            color: rgba(0, 0, 0, 0.5);
          `}
        >
          <div>{name}</div>
          <div className="font-semibold">
            {moment(moment(date, "MM-DD-YYYY")).startOf("month").fromNow()}
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="pb-20">
      <h1
        className="text-center mx-8 mt-10 md:mx-16"
        css={css`
          font-size: 27px;
          line-height: 140%;
        `}
      >
        {title}
      </h1>
      <div
        className="flex px-8 md:px-32 lg:mx-40"
        css={css`
          @media (max-width: 1024px) {
            flex-direction: column;
          }
        `}
      >
        {callouts}
      </div>
    </div>
  );
};

export default CompanyCallouts;
