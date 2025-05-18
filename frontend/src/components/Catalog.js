import './MainMenu.css';
import React, { useState } from 'react';

const App = () => {
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
          <p className="txt">CATALOG</p>
          <img
            src="img/Remove-bg.ai_1731065735842 1.png"
            alt="1"
            className="big_img"
          />
          <div className="quote">
            <img src="img/Group 4.png" alt="img_quote" className="img_quote" />
            <p className="txt_quote">
              simple vision of future elements create your indiIndividuality
            </p>
          </div>
          <div className="jewerly_info">
            <div className="group1">
              <p className="num1">/001</p>
              <p className="jewl">RINGS</p>
            </div>
            <div className="group2">
              <p className="num1">/002</p>
              <p className="jewl">EARRINGS</p>
            </div>
            <div className="group3">
              <p className="num1">/003</p>
              <p className="jewl">CHAINS</p>
            </div>
            <div className="group4">
              <p className="num1">/004</p>
              <p className="jewl">CHAINS</p>
            </div>
          </div>

          <div
            className={`disc1${hoveredDisc === 1 ? ' disc1-hover' : ''}`}
            onMouseEnter={() => setHoveredDisc(1)}
            onMouseLeave={() => setHoveredDisc(null)}
            style={{ cursor: 'pointer' }}
          >
            <div className="disc11">
              {hoveredDisc === 1 && (
                <button className="knopka">
                  <p className="knopka1">ПЕРЕЙТИ</p>
                  <img src="img/Arrow2.png" alt="" className="Arrow1" />
                </button>
              )}
              <p className={`txt2${hoveredDisc === 1 ? ' txt1' : ''}`}>CREATIVITY.</p>
              <p className={`txt22${hoveredDisc === 1 ? ' txt11' : ''}`}>
                у нас такой вот сайт классный мы дает возможность такуюто такуют
              </p>
            </div>
          </div>
          <div
            className={`disc2${hoveredDisc === 2 ? ' disc1-hover' : ''}`}
            onMouseEnter={() => setHoveredDisc(2)}
            onMouseLeave={() => setHoveredDisc(null)}
            style={{ cursor: 'pointer' }}
          >
            <div className="disc12">
              {hoveredDisc === 2 && (
                <button className="knopka">
                  <p className="knopka1">ПЕРЕЙТИ</p>
                  <img src="img/Arrow2.png" alt="" className="Arrow1" />
                </button>
              )}
              <p className={`txt2${hoveredDisc === 2 ? ' txt1' : ''}`}>CREATIVITY.</p>
              <p className={`txt22${hoveredDisc === 2 ? ' txt11' : ''}`}>
                у нас такой вот сайт классный мы дает возможность такуюто такуют
              </p>
            </div>
          </div>
          <img src="img/object (3).png" alt="object1" className="object1" />
          <img src="img/object (1).png" alt="object2" className="object2" />
        </div>
      </div>
      <div className="slide5">
        <img src="img/bg.png" alt="" className="bg" />
        <p className="copyright">copyright</p>
      </div>
    </div>
    </div>
  );
};

export default App;