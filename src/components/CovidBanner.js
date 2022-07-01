import React, { useState, useEffect, useRef, useCallback } from "react";
import classNames from "classnames";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CovidBanner = () => {
  const [covidBannerIsOpen, setCovidBannerIsOpen] = useState();
  const toggleCovidBanner = () => {
    localStorage.setItem("bannerState", !covidBannerIsOpen);
    setCovidBannerIsOpen(!covidBannerIsOpen);
  };

  useEffect(() => {
    const bannerStateStr = localStorage.getItem("bannerState");
    const bannerState = bannerStateStr === "true" ? true : false;
    localStorage.setItem("bannerState", bannerState);
    setCovidBannerIsOpen(bannerState);
  }, []);
  const ref = useRef();
  let covidBannerClass = classNames({
    bannerIsOpen: covidBannerIsOpen,
    bannerIsClosed: !covidBannerIsOpen,
  });
  useCallback(useOnClickOutside(ref, () => setCovidBannerIsOpen(false)));
  return (
    <div
      ref={ref}
      className={`${covidBannerClass} py-2 px-4 lg:py-8 lg:px-32 w-full fixed z-10`}
      css={css`
        bottom: 0;
        background-color: #fd6550;
      `}
    >
      <button
        onClick={toggleCovidBanner}
        className="flex items-center cursor-pointer justify-between w-48 py-2 px-4 absolute"
        css={css`
          top: 0;
          right: 10%;
          transform: translateY(-100%);
          background-color: #fd6550;
          border-radius: 12px 12px 0px 0px;
        `}
      >
        COVID-19 News{" "}
        {covidBannerIsOpen ? (
          <FontAwesomeIcon className="ml-4" icon="times" />
        ) : (
          <FontAwesomeIcon className="ml-4" icon="chevron-up" />
        )}
      </button>
      <p
        className="py-4 mx-4"
        css={css`
          color: rgba(0, 0, 0, 0.87);
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
        `}
      >
        We are following federal CDC guidelines with deep sanitization, masks,
        social distancing, and using virtual meetings where possible. In person
        meetings may be taken if requested. City Mortgage is deemed essential
        and will remain open. Stay Safe!
      </p>
    </div>
  );
};

export default CovidBanner;
