import React, { useState } from 'react';
import { CiSearch, CiLogin, CiLogout } from "react-icons/ci";
import { FaRegHeart, FaShoppingBag, FaRegUser } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css';

const Nav = ({ searchbtn }) => {
  const [search, setSearch] = useState();
  const [menuOpen, setMenuOpen] = useState(false); // <-- for hamburger toggle
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="main-header">
        <div className="container">
          <div className="logo">
            <img src="./img/logo.png" alt="logo" />
          </div>
          <div className="search-box">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Product"
              autoComplete="off"
            />
            <button onClick={() => searchbtn(search)} type="button">
              <CiSearch /> Search
            </button>
          </div>
          <div className="icon">
            {isAuthenticated && user && (
              <div className="account">
                <div className="user-icon">
                  <FaRegUser />
                </div>
                <p>Hello, {user.name || "User"}</p>
              </div>
            )}
            <div className="second-icon">
              <Link to="/wishlist" className="link">
                <FaRegHeart />
              </Link>
              <Link to="/cart" className="link">
                <FaShoppingBag />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>

          <div className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="/" className="link" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link" onClick={() => setMenuOpen(false)}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="link" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="auth">
            {isAuthenticated ? (
              <button
                type="button"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <CiLogout />
              </button>
            ) : (
              <button type="button" onClick={() => loginWithRedirect()}>
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
