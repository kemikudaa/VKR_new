import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JewelryViewer from './components/JewelryViewer'; 
import EarTracker from './components/EarTracker';
import MainMenu from './components/MainMenu';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/jewelry/:jewelryId" element={<JewelryViewer />} />
        <Route path="/EarTracker" element={<EarTracker />} />


      </Routes>
    </Router>
  );
}

export default App;
