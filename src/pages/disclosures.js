import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Splash from "../components/Splash";
import { Spacer } from "../css/shared";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_disclosures.png" } }) {
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
const disclosures = ({ data }) => {
  return (
    <>
      <Splash
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        title="Disclosures"
      />
      <Spacer height={80} />
      <div className="mx-8 md:mx-48 lg:mx-64">
        <h1
          className="my-5"
          css={css`
            font-size: 64px;
            line-height: 78px;
            font-weight: 700;
            @media (max-width: 768px) {
              font-size: 48px;
            }
          `}
        >
          Disclosures
        </h1>
        <h2
          className="my-5"
          css={css`
            font-size: 27px;
          `}
        >
          CIP Disclosure
        </h2>
        <p
          className="font-content"
          css={css`
            font-size: 20px;
            line-height: 175%;
          `}
        >
          Important Information about Procedures for Opening a New Account To
          help the government fight the funding of terrorism and money
          laundering activities, Federal law requires all financial institutions
          to obtain, verify, and record information that identifies each person
          who opens an account (e.g., establishes a formal relationship by means
          of a loan application) What this means for you: When you open an
          account, we will ask for your name, address, date of birth, and other
          information that will allow us to identify you. We may also ask to see
          your driver's license or other identifying documents.
        </p>
        <h2
          className="my-5"
          css={css`
            font-size: 27px;
          `}
        >
          Texas Disclosure
        </h2>
        <p
          className="font-content"
          css={css`
            font-size: 20px;
            line-height: 175%;
          `}
        >
          CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A MORTGAGE BANKER OR A
          LICENSED MORTGAGE BANKER RESIDENTIAL MORTGAGE LOAN ORIGINATOR SHOULD COMPLETE
          AND SEND A COMPLAINT FORM TO THE TEXAS DEPARTMENT OF SAVINGS AND MORTGAGE LENDING,
          2601 NORTH LAMAR, SUITE 201, AUSTIN, TEXAS 78705. COMPLAINT FORMS AND INSTRUCTIONS
          MAY BE OBTAINED FROM THE DEPARTMENT'S WEBSITE AT WWW.SML.TEXAS.GOV.A TOLL-FREE
          CONSUMER HOTLINE IS AVAILABLE AT 1-877-276-5550.

          THE DEPARTMENT MAINTAINS A RECOVERY FUND TO MAKE PAYMENTS OF CERTAIN ACTUAL OUT OF POCKET
          DAMAGES SUSTAINED BY BORROWERS CAUSED BY ACTS OF LICENSED MORTGAGE BANKER RESIDENTIAL MORTGAGE LOAN ORIGINATORS.
          A WRITTEN APPLICATION FOR REIMBURSEMENT FROM THE RECOVERY FUND MUST BE FILED WITH AND INVESTIGATED BY THE DEPARTMENT
          PRIOR TO THE PAYMENT OF A CLAIM. FOR MORE INFORMATION ABOUT THE RECOVERY FUND,
          PLEASE CONSULT THE DEPARTMENT'S WEBSITE AT WWW.SML.TEXAS.GOV.
        </p>
      </div>
      <Spacer height={80} />
    </>
  );
};

export default disclosures;
