import React from "react";
import { Link, graphql } from "gatsby";
import { Title, SubTitle } from "../css/shared";
import Splash from "../components/Splash";
export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_getstarted.png" } }) {
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

const getStarted = ({ data }) => {
  return (
    <>
      <Splash
        title="Get Started"
        cta="Contact Us"
        link="/contact"
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
      />
      <div className="container px-8 py-20 lg:px-0 lg:mx-auto">
        <Title>Get Started</Title>
        <SubTitle>Let us help you achieve your financial goals.</SubTitle>

        <div className="lg:ml-8 my-8">
          <Title>Free Consultation</Title>
          <Link to="/free-consultation">
            <SubTitle className="mt-3" teal>
              Talk to an expert
            </SubTitle>
          </Link>
        </div>
        <div className="lg:ml-8 my-8">
          <Title>FAQs</Title>
          <Link to="/faqs">
            <SubTitle className="mt-3" teal>
              Search through a list of the most commonly asked questions.
            </SubTitle>
          </Link>
        </div>

        <Title>Learn About</Title>
        <div className="lg:ml-8 my-8">
          <Title>Purchase</Title>
          <Link to="/purchase">
            <SubTitle className="mt-3" teal>
              Learn More
            </SubTitle>
          </Link>
        </div>
        <div className="lg:ml-8 py-8">
          <Title>Loans</Title>
          <Link to="/loans">
            <SubTitle className="mt-3" teal>
              See our loan products.
            </SubTitle>
          </Link>
          <br />
          <Link to="/loans/fha">
            <SubTitle className="mt-3" teal>
              FHA Loans
            </SubTitle>
          </Link>
          <br />
          <Link to="/loans/va">
            <SubTitle className="mt-3" teal>
              VA Loans
            </SubTitle>
          </Link>
        </div>
      </div>
    </>
  );
};

export default getStarted;
