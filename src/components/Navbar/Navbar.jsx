import React from "react";

export const Navbar = ({ navbarList }) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {navbarList?.map((item) => (
          <li className="navbar__item" key={item.title}>
            <a className="navbar__link" href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
