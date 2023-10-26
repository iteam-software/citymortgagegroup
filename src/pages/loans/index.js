import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import BelowTheFold from "../../components/BelowTheFold";
import { Title } from "../../css/shared";
// assets
import FHAConstruction from "../../../static/assets/fha_construction.png";
import VABlocks from "../../../static/assets/va_blocks.png";
import USDAFamily from "../../../static/assets/usda_family.png";
import JumboHouse from "../../../static/assets/jumbo_house.png";
import CONVSelect from "../../../static/assets/conv_select.png";

import Splash from "../../components/Splash";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_loans.png" } }) {
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
const loans = ({ data }) => {
  return (
    <>
      <Splash
        fluid={data?.allFile?.nodes[0]?.childImageSharp?.fluid}
        title="Loans"
        cta="Apply Today"
        link="https://citymortgagegroup.mymortgage-online.com/?loanapp&siteid=5653936382&lar=wstar_zsmith&workFlowId=27446"
      />
      <BelowTheFold
        img={FHAConstruction}
        order={0}
        title="FHA Loans"
        cta="Learn More"
        ctaImage
        to="/loans/fha"
        subtitle="One of the most attractive mortgage types available."
        content="FHA loans come with many benefits, including easy credit requirements, small down payments, and flexibility in the type of property you can buy. An FHA loan is a mortgage issued by an FHA-approved lender and insured by the Federal Housing Administration (FHA). Designed for low-to-moderate-income borrowers, FHA loans require a lower minimum down payments and credit scores than many conventional loans.
        As of 2020, you can borrow up to 96.5% of the value of a home with an FHA loan (meaning you'll need to make a down payment of only 3.5%). You'll need a credit score of at least 580 to qualify. If your credit score falls between 500 and 579, you can still get an FHA loan provided you can make a 10% down payment. With FHA loans, your down payment can come from savings, a financial gift from a family member or a grant for down-payment assistance."
        alignItems="center"
      />
      <div className="mx-8 lg:mx-40">
        <Title className="text-center">About FHA Loans</Title>
        <ul
          className="flex flex-col mx-auto mt-5 px-4 md:px-10 pb-10"
          css={css`
            font-size: 22px;
            list-style-type: disc;
            line-height: 200%;
            @media (min-width: 768px) {
              width: 531px;
            }
          `}
        >
          <li className="mt-2">
            FHA loans require a <strong>lower minimum down payments</strong> and
            credit scores than many conventional loans.
          </li>
          <li className="mt-2">
            FHA loans are issued by approved banks and lending institutions, who
            will evaluate your qualifications for the loan.
          </li>
          <li className="mt-2">
            FHA loans are <strong>federally backed mortgages</strong> designed
            for low-to-moderate-income borrowers who may have lower than average
            credit scores.
          </li>
          <li className="mt-2">
            These loans come with certain restrictions and loan limits not found
            in conventional mortgages.
          </li>
        </ul>
      </div>
      <BelowTheFold
        img={VABlocks}
        order={1}
        title="VA Loans"
        cta="Learn More"
        ctaImage
        to="/loans/va"
        subtitle="Serving those who protect us."
        content="A VA loan is a mortgage loan that is issued by private lenders and backed by the U.S. Department of Veterans Affairs. It helps U.S. veterans, active-duty service members, and widowed military spouses buy a home. VA loans were introduced as part of the GI Bill in 1944, but they have become increasingly popular in recent years. In the first quarter of 2019, 8% of home purchases were made with a VA loan.1 This type of loan is an attractive option because it is easy to qualify for and does not require a down payment."
        alignItems="center"
      />
      <div className="mx-8 lg:mx-40">
        <Title className="text-center">About VA Loans</Title>

        <ul
          className="flex flex-col mx-auto mt-5 px-4 md:px-10 pb-10"
          css={css`
            font-size: 20px;
            list-style-type: disc;
            line-height: 200%;
            @media (min-width: 768px) {
              width: 531px;
            }
          `}
        >
          <li className="ml-5">No down payment.</li>
          <li className="ml-5">No mortgage insurance.</li>
          <li className="ml-5">No minimum credit score requirement.</li>
          <li className="ml-5">
            No limit to the amount you can borrow on a VA loan, but there is a
            limit to the amount of liability the VA takes on.
          </li>
          <li className="ml-5">
            <strong>Must</strong> be a <strong>veteran</strong> or{" "}
            <strong>active service member</strong>&nbsp;of the U.S Military.
          </li>
        </ul>
      </div>
      <BelowTheFold
        img={JumboHouse}
        order={1}
        title="Jumbo Loans"
        cta="Learn More"
        ctaImage
        to="/loans/jumbo"
        subtitle="Get the home of your dreams."
        content="A jumbo loan is a mortgage used to finance properties that are too expensive for a conventional conforming loan. The maximum amount for a conforming loan is $510,400 in most counties, as determined by the Federal Housing Finance Agency (FHFA). Homes that exceed the local conforming loan limit require a jumbo loan."
        alignItems="center"
      />
      <div className="mx-8 lg:mx-40">
        <Title className="text-center">About Jumbo Loans</Title>
        <ul
          className="flex flex-col mx-auto mt-5 px-4 md:px-10 pb-10"
          css={css`
            font-size: 20px;
            list-style-type: disc;
            line-height: 200%;
            @media (min-width: 768px) {
              width: 531px;
            }
          `}
        >
          <li className="ml-5">Ample Flexibility.</li>
          <li className="ml-5">Low Down Payments.</li>
          <li className="ml-5">Competitive Interest Rates.</li>
          <li className="ml-5">
            Borrow more than you could with a conventional mortgage.
          </li>
        </ul>
      </div>
      <BelowTheFold
        img={CONVSelect}
        order={1}
        title="Conventional Loans"
        cta="Learn More"
        ctaImage
        to="/loans/conventional"
        subtitle=""
        content="A conventional mortgage or conventional loan is any type of home buyer’s loan that is not offered or secured by a government entity. Instead, conventional mortgages are available through private lenders, such as banks, credit unions, and mortgage companies. However, some conventional mortgages can be guaranteed by two government-sponsored enterprises: the Federal National Mortgage Association (Fannie Mae) and the Federal Home Loan Mortgage Corporation (Freddie Mac)."
        alignItems="center"
      />
      <div className="mx-8 lg:mx-40">
        <Title className="text-center">About Conventional Loans</Title>
        <ul
          className="flex flex-col mx-auto mt-5 px-4 md:px-10 pb-10"
          css={css`
            font-size: 20px;
            list-style-type: disc;
            line-height: 200%;
            @media (min-width: 768px) {
              width: 531px;
            }
          `}
        >
          <li className="ml-5">No interest rate surprises.</li>
          <li className="ml-5">Fewer hoops to jump through.</li>
          <li className="ml-5">Refinancing options available.</li>
          <li className="ml-5">The lowest fixed rate.</li>
        </ul>
      </div>
      <BelowTheFold
        img={USDAFamily}
        order={1}
        title="USDA Loans"
        cta="Learn More"
        ctaImage
        to="/loans/usda"
        subtitle=""
        content="
        The USDA Loan is a mortgage option available to some rural and suburban homebuyers. USDA Home Loans are issued by qualified lenders and guaranteed by the United States Department of Agriculture (USDA). 
        USDA Home Loans are particularly favorable to those living in rural or low-income areas. USDA Loans offer $0 money down, lenient eligibility requirements and competitive interest rates - due to the loan being guaranteed by the USDA.
        USDA mortgages stand alone as the only mainstream zero money down program available to borrowers that have not served in the military. Eligible borrowers will be hard pressed to find a home loan program that offers more favorable terms."
        alignItems="center"
      />
      <div className="mx-8 lg:mx-40">
        <Title className="text-center">About USDA Loans</Title>
        <ul
          className="flex flex-col mx-auto mt-5 px-4 md:px-10 pb-10"
          css={css`
            font-size: 20px;
            list-style-type: disc;
            line-height: 200%;
            @media (min-width: 768px) {
              width: 531px;
            }
          `}
        >
          <li className="ml-5">$0 Down, 100% Financing.</li>
          <li className="ml-5">More Homes Now Qualify.</li>
          <li className="ml-5">Lenient Requirements.</li>
          <li className="ml-5">Competitive Rates.</li>
        </ul>
      </div>
    </>
  );
};

export default loans;
