import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { SubTitle, Spacer } from "../../css/shared";
import Splash from "../../components/Splash";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_fha.png" } }) {
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
const fha = ({ data }) => {
  return (
    <>
      <Splash
        fluid={data?.allFile?.nodes[0]?.childImageSharp?.fluid}
        title="FHA Loans"
        cta="Contact Us"
        link="/contact"
      />
      <div className="mx-8 lg:mx-40">
        <Spacer height={80} />
        <div className="mx-8 md:mx-48 lg:mx-64">
          <h1
            className="my-5"
            css={css`
              font-size: 38px;
              line-height: 78px;
              font-weight: 700;
              @media (min-width: 768px) {
                font-size: 64px;
              }
            `}
          >
            Federal Housing Administration (FHA) Loans
          </h1>
          <h2
            className="my-5"
            css={css`
              font-size: 27px;
            `}
          >
            You can qualify for an FHA loan with a down payment as low as{" "}
            <strong>3.5%</strong>.
          </h2>
          <p
            className="font-content"
            css={css`
              font-size: 20px;
              line-height: 175%;
            `}
          >
            <br />
            <SubTitle>What is an FHA loan?</SubTitle>
            <br />
            <br />
            An FHA loan is a specific kind of mortgage you can use to purchase a home, refinance an existing home loan, or rehabilitate a home in need of repairs. FHA loans get their name because the Federal Housing Administration provides insurance for lenders that issue these loans. These loans are the U.S. government’s “flagship initiative” intended to make low-cost home financing available to borrowers. With an FHA loan, if you do not pay your mortgage, the lender can file a claim with the FHA for payment of the remaining balance once foreclosure is complete. Since lenders have this backup option, they are more willing to lend to you even if you do not have perfect qualifications as a borrower. The criteria to be approved is not as stringent as it would be if you got a loan without government backing, which is known in the industry as a conventional mortgage or conventional loan. It is important to understand that borrowers are not protected by the FHA guarantee, though. If you do not pay your mortgage, you still get foreclosed on — and the insurance does not pay you anything for your losses.
            <br />
            <br />
            <SubTitle>How do I apply for an FHA loan?</SubTitle>
            <br />
            <br />
            Applying for an FHA loan will require personal and financial
            documents, including but not limited to:
            <br />
            <br />
            <ul
              className="mx-8"
              css={css`
                list-style-type: square;
              `}
            >
              <li>A valid Social Security number.</li>
              <li>
                Proof of U.S. citizenship, legal permanent residency or
                eligibility to work in the U.S.
              </li>
              <li>
                Bank statements for, at a minimum, the last 30 days. You'll also
                need to provide documentation for any deposits made during that
                time (usually pay stubs).
              </li>
            </ul>
            <br />
            Your lender may be able to automatically retrieve some required documentation, like credit reports, tax returns and employment records. Special circumstances — like if you are a student, or you do not have a credit score — may require additional paperwork.
            <br />
            <br />
            <SubTitle>
              What's the difference between an FHA and conventional loan?
            </SubTitle>
            <br />
            <br />
            It is easier to qualify for an FHA loan than for a conventional loan, which is a mortgage that is not insured or guaranteed by the federal government. FHA loans allow for lower credit scores than conventional loans and, in some cases, lower monthly mortgage insurance payments. FHA rules are more liberal regarding gifts of down payment money from family, employers, or charitable organizations. FHA loans may involve closing costs that are not required by conventional loans.
            <br />
            <br />
            <SubTitle>What is the FHA?</SubTitle>
            <br />
            <br />
            The Federal Housing Administration — better known as the FHA — has been part of the U.S. Department of Housing and Urban Development since 1965. But the FHA began more than 30 years before that, as a component of the New Deal. In addition to a stock market crash and the Dust Bowl drought, the Great Depression saw a housing market bubble burst. By early 1933, roughly half of American homeowners had defaulted on their mortgages. The FHA was created as part of the National Housing Act of 1934 to stem the tide of foreclosures and help make homeownership more affordable. It established the 20% down payment as a new norm by insuring mortgages for up to 80% of a home's value — previously, homeowners had been limited to borrowing 50%-60%. Today, the FHA insures loans for about 8 million single-family homes.
            <br />
            <br />
          </p>
        </div>
        <Spacer height={80} />
      </div>
    </>
  );
};

export default fha;
