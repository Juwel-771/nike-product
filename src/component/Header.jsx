import React from "react";
import logo from '../assets/image/brand_logo.png';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src={logo} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
             <a href="#">Item 3</a>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img src={logo} className="text-white" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>MENU</a>
          </li>
          <li>
            <a>LOCATION</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">LOGIN</a>
      </div>
    </div>
  );
};

export default Header;
