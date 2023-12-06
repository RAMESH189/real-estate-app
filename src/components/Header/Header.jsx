import React, { useState } from "react";
import './header.css'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menu, setMenu] = useState(false)

  const getMenuStyle = (menu) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right : !menu && "-100%"}
    }
  }


  return (
    <header className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu" style={getMenuStyle(menu)}>
          <a href="">Residencies</a>
          <a href="">Our value</a>
          <a href="">Contact us</a>
          <a href="">Get started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>

        <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
          <div className="menu-icons" onClick={() => setMenu(!menu)}>
        <HiOutlineMenuAlt3 size={30}/>
        </div>
        </OutsideClickHandler>
      </div>

      
    </header>
  );
};

export default Header;
