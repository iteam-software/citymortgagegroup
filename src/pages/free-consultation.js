import React from "react";
import { graphql } from "gatsby";
import BelowTheFold from "../components/BelowTheFold";
import CallTodayCTA from "../components/CallTodayCTA";
import Splash from "../components/Splash";

// assets
import Experts from "../../static/assets/experts.png";
export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_freeconsultation.png" } }) {
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
const freeConsultation = ({ data }) => {
  return (
    <>
      <Splash
        title="Get In Touch with Us."
        cta="Contact Us"
        link="/contact"
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
      />
      <BelowTheFold
        img={Experts}
        order={0}
        to="/"
        cta="Call Now"
        title="Speak with an expert."
        content="Getting approved can be tricky so it’s best to have an experienced specialist working with you. Our morgage experts have in-depth knowledge of your market and can advise borrowers about the best loans available for their purposes, gathering documentation throughout the process, ordering the appraisal and communicating directly with the underwriter to ensure that your loan gets approved.
. "
        alignItems="start"
      />
      <CallTodayCTA />
    </>
  );
};

export default freeConsultation;
