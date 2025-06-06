import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import './JewelryViewer.css';
import { Link } from 'react-router-dom'; 

const JewelryViewer = () => {
  const { jewelryId } = useParams();
  const [jewelry, setJewelry] = useState(null);

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/jewelries/${jewelryId}`)
      .then(response => {
        setJewelry(response.data);
      })
      .catch(error => {
        console.error('Error loading jewelry:', error);
        alert('Failed to load jewelry. Please try again later.');
      });
  }, [jewelryId]);

  const Model = ({ fileUrl }) => {
    const { scene } = useGLTF(fileUrl);
    return <primitive object={scene} />;
  };

  if (!jewelry) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="JewelryBody">
      <div className="slide1">
        <img src="/img/bgjewel.png" alt="Background" className="bg1_jewelry" />
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
        <div className="group1">
          <div className="custom-rectangle-svg">
            <svg width="1320" height="179" viewBox="0 0 1320 179" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_255_228)">
                <path d="M1280 0H0V40.478H677.623L770.179 139H1253.45L1280 110.742V0Z" fill="#121212"/>
                <path d="M1279.75 0.25V110.642L1253.34 138.75H770.287L677.806 40.3066L677.731 40.2275H0.25V0.25H1279.75Z" stroke="white" strokeWidth="0.5"/>
              </g>
              <defs>
                <filter id="filter0_d_255_228" x="0" y="0" width="1320" height="179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="10"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_255_228"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_255_228" result="shape"/>
                </filter>
              </defs>
            </svg>
            <div className="content-inside">
              <p className="coll_name_jewelry">HOME / 002_EARRINGS / {jewelry.name || "JEWELRY"}</p>
              <p className="coll_author_jewelry">COLLECTION BY {jewelry.author?.name || "AUTHOR"}</p>
              <p className="coll_txt_jewelry">"{jewelry.collection?.name || "COLLECTION"}"</p>
            </div>
          </div>
          <div className="custom-rectangle-svg2">
            <svg width="765" height="108" viewBox="0 0 765 108" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_255_225)">
                <path d="M20 88H744.5L681.5 20.4604H20V88Z" fill="#A8A8A8"/>
                <path d="M681.392 20.7104L743.926 87.7504H20.25V20.7104H681.392Z" stroke="white" strokeWidth="0.5"/>
              </g>
              <defs>
                <filter id="filter0_d_255_225" x="0" y="0.460388" width="764.5" height="107.54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="10"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_255_225"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_255_225" result="shape"/>
                </filter>
              </defs>
            </svg>
            <div className="content-inside2">
              <p className="coll_name2">/002_EARRINGS</p>
            </div>
          </div>
        </div>
        <div className="group4">
          <p className="NameJewelry">{jewelry.name || "Number One earring"}</p>
          <p className="artic">артикул_ID: {jewelry.sku || "3757874"}</p>
        </div>
        <div className="custom-rect4">
          <svg width="362" height="579" viewBox="0 0 362 579" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_ii_255_257)">
              <path d="M346.104 3V330.009C346.104 330.729 346.363 331.425 346.834 331.97L361.27 348.68C361.741 349.225 362 349.922 362 350.642V447.906C362 448.863 361.543 449.763 360.77 450.328L185.543 578.422C185.03 578.798 184.409 579 183.773 579H67.9679C66.3111 579 64.9679 577.657 64.9679 576V310.529C64.9679 309.693 65.317 308.894 65.9309 308.327L78.8935 296.337C79.5074 295.769 79.8564 294.971 79.8564 294.135V170.943C79.8564 170.107 79.5074 169.309 78.8935 168.741L0.962957 96.6604C0.349044 96.0926 0 95.2943 0 94.458V25.7236C0 24.8873 0.349045 24.0891 0.962957 23.5212L25.5309 0.797625C26.0853 0.28483 26.8127 0 27.5679 0H343.104C344.761 0 346.104 1.34315 346.104 3Z" fill="#303030"/>
            </g>
            <defs>
              <filter id="filter0_ii_255_257" x="-9" y="-5" width="379" height="591" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="8" dy="7"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4  Alamofire 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_255_257"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-9" dy="-5"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="effect1_innerShadow_255_257" result="effect2_innerShadow_255_257"/>
              </filter>
            </defs>
          </svg>
          <div className="content-inside4">
            <p className="coll_name4">Описание изделия:</p>
            <p className="coll_txt4">
              Металл: черненое серебро 925 пробы с матовой полировкой<br /><br />
              Вставки: прозрачные кристаллы с эффектом «замерзшего стекла» или холодные сапфиры<br /><br />
              Особенности: асимметричные элементы, напоминающие сколотый лед
            </p>
          </div>
        </div>
        <div className="custom-rect3">
          <svg width="516" height="604" viewBox="0 0 516 604" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_di_255_263)">
              <path d="M103.099 63.7162L47 11H469.847L500 39.335V520.37L466.341 552V359.387L426.868 309.505V287.101L285.421 164.536H265.085L251.06 151.357H145.875L103.099 111.161V63.7162Z" fill="#A8A8A8"/>
              <path d="M103.099 63.7162L47 11H469.847L500 39.335V520.37L466.341 552V359.387L426.868 309.505V287.101L285.421 164.536H265.085L251.06 151.357H145.875L103.099 111.161V63.7162Z" stroke="white"/>
            </g>
            <defs>
              <filter id="filter0_di_255_263" x="0.737793" y="0.5" width="514.762" height="602.656" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-15" dy="20"/>
                <feGaussianBlur stdDeviation="15"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_255_263"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_255_263" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-18" dy="13"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_255_263"/>
              </filter>
            </defs>
          </svg>
          <div className="content-inside3">
            <p className="coll_name3">{jewelry.description || "Вдохновленное хрустальной чистотой арктических пейзажей, это кольцо воплощает холодное великолепие зимы"}</p>
            <p className="coll_txt2">{jewelry.author?.name || "John Doe"}</p>
          </div>
        </div>
        <div className="line">
          <svg width="236" height="6" viewBox="0 0 236 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M230.333 2.99998C230.333 4.47274 231.527 5.66665 233 5.66665C234.473 5.66665 235.667 4.47274 235.667 2.99998C235.667 1.52722 234.473 0.333313 233 0.333313C231.527 0.333313 230.333 1.52722 230.333 2.99998ZM0 3L4.37114e-08 3.5L233 3.49998L233 2.99998L233 2.49998L-4.37114e-08 2.5L0 3Z" fill="black"/>
          </svg>
        </div>
        <div className="custom-rect5">
          <svg width="29" height="288" viewBox="0 0 29 288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.464 35L0.882812 2V13L28.464 46V35Z" fill="white" stroke="black"/>
            <path d="M28.464 55L0.882812 22V33L28.464 66V55Z" fill="white" stroke="black"/>
            <path d="M28.464 75L0.882812 42V53L28.464 86V75Z" fill="white" stroke="black"/>
            <path d="M28.464 95L0.882812 62V73L28.464 106V95Z" fill="white" stroke="black"/>
            <path d="M28.464 115L0.882812 82V93L28.464 126V115Z" fill="white" stroke="black"/>
            <path d="M28.464 135L0.882812 102V113L28.464 146V135Z" fill="white" stroke="black"/>
            <path d="M28.464 155L0.882812 122V133L28.464 166V155Z" fill="white" stroke="black"/>
            <path d="M28.464 175L0.882812 142V153L28.464 186V175Z" fill="white" stroke="black"/>
            <path d="M28.464 195L0.882812 162V173L28.464 206V195Z" fill="white" stroke="black"/>
            <path d="M28.464 215L0.882812 182V193L28.464 226V215Z" fill="white" stroke="black"/>
            <path d="M28.464 235L0.882812 202V213L28.464 246V235Z" fill="white" stroke="black"/>
            <path d="M28.464 255L0.882812 222V233L28.464 266V255Z" fill="white" stroke="black"/>
            <path d="M28.464 275L0.882812 242V253L28.464 286V275Z" fill="white" stroke="black"/>
          </svg>
        </div>
        <div className="custom_img">
          <svg width="169" height="229" viewBox="0 0 169 229" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2917 1H1V228H160.789L169 215.661V1H72.0318L69.1645 5.30889H20.159L17.2917 1Z" fill="black" fillOpacity="0.3"/>
            <path d="M17.2917 1H1V228H160.789L169 215.661V1H72.0318L69.1645 5.30889H20.159L17.2917 1Z" stroke="white"/>
          </svg>
          <img src="/img/buttonImg1.png" alt="button_image" className="image2jewel"/>
        </div>
        <div className="button_img">
          <svg width="23" height="160" viewBox="0 0 23 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2 1H1V159H22V9.34608L16.2 1Z" fill="white" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        <button className="img_cust">другие_изделия_автора</button>
        <div className="custom_rect6">
          <svg width="247" height="420" viewBox="0 0 247 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="-15" y="-15" width="277" height="450">
              <div style={{ backdropFilter: 'blur(7.5px)', clipPath: 'url(#bgblur_0_255_236_clip_path)', height: '100%', width: '100%' }}></div>
            </foreignObject>
            <path data-figma-bg-blur-radius="15" d="M246.5 0.5V419.5H78.8389L49.0176 394.734V236.36H0.5V34.4199L41.3477 0.5H246.5Z" fill="white" fillOpacity="0.1" stroke="white"/>
            <defs>
              <clipPath id="bgblur_0_255_236_clip_path" transform="translate(15 15)">
                <path d="M246.5 0.5V419.5H78.8389L49.0176 394.734V236.36H0.5V34.4199L41.3477 0.5H246.5Z"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="custom_rect7">
          <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25.6395V0H30.875L0 25.6395Z" fill="white"/>
          </svg>
        </div>
        <div className="custom_rect8">
          <svg width="39" height="152" viewBox="0 0 39 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.186035" width="38.2261" height="12.2093" fill="white"/>
            <rect y="17.2791" width="38.2261" height="12.2093" fill="white"/>
            <rect y="34.3721" width="38.2261" height="13.4302" fill="white"/>
            <rect y="52.686" width="38.2261" height="12.2093" fill="white"/>
            <rect y="69.7791" width="38.2261" height="12.2093" fill="white"/>
            <rect y="86.8721" width="38.2261" height="12.2093" fill="white"/>
            <rect y="103.965" width="38.2261" height="13.4302" fill="white"/>
            <rect y="122.279" width="38.2261" height="12.2093" fill="white"/>
            <rect y="139.372" width="38.2261" height="12.2093" fill="white"/>
          </svg>
        </div>
        <div className="custom_rect9">
          <svg width="188" height="49" viewBox="0 0 188 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M187 48H25.2609H1V22.2258L25.2609 1H187V48Z" stroke="white"/>
          </svg>
        </div>
        <div className="custom_img2">
          <svg width="254" height="229" viewBox="0 0 254 229" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.2846 1H0.854004V227.521H240.47L252.783 215.208V1H107.372L103.072 5.29979H29.5844L25.2846 1Z" fill="black" fillOpacity="0.3"/>
            <path d="M25.2846 1H0.854004V227.521H240.47L252.783 215.208V1H107.372L103.072 5.29979H29.5844L25.2846 1Z" stroke="white"/>
          </svg>
          <img src="/img/buttonImg2.png" alt="button_image" className="image1jewel"/>

        </div>
        <div className="custom-rect10">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-0.00292969 6.68086V4.14905C-0.00292969 1.93991 1.78793 0.149048 3.99707 0.149048H6.59064C10.1775 0.149048 11.9515 4.50577 9.38478 7.01135L6.79122 9.54317C4.25778 12.0163 -0.00292969 10.2213 -0.00292969 6.68086Z" fill="white"/>
          </svg>
        </div>
        <div className="custom_rect11">
          <svg width="23" height="110" viewBox="0 0 23 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8538 1.22153H1V108.521H21.5217V6.88944L15.8538 1.22153Z" fill="white" stroke="white"/>
          </svg>
        </div>
        <button className="img_cust2">фото_на_модели</button>
        <p className="price_jewelry">
          {jewelry.price ? `${jewelry.price} Р.` : "1800 Р."}
        </p>
        <p className="color_jewelry">
          <span className="color-label">Материал:</span>
          <span className="color-value">{
            jewelry.materials && jewelry.materials.length > 0 
              ? jewelry.materials.map(m => m.name).join(', ')
              : "SILVER"
          }</span>
        </p>
        <p className="size_jewelry">
          <span className="color-label">Размер:</span>
          <span className="color-value">{jewelry.dimensions || "one size"}</span>
        </p>
        <button className="buy">
          <p className="buy1">КУПИТЬ</p>
          <div className="line_buy">
            <svg width="45" height="12" viewBox="0 0 45 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_255_284)">
                <path d="M42.8491 6.10794C43.0468 5.91514 43.0508 5.59858 42.8579 5.40089L39.716 2.17939C39.5232 1.9817 39.2066 1.97775 39.0089 2.17055C38.8112 2.36336 38.8073 2.67992 39.0001 2.8776L41.7929 5.74116L38.9294 8.53402C38.7317 8.72682 38.7277 9.04338 38.9205 9.24107C39.1134 9.43875 39.4299 9.44271 39.6276 9.24991L42.8491 6.10794ZM2.5 5.25L2.49375 5.74996L42.4937 6.24996L42.5 5.75L42.5062 5.25004L2.50625 4.75004L2.5 5.25Z" fill="black"/>
              </g>
              <defs>
                <filter id="filter0_d_255_284" x="0.493652" y="0.0285034" width="44.5063" height="11.3635" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="1"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_255_284"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_255_284" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
        </button>
        <div className="color_metall">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#9E9E9E"/>
          </svg>
        </div>
        <div className="jewelry_3d">
          {jewelry.three_d_file ? (
            <Canvas style={{ width: '505.75px', height: '444px' }}>
              <PerspectiveCamera makeDefault position={[0, 0, 1]} fov={25} /> {/* для колец 10 */}
              <ambientLight intensity={1.0} color="white" />
              <directionalLight position={[5, 5, 5]} intensity={2} color="white" />
              <directionalLight position={[-5, -5, 5]} intensity={1} color="white" />
              <directionalLight position={[0, 10, 0]} intensity={1.5} color="white" />
              <pointLight position={[2, 2, 2]} intensity={1} color="white" />
              <pointLight position={[-2, -2, 2]} intensity={1} color="white" />              
              <OrbitControls minDistance={2} maxDistance={10} />
              <Model fileUrl={`http://127.0.0.1:8000/${jewelry.three_d_file}`} />
            </Canvas>
          ) : (
            <img src="/img/SnapBG.ai_1745139437294 1.png" alt="Jewelry 3D" className="three_d_img" />
          )}
        </div>
        <p className="alsolike">YOU MAY ALSO LIKE</p>
        <div className="groupAlsoLike">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className={`alsolike${index}`}>
              <p className="txt_alsolike">{`“${index === 1 ? "FIRST" : index === 2 ? "SECOND" : index === 3 ? "THIRD" : "FOURTH"} RING”`}</p>
              <div className="rectangleblok">
                <svg width="305" height="361" viewBox="0 0 305 361" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.823242" width="304" height="359" fill="black" fillOpacity="0.3" stroke="white"/>
                </svg>
              </div>
              <div className="lineblock">
                <svg width="312" height="367" viewBox="0 0 312 367" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.65757 0.965375C0.533876 1.91739 0.394706 3.60009 1.34672 4.72378C2.29874 5.84747 3.98143 5.98664 5.10513 5.03462C6.22882 4.08261 6.36799 2.39991 5.41597 1.27622C4.46396 0.152529 2.78126 0.0133585 1.65757 0.965375ZM306.658 360.965C305.534 361.917 305.395 363.6 306.347 364.724C307.299 365.847 308.981 365.987 310.105 365.035C311.229 364.083 311.368 362.4 310.416 361.276C309.464 360.153 307.781 360.013 306.658 360.965ZM3.38135 3L2.99986 3.32321L308 363.323L308.381 363L308.763 362.677L3.76284 2.67679L3.38135 3Z" fill="white"/>
                  <path d="M310.105 1.61186C308.981 0.659843 307.299 0.799013 306.347 1.92271C305.395 3.0464 305.534 4.72909 306.658 5.68111C307.781 6.63313 309.464 6.49396 310.416 5.37026C311.368 4.24657 311.229 2.56388 310.105 1.61186ZM5.1051 361.612C3.9814 360.66 2.29871 360.799 1.3467 361.923C0.394689 363.046 0.533858 364.729 1.65755 365.681C2.78124 366.633 4.46394 366.494 5.41595 365.37C6.36796 364.247 6.22879 362.564 5.1051 361.612ZM308.381 3.64648L308 3.32328L2.99983 363.323L3.38132 363.646L3.76281 363.97L308.763 3.96969L308.381 3.64648Z" fill="white"/>
                </svg>
              </div>
              <img src="/img/alsolike.png" alt="also like" className="imgalsolike" />
              <div className="linealso">
                <svg width="306" height="44" viewBox="0 0 306 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.573242V43.3232L305 43.3232L305 0.573242" stroke="white"/>
                </svg>
              </div>
              <p className="pricealsolike">1800 P.</p>
              <div className="limeline">
                <svg width="1" height="41" viewBox="0 0 1 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.5" y1="0.323242" x2="0.5" y2="40.3232" stroke="white"/>
                </svg>
              </div>
              <div className="lineal">
                <svg width="306" height="44" viewBox="0 0 306 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.573242V43.3232L305 43.3232L305 0.573242" stroke="white"/>
                </svg>
              </div>
              <p className="collalsolike">/001_RINGS</p>
              <button className="buttonalsolike">
                <p className="lll">ПЕРЕЙТИ</p>
                <div className="linebutton">
                  <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.3491 4.43119C40.5468 4.23838 40.5508 3.92182 40.3579 3.72414L37.216 0.502632C37.0232 0.304944 36.7066 0.300987 36.5089 0.493794C36.3112 0.6866 36.3073 1.00316 36.5001 1.20085L39.2929 4.0644L36.4294 6.85726C36.2317 7.05006 36.2277 7.36662 36.4205 7.56431C36.6134 7.762 36.9299 7.76595 37.1276 7.57315L40.3491 4.43119ZM0 3.57324L-0.00624951 4.0732L39.9937 4.5732L40 4.07324L40.0062 3.57328L0.00624951 3.07328L0 3.57324Z" fill="white"/>
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>

        <button className='see_more_button'>
          <p className="see">SEE MORE</p>
          <div className="seemoreline">
            <svg width="90" height="16" viewBox="0 0 90 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M89.7071 8.70711C90.0976 8.31659 90.0976 7.68343 89.7071 7.2929L83.3431 0.928939C82.9526 0.538415 82.3195 0.538415 81.9289 0.928939C81.5384 1.31946 81.5384 1.95263 81.9289 2.34315L87.5858 8.00001L81.9289 13.6569C81.5384 14.0474 81.5384 14.6806 81.9289 15.0711C82.3195 15.4616 82.9526 15.4616 83.3431 15.0711L89.7071 8.70711ZM0 8L-8.74228e-08 9L89 9.00001L89 8.00001L89 7.00001L8.74228e-08 7L0 8Z" fill="white"/>
            </svg>
          </div>
        </button>
       
        <div className="copyrigth">
          <p className="txt_cop">copyright</p>
        </div>
      </div>
    </div>
  );
};

export default JewelryViewer;