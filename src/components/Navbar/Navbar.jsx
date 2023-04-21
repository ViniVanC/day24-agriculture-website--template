import React, { useReducer } from "react";
import "./Navbar.scss";

const NavbarItem = ({ item }) => {
  const [open, setOpen] = useReducer((o) => !o, false);

  return (
    <li
      className={`navbar__item ${
        item.children.length > 0 ? `item-parent ${open ? "open" : ""}` : ""
      }`}
      key={item.title}
    >
      {item.children.length > 0 ? (
        <>
          <span className="navbar__link" onClick={setOpen}>
            {item.title}
          </span>
          <ul className="navbar-children__list">
            {item.children.map((childrenItem) => (
              <li className="navbar-children__item" key={childrenItem.title}>
                <a className="navbar__link" href={childrenItem.href}>
                  {childrenItem.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <a className="navbar__link" href={item.href}>
          {item.title}
        </a>
      )}
    </li>
  );
};

export const Navbar = ({ navbarList }) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {navbarList?.map((item) => (
          <NavbarItem item={item} />
        ))}
      </ul>
    </nav>
  );
};
