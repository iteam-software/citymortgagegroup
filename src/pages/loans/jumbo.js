import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { SubTitle, Spacer } from "../../css/shared";
import Splash from "../../components/Splash";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_jumbo.png" } }) {
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
const jumbo = ({ data }) => {
  return (
    <div>
      <Splash
        fluid={data?.allFile?.nodes[0]?.childImageSharp?.fluid}
        title="Jumbo Loans"
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
            Jumbo Loans
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
            <SubTitle>What is a Jumbo Loan?</SubTitle>
            <br />
            <br />
            A jumbo loan, also known as a jumbo mortgage, is a type of financing
            that exceeds the limits set by the Federal Housing Finance Agency
            (FHFA). Unlike conventional mortgages, a jumbo loan is not eligible
            to be purchased, guaranteed, or securitized by Fannie Mae or Freddie
            Mac. Designed to finance luxury properties and homes in highly
            competitive local real estate markets, jumbo mortgages come with
            unique underwriting requirements and tax implications. These kinds
            of mortgages have gained traction as the housing market continues to
            recover following the Great Recession.
            <br />
            <br />
            The value of a jumbo mortgage varies by state—and even county. The
            FHFA sets the conforming loan limit size for different areas on an
            annual basis, though it changes infrequently. As of 2019, the limit
            was set at $484,350 for most of the country. That was increased from
            $453,100 in 2018. For counties that have higher home values, the
            baseline limit is set at $726,525, or 150% of $484,350.
            <br />
            <br />
            The FHFA has a different set of provisions for areas outside of the
            continental United States for loan limit calculations. As a result,
            the baseline limit for a jumbo loan in Alaska, Guam, Hawaii, and the
            U.S. Virgin Islands as of 2019 is also $726,525. That amount may
            actually be even higher in counties that have higher home values.
            <SubTitle>How Does a Jumbo Loan Work?</SubTitle>
            <br />
            <br />
            If you have your sights set on a home that costs close to half a
            million dollars or more—and you don't have that much sitting in a
            bank account—you're probably going to need a jumbo mortgage. And if
            you’re trying to land one, you’ll face much more rigorous credit
            requirements than homeowners applying for a conventional loan.
            That’s because jumbo loans carry more credit risk for the lender
            since there is no guarantee by Fannie Mae or Freddie Mac. There's
            also more risk because more money is involved.
            <br />
            <br />
            Just like traditional mortgages, minimum requirements for a jumbo
            have become increasingly stringent since 2008. To get approved,
            you’ll need a stellar credit score—700 or above—and a very low
            debt-to-income (DTI) ratio. The DTI should be under 43% and
            preferably closer to 36%. Although they are nonconforming mortgages,
            jumbos still must fall within the guidelines of what the Consumer
            Financial Protection Bureau considers a “qualified mortgage”—a
            lending system with standardized terms and rules, such as the 43%
            DTI.
            <br />
            <br />
            You’ll need to prove you have accessible cash on hand to cover your
            payments, which are likely to be very high if you opt for a standard
            30-year fixed-rate mortgage. Specific income levels and reserves
            depend on the size of the overall loan, but all borrowers need 30
            days of pay stubs and W2 tax forms stretching back two years. If
            you're self-employed, the income requirements are greater: Two years
            of tax returns and at least 60 days of current bank statements. The
            borrower also needs provable liquid assets to qualify and cash
            reserves equal to six months of the mortgage payments. And all
            applicants have to show proper documentation on all other loans held
            and proof of ownership of non-liquid assets (like other real
            estate).
            <br />
            <br />
            <SubTitle>Jumbo Loan Rates </SubTitle>
            <br />
            <br />
            While jumbo mortgages used to carry higher interest rates than
            conventional mortgages, the gap has been closing in recent years.
            Today, the average annual percentage rate (APR) for a jumbo mortgage
            is often par with conventional mortgages—and in some cases, actually
            lower. As of March 2019, Wells Fargo, for example, charged an APR of
            4.092% on a 30-year fixed-rate conforming loan and 3.793% for the
            same term on a jumbo loan.
            <br />
            <br />
            Even though the government-sponsored enterprises can't handle them,
            jumbo loans are often securitized by other financial institutions;
            since these securities carry more risk, they trade at a yield
            premium to conventional securitized mortgages. However, this spread
            has been reduced with the interest rate of the loans themselves.
            <br />
            <br />
            <SubTitle>Down Payment on a Jumbo Loan </SubTitle>
            <br />
            <br />
            Fortunately, down payment requirements have loosened over the same
            time period. In the past, jumbo mortgage lenders often required home
            buyers to put up 30% of the residence's purchase price (compared to
            20% for conventional mortgages). Now, that figure has fallen as low
            as 10% to 15%. As with any mortgage, there can be various advantages
            to making a higher down payment—among them, to avoid the cost of the
            private mortgage insurance lenders require for down payments below
            20%.
            <br />
            <br />
            <SubTitle>Who Should Take Out a Jumbo Loan? </SubTitle>
            <br />
            <br />
            How much you can ultimately borrow depends, of course, on your
            assets, your credit score, and the value of the property you're
            interested in buying. These mortgages are considered most
            appropriate for a segment of high-income earners who make between
            $250,000 and $500,000 a year. This segment is known as HENRY, an
            acronym for high earners, not rich yet. Basically, these are people
            who generally make a lot of money but don't have millions in extra
            cash or other assets accumulated—yet.
            <br />
            <br />
          </p>
        </div>
        <Spacer height={80} />
      </div>
    </div>
  );
};

export default jumbo;
