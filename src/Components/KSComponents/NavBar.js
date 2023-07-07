// Still to complete for NavBar:
// - - Menu items in drop down
//-- signup/login/lang to move to drop down

import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  Bars,
  NavLogin,
} from "./NavBarElements";
import "./navBar.css";
import Logo from "../../images/src-assets/NavBar/LevelUpWorks-white.png";
import Avatar from "../../images/src-assets/NavBar/Avatar-white.png";
import NZFlag from "../../images/src-assets/NavBar/NZFlag.png";
import MāoriFlag from "../../images/src-assets/NavBar/MaoriFlag.png";
import { Login } from "./logIn/Login";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const NavBar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <Nav>
        <img src={Logo} alt="LevelUpLogo" className="logoMain" />
        <Bars onClick={handleDropdown} />
        <div className={`navMenu ${dropdownOpen ? "active" : ""}`}>
          <NavLink to="/" activestyle="true">
            HOME
          </NavLink>
          <NavLink to="/Features" activestyle="true">
            FEATURES
          </NavLink>
          <NavLink to="/Teachers" activestyle="true">
            TEACHERS
          </NavLink>
        </div>
        <div className="navRight">
          <div className="navLang">
            LANG
            <img src={NZFlag} alt="NZFlag" />
            <img src={MāoriFlag} alt="MāoriFlag" />
          </div>
          <NavLogin>
            <NavBtn>
              <img src={Avatar} alt="LoginAvatar" className="navAvatar" />
              <NavBtnLink onClick={handleOpenLogin}>
                REGISTER | LOGIN
              </NavBtnLink>
              <Login open={openLogin} handleClose={() => setOpenLogin(false)} />
            </NavBtn>
          </NavLogin>
        </div>
      </Nav>
      <Dropdown>
        <div className={`dropdownContainer ${dropdownOpen ? "active" : ""}`}>
          <DropdownItem>
            <NavLink to="/" activestyle="true">
              HOME
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink to="/Features" activestyle="true">
              FEATURES
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink to="/Teachers" activestyle="true">
              TEACHERS
            </NavLink>
          </DropdownItem>

          <DropdownItem>
            <NavBtnLink onClick={handleOpenLogin}>REGISTER | LOGIN</NavBtnLink>
          </DropdownItem>
          <Login open={openLogin} handleClose={() => setOpenLogin(false)} />

          <DropdownItem>
            <div className="navLang">
              LANG
              <img src={NZFlag} alt="NZFlag" />
              <img src={MāoriFlag} alt="MāoriFlag" />
            </div>
          </DropdownItem>
        </div>
      </Dropdown>
    </div>
  );
};

export default NavBar;
