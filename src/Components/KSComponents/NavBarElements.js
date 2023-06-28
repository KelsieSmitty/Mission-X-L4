import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

//nav bar:
export const Nav = styled.nav`
  background: #52bff3;
  color: #fff;
  width: 1920px;
  height: 64px;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0 0.25rem 0;
  margin: 0;
  border: #41baef solid 1px;
  font-family: "Open Sans", sans-serif, bold;
`;

// Home/features/teachers links:
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;
  padding: 32px 100px 10px 100px;
  cursor: pointer;
  
  }
`;

// Hamburger:
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 16px;
    cursor: pointer;
  }
`;

// Avatar/login and register:
export const NavLogin = styled.nav`
  display: flex;
  justify-content: space-around;
  padding-top: 12px;
  padding-bottom: 10px;
  height: 22px;
  margin: 0;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  background: #52bff3;
  color: #fff;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 10px;
  margin: 0;
`;
