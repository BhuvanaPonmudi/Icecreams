import  "../styles/HeaderBar.css";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "reactstrap";
import { useState } from "react";
import { Nav,Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem,NavLink,DropdownItem,DropdownMenu,DropdownToggle,NavbarText,UncontrolledDropdown} from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../src/logo1.jpg"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./home";
import Flavours1 from "./flavours.js";
import Nutrition from "./nutrition.js";
import Stores from "./store";
import Prices from "./price";

function HeaderBar({val}) {
  let user = localStorage.getItem("EmailID");

  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  function logIn() {
    navigate("/flavours");
  }
const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
        <div>

    <Navbar
      color="light"
      expand="md"
      light
    >
      <NavbarBrand>
      <img width="70px" height="auto" className="img-responsive" src={logo}/>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/flavours">
              Flavours
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/nutrition">
              Nutrition
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/price">
             Prices
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/store">
             Stores
            </NavLink>
          </NavItem>
        </Nav>


      </Collapse>
      <NavDropdown title="Hello">
          {user ? (
            <NavDropdown.Item onClick={logOut}>LogOut</NavDropdown.Item>
          ) : (
            <NavDropdown.Item onClick={logIn}>LogIn</NavDropdown.Item>
          )}
        </NavDropdown>
    </Navbar>
    <div className="routes">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/flavours" element={<Flavours1></Flavours1>} />
          <Route path="/nutrition" element={<Nutrition></Nutrition>} />
          <Route path="/price" element={<Prices></Prices>} />
          <Route path="/store" element={<Stores></Stores>} />
        </Routes>
        </div>

  </div>)}
export default HeaderBar;

