import React from "react";
import { graphql } from "gatsby";
import { GradientSection, Spacer, Title, Body, Lead } from "../css/shared";
import AboutUs from "../../static/assets/undraw_about_us_page.png";
import Splash from "../components/Splash";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_about.png" } }) {
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

const about = ({ data }) => {
  return (
    <GradientSection>
      <Splash
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        title="Our Story"
        cta="Contact Us"
        link="/contact"
      />
      <div className="container mx-auto">
        <img
          src={AboutUs}
          alt="About us Icon"
          className="mx-auto px-10 md:px-20 py-20"
        />
        <div className="lg:w-7/12 mx-8 md:mx-32 lg:mx-0">
          <Title>About City Morgage</Title>
          <Lead className="my-5">Your friendly, neighborhood lender.</Lead>
          <Body>
            At City Mortgage Group, we treat each customer as an individual, not
            a number. We don't place you into a loan profile formula created by
            the banking industry. We use "common sense" and will help you obtain
            the best loan possible. We represent a wide range of "A" rated
            lenders with first quality rates to private "hardship" lenders.
          </Body>
          <br />
          <Body>
            We work with more than 100 investors. This allows us to get you the
            best rates on all types of loan programs including: 30yr mortgage,
            20yr mortgage, 15yr mortgage, 10yr mortgage, 1yr ARMS, 3yr ARMS, 5yr
            ARMS, Conventional, Jumbo, Home Equity Lines, VA and Commercial.
            Whether your situation calls for Full Documents, No Documents,
            Non-Owner Occupied (Investor) or Multi-Family, we'll fit your needs!
          </Body>
        </div>
      </div>
      <Spacer height={160} />
    </GradientSection>
  );
};

export default about;
