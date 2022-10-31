import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../Providers/StateContext";
import { auth } from "../firebase";

const Header = () => {
  const [{ cart, user }] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={require("./logo.png")}
          alt="header_logo"
        />
      </Link>

      <div className="header_search">
        <input className="search_box" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_nav_option" onClick={handleAuth}>
            <span className="nav_option_line_one">Hello, Guest</span>
            <span className="nav_option_line_two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_nav_option">
          <span className="nav_option_line_one">Returns</span>
          <span className="nav_option_line_two">& Orders</span>
        </div>

        <Link to="/checkout">
          <div className="header_nav_option" href="/checkout">
            <span className="nav_option_line_one">{cart?.length}</span>
            <AddShoppingCartIcon className="nav_option_line_two cart_icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
