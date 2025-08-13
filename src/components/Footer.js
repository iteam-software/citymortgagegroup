import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeLinkStyle } from "../css/shared";
import EqualHousingLogo from "../components/icons/EqualHousingLogo";

const Footer = () => {
  return (
    <footer className="bg-footer text-white flex lg:flex-row flex-col py-24 px-8 lg:px-56 flex-column justify-between">
      <section
        css={css`
          @media (max-width: 990px) {
            order: 1;
          }
        `}
      >
        <ul>
          <li className="my-2">
            <Link activeStyle={activeLinkStyle} to="/about">
              About
            </Link>
          </li>
          <li className="my-2">
            <Link activeStyle={activeLinkStyle} to="/free-consultation">
              Free Consultation
            </Link>
          </li>
          <li>
          <Link to="/faqs">FAQs</Link>
          </li>
          <li className="my-2">
          <Link activeStyle={activeLinkStyle} to="/privacy-policy">
          Privacy Policy
          </Link>
          </li>
          <li className="my-2">
          <Link activeStyle={activeLinkStyle} to="/disclosures">
          Disclosures
          </Link>
          <li className="my-2">
            <a
              href="https://www.nmlsconsumeraccess.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NMLS Consumer Access
            </a>
          </li>
          </li>
        </ul>
        <section className="my-8">
          <div className="font-bold">Victoria, TX</div>
          <div>3606 B John Stockbauer Dr.</div>
          <div>Victoria, TX 77904</div>
        </section>
        <section className="flex items-end">
          <EqualHousingLogo />
          <div className="mx-4">
            <div>WMC NMLS #149648</div>
            <div>
              Zach Smith NMLS #149648 <a href="mailto:zach@citymortgagegroup.net">zach@citymortgagegroup.net</a>
            </div>
            <div>
              Randy Smith NMLS #205161 <a href="mailto:randy@citymortgagegroup.net">randy@citymortgagegroup.net</a>
            </div>
            <div>Jeff Smith NMLS #211517</div>
            <div>Branch NMLS #868665</div>
            <div>
              © 2020 WestStar Mortgage Corporation DBA City Mortgage Group{" "}
            </div>
          </div>
        </section>
      </section>
      <section className="flex flex-col items-end">
        <div>
          <form
            name="newsletter"
            method="POST"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="newsletter" />

            <p class="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <p className="inline">
              <label>
                <input
                  className="py-1 lg:flex-row px-3 text-textBody w-40 lg:w-56"
                  type="email"
                  name="Email"
                  placeholder="Join our newsletter!"
                  aria-label="Join our newsletter!"
                />
              </label>
            </p>
            <button
              type="submit"
              className="bg-primary text-textBody font-bold px-3 py-1 inline-block"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="text-right mt-5 text-primary">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
            href="#facebook"
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} className="mx-2" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
            href="#twitter"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} className="mx-2" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
            href="#instagram"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} className="mx-2" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
