import React, { useState } from "react";
import { Container } from "../Container";
import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import { headerNavList } from "../../db";
import { Search } from "../Search/Search";
import { GrCart } from "react-icons/gr";

import "./Header.scss";

export const Header = () => {
  const [cartNum] = useState(0);

  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Logo className={"header__logo"} />
          <Navbar navbarList={headerNavList} />
          <div className="header__end">
            <Search />
            <div className="header__cart header-cart">
              <button className="header-cart__button">
                <GrCart size={23} />
              </button>
              <span className="header-cart__num">Cart ({cartNum})</span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
