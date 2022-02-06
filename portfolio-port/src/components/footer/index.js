import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


function Footer() {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="m-auto">
          <Nav.Link href="https://github.com/AlySnyder" target="_blank">github</Nav.Link>
          <Nav.Link href="https://www.linkedin.com" target="_blank">linkedin</Nav.Link>
          <Nav.Link href="https://twitter.com/i/flow/login" target="_blank">Twitter</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
