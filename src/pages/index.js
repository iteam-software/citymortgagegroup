import React from "react";
import { graphql } from "gatsby";

import BelowTheFold from "../components/BelowTheFold";
import ValueAdds from "../components/ValueAdds";

import CompanyCallouts from "../components/CompanyCallouts";
import { GradientSection } from "../css/shared";
import Splash from "../components/Splash";
// Images
import Credibility from "../../static/assets/credibility.png";
import Enthusiasm from "../../static/assets/enthusiasm.png";
import LowFixedRates from "../../static/assets/low_fixed_rates.png";
import JohnSmith from "../../static/assets/johnsmith.png";
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
        title="Whatever your morgage needs, we can help."
        mobileTitle="Use our website to apply for a home loan!"
        cta="Apply Online"
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        link="https://citymortgagegroup.mymortgage-online.com/?loanapp&siteid=5653936382&lar=wstar_zsmith&workFlowId=27446"
      />
      <BelowTheFold
        img={PhoneHome}
        order={0}
        title="Customers first"
        subtitle="Making Your House a Home"
        content="Borrowers who are happy with the mortgage loan we helped them get are more important to us than anything else. Our goal is to make the loan process as simple and worry-free as possible. We pride ourselves in offering the highest level of customer service, and appreciate the opportunity to earn your business. Whether you want to refinance for a lower mortgage rate, get a new home mortgage, home equity loan or second mortgage, our purpose is to satisfy your needs. By putting you first, we assure you a pleasurable transaction."
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
              title: "Enthusiasm working for you",
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
        {/*     <CompanyCallouts
          title="What do people say about us?"
          testimonials={[
            {
              name: "John Smith",
              pic: JohnSmith,
              content:
                "I was worried that I wouldn't be able to qualify for a loan. I spoke with Zach and they told me to apply on their site. The next day they not only qualified me but had me locked into a great rate.",
              date: "02/02/20",
            },
            {
              name: "John Smith",
              pic: JohnSmith,
              content:
                "I was worried that I wouldn't be able to qualify for a loan. I spoke with Zach and they told me to apply on their site. The next day they not only qualified me but had me locked into a great rate.",
              date: "02/02/20",
            },
            {
              name: "John Smith",
              pic: JohnSmith,
              content:
                "I was worried that I wouldn't be able to qualify for a loan. I spoke with Zach and they told me to apply on their site. The next day they not only qualified me but had me locked into a great rate.",
              date: "02/02/20",
            },
          ]}
        />*/}
      </GradientSection>
    </>
  );
};
