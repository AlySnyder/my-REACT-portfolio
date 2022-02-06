import React from 'react';
import Nav from '../nav';
import { Outlet, Link } from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap';
import background from "../../assets/planet.jpg";
import Footer from '../footer';


function Layout({ children }) {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <Nav></Nav>
      <Container>
        <Outlet />
      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;