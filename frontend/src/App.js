import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JewelryViewer from './components/JewelryViewer';
import MainMenu from './components/MainMenu';
import Catalog from './components/Catalog';
import AboutUs from './components/AboutUs';
import Collections from './components/Collections';
import LogInAuthor from './components/LogInAuthor';
import SimpleNeckDetection from './components/FaceDetection';
import RealNeckDetection from './components/RealNeckDetection';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Русская версия */}
          <Route path="/" element={<MainMenu lang="ru" />} />
          <Route path="/jewelry/:jewelryId" element={<JewelryViewer lang="ru" />} />
          <Route path="/Catalog" element={<Catalog lang="ru" />} />
          <Route path="/AboutUs" element={<AboutUs lang="ru" />} />
          <Route path="/Collections" element={<Collections lang="ru" />} />
          <Route path="/LogInAuthor" element={<LogInAuthor lang="ru" />} />
          
          {/* Английская версия (запланировано) */}
          <Route path="/en/" element={<MainMenu lang="en" />} />
          <Route path="/en/jewelry/:jewelryId" element={<JewelryViewer lang="en" />} />
          <Route path="/en/Catalog" element={<Catalog lang="en" />} />
          <Route path="/en/AboutUs" element={<AboutUs lang="en" />} />
          <Route path="/en/Collections" element={<Collections lang="en" />} />
          {/* LogInAuthor не включена для английской версии, так как не индексируется */}

          <Route path="/neck-detection" element={<SimpleNeckDetection />} />
          <Route path="/real-neck-detection" element={<RealNeckDetection />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;