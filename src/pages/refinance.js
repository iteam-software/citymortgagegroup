import React from "react";
import { graphql } from "gatsby";

import Splash from "../components/Splash";
import BelowTheFold from "../components/BelowTheFold";
import Title from "../components/Title";
import ValueAdds from "../components/ValueAdds";
import StackedCallToAction from "../components/StackedCallToAction";
import { GradientSection } from "../css/shared";
// assets
import HouseSearching from "../../static/assets/undraw_house_searching.png";
import ReduceInterest from "../../static/assets/reduce_interest.png";
import CashOut from "../../static/assets/cash_out.png";
import LowerPayments from "../../static/assets/lower_payments.png";
import CurrentAppraisal from "../../static/assets/current_appraisal.png";
import AssetVerification from "../../static/assets/asset_verification.png";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_refinance.png" } }) {
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
const refinance = ({ data }) => {
  return (
    <>
      <Splash
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        title="Refinance your home."
        cta="Apply Online"
        link="https://citymortgagegroup.mymortgage-online.com/?loanapp&siteid=5653936382&lar=wstar_zsmith&workFlowId=27446"
      />
      <BelowTheFold
        img={HouseSearching}
        order={0}
        title="Refinance"
        subtitle="Get the Rate that works for you."
        content="Refinancing is often used to lower your interest rate. If rates have dropped since you last financed your home, you may want to consider refinancing. Other common reasons to refinance include paying off a balloon payment, or converting an adjustable rate loan to a fixed rate loan."
        cta="Learn More"
        alignItems="end"
      />
      <GradientSection>
        <Title title="Benefits" position="left" />
        <ValueAdds
          valueAdds={[
            {
              img: ReduceInterest,
              title: "Reduce Your Interest Rate, Consolidate Debt",
            },
            {
              img: CashOut,
              title: "More predictable costs",
            },
            {
              img: LowerPayments,
              title: "Lower monthly payments",
            },
          ]}
          separator
        />
        <Title title="To Refinance You'll Need" position="center" />
        <ValueAdds
          valueAdds={[
            {
              img: CurrentAppraisal,
              title: "Current Appraisal and Analysis",
            },
            {
              img: AssetVerification,
              title: "Verification of Assets and Income",
            },
          ]}
        />
        <StackedCallToAction
          cta1="Apply Now"
          cta2="What paperwork is needed?"
        />
      </GradientSection>
    </>
  );
};

export default refinance;
