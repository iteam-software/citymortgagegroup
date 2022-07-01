import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { Spacer } from "../css/shared";
import Splash from "../components/Splash";
export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "splash_privacypolicy.png" } }) {
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
const privacypolicy = ({ data }) => {
  return (
    <>
      <Splash
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        title="Privacy Policy"
      />
      <Spacer height={80} />
      <div className="mx-8 md:mx-48 lg:mx-64">
        <h1
          className="my-5"
          css={css`
            font-size: 64px;
            line-height: 78px;
            font-weight: 700;
            @media (max-width: 768px) {
              font-size: 48px;
            }
          `}
        >
          Privacy Policy
        </h1>
        <h2
          className="my-5"
          css={css`
            font-size: 27px;
          `}
        >
          Privacy Statement
        </h2>
        <p
          className="font-content"
          css={css`
            font-size: 20px;
            line-height: 175%;
          `}
        >
          City Mortgage Group has created this privacy statement in order to
          demonstrate our firm commitment to privacy.
          <br />
          <br />
          What personal information is being collected?
          <br />
          <br />
          Unless this web site asks for specific personal information in order
          to respond to requests for information or to register uses for
          particular services, only the following information will be collected
          when you use this site: · your server address; · the date and time of
          your visit to the site; · the pages you accessed and the documents
          downloaded; · the previous site you visited; and · the type of browser
          you are using. This information is collected for statistical purposes
          and to enable us to improve the navigation functions of our web site.
          <br />
          <br />
          Who is collecting personal information?
          <br />
          <br />
          Where this site specifically asks for your personal information (for
          example to respond to requests for information or to register users
          for particular services), your personal information will only be
          collected by staff of City Mortgage Group who have responsibility for
          responding to such requests or administrating such registrations.
          <br />
          <br />
          How is personal information used? Personal information collected on
          this web site will only be used for the purposes stated at the time of
          collection. Your personal information will not be forwarded to any
          third party, added to a mailing list or used for any other purpose
          without your consent.
          <br />
          <br />
          Cookies
          <br />
          <br />
          Cookies can be either "persistent" or "session" based. Persistent
          cookies are stored on your computer, contain an expiration date, and
          may be used to track your browsing behaviour upon return to the
          issuing web site. Session cookies are short-lived, are used only
          during a browsing session, and expire when you quit your browser. Upon
          closing your browser the session cookie set by this web site is
          destroyed and no personal information is maintained which might
          identify you should you visit our web site at a later date. Access to
          personal information collected on this site Unless required by law to
          do so City Mortgage Group will only disclose personal information
          collected on this site to a third party if consent has been provided.
          <br />
          <br />
          Security of personal information collected on this site
          <br />
          <br />
          This site does not provide facilities to guarantee the secure
          transmission of information across the Internet. Whilst reasonable
          efforts are used to provide security, users should be aware that there
          are inherent risks in the transmission of information across the
          Internet. Outside Links These sites may on occasion provide links to
          other sites for your convenience or additional information. City
          Mortgage Group is not responsible for any content or practices of
          these sites.
          <br />
          <br />
          Your Rights
          <br />
          <br />
          You can request access to the personal information (if any) that we
          keep on record. If you believe any information that we keep on record
          is incorrect or out of date you may request that it be corrected.
          There is no fee for requesting access to your information, however, we
          may charge you the reasonable cost of processing your request.
        </p>
      </div>
      <Spacer height={80} />
    </>
  );
};

export default privacypolicy;
