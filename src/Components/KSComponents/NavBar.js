// Imports:
import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  Bars,
  NavLogin,
} from "./NavBarElements"; //Using for styled components
import "./navBar.css";
import Logo from "../../images/src-assets/NavBar/LevelUpWorks-white.png";
import Avatar from "../../images/src-assets/NavBar/Avatar-white.png";
import NZFlag from "../../images/src-assets/NavBar/NZFlag.png";
import MāoriFlag from "../../images/src-assets/NavBar/MaoriFlag.png";
import { Login } from "./logIn/Login"; //Login Modal component
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown"; //Using for dropdown menu for under 768px
import DropdownItem from "react-bootstrap/esm/DropdownItem"; //Using for dropdown menu for under 768px

const NavBar = () => {
  const [openLogin, setOpenLogin] = useState(false); //set default state of login modal as not open
  const [dropdownOpen, setDropdownOpen] = useState(false); // set default state as not open

  const handleOpenLogin = () => {
    setOpenLogin(true); // handles the change of the login modal state to open
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // handles the change of the state variable to open
  };

  return (
    <div>
      <Nav>
        <img src={Logo} alt="LevelUpLogo" className="logo-main" />
        {/* // Bars icon for dropdown menu - onclick handles dropdown menu */}
        <Bars onClick={handleDropdown} />
        <div className={`nav-menu ${dropdownOpen ? "active" : ""}`}>
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
        {/* // Language section incl link and flag imgs*/}
        <div className="nav-right">
          <div className="nav-lang">
            LANG
            <img src={NZFlag} alt="NZFlag" />
            <img src={MāoriFlag} alt="MāoriFlag" />
          </div>
          <NavLogin>
            {/* // Avatar and Login/Register section:*/}
            <NavBtn>
              <img src={Avatar} alt="LoginAvatar" className="nav-avatar" />
              <NavBtnLink onClick={handleOpenLogin}>
                REGISTER | LOGIN
              </NavBtnLink>
              <Login open={openLogin} handleClose={() => setOpenLogin(false)} />
            </NavBtn>
          </NavLogin>
        </div>
      </Nav>
      {/* // Dropdown Menu section:*/}
      <Dropdown>
        <div className={`dropdown-container ${dropdownOpen ? "active" : ""}`}>
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
            {/* // Register/login button that opens modal onclick*/}
            <NavBtnLink onClick={handleOpenLogin}>REGISTER | LOGIN</NavBtnLink>
          </DropdownItem>
          <Login open={openLogin} handleClose={() => setOpenLogin(false)} />

          <DropdownItem>
            <div className="nav-lang">
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
