import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { SubTitle, Spacer } from "../../css/shared";
import Splash from "../../components/Splash";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_va.png" } }) {
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
const va = ({ data }) => {
  return (
    <div>
      <Splash
        fluid={data?.allFile?.nodes[0]?.childImageSharp?.fluid}
        title="VA Loans"
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
            Veteran’s Affairs (VA) Loans
          </h1>
          <h2
            className="my-5"
            css={css`
              font-size: 27px;
            `}
          >
            For the vast majority of military borrowers, VA loans represent the
            most powerful lending program on the market.
          </h2>
          <p
            className="font-content"
            css={css`
              font-size: 20px;
              line-height: 175%;
            `}
          >
            <br />
            <br />
            <SubTitle>What is a VA Loan?</SubTitle>
            <br />
            <br />
            A VA loan is a $0-down mortgage option issued by private lenders and
            partially backed, or guaranteed, by the Department of Veterans
            Affairs (VA). Eligible borrowers can use a VA loan to purchase a
            property as their primary residence or refinance an existing
            mortgage.
            <br />
            <br />
            <SubTitle>How Does a VA Loan Work?</SubTitle>
            <br />
            <br />
            VA loans work a bit differently than conventional mortgages. The
            Department of Veterans Affairs (VA) does not make or originate
            loans, but backs a portion of each loan against default. This
            backing, or guarantee, is what gives private lenders the confidence
            to extend $0 down financing and advantageous rates and terms.
            <br />
            <br />
            <SubTitle>What does the VA Loan Process Look Like?</SubTitle>
            <br />
            <br />
            VA loans work fairly similar to most other mortgage options, but
            with a few caveats. A typical VA loan process works something like
            this:
            <br />
            <br />
            <strong>1. Get Prequalified</strong>
            <br />
            Our mortgage specialist can help you prequalify to get an estimate
            of how much house you can afford based on your income, credit,
            entitlement and other financial factors. Prequalification is a basic
            first step that paves the way for a much more powerful step – VA
            loan preapproval.
            <br />
            <br />
            <strong>2. Get Preapproved</strong>
            <br />
            Loan preapproval is a major step and puts you in the driver’s seat
            to spring into action when you find a home you love. Lenders will
            verify income and financial information to get a clear sense of your
            purchasing power. The end result is receiving a preapproval letter.
            These letters show real estate agents and home sellers you’re a
            strong and serious buyer who has what it takes to get to closing.
            <br />
            <br />
            <strong>3. Put in an Offer</strong>
            <br />
            When you and your agent find the perfect VA loan approved home, it’s
            time to craft an offer and negotiation a contract with the seller.
            It’s important to find a VA loan savvy agent you trust that also
            knows the ins and outs of VA loans.
            <br />
            <br />
            <strong>4. Go through the VA Appraisal and Underwriting</strong>
            <br />
            Once under contract, your lender will order a VA appraisal of the
            property. The VA appraisal is not a home inspection, but a VA
            requirement to ensure the property meets fair market value and the
            VA's minimum property requirements. Around the same time
            underwriters will evaluate your income, financial and related
            documents along with the appraisal once it’s finalized. If
            everything checks out, you’ll be issued a clear to close and move on
            to your loan closing.
            <br />
            <br />
            <strong>5. Closing</strong>
            <br />
            You’ll sign all kinds of legal documents and paperwork at your loan
            closing and get the keys to your new home.
            <br />
            <br />
          </p>
        </div>
        <Spacer height={80} />
      </div>
    </div>
  );
};

export default va;
