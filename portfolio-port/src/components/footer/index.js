import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link, NavLink } from "react-router-dom";


function Footer() {

  const categories = [
    {
      name: "About Me",
      description:
        "What Alex Snyder is all about!",
      linkPath: "/about",
    },
    { name: "Contact", description: "Contact me via E-mail", linkPath: '/contact' },
    { name: "Resume", description: "Download my Resume here!", linkPath: '/resume' },
    {
      name: "Portfolio",
      description: "Check out my projects!", linkPath: '/portfolio'
    },
  ];

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="https://github.com/AlySnyder" target="_blank">github</Nav.Link>
            <Nav.Link href="https://www.linkedin.com" target="_blank">linkedin</Nav.Link>
            <Nav.Link href="https://twitter.com/i/flow/login" target="_blank">Twitter</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Footer;
