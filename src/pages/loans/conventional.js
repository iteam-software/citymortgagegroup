import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { SubTitle, Spacer } from "../../css/shared";
import Splash from "../../components/Splash";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_conventional.png" } }) {
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
const conventional = ({ data }) => {
  return (
    <div>
      <Splash
        fluid={data?.allFile?.nodes[0]?.childImageSharp?.fluid}
        title="Conventional Loans"
        cta="Contact Us"
        link="/contact"
      />
      <div className="mx-8 lg:mx-40">
        <Spacer height={80} />
        <div className="mx-8 md:mx-48 lg:mx-64">
          <h1
            className="my-5"
            css={css`
            font-size: 40px;
            line-height: 78px;
            font-weight: 700;
            @media (min-width: 768px) {
              font-size: 64px;
              }
            `}
          >
            Conventional Loans
          </h1>

          <p
            className="font-content"
            css={css`
              font-size: 20px;
              line-height: 175%;
            `}
          >
            <br />
            <br />
            <SubTitle>What is a Conventional Loan?</SubTitle>
            <br />
            <br />
            A conventional loan is a mortgage loan that's not backed by a
            government agency. Conventional loans are broken down into
            "conforming" and "non-conforming" loans. Conforming conventional
            loans follow lending rules set by the Federal National Mortgage
            Association (Fannie Mae) and the Federal Home Loan Mortgage
            Corporation (Freddie Mac). However, some lenders may offer some
            flexibility with non-conforming conventional loans.
            <br />
            <br />
            <SubTitle>How Does a Conventional Loan Work?</SubTitle>
            <br />
            <br />
            Conventional loans are originated and serviced by private mortgage
            lenders like banks, credit unions and other financial institutions,
            many of which also offer government-insured mortgage loans. In
            general, conventional loans don't have some of the same perks as
            government-insured loans, such as low credit score requirements and
            no down payment or mortgage insurance.
            <br />
            <br />
            It's possible to get approved for a conforming conventional loan
            with a credit score as low as 620, although some lenders may look
            for a score of 660 or better. Even if you can qualify for a
            conventional loan, though, your interest rate will largely depend on
            your credit score and overall credit history. The better your credit
            is, the less you'll pay in interest over the life of the loan.
            <br />
            <br />
            You can find conventional mortgage loans with a down payment
            requirement as low as 3%, and some lenders have special programs
            that offer up to 100% financing. However, if you don't put down 20%
            or more, the lender typically requires you to pay private mortgage
            insurance, which can cost between 0.3% and 1.5% of your loan amount
            annually. Conventional loans typically run for 30 years, but it's
            possible to qualify for a 15- or 20-year conventional mortgage loan.
            <br />
            <br />
          </p>
        </div>
        <Spacer height={80} />
      </div>
    </div>
  );
};

export default conventional;
