import React, { useContext } from "react";
import { Link } from "gatsby";
import { activeLinkStyle } from "../css/shared"
import { WindowSizeContext } from "../layouts/index";

const NavLink = ({ title, toggleNav, to, marginTop }) => {
  const { width } = useContext(WindowSizeContext);
  const handleNavClick = () => (width < 768 ? toggleNav() : null);
  return (
    <span
      role="link"
      onClick={handleNavClick}
      onKeyDown={handleNavClick}
      className={`nav-link ml-10 lg:mx-3 ${
        marginTop ? `mt-${marginTop} mb-3` : "my-3"
      } md:mt-0`}
    >
      <Link activeStyle={activeLinkStyle} to={to}>
        {title}
      </Link>
    </span>
  );
};

export default NavLink;
