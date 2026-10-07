import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/home-page/logo.png";
import menu from "/assets/home-page/menu.png";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="nav-div w-[100%] shadow-sm sticky top-0 z-50  bg-[#e3e6f3] px-[80px] py-[22px]">
      <nav className=" w-[100%] home-nav flex flex-nowrap justify-between items-center">
        <img src={logo} />

        <img
          src={menu}
          className="w-12.5 h-10  block md:hidden cursor-pointer "
          onClick={() => setOpen((prev) => !prev)}
        />
        <article
          className={`  list ${open == false ? "left-full" : "left-0"
            } text-black flex gap-10 text-[20px]  font-bold backdrop-blur-3xl`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <article className="navbar_link" >
            <NavLink to="/" className="cursor-pointer">
              Home
            </NavLink>
            <div className="slider"></div>
          </article >
          <article className="navbar_link" >
            <NavLink to="/Shop" className="cursor-pointer">
              Shop
            </NavLink>
            <div className="slider"></div>
          </article >
          <article className="navbar_link" >
            <NavLink to="/Blog" className="cursor-pointer">
              Blog
            </NavLink>
            <div className="slider"></div>
          </article >
          <article className="navbar_link" >
            <NavLink to="/About" className="cursor-pointer">
              About
            </NavLink>
            <div className="slider"></div>
          </article >
          <article className="navbar_link" >
            <NavLink to="/Contact" className="cursor-pointer">
              Contact
            </NavLink>
            <div className="slider"></div>
          </article >
          <article className="navbar_link" >
            <button className="cursor-pointer">
              Cart
            </button>
            <div className="slider"></div>
          </article >
        </article>
      </nav>
    </div>
  );
};

export default Navbar;