import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/tesla/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
        <a href="#">powerWall</a>
      </Menu>
      <RightMenu>
        <RightBar>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
        </RightBar>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <span>MENU</span>
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrap>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Demo Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Fleet</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  left: 0;
  right: 0;
  top:70px;
  position:fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: no-wrap;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: no-wrap;
  }
  a:hover {
    background-color: rgba(23, 26, 32, 0.1);
    color: black;
    padding: 10px 12px;
    border-radius: 6px;
  }
  @media (max-width: 1500px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 75px;
  padding: 10px 10px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  span:hover {
    background-color: rgba(23, 26, 32, 0.1);
    color: black;
    padding: 10px 12px;
    border-radius: 6px;
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 40px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
  }
  a {
    font-weight: 600;
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const RightBar = styled.div`
  @media (max-width: 1500px) {
    display: none;
  }
  a:hover {
    background-color: rgba(23, 26, 32, 0.1);
    color: black;
    padding: 10px 12px;
    border-radius: 6px;
  }
`;
