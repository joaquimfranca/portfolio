
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import Home from '../Pages/Home';
import Resume from '../Pages/Resume';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyWork from '../components/MyWork';
import Contato from '../Pages/contato';
import RoutesWork from '../Routes/routesWork';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function RoutesApp() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/work/*" element={<RoutesWork />} />
      </Routes>
      <Footer />
    </Router>
  );
}
