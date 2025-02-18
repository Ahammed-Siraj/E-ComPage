import React from "react";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";

const Header = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-dark bg-dark p-3" bg="dark" variant="dark">
      <span className="navbar-brand" href="#">
        E-Commerce
      </span>

      <a href="#cart1" style={{ alignSelf: "end" }}>
        Cart ({cartCount})
      </a>
    </nav>
  );
};

export default Header;
// const Header = () => (
//   <nav className="navbar navbar-dark bg-dark p-3">
//     <span className="navbar-brand">Amazoon Clone</span>
//   </nav>
// );
