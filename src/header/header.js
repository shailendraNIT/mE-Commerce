import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../Providers/StateContext";

const Header = () => {
  const [{cart}]=useStateValue();
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
        <div className="header_nav_option">
          <span className="nav_option_line_one">Hello,Sign in</span>
          <span className="nav_option_line_two">Account & lists</span>
        </div>
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
