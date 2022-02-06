import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link, NavLink } from "react-router-dom";


function nav() {

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
          <Nav>
            <Navbar.Brand as={Link} to="/">👩🏻‍💻 Alexandra Snyder</Navbar.Brand>
            {categories.map((category) => (
              <Nav.Link as={NavLink} activeClassName="is-active" to={category.linkPath}>{category.name}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default nav;
