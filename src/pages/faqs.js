import React from "react";
import { graphql } from "gatsby";
import Splash from "../components/Splash";
import { QA } from "../css/shared";

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_faqs.png" } }) {
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

const faqs = ({ data }) => {
  return (
    <>
      <Splash
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        title="Frequently Asked Questions"
        cta="Contact Us"
        link="/contact"
      />
      <div className="container mx-auto py-20">
        <QA question className="mx-8">
          <h1>1. What do I need to start?</h1>
          <h1>2. What if I am self employed?</h1>
          <h1>3. What if I own multiple properties?</h1>
        </QA>
        <QA className="mx-8 my-16">
          <h1>1. What do I need to start?</h1>
          <p>
            <strong>
              The following personal documents are required to begin your loan
              application:
            </strong>
            <ul>
              <li>Two years of W2s AND Tax Returns.</li>
              <li>A paystub from within 30 days of submission.</li>
              <li>Driver's license OR passport.</li>
              <li>Most recent retirement statement.</li>
            </ul>
          </p>
        </QA>
        <QA className="mx-8 my-16">
          <h1>2. What if I am self employed?</h1>
          <p>
            You'll need everything listed in the section above, plus the
            following:
            <ul>
              <li>Most recent 2 years of business tax returns.</li>
              <li>
                If you are a contractor, please provide your most recent
                contract with your employer(s).
              </li>
              <li>
                In lieu of a tax return, we may require a recent P&L covering
                the same time frame
              </li>
            </ul>
          </p>
        </QA>
        <QA className="mx-8 my-16">
          <h1>3. What if I own multiple properties?</h1>
          <p>
            You'll need everything listed in Section 1, plus the following:
            <ul>
              <li>Most recent mortgage statement.</li>
              <li>Most recent property tax statement.</li>
              <li>Most recent insurance binder/declaration page.</li>
            </ul>
          </p>
        </QA>
        <QA question className="mx-8">
          <h1>4. Am I better off renting or buying a home?</h1>
          <h1>5. What are the advantages of a home purchase?</h1>
        </QA>
        <QA className="mx-8 my-16">
          <h1>4. Am I better off renting or buying a home?</h1>
          <p>
            The decision to rent or buy a home differs for everyone, as there
            are benefits to both. Buying a home could be a better deal for you
            depending on how long you plan to live in your home and the loan you
            choose.{" "}
          </p>
        </QA>
        <QA className="mx-8 my-16">
          <h1>5. What are the advantages of a home purchase?</h1>
          <p>
            A home purchase gives you personal benefits such as a sense of
            investing in your community and pride for achieving the dream of
            homeownership. There are some strong financial benefits as well,
            especially the tax savings you may enjoy. Interest payments on a
            mortgage are typically tax deductible (consult your tax advisor for
            more information). As you continue to make mortgage payments, you'll
            build home equity, as opposed to paying rent to someone else.
          </p>
        </QA>
      </div>
    </>
  );
};

export default faqs;
