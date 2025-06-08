import './Catalog.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link

const App = () => {
  // Состояние для текущего слайда (1, 2, 3)
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  // Функции для переключения слайдов
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  // Определяем изображение в зависимости от слайда
  const getImageForSlide = () => {
    switch (currentSlide) {
      case 1:
        return '/img/alsolike.png';
      case 2:
        return '/img/object (1).png';
      case 3:
        return '/img/rhb3.png';
      default:
        return '/img/alsolike.png';
    }
  };

  return (
    <div>
      <div className="CatalogBody">
        <div className="slide1">
          <img src="/img/bg_catalog.png" alt="" className="bg_catalog" />
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
          </div>

          <p className="Catalog_maintxt">CATALOG</p>
          <p className="Catalog_maintxt2">CREATING</p>
          <p className="Catalog_maintxt3">FUTURE</p>
          <p className="Catalog_txt">HOME / CATALOG</p>

          <img src="/img/catalog_img.png" alt="" className="catalog_img1" />
          <img src="/img/catalog_img2.png" alt="" className="catalog_img2" />
          <img src="/img/catalog_img3.png" alt="" className="catalog_img3" />

          <img src="/img/catalog_img.png" alt="" className="catalog_img4" />
          <img src="/img/catalog_img2.png" alt="" className="catalog_img5" />
          <img src="/img/catalog_img3.png" alt="" className="catalog_img6" />

          <img src="/img/catalog_img2.png" alt="" className="catalog_img7" />
          <img src="/img/catalog_img3.png" alt="" className="catalog_img8" />
          <img src="/img/catalog_img4.png" alt="" className="catalog_img9" />

          <p className="Catalog_txt1">“Name of Jewelry”</p>
          <p className="Catalog_txt2">Collection: NAME of COLLECTION</p>

          <p className="Catalog_txt3">“Name of Jewelry”</p>
          <p className="Catalog_txt4">Collection: NAME of COLLECTION</p>

          <p className="Catalog_maintxt4">CATALOG</p>

          <div className="catalog_group1">
            <div className="svg_catalog1">
              <svg width="306" height="125" viewBox="0 0 306 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-19.5" y="-19.5" width="344.522" height="164.454">
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      backdropFilter: 'blur(20px)',
                      clipPath: 'url(#bgblur_0_392_1044_clip_path)',
                      height: '100%',
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  />
                </foreignObject>
                <path
                  data-figma-bg-blur-radius="20"
                  d="M1 124.454V1H20.0971L27.0046 11.9161H133.867L140.775 1H262.265L304.522 39.5561V105.176H129.407L117.208 124.454H1Z"
                  fill="white"
                  fillOpacity="0.1"
                  stroke="white"
                  strokeOpacity="0.4"
                />
                <defs>
                  <clipPath id="bgblur_0_392_1044_clip_path" transform="translate(19.5 19.5)">
                    <path d="M1 124.454V1H20.0971L27.0046 11.9161H133.867L140.775 1H262.265L304.522 39.5561V105.176H129.407L117.208 124.454H1Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="svg_catalog2">
              <svg width="279" height="30" viewBox="0 0 279 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.51741 7.67317L1.29468 1H75.811L71.5884 7.67317H5.51741Z" fill="white"/>
                <path d="M77.9301 7.67317L82.1527 1H86.3754L82.1527 7.67317H77.9301Z" fill="white"/>
                <path d="M87.2755 7.67317L91.4981 1H95.7208L91.4981 7.67317H87.2755Z" fill="white"/>
                <path d="M101.816 1L97.593 7.67317H102.309L106.532 1H101.816Z" fill="white"/>
                <path d="M278 28.8049V1H247.526L278 28.8049Z" fill="white"/>
                <path d="M247.119 1H247.526M247.526 1H278V28.8049L247.526 1ZM1.29468 1L5.51741 7.67317H71.5884L75.811 1H1.29468ZM82.1527 1L77.9301 7.67317H82.1527L86.3754 1H82.1527ZM91.4981 1L87.2755 7.67317H91.4981L95.7208 1H91.4981ZM97.593 7.67317L101.816 1H106.532L102.309 7.67317H97.593Z" stroke="white" stroke-opacity="0.4"/>
              </svg>
            </div>
            <p className="txt_catalog_svg">Мы поддерживаем частных мастеров ювелирных изделий и считаем, что каждое из изделий блаблабла</p>
          </div>

          <div className="catalog_group2">
            <svg width="196" height="105" viewBox="0 0 196 105" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M98 60.5C125.036 60.5 149.497 63.0161 167.185 67.0771C176.033 69.1086 183.159 71.5209 188.061 74.1816C190.511 75.512 192.383 76.892 193.636 78.2979C194.886 79.7008 195.5 81.1042 195.5 82.5C195.5 83.8958 194.886 85.2992 193.636 86.7021C192.383 88.108 190.511 89.488 188.061 90.8184C183.159 93.4791 176.033 95.8914 167.185 97.9229C149.497 101.984 125.036 104.5 98 104.5C70.9642 104.5 46.5035 101.984 28.8154 97.9229C19.9674 95.8914 12.8411 93.4791 7.93945 90.8184C5.48862 89.488 3.61734 88.108 2.36426 86.7021C1.11383 85.2992 0.5 83.8958 0.5 82.5C0.5 81.1042 1.11383 79.7008 2.36426 78.2979C3.61734 76.892 5.48862 75.512 7.93945 74.1816C12.8411 71.5209 19.9674 69.1086 28.8154 67.0771C46.5035 63.0161 70.9642 60.5 98 60.5Z" stroke="white" stroke-opacity="0.4"/>
              <path d="M98 40.5C125.036 40.5 149.497 43.0161 167.185 47.0771C176.033 49.1086 183.159 51.5209 188.061 54.1816C190.511 55.512 192.383 56.892 193.636 58.2979C194.886 59.7008 195.5 61.1042 195.5 62.5C195.5 63.8958 194.886 65.2992 193.636 66.7021C192.383 68.108 190.511 69.488 188.061 70.8184C183.159 73.4791 176.033 75.8914 167.185 77.9229C149.497 81.9839 125.036 84.5 98 84.5C70.9642 84.5 46.5035 81.9839 28.8154 77.9229C19.9674 75.8914 12.8411 73.4791 7.93945 70.8184C5.48862 69.488 3.61734 68.108 2.36426 66.7021C1.11383 65.2992 0.5 63.8958 0.5 62.5C0.5 61.1042 1.11383 59.7008 2.36426 58.2979C3.61734 56.892 5.48862 55.512 7.93945 54.1816C12.8411 51.5209 19.9674 49.1086 28.8154 47.0771C46.5035 43.0161 70.9642 40.5 98 40.5Z" stroke="white" stroke-opacity="0.4"/>
              <path d="M98 20.5C125.036 20.5 149.497 23.0161 167.185 27.0771C176.033 29.1086 183.159 31.5209 188.061 34.1816C190.511 35.512 192.383 36.892 193.636 38.2979C194.886 39.7008 195.5 41.1042 195.5 42.5C195.5 43.8958 194.886 45.2992 193.636 46.7021C192.383 48.108 190.511 49.488 188.061 50.8184C183.159 53.4791 176.033 55.8914 167.185 57.9229C149.497 61.9839 125.036 64.5 98 64.5C70.9642 64.5 46.5035 61.9839 28.8154 57.9229C19.9674 55.8914 12.8411 53.4791 7.93945 50.8184C5.48862 49.488 3.61734 48.108 2.36426 46.7021C1.11383 45.2992 0.5 43.8958 0.5 42.5C0.5 41.1042 1.11383 39.7008 2.36426 38.2979C3.61734 36.892 5.48862 35.512 7.93945 34.1816C12.8411 31.5209 19.9674 29.1086 28.8154 27.0771C46.5035 23.0161 70.9642 20.5 98 20.5Z" stroke="white" stroke-opacity="0.4"/>
              <path d="M98 0.5C125.036 0.5 149.497 3.01612 167.185 7.07715C176.033 9.10859 183.159 11.5209 188.061 14.1816C190.511 15.512 192.383 16.892 193.636 18.2979C194.886 19.7008 195.5 21.1042 195.5 22.5C195.5 23.8958 194.886 25.2992 193.636 26.7021C192.383 28.108 190.511 29.488 188.061 30.8184C183.159 33.4791 176.033 35.8914 167.185 37.9229C149.497 41.9839 125.036 44.5 98 44.5C70.9642 44.5 46.5035 41.9839 28.8154 37.9229C19.9674 35.8914 12.8411 33.4791 7.93945 30.8184C5.48862 29.488 3.61734 28.108 2.36426 26.7021C1.11383 25.2992 0.5 23.8958 0.5 22.5C0.5 21.1042 1.11383 19.7008 2.36426 18.2979C3.61734 16.892 5.48862 15.512 7.93945 14.1816C12.8411 11.5209 19.9674 9.10859 28.8154 7.07715C46.5035 3.01612 70.9642 0.5 98 0.5Z" stroke="white" stroke-opacity="0.4"/>
            </svg>
          </div>

          <p className="barcode1">catalog</p>
          <p className="barcode2">jewelry</p>

          <div className="catalog_group3">
            <div className="svg_catalog3">
              <svg width="481" height="96" viewBox="0 0 481 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-19.5" y="-19.5" width="520" height="135">
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      backdropFilter: 'blur(10px)',
                      clipPath: 'url(#bgblur_0_398_1063_clip_path)',
                      height: '100%',
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  />
                </foreignObject>
                <path
                  data-figma-bg-blur-radius="20"
                  d="M1 12.75V1H480V95H238.362L198.801 55.4773H43.7679L1 12.75Z"
                  fill="white"
                  fillOpacity="0.1"
                  stroke="white"
                  strokeOpacity="0.4"
                />
                <defs>
                  <clipPath id="bgblur_0_398_1063_clip_path" transform="translate(19.5 19.5)">
                    <path d="M1 12.75V1H480V95H238.362L198.801 55.4773H43.7679L1 12.75Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="svg_catalog4">
              <svg width="111" height="9" viewBox="0 0 111 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2308 1L2 8H109L100.769 1H10.2308Z" fill="white" stroke="white"/>
              </svg>
            </div>
            <div className="svg_catalog5">
              <svg width="405" height="44" viewBox="0 0 405 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM402 3H402.5V2.5H402V3ZM399.333 40.5C399.333 41.9728 400.527 43.1667 402 43.1667C403.473 43.1667 404.667 41.9728 404.667 40.5C404.667 39.0272 403.473 37.8333 402 37.8333C400.527 37.8333 399.333 39.0272 399.333 40.5ZM3 3V3.5H402V3V2.5H3V3ZM402 3H401.5V40.5H402H402.5V3H402Z" fill="white" fill-opacity="0.4"/>
              </svg>
            </div>
          </div>

          <img src="/img/bubble_catalog1.png" alt="" className="bubble_catalog" />
          <img src="/img/bubble_catalog3.png" alt="" className="bubble_catalog2" />
          <img src="/img/Ellipse_catalog.png" alt="" className="eclipse_catalog" />

          <div className="svg_catalog6">
            <svg width="275" height="47" viewBox="0 0 275 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <foreignObject x="-9.5" y="-8.89633" width="294.495" height="65.6729">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    backdropFilter: 'blur(5px)',
                    clipPath: 'url(#bgblur_0_400_1087_clip_path)',
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'rgba(217, 217, 217, 0.1)',
                  }}
                />
              </foreignObject>
              <path
                data-figma-bg-blur-radius="10"
                d="M1.00006 23.9401V46.2765L264.59 46.2766L274.495 36.3709V1.60367H154.94L132.604 23.9401H1.00006Z"
                fill="#D9D9D9"
                fillOpacity="0.1"
                stroke="white"
                strokeOpacity="0.4"
              />
              <path d="M139.848 0.999996L127.171 13.6774H118.592L131.27 0.999996H139.848Z" fill="white" stroke="white" />
              <path d="M126.185 0.999996L113.508 13.6774H104.929L117.607 0.999996H126.185Z" fill="white" stroke="white" />
              <path d="M112.522 0.999996L99.845 13.6774H91.2665L103.944 0.999996H112.522Z" fill="white" stroke="white" />
              <path d="M98.8594 0.999996L86.1819 13.6774H77.6034L90.2808 0.999996H98.8594Z" fill="white" stroke="white" />
              <path d="M85.1965 0.999996L72.5191 13.6774H63.9405L76.618 0.999996H85.1965Z" fill="white" stroke="white" />
              <path d="M71.2559 0.999996L58.5784 13.6774H49.9999L62.6773 0.999996H71.2559Z" fill="white" stroke="white" />
              <path d="M57.3152 0.999996L44.6378 13.6774H36.0592L48.7366 0.999996H57.3152Z" fill="white" stroke="white" />
              <path d="M43.3745 0.999996L30.6971 13.6774H22.1185L34.796 0.999996H43.3745Z" fill="white" stroke="white" />
              <path d="M29.4338 0.999996L16.7564 13.6774H8.17785L20.8553 0.999996H29.4338Z" fill="white" stroke="white" />
              <defs>
                <clipPath id="bgblur_0_400_1087_clip_path" transform="translate(9.5 8.89633)">
                  <path d="M1.00006 23.9401V46.2765L264.59 46.2766L274.495 36.3709V1.60367H154.94L132.604 23.9401H1.00006Z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="slide2_catalog">
          <div className="group_slide2">
            <div className="Vector0">
              <svg width="710" height="24" viewBox="0 0 710 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M699.033 7.47059L708 12.6471H676.843L667.876 7.47059H699.033Z" fill="white"/>
                <path d="M40.1243 23L29.7697 12.6471H220.037L230.391 23H40.1243Z" fill="white"/>
                <path d="M0 12.6471H29.7697M543.62 7.47059L538.442 12.6471H220.037M530.676 7.47059L537.148 1H612.219L618.691 7.47059M608.336 7.47059L613.514 12.6471H676.843M676.843 12.6471H708L699.033 7.47059H667.876L676.843 12.6471ZM29.7697 12.6471L40.1243 23H230.391L220.037 12.6471M29.7697 12.6471H220.037" stroke="white" stroke-linecap="round"/>
              </svg>
            </div>

            <div className="product_search_catalog">
              <div className="Vector1">
                <svg width="159" height="17" viewBox="0 0 159 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M61.9498 6.95329L54.9897 1H43.5054L38.9813 4.86964H5.92057L10.4447 1H43.5054H54.9897L61.9498 6.95329H104.059L111.019 1H119.371H153.476L158 4.86964H123.895L119.371 1H111.019L104.059 6.95329L111.019 12.9066H130.507H135.031L137.12 16H132.595L130.507 12.9066H111.019L104.059 6.95329H61.9498Z" fill="white"/>
                  <path d="M141.992 16L139.904 12.9066H144.776L146.864 16H141.992Z" fill="white"/>
                  <path d="M104.059 6.95329H61.9498L54.9897 1L43.5054 1M104.059 6.95329L111.019 1H119.371M104.059 6.95329L111.019 12.9066H130.507M119.371 1H153.476L158 4.86964H123.895L119.371 1ZM130.507 12.9066H135.031L137.12 16H132.595L130.507 12.9066ZM38.9813 4.86964H5.92057L10.4447 1L43.5054 1M38.9813 4.86964L43.5054 1M38.9813 4.86964L32.0212 10.8229H0M139.904 12.9066L141.992 16H146.864L144.776 12.9066H139.904Z" stroke="white" stroke-width="0.5"/>
                </svg>
              </div>
              <div className="Vector2">
                <svg width="315" height="104" viewBox="0 0 315 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_385_248)">
                    <path d="M42.0871 1L5 38.0777V95H140.699L157.777 77.9223H302.25L310 70.1748V1H271.806L259.074 8.3486H228.076L215.345 1H42.0871Z" fill="white" fill-opacity="0.3" shape-rendering="crispEdges"/>
                    <path d="M42.0871 1L5 38.0777V95H140.699L157.777 77.9223H302.25L310 70.1748V1H271.806L259.074 8.3486H228.076L215.345 1H42.0871Z" stroke="white" stroke-opacity="0.4" shape-rendering="crispEdges"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_385_248" x="0.5" y="0.5" width="314" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_385_248"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_385_248" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="Vector3">
                <svg width="112" height="51" viewBox="0 0 112 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 28L1.32323 27.8232L1.25 27.8964L1.25 28L1.5 28ZM1.5 47.6667C0.763616 47.6667 0.166662 48.2636 0.166662 49C0.166662 49.7364 0.763616 50.3333 1.5 50.3333C2.23638 50.3333 2.83333 49.7364 2.83333 49C2.83333 48.2636 2.23638 47.6667 1.5 47.6667ZM27.5 2L27.5 1.75L27.3964 1.75L27.3232 1.82322L27.5 2ZM110.5 0.666667C109.764 0.666667 109.167 1.26362 109.167 2C109.167 2.73638 109.764 3.33333 110.5 3.33333C111.236 3.33333 111.833 2.73638 111.833 2C111.833 1.26362 111.236 0.666667 110.5 0.666667ZM1.5 28L1.25 28L1.25 49L1.5 49L1.75 49L1.75 28L1.5 28ZM1.5 28L1.67677 28.1768L27.6768 2.17678L27.5 2L27.3232 1.82322L1.32323 27.8232L1.5 28ZM27.5 2L27.5 2.25L110.5 2.25V2V1.75L27.5 1.75L27.5 2Z" fill="white"/>
                </svg>
              </div>

              <div className="Vector4">
                <svg width="202" height="1" viewBox="0 0 202 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="202" y2="0.5" stroke="white"/>
                </svg>
              </div>

              <button className="product_search">
                <p className="product_search_txt">ТИП ИЗДЕЛИЯ</p>
                <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L15 15L29 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>

            <div className="vector01">
              <svg width="710" height="24" viewBox="0 0 710 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9674 16.5294L2 11.3529H33.1569L42.1243 16.5294H10.9674Z" fill="white"/>
                <path d="M669.876 1L680.23 11.3529H489.963L479.609 1H669.876Z" fill="white"/>
                <path d="M710 11.3529H680.23M166.38 16.5294L171.558 11.3529H489.963M179.324 16.5294L172.852 23H97.7806L91.309 16.5294M101.664 16.5294L96.4863 11.3529H33.1569M33.1569 11.3529H2L10.9674 16.5294H42.1243L33.1569 11.3529ZM680.23 11.3529L669.876 1H479.609L489.963 11.3529M680.23 11.3529H489.963" stroke="white" stroke-linecap="round"/>
              </svg>
            </div>

            <div className="metal_color_search">
              <div className="Vector7">
                <svg width="315" height="104" viewBox="0 0 315 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_385_272)">
                    <path d="M272.913 1L310 38.0777V95H174.301L157.223 77.9223H12.7495L5 70.1748V1H43.1942L55.9256 8.3486H86.9238L99.6552 1H272.913Z" fill="white" fill-opacity="0.3" shape-rendering="crispEdges"/>
                    <path d="M272.913 1L310 38.0777V95H174.301L157.223 77.9223H12.7495L5 70.1748V1H43.1942L55.9256 8.3486H86.9238L99.6552 1H272.913Z" stroke="white" stroke-opacity="0.4" shape-rendering="crispEdges"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_385_272" x="0.5" y="0.5" width="314" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_385_272"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_385_272" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="Vector8">
                <svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.666667 27.5C0.666667 28.2364 1.26362 28.8333 2 28.8333C2.73638 28.8333 3.33333 28.2364 3.33333 27.5C3.33333 26.7636 2.73638 26.1667 2 26.1667C1.26362 26.1667 0.666667 26.7636 0.666667 27.5ZM89.5 27.5V27.75H89.75V27.5H89.5ZM88.1667 1.5C88.1667 2.23638 88.7636 2.83333 89.5 2.83333C90.2364 2.83333 90.8333 2.23638 90.8333 1.5C90.8333 0.76362 90.2364 0.166667 89.5 0.166667C88.7636 0.166667 88.1667 0.76362 88.1667 1.5ZM2 27.5V27.75H89.5V27.5V27.25H2V27.5ZM89.5 27.5H89.75V1.5H89.5H89.25V27.5H89.5Z" fill="white"/>
                </svg>
              </div>

              <div className="Vector9">
                <svg width="212" height="1" viewBox="0 0 212 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="212" y2="0.5" stroke="white"/>
                </svg>
              </div>

              <button className="product_search2">
                <p className="product_search_txt2">ЦВЕТ МЕТАЛЛА</p>
                <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L15 15L29 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>

              <div className="Vector10">
                <svg width="158" height="16" viewBox="0 0 158 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96.4203 6.37L103.335 0.45575H114.744L119.238 4.30001H152.082L147.588 0.45575H114.744H103.335L96.4203 6.37H54.5874L47.6729 0.45575H39.3755H5.49438L0.999939 4.30001H34.8811L39.3755 0.45575H47.6729L54.5874 6.37L47.6729 12.2843H28.3123H23.8178L21.7435 15.3574H26.2379L28.3123 12.2843H47.6729L54.5874 6.37H96.4203Z" fill="white"/>
                  <path d="M16.9033 15.3574L18.9777 12.2843H14.1375L12.0632 15.3574H16.9033Z" fill="white"/>
                  <path d="M54.5874 6.37H96.4203L103.335 0.45575L114.744 0.45575M54.5874 6.37L47.6729 0.45575H39.3755M54.5874 6.37L47.6729 12.2843H28.3123M39.3755 0.45575H5.49438L0.999939 4.30001H34.8811L39.3755 0.45575ZM28.3123 12.2843H23.8178L21.7435 15.3574H26.2379L28.3123 12.2843ZM119.238 4.30001H152.082L147.588 0.45575L114.744 0.45575M119.238 4.30001L114.744 0.45575M119.238 4.30001L126.153 10.2143H157.964M18.9777 12.2843L16.9033 15.3574H12.0632L14.1375 12.2843H18.9777Z" stroke="white" stroke-width="0.5"/>
                </svg>
              </div>
            </div>

            <div className="author_search">
              <div className="Vector11">
                <svg width="420" height="104" viewBox="0 0 420 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_392_103)">
                    <path d="M54.8548 1L5 38.0777V95H187.415L210.372 77.9223H404.583L415 70.1748V1H363.657L346.543 8.3486H304.873L287.759 1H54.8548Z" fill="white" fill-opacity="0.3" shape-rendering="crispEdges"/>
                    <path d="M54.8548 1L5 38.0777V95H187.415L210.372 77.9223H404.583L415 70.1748V1H363.657L346.543 8.3486H304.873L287.759 1H54.8548Z" stroke="white" stroke-opacity="0.4" shape-rendering="crispEdges"/>
                  </g>
                  <path d="M285.123 89.9533L275.784 84H260.374L254.304 87.8696H209.944L216.014 84H260.374H275.784L285.123 89.9533H341.623L350.962 84H362.169H407.93L414 87.8696H368.239L362.169 84H350.962L341.623 89.9533L350.962 95.9066H377.111H383.181L385.983 99H379.913L377.111 95.9066H350.962L341.623 89.9533H285.123Z" fill="white"/>
                  <path d="M392.52 99L389.719 95.9066H396.256L399.058 99H392.52Z" fill="white"/>
                  <path d="M341.623 89.9533H285.123L275.784 84L260.374 84M341.623 89.9533L350.962 84H362.169M341.623 89.9533L350.962 95.9066H377.111M362.169 84H407.93L414 87.8696H368.239L362.169 84ZM377.111 95.9066H383.181L385.983 99H379.913L377.111 95.9066ZM254.304 87.8696H209.944L216.014 84L260.374 84M254.304 87.8696L260.374 84M254.304 87.8696L244.965 93.8229H202M389.719 95.9066L392.52 99H399.058L396.256 95.9066H389.719Z" stroke="white" stroke-width="0.5"/>
                  <rect x="308.5" y="21.5" width="94" height="44" stroke="white" stroke-opacity="0.4"/>
                  <defs>
                    <filter id="filter0_d_392_103" x="0.5" y="0.5" width="419" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_392_103"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_392_103" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="Vector12">
                <svg width="238" height="1" viewBox="0 0 238 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="238" y2="0.5" stroke="white"/>
                </svg>
              </div>

              <button className="product_search3">
                <p className="product_search_txt3">ВЫБРАТЬ АВТОРА</p>
                <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L15 15L29 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="vector02">
            <svg width="68" height="33" viewBox="0 0 68 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34 0C24.9826 0 16.3346 1.73839 9.95837 4.83274C3.58213 7.92709 0 12.1239 0 16.5C0 20.8761 3.58213 25.0729 9.95837 28.1673C16.3346 31.2616 24.9826 33 34 33C43.0174 33 51.6654 31.2616 58.0416 28.1673C64.4179 25.0729 68 20.8761 68 16.5C68 12.1239 64.4179 7.92709 58.0416 4.83274C51.6654 1.73839 43.0174 0 34 0ZM53.2395 22C53.8469 20.6096 54.2323 19.1334 54.3547 17.6H63.3805C63.1502 19.1139 62.4169 20.5997 61.2091 22H53.2395ZM14.7605 11C14.1353 12.4489 13.7622 13.9208 13.6453 15.4H4.61947C4.8498 13.8861 5.58309 12.4003 6.79093 11H14.7605ZM48.5928 11C49.2728 12.408 49.6853 13.882 49.8168 15.4H36.2667V11H48.5928ZM36.2667 8.8V2.3606C37.3033 2.50727 38.3233 2.7522 39.3267 3.0954C41.208 3.74 43.0123 4.7322 44.5355 5.9642C45.5932 6.81927 46.5014 7.76453 47.26 8.8H36.2667ZM23.4645 5.9642C24.9877 4.73 26.792 3.7378 28.6733 3.0954C29.6797 2.7522 30.6997 2.50727 31.7333 2.3606V8.8H20.7355C21.4513 7.81395 22.3683 6.86418 23.4645 5.9642ZM31.7333 11V15.4H18.1832C18.3147 13.882 18.7272 12.408 19.4072 11H31.7333ZM6.79093 22C5.58309 20.5997 4.8498 19.1139 4.61947 17.6H13.6453C13.7723 19.1334 14.1531 20.6096 14.7605 22H6.79093ZM18.1832 17.6H31.7333V22H19.4072C18.7272 20.592 18.3147 19.118 18.1832 17.6ZM31.7333 24.2V30.6394C30.6371 30.4777 29.6032 30.2295 28.6733 29.9046C26.792 29.26 24.9877 28.2678 23.4645 27.0358C22.3642 26.1366 21.45 25.1867 20.7355 24.2H31.7333ZM44.54 27.0358C43.0168 28.27 41.2125 29.2622 39.3312 29.9046C38.4013 30.2295 37.3675 30.4777 36.2712 30.6394V24.2H47.2691C46.5075 25.2355 45.5978 26.1807 44.54 27.0358ZM36.2667 22V17.6H49.8168C49.6853 19.118 49.2728 20.592 48.5928 22H36.2667ZM54.3547 15.4C54.2378 13.9208 53.8647 12.4489 53.2395 11H61.2091C62.4195 12.4058 63.1448 13.8798 63.3805 15.4H54.3547ZM58.8381 8.8H52.0472C50.728 6.7804 48.9056 5.0094 46.7115 3.5948C49.7264 4.29576 52.4735 5.24057 54.8352 6.3888C56.3584 7.12947 57.6927 7.9332 58.8381 8.8ZM13.1648 6.3888C15.5265 5.24057 18.2736 4.29576 21.2885 3.5948C19.0989 5.0094 17.272 6.7804 15.9528 8.8H9.16187C10.3043 7.93173 11.6386 7.128 13.1648 6.3888ZM9.16187 24.2H15.9528C17.272 26.2196 19.0944 27.9906 21.2885 29.4052C18.2736 28.7042 15.5265 27.7594 13.1648 26.6112C11.6546 25.8801 10.3124 25.0717 9.16187 24.2ZM54.8352 26.6112C52.4735 27.7594 49.7264 28.7042 46.7115 29.4052C48.9011 27.9906 50.728 26.2196 52.0472 24.2H58.8381C57.6876 25.0717 56.3454 25.8801 54.8352 26.6112Z" fill="white" fill-opacity="0.4"/>
            </svg>
          </div>

          <div className="groupAlsoLike_container">
            <div className={`slide-${currentSlide}`}>
              {[1, 2, 3].map((blockIndex) => (
                <div key={blockIndex} className="groupAlsoLike_catalog">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className={`alsolike${index}`}>
                      <p className="txt_alsolike">{`“${index === 1 ? "FIRST" : index === 2 ? "SECOND" : index === 3 ? "THIRD" : "FOURTH"} RING”`}</p>
                      <div className="lineblock">
                        <svg width="312" height="366" viewBox="0 0 312 366" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.65577 0.966902C0.531235 1.91792 0.392188 3.59913 1.3452 4.72198C2.29821 5.84483 3.98239 5.98412 5.10693 5.0331C6.23146 4.08208 6.37051 2.40087 5.4175 1.27802C4.46449 0.155173 2.7803 0.0158794 1.65577 0.966902ZM306.656 360.322C305.531 361.273 305.392 362.954 306.345 364.077C307.298 365.2 308.982 365.339 310.107 364.388C311.231 363.437 311.371 361.756 310.417 360.633C309.464 359.51 307.78 359.371 306.656 360.322ZM3.38135 3L2.99957 3.32287L308 362.678L308.381 362.355L308.763 362.032L3.76313 2.67713L3.38135 3Z" fill="white"/>
                          <path d="M310.107 1.61223C308.982 0.661204 307.298 0.800497 306.345 1.92335C305.392 3.0462 305.531 4.7274 306.656 5.67842C307.78 6.62945 309.464 6.49015 310.417 5.3673C311.371 4.24445 311.231 2.56325 310.107 1.61223ZM5.10689 360.967C3.98236 360.016 2.29817 360.155 1.34517 361.278C0.392164 362.401 0.53121 364.082 1.65574 365.033C2.78028 365.984 4.46446 365.845 5.41747 364.722C6.37047 363.599 6.23142 361.918 5.10689 360.967ZM308.381 3.64532L308 3.32245L2.99954 362.677L3.38132 363L3.76309 363.323L308.763 3.9682L308.381 3.64532Z" fill="white"/>
                        </svg>
                      </div>
                      <div className="rectangleblok">
                        <svg width="305" height="361" viewBox="0 0 305 361" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.823242" width="304" height="359" fill="black" stroke="white"/>
                        </svg>
                      </div>
                      <img src={getImageForSlide()} alt="also like" className="imgalsolike" />
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
              ))}
            </div>

            <div className="pagination-buttons">
              <button className="prev-slide" onClick={prevSlide}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" stroke="white"/>
                <path d="M24.5 10L15 19.5L24.5 29" stroke="white"/>
              </svg>
              </button>

              <p className="slide-counter">{currentSlide}/{totalSlides}</p>

              <button className="next-slide" onClick={nextSlide}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="39" height="39" stroke="white"/>
                  <path d="M16 10L25 19.5L16 29" stroke="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className='slide3_catalog'>
          <p className='txt_cop'>copyright</p>
        </div>
      </div>
    </div>
  );
};

export default App;