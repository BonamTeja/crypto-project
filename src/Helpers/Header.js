import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { removeAccount } from "../Redux/RegisterSlice";
import axios from "axios";
import { editForm } from "../Redux/EditSlice";

const Header = () => {
  const listItem = useSelector((state) => state.list.Watchlist);
  const data = useSelector((state) => state.editpage.edit);
  const registerItems = useSelector((state) => state.register.register);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let count = 0;
  for (let item of listItem) {
    count = count + item.quantity;
  }
  const logoutFunction = (e) => {
    alert("If you logout, You will directed to Login or Register Page.");
    dispatch(editForm(null));
    //navigate('/login')
  };

  const removeFunction = async (e, account) => {
    try {
      console.log(account, "removeItem");
      const response = await fetch("http://localhost:5500/users/removeuser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });
      const data = await response.json();
      console.log(data?.message, data, 'deleted');
      dispatch(removeAccount(account));
    } catch (error) {
      console.error("Failed to remove the account:", error.message);
    }
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: " #f0f0f0",
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 999,
        }}
      >
        <main className="container-fluid">
          <NavLink className="navbar-brand fw-bold" to="/">
            Crypto Clash
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <section
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "white" : "none",
                    borderRadius: isActive ? "8px" : "none",
                  })}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "white" : "none",
                    borderRadius: isActive ? "8px" : "none",
                  })}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  to="/dashboard"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "white" : "none",
                    borderRadius: isActive ? "8px" : "none",
                  })}
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/settings"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "white" : "none",
                    borderRadius: isActive ? "8px" : "none",
                  })}
                >
                  Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/allCoins"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "white" : "none",
                    borderRadius: isActive ? "8px" : "none",
                  })}
                >
                  All Coins
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/portfolio"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "white" : "none",
                    borderRadius: isActive ? "8px" : "none",
                  })}
                >
                  Portfolio
                </NavLink>
              </li>
            </ul>
            <article className="d-flex text-center">
              <ul className="navbar-nav nav-pills me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2 my-1">
                  <NavLink
                    className="btn btn-danger text-white fw-bold"
                    to="/list"
                  >
                    Wishlist({count})
                  </NavLink>
                </li>
                <li className="nav-item mx-2 my-1">
                  <NavLink
                    className="nav-link"
                    id="login_header"
                    to="/login"
                    onClick={(e) => logoutFunction(e)}
                  >
                    Logout
                  </NavLink>
                </li>
                <li className="nav-item my-1">
                  <NavLink className="nav-link" id="register_header" to="/">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item my-1">
                  <NavLink
                    className="btn btn-danger text-white fw-bold"
                    to="/"
                    onClick={(e) => removeFunction(e, data[0])}
                  >
                    Remove Account
                  </NavLink>
                </li>
              </ul>
            </article>
          </section>
        </main>
      </nav>
    </React.Fragment>
  );
};

export default Header;
