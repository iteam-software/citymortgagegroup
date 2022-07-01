import React, { useContext } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link as GatsbyLink } from "gatsby";
import { WindowSizeContext } from "../layouts/index";
import { isLocalTo } from "../lib/common";
import { Title } from "../css/shared";
import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({
  className,
  title,
  mobileTitle,
  cta,
  fluid,
  link = "/",
}) => {
  const { width } = useContext(WindowSizeContext);
  const styleProps = {
    className:
      "bg-primary float-left mt-5 whitespace-no-wrap ml-22 md:ml-16 md:ml-56 ml-4",
    css: css`
      padding: 10px 40px;
      font-weight: 700;
    `,
    rel: "noreferrer noopenner",
  };
  
  const Button = isLocalTo(link) ? (
    <GatsbyLink {...styleProps} to={link}>
      {cta}
    </GatsbyLink>
  ) : (
    <a {...styleProps} href={link} target={!link.includes("tel") && "_blank"}>
      {cta}
    </a>
  );

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={fluid}
      backgroundColor={`#FCF8F2`}
    >
      <div className="w-full mx-8 lg:w-5/12 lg:ml-16">
        <Title className="text-white pt-48 md:pt-64 ml-22 md:ml-16 md:ml-56 ml-4">
          {mobileTitle && width < 768 ? mobileTitle : title}
        </Title>
        {cta && Button}
      </div>
    </BackgroundImage>
  );
};

const Splash = styled(BackgroundSection)`
  width: 100%;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  height: 1328px;
  background-position: 20%;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export default Splash;
