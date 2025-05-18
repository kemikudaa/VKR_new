import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JewelryViewer from './components/JewelryViewer'; 
import EarTracker from './components/EarTracker';
import MainMenu from './components/MainMenu';
import Catalog from './components/Catalog';
import AboutUs from './components/AboutUs';
import Collections from './components/Collections';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/jewelry/:jewelryId" element={<JewelryViewer />} />
        <Route path="/EarTracker" element={<EarTracker />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Collections" element={<Collections />} />
      </Routes>
    </Router>
  );
}

export default App;
