import './MainMenu.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link

const AboutUs = () => {
    const [hoveredDisc, setHoveredDisc] = useState(null);
    return (
    <div>
      <div className='MainMenuBody'>
      <div className="slide1">
        <img src="img/bg (3).png" alt="" className="bg1" />
        <div className="navbar">
          <div className="menu">
              <Link to="/AboutUs">
                <button className="menu_1">О НАС</button>
              </Link>
              <Link to="/catalog">
                <button className="menu_2">КАТАЛОГ</button>
              </Link>
              <Link to="/Collections">
                <button className="menu_3">КОЛЛЕКЦИИ</button>
              </Link>
          </div>
          <div className="logo">
            <p className="logo_txt">apro__ ___tag.</p>
          </div>
          <button className="log-in-author">
          <p className="Author">Я АВТОР</p>
              <div className="line_button">
                <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
                </svg>
              </div>
          </button>
          <div className="linear-gradient"></div>
        </div>
        <div className="main_info">
          <p className="txt">AboutUs</p>
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

export default AboutUs;