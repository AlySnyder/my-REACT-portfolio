import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/about';
import Layout from './components/layout';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Resume from './components/resume';



function App() {

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
            {/* <Route path="*" element={<NoPage />} /> */}
            {/*add blog later*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
