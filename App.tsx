import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Territory from './pages/Territory';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/prodotti" element={<Products />} />
          <Route path="/territorio" element={<Territory />} />
          <Route path="/qualita" element={<Quality />} />
          <Route path="/contatti" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
