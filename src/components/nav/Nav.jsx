import React from "react";
import style from "./Nav.module.css";
import { Outlet, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
          <NavLink
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
              to="/" >
            <img
              className={style.logo}
              src="https://files.codingninjas.in/pl-ninja-16706.svg"
              alt="logo"
            />
            <h4>E-Learning App</h4>
            </NavLink>
          </div>
          <div className={style.nav_details}>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
              to="/Courses"
            >
            <h3>Courses</h3>
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
