import React from "react";
import { graphql } from "gatsby";

import BelowTheFold from "../components/BelowTheFold";
import ValueAdds from "../components/ValueAdds";

import { GradientSection } from "../css/shared";
import Splash from "../components/Splash";
// Images
import Credibility from "../../static/assets/credibility.png";
import Enthusiasm from "../../static/assets/enthusiasm.png";
import LowFixedRates from "../../static/assets/low_fixed_rates.png";
import PhoneHome from "../../static/assets/phone_home_licensed.png";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_home_licensed.png" } }) {
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
export default ({ data }) => {
  return (
    <>
      <Splash
        title="Whatever your mortgage needs, we can help."
        mobileTitle="Use Our Website To Apply For A Home Loan!"
        cta="Apply Online"
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        link="https://citymortgagegroup.mymortgage-online.com/?loanapp&siteid=5653936382&lar=wstar_zsmith&workFlowId=27446"
      />
      <BelowTheFold
        img={PhoneHome}
        order={0}
        title="Customers First"
        subtitle="Making Your House a Home"
        content="Borrowers who are happy with the mortgage loan we helped them get are more important to us than anything else. Our goal is to make the loan process as simple and worry-free as possible. We pride ourselves in offering the highest level of customer service and appreciate the opportunity to earn your business. Whether you want to refinance for a lower mortgage rate, get a new home mortgage, home equity loan or second mortgage, our purpose is to satisfy your needs. By putting you first, we assure you a pleasurable transaction."
        alignItems="end"
        phone
      />
      <GradientSection>
        <ValueAdds
          valueAdds={[
            {
              img: LowFixedRates,
              title: "Low, Fixed Rates",
              content:
                "We offer FHA, VA, and CONV loan types. We promise to get you the lowest, fixed rates possible.",
            },
            {
              img: Enthusiasm,
              title: "Enthusiasm Working For You",
              content:
                "Helping people make one of their most important decisions is a serious responsibility, but something that we enjoy doing. This enthusiasm and hard work will benefit you and help reduce the stress and anxiety often associated with mortgage transactions.",
            },
            {
              img: Credibility,
              title: "Established Credibility",
              content:
                "We have many years of experience and knowledge working in this industry. We can say with confidence that we will get the job done right.",
            },
          ]}
          separator
        />
      </GradientSection>
    </>
  );
};
