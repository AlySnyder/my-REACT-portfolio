import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/about';
import Layout from './components/layout';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Nav from './components/nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
            {/*add blog later*/}
          </Route>
          {/* <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
