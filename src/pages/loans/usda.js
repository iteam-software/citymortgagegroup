import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { SubTitle, Spacer } from "../../css/shared";
import Splash from "../../components/Splash";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_usda.png" } }) {
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
const usda = ({ data }) => {
  return (
    <div>
      <Splash
        fluid={data?.allFile?.nodes[0]?.childImageSharp?.fluid}
        title="USDA Loans"
        cta="Contact Us"
        link="/contact"
      />
      <div className="mx-8 lg:mx-40">
        <Spacer height={80} />
        <div className="mx-8 md:mx-48 lg:mx-64">
          <h1
            className="my-5"
            css={css`
            font-size: 48px;
            line-height: 78px;
            font-weight: 700;
            @media (min-width: 768px) {
              font-size: 64px;
              }
            `}
          >
            USDA Loans
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
            <SubTitle>What is a USDA Loan?</SubTitle>
            <br />
            <br />
            USDA loans are special mortgages meant for low- to moderate-income
            home buyers. These loans are guaranteed by the US Department of
            Agriculture. That guarantee acts as a form of insurance protecting
            USDA mortgage lenders, so they’re able to offer below-market
            interest rates and zero-down home loans. USDA runs this program to
            encourage homeownership and economic development in rural areas.
            <br />
            <br />
            <SubTitle>How Does a USDA Loan Work?</SubTitle>
            <br />
            <br />
            Using a USDA loan, buyers can finance 100% of a home’s purchase
            price while getting access to better-than-average mortgage rates.
            This is because USDA mortgage rates are discounted as compared to
            rates with other low-downpayment loans. Beyond that, USDA loans
            aren’t all that “strange.” The repayment schedule doesn’t feature a
            “balloon” or anything non-standard; the closing costs are ordinary;
            and, prepayment penalties never apply. The two areas where USDA
            loans are different is with respect to loan type and downpayment
            amount. With a USDA loan, you don’t have to make a downpayment; and
            you’re required to take a fixed rate loan. ARMs are not available
            via the USDA rural loan program. Rural loans can be used by
            first-time buyers and repeat home buyers alike. Homeowner counseling
            is not required to use the USDA program.
            <br />
            <br />
            <SubTitle>USDA Loans Require Mortgage Insurance (MI)</SubTitle>
            <br />
            <br />
            USDA “guarantees” its loan program — meaning it offers protection to
            mortgage lenders in case USDA borrowers default. But the program is
            partially self-funded. So to keep it running, the USDA uses
            homeowner-paid mortgage insurance premiums. As of October 1, 2016,
            USDA has lowered its mortgage insurance costs for both the upfront
            and monthly fees. As a real-life example: A homebuyer with a
            $100,000 loan size in Blacksburg, Virginia, would be required to
            make a $1,000 upfront mortgage insurance premium payment at closing,
            plus a monthly $29.17 payment for mortgage insurance. USDA upfront
            mortgage insurance is not paid as cash. It’s added to your loan
            balance for you.
            <br />
            <br />
            USDA mortgage insurance rates are lower than those for comparable
            FHA loans or conventional ones. With USDA loans, then, mortgage
            insurance premiums are just a fraction of what you’d typically pay.
            Even better, USDA mortgage rates are low. USDA mortgage rates are
            often the lowest among FHA mortgage rates, VA mortgage rates, and
            conventional loan mortgage rates — especially when buyers are making
            a small or minimum downpayment. For a buyer with average credit
            scores, USDA mortgage rates can be 100 basis points (1.00%) or more
            below the rates of a comparable conventional loan. Lower rates mean
            lower payments, which is why USDA loans can be extremely affordable.
            <br />
            <br />
          </p>
        </div>
        <Spacer height={80} />
      </div>
    </div>
  );
};

export default usda;
