import React from "react";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Title, Lead } from "../css/shared";

import PhoneConsultation from "../../static/assets/phone_consultation.png";

const CallTodayCTA = () => {
  return (
    <div className="flex justify-center lg:justify-between mx-8 lg:mx-40 mt-20">
      <div
        className="flex flex-col mx-8 lg:ml-32 my-20"
        css={css`
          flex-basis: 50%;
        `}
      >
        <Title>Call Today</Title>
        <div className="flex flex-col mb-10 items-center lg:items-start">
          <a href="tel:1-361-576-9890" className="my-5">
            <Lead>
              {" "}
              <FontAwesomeIcon
                icon="phone"
                className="mx-auto block md:inline-block my-3 md:my-0"
              />
              &nbsp;&nbsp;<span className="hidden md:inline">Phone:</span> (361)
              576-9890
            </Lead>
          </a>
          <a href="mailto:contact@citymortgage.net">
            <Lead>
              <FontAwesomeIcon
                icon="envelope"
                className="mx-auto block md:inline-block my-3 md:my-0 py-0"
              />
              &nbsp;&nbsp;<span className="hidden md:inline">Email:</span>{" "}
              contact@citymortgage.net
            </Lead>
          </a>
        </div>
      </div>
      <div
        className="overflow-hidden"
        css={css`
          height: 710px;
          @media (max-width: 1427px) {
            display: none;
          }
        `}
      >
        <img src={PhoneConsultation} alt="" />
      </div>
    </div>
  );
};

export default CallTodayCTA;
