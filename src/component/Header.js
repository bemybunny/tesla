import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <div>
        <img src="/tesla/logo.svg" alt="" />
      </div>
      <Menu>
        <text>Model S</text>
        <text>Model 3</text>
        <text>Model X</text>
        <text>Solar Roof</text>
        <text>Solar Panels</text>
        <text>powerWall</text>
      </Menu>
      <RightMenu>
        <RightBar>
          <text>Shop</text>
          <text>Tesla Account</text>
        </RightBar>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <span>MENU</span>
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrap>
        <li><text>Model S</text> </li>
        <li><text>Model 3</text> </li>
        <li><text>Model X</text> </li>
        <li><text>Solar Roof</text> </li>
        <li><text>Solar Panels</text> </li>
        <li><text>powerWall</text> </li>
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
  text{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: no-wrap;
  }
  text:hover {
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
  text{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  text:hover {
    background-color: rgba(23, 26, 32, 0.1);
    color: black;
    padding: 10px 12px;
    border-radius: 6px;
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
  text {
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
