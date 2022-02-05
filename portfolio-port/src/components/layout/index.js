import React from 'react';
import Nav from '../nav';
import { Outlet, Link } from "react-router-dom";


function Layout({children}) {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;