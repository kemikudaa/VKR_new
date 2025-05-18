import './MainMenu.css';
import React, { useState } from 'react';

const Collections = () => {
    const [hoveredDisc, setHoveredDisc] = useState(null);
    return (
    <div>
      <div className='MainMenuBody'>
      <div className="slide1">
        <img src="img/bg (3).png" alt="" className="bg1" />
        <div className="navbar">
          <div className="menu">
            <button className="menu_1">О НАС</button>
            <button className="menu_2">КАТАЛОГ</button>
            <button className="menu_3">КОЛЛЕКЦИИ</button>
          </div>
          <div className="logo">
            <p className="logo_txt">apro__ ___tag.</p>
          </div>
          <button className="log-in-author">
            <p className="Author">Я АВТОР</p>
            <img src="img/Arrow1.png" alt="Arrow" className="img_line" />
          </button>
          <div className="linear-gradient"></div>
        </div>
        <div className="main_info">
          <p className="txt">Collections</p>
          <img
            src="img/Remove-bg.ai_1731065735842 1.png"
            alt="1"
            className="big_img"
          />
          </div>
        </div>
        </div>
    </div>
  );
};

export default Collections;