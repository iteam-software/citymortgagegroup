import React from "react";
import { graphql } from "gatsby";
import BelowTheFold from "../components/BelowTheFold";
import ForSale from "../../static/assets/undraw_for_sale.png";
import { Spacer } from "../css/shared";
import Splash from "../components/Splash";
export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_purchase.png" } }) {
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
const purchase = ({ data }) => {
  return (
    <>
      <Splash
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        title="Getting Ready for the investment of your lifetime?"
        cta="Apply Online"
        link="https://citymortgagegroup.mymortgage-online.com/?loanapp&siteid=5653936382&lar=wstar_zsmith&workFlowId=27446"
      />
      <Spacer height={80} />
      <BelowTheFold
        img={ForSale}
        order={0}
        title="Purchase"
        subtitle="The investment of a lifetime."
        content="If you're like most people, purchasing a home is probably one of the biggest investments you'll ever make in your lifetime. If you're considering buying a home, you're likely aware of the complexity of the endeavor. Because of the numerous factors to consider when purchasing a home, it's important to prepare as best you can. At City Mortgage Group, we are dedicated to finding the loan that fits your individual needs. Click the link below to get started!"
        cta="Learn More"
        to="/purchase"
        alignItems="start"
      />
      <Spacer height={160} />
    </>
  );
};

export default purchase;
