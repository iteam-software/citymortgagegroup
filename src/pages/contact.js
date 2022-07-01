import React from "react";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "@emotion/core";
import { Title, SubTitle, GradientSection, Body, Lead } from "../css/shared";
import Splash from "../components/Splash";
// assets

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_contact.png" } }) {
      nodes {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
const contact = ({ data }) => {
  return (
    <GradientSection>
      <Splash
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        title="Get In Touch with Us."
        cta="Call Now"
        link="tel:1-361-576-9890"
      />
      <div className="py-8 lg:pt-24 lg:pb-64">
        <div className="mx-8 lg:mx-64" id="contact">
          <Title>Contact Us</Title>
          <SubTitle>We're here to lend a hand.</SubTitle>
        </div>
        <div
          className="flex mx-8 my-8 md:mx-16 lg:mx-64"
          css={css`
            @media (max-width: 1440px) {
              flex-direction: column;
            }
          `}
        >
          <div
            css={css`
              flex-basis: 40%;
              @media (max-width: 1068px) {
                order: 1;
              }
            `}
          >
            <SubTitle className="mt-10">Home Office:&nbsp;</SubTitle>
            <Body
              className="my-2"
              css={css`
                font-weight: 700;
              `}
            >
              Victoria, TX
            </Body>
            <Body className="my-2">3606 B John Stockbauer Dr.</Body>
            <Body className="my-2">Victoria, TX 77904</Body>
            <SubTitle className="mt-10">Headquarters:&nbsp;</SubTitle>
            <Body
              className="my-2"
              css={css`
                font-weight: 700;
              `}
            >
              Albuquerque, NM
            </Body>
            <Body className="my-2">Lousiana Blvd. NE #8000</Body>
            <Body className="mt-2">Albuquerque, NM 87109</Body>
          </div>
          <div className="flex flex-col mb-10 items-center lg:items-start">
            <a href="tel:1-361-576-9890" className="my-5">
              <Lead>
                {" "}
                <FontAwesomeIcon
                  icon="phone"
                  className="mx-auto block md:inline-block my-3 md:my-0"
                />
                &nbsp;&nbsp;<span className="hidden md:inline">Phone:</span>{" "}
                (361) 576-9890
              </Lead>
            </a>
            <a href="mailto:contact@citymortgage.net" className="my-5">
              <Lead>
                <FontAwesomeIcon
                  icon="envelope"
                  className="mx-auto block md:inline-block my-3 md:my-0"
                />
                &nbsp;&nbsp;<span className="hidden md:inline">Email:</span>{" "}
                info@citymortgagegroup.net
              </Lead>
            </a>
            <a href="tel:1-361-576-9894" className="my-5">
              <Lead>
                <FontAwesomeIcon
                  icon="fax"
                  className="mx-auto block md:inline-block my-3 md:my-0"
                />
                &nbsp;&nbsp;<span className="hidden md:inline">Fax:</span> (361)
                576-9894
              </Lead>
            </a>
          </div>
        </div>
      </div>
    </GradientSection>
  );
};

export default contact;
