import './MainMenu.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link

const MainMenu = () => {
  const [hoveredDisc, setHoveredDisc] = useState(null);

  return (
    <div>
      <div className="MainMenuBody">
        <div className="slide1_mainmenu">
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
            <Link to="/LogInAuthor">
              <button className="log-in-author">
                <p className="Author">Я АВТОР</p>
                <div className="line_button">
                  <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
                  </svg>
                </div>
              </button>
            </Link>
            <div className="linear-gradient"></div>
          </div>
          <div className="main_info">
            <p className="txt">APROTAG</p>
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
                <p className="num2">/002</p>
                <p className="jew2">EARRINGS</p>
              </div>
              <div className="group3">
                <p className="num2">/003</p>
                <p className="jew2">CHAINS</p>
              </div>
              <div className="group4">
                <p className="num2">/004</p>
                <p className="jew2">OTHER</p>
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

        <div className="slide2_mainmenu">
          <p className="txt_slide2">CREATIVITY.</p>
          <p className="txt2_slide2">COLABORATION.</p>
          <p className="txt3_slide2">OUR PHILOSOPHY</p>
          <p className="indo1">
            у нас такой вот сайт классный мы дает возможность такуюто такуют
          </p>
          <p className="indo2">
            вот такие вот мы классные девочки делаем всех крутыми и облегчаем
            жизни
          </p>
          <img src="img/tl(6) 5.png" alt="" className="bubble" />
          <img src="img/tl(6) 5.png" alt="" className="bubble1" />
          <div className="container">
          <svg width="365" height="56" viewBox="0 0 365 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_22_17)">
              <path d="M20 28C20 32.4183 23.5817 36 28 36C32.4183 36 36 32.4183 36 28C36 23.5817 32.4183 20 28 20C23.5817 20 20 23.5817 20 28ZM28 29.5L345 29.5L345 26.5L28 26.5L28 29.5Z" fill="white"/>
              </g>
              <defs>
              <filter id="filter0_d_22_17" x="0" y="0" width="365" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_17"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_17" result="shape"/>
              </filter>
              </defs>
              </svg>

          </div>
          <img src="img/Group 2.png" alt="" className="img_slide2" />
        </div>

        <div className="slide3">
          <img src="img/bg.png" alt="" className="bg3" />
          <p className="CATALOG">CATALOG</p>
          <div className="catalog_box"></div>
          <div className="line2"></div>
          <img
            src="img/Remove-bg.ai_1731069429847 1.png"
            alt=""
            className="acc1"
          />
          <button className="knopka_acc1">
            <p className="knopka13">ПЕРЕЙТИ</p>
            <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
          </button>
          <p className="txt_slide3">
            WITH CARING ABOUT
            <br />
            YOUR <br />
            FASHION
          </p>
          <div className="otdel1">
            <p className="name">кольца</p>
            <button className="knopka_rings">
              <p className="knopka13">ПЕРЕЙТИ</p>
              <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
            </button>
          </div>
          <div className="otdel2">
            <p className="name">серьги</p>
            <button className="knopka_earrings">
              <p className="knopka13">ПЕРЕЙТИ</p>
              <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
            </button>
          </div>
          <div className="otdel3">
            <p className="name">серьги</p>
            <button className="knopka_earrings">
              <p className="knopka13">ПЕРЕЙТИ</p>
              <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
            </button>
          </div>
          <div className="otdel4">
            <p className="name">серьги</p>
            <button className="knopka_earrings">
              <p className="knopka13">ПЕРЕЙТИ</p>
              <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
            </button>
          </div>
          <div className="otdel5">
            <p className="name">серьги</p>
            <button className="knopka_earrings">
              <p className="knopka13">ПЕРЕЙТИ</p>
              <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
            </button>
          </div>

          <div className="line3"></div>
          <div className="y2k">
            <p className="ai1">“Y2K SAKHA”</p>
            <p className="ai2">
              Новое поколение якутских украшений Авторские работы наших местных
              мастеров в современный лад
            </p>
          </div>
          <button className="knopka_y2k">
            <p className="knopka13">ПЕРЕЙТИ</p>
            <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
          </button>
          <img src="img/rhb.png" alt="" className="arhb" />
          <div className="line4"></div>
          <button className="knopka4">
            <p className="knopka13">ПЕРЕЙТИ</p>
            <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
          </button>
          <img src="img/rhb2.png" alt="" className="rhb2" />
          <img src="img/rhb3.png" alt="" className="rhb3" />
          <div className="line5"></div>
          <button className="knopka5">
            <p className="knopka13">ПЕРЕЙТИ</p>
            <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
          </button>
          <button className="knopka6">
            <p className="knopka13">ПЕРЕЙТИ</p>
            <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
          </button>
          <div className="slowtxt">
            <p className="creat">
              CREATORS
              <br />
              &<br />
              ART
            </p>
          </div>
        </div>

        <div className="slide4">
          <p className="collect">COLLECTIONS</p>
          <p className="mini_collect">FUTURE WITH AI</p>
          <img src="img/Group 10.png" alt="" className="collect_img" />
          <p className="info_collect">
            каждое украшение, представленное на нашем сайте, вы можете примерить
            не выходя из дома
          </p>
          <button className="knopka_collect">
            <p className="knopka13">TRY NOW</p>
            <div className='line_button'>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white"/>
              </svg>
            </div>
          </button>
          <div className="collection1">
            <div className="clas1">
              <p className="coll_name">“COLD WINTER”</p>
              <p className="coll_author">
                авторская коллекция от ИМЯ ФАМИЛИЯ посвященная долгой якутской
                зиме
              </p>
            </div>
            <img src="img/object (1).png" alt="" className="img1" />
            <img src="img/object (1).png" alt="" className="img2" />
            <img src="img/object (1).png" alt="" className="img3" />
            <p className="name_01">/001_name</p>
            <p className="name_02">/002_name</p>
            <p className="name_03">/003_name</p>
          </div>
          <div className="collection4">
            <div className="clas1">
              <p className="coll_name">“COLD WINTER”</p>
              <p className="coll_author">
                авторская коллекция от ИМЯ ФАМИЛИЯ посвященная долгой якутской
                зиме
              </p>
            </div>
            <img src="img/object (1).png" alt="" className="img1" />
            <img src="img/object (1).png" alt="" className="img2" />
            <img src="img/object (1).png" alt="" className="img3" />
            <p className="name_01">/001_name</p>
            <p className="name_02">/002_name</p>
            <p className="name_03">/003_name</p>
          </div>
          <div className="collection2">
            <div className="clas1">
              <p className="coll_name">“COLD WINTER”</p>
              <p className="coll_author">
                авторская коллекция от ИМЯ ФАМИЛИЯ посвященная долгой якутской
                зиме
              </p>
            </div>
            <img src="img/object (1).png" alt="" className="img1" />
            <img src="img/object (1).png" alt="" className="img2" />
            <img src="img/object (1).png" alt="" className="img3" />
            <p className="name_01">/001_name</p>
            <p className="name_02">/002_name</p>
            <p className="name_03">/003_name</p>
          </div>
          <div className="collection3">
            <div className="clas1">
              <p className="coll_name">“COLD WINTER”</p>
              <p className="coll_author">
                авторская коллекция от ИМЯ ФАМИЛИЯ посвященная долгой якутской
                зиме
              </p>
            </div>
            <img src="img/object (1).png" alt="" className="img1" />
            <img src="img/object (1).png" alt="" className="img2" />
            <img src="img/object (1).png" alt="" className="img3" />
            <p className="name_01">/001_name</p>
            <p className="name_02">/002_name</p>
            <p className="name_03">/003_name</p>
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

export default MainMenu;