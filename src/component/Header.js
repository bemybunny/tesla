import React, { useState } from "react";
import "./header.css";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <div className="container">
      <div>
        <img src="logo.svg" alt="" />
      </div>
      <div className="menu">
        <text>Model S</text>
        <text>Model 3</text>
        <text>Model X</text>
        <text>Solar Roof</text>
        <text>Solar Panels</text>
        <text>powerWall</text>
      </div>
      <div className="rightMenu">
          <div className="rightBar">
              <text>Shop</text>
              <text>Tesla Account</text>
          </div>
          <div
          className="customMenu" onClick={() => {setBurgerStatus(true); }}>
          <text>MENU</text>
          </div>
      </div>
      {burgerStatus ? (
        <div className="burgerNav" >
          <div className="closeWrap">
            <div
              className="customClose"
              onClick={() => {
                setBurgerStatus(false);
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <li>
            <text>Model S</text>
          </li>
          <li>
            <text>Model 3</text>
          </li>
          <li>
            <text>Model X</text>
          </li>
          <li>
            <text>Solar Roof</text>
          </li>
          <li>
            <text>Solar Panels</text>
          </li>
          <li>
            <text>PowerWall</text>
          </li>
          <li>
            <text>Existing Inventory</text>
          </li>
          <li>
            <text>Used Inventory</text>
          </li>
          <li>
            <text>Trade-In</text>
          </li>
          <li>
            <text>Demo Drive</text>
          </li>
          <li>
            <text>Insurance</text>
          </li>
          <li>
            <text>Fleet</text>
          </li>
          <li>
            <text>More</text>
          </li>
        </div>
      ) : false}
    </div>
  );
}

export default Header;
