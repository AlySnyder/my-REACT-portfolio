import React from 'react';
import Nav from '../nav';
import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import background from "../../assets/planet.jpg";
import Footer from '../footer';


function Layout({ children }) {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'fixed',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100%'
    }}>
      <Nav></Nav>
      <Container style={{minHeight: "100vh", width: "100%"}}fluid className="mt-5">
        <Outlet />
      </Container>
      <footer style={{bottom: 0, position: "relative", width: "100%"}}>
        <Footer/>
      </footer>
    </div>
  );
}

export default Layout;