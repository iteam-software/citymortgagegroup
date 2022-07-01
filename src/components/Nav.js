import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import classNames from "classnames";
import { WindowSizeContext } from "../layouts/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavLink from "../components/NavLink";

// assets
import cityMortgageLogoTeal from "../../static/assets/citymortgagelogo_teal.png";
import cityMortgageLogoWhite from "../../static/assets/citymortgagelogo_white.png";

const Nav = () => {
  const { width } = useContext(WindowSizeContext);
  const [navIsOpen, setNav] = useState(false);
  const toggleNav = () => setNav(!navIsOpen);
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const updateIsTop = () => {
      if (window.pageYOffset > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    updateIsTop();
    window.addEventListener("scroll", updateIsTop);
    //Cleanup
    return () => {
      window.removeEventListener("scroll", updateIsTop);
    };
  }, []);

  let navClass = classNames({
    isTransparent: isTop,
    isOpaque: navIsOpen || !isTop,
  });

  let navIsOpenClass = classNames({
    block: navIsOpen,
    hidden: !navIsOpen,
  });

  let searchBarClass = classNames({
    isFocused: isTop,
    isScrolled: !isTop && width > 768,
  });
  return (
    <nav
      className={`flex ${navClass} flex-row items-center justify-between flex-wrap fixed z-50 py-4 lg:flex-column`}
      css={css`
        width: 100vw;
        transition: background-color 0.5s ease-in-out;
      `}
    >
      <div className="w-full md:w-auto">
        <Link to="/">
          <img
            className="mx-4 lg:mx-10 inline"
            src={
              !isTop && width > 768
                ? cityMortgageLogoTeal
                : cityMortgageLogoWhite
            }
            alt="City Mortgage Logo"
          />
        </Link>
        <div
          className={`${navIsOpenClass} lg:inline-block flex flex-col md:flex-row`}
        >
          <div className="flex flex-col justify-center md:hidden text-left">
            <a className="mx-8 mt-8" href="tel:1-361-576-9890">
              <FontAwesomeIcon icon="phone" className="mr-3" />
              (361)-576-9890
            </a>
            <form action="/results" method="GET" className="inline">
              <input
                className="isFocused mx-8 my-3 px-2"
                type="text"
                name="q"
                id="mobildNavSearchBar"
                placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search our site"
                css={css`
                  font-family: "FontAwesome", "Open Sans", Verdana, sans-serif;
                  width: 260px;
                `}
              />
              <button css={css`
              transform: translateX(-400%);
            `}>
                <FontAwesomeIcon className="inline" icon="search" />
              </button>
            </form>
          </div>
          <NavLink
            toggleNav={toggleNav}
            to="/get-started"
            title="Get Started"
            marginTop={8}
          />
          <NavLink toggleNav={toggleNav} to="/loans" title="Loans" />
          <NavLink toggleNav={toggleNav} to="/purchase" title="Purchase" />
          <NavLink toggleNav={toggleNav} to="/refinance" title="Refinance" />
          <NavLink toggleNav={toggleNav} to="/contact" title="Contact" />
        </div>
      </div>
      <div className="mr-10 hidden lg:block">
        <form className="inline mr-5" action="/results" method="GET">
          <input
            className={`${searchBarClass} px-2`}
            type="text"
            name="q"
            aria-label="Search Bar"
            id="navSearchBar"
            placeholder="&nbsp;&nbsp;Search our site"
            css={css`
              font-family: "FontAwesome", "Open Sans", Verdana, sans-serif;
              width: 310px;
            `}
          />
          <button
            css={css`
              transform: translateX(-150%);
            `}
          >
            <FontAwesomeIcon icon="search" />
          </button>
        </form>
        <a href="tel:1-361-576-9890">
          <FontAwesomeIcon icon="phone" className="mr-5" />
        </a>
        <a href="tel:1-361-576-9890">(361)-576-9890</a>
      </div>
      <div className="lg:hidden absolute top-0 right-0 mt-5 mr-2">
        <button
          onClick={toggleNav}
          aria-label="Navigation Toggle"
          className="flex items-center px-3 py-2 rounded hover:border-white md:flex flex-end"
        >
          <FontAwesomeIcon icon={navIsOpen ? "times" : "bars"} />
        </button>
      </div>
    </nav>
  );
};
export default Nav;
