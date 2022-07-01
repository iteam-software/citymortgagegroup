import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { Spacer, Title, Body } from "../css/shared";

const BelowTheFold = ({
  title,
  subtitle,
  img,
  content,
  order,
  ctaImage,
  cta,
  to,
  alignItems,
  phone,
}) => {
  return (
    <section
      className={`flex lg:items-${alignItems} flex-col lg:flex-row mx-8 justify-center lg:justify-around md:mx-20 lg:mx-40 pt-20`}
    >
      <div
        className={`${cta ? "lg:mb-56 mb-8 " : ""} lg:block`}
        css={css`
          order: ${order};
          @media (max-width: 1280px) {
            display: ${phone ? "none" : ""};
          }
        `}
      >
        <img src={img} alt="" />
        {(ctaImage && cta) &&
            <Link
              to={to}
              className={`bg-primary text-textBody font-bold inline-block ${order === 0 ? "float-right" : "float-left"} mt-20 px-8 py-3`}
            >
          {cta}
            </Link>
            }
      </div>   
      <div
        className="lg:ml-10"
        css={css`
          @media (min-width: 1025px) {
            width: 527px;
          }
        `}
      >
        <Title>{title}</Title>
        <h2
          css={css`
            font-size: 27px;
            line-height: 140%;
          `}
        >
          {subtitle}
        </h2>
        <Body className="mt-5 mb-20">{content}</Body>
        {(cta && !ctaImage) && (
          <div className="flex justify-center md:justify-end">
            <Link
              to={to}
              className="bg-primary text-textBody font-bold px-8 py-3 mt-5"
            >
              {cta}
            </Link>
          </div>
        )}
        <Spacer height={80} />
      </div>
    </section>
  );
};

export default BelowTheFold;
