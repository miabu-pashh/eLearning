import React, { useState } from "react";
import styled from "styled-components";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import { useSidebarContext } from "../Context/sidebar_context";
// import { useCartContext } from '../Context/cart_context';

import "../Css/ToggleSwitch.css";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();

  const [isKidsPage, setIsKidsPage] = useState(false);

  const toggleKidsPage = () => {
    setIsKidsPage(!isKidsPage);
    console.log(!isKidsPage);
  };
  return (
    <NavbarWrapper className="bg-white flex">
      <div className="container w-100">
        <div className="brand-and-toggler flex flex-between w-100">
          <Link
            to={isKidsPage ? "/Khome" : "/home"}
            className="navbar-brand text-uppercase ls-1 fw-8"
          >
            <span>e-</span>Learning
          </Link>
          <div className="navbar-btns flex">
            {/* <Link to="/cart" className="cart-btn">
              <MdShoppingCart />
            </Link> */}

            {isKidsPage ? (
        <Link to="/Khome" onClick={toggleKidsPage} className="button1" >
          Switch to Kids
        </Link>
      ) : (
        <Link to="/home" onClick={toggleKidsPage} className="button1" >
          Switch to Home
        </Link>
      )}

            <button
              type="button"
              className="sidebar-open-btn"
              onClick={() => openSidebar()}
            >
              <MdMenu />
            </button>

           
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand {
    font-size: 23px;
    span {
      color: var(--clr-orange);
    }
  }
  .cart-btn {
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge {
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn {
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
`;

// const ToggleSwitchWrapper = styled.div`
//   position: relative;
// `;

// const ToggleSwitchInput = styled.input`
//   opacity: 0;
//   width: 0;
//   height: 0;
// `;

// const Slider = styled.span`
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #ccc;
//   transition: .4s;
//   border-radius: 34px;

//   &:before {
//     position: absolute;
//     content: "";
//     height: 26px;
//     width: 26px;
//     left: 4px;
//     bottom: 4px;
//     background-color: white;
//     transition: .4s;
//     border-radius: 50%;
//   }
// `;

export default Navbar;
