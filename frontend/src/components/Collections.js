import './Collections.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar'

const AuthorBlock = ({ index, isHovered, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className={`search_authors_blok${index}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="rectangle_svg_coll">
        {isHovered ? (
          <svg width="494" height="359" viewBox="0 0 494 359" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_447_671)">
              <rect
                x="40.499"
                y="318.442"
                width="277.942"
                height="412.999"
                rx="19.5"
                transform="rotate(-90 40.499 318.442)"
                fill="white"
                fillOpacity="0.1"
              />
              <rect
                x="40.999"
                y="317.942"
                width="276.942"
                height="411.999"
                rx="19"
                transform="rotate(-90 40.999 317.942)"
                stroke="white"
                strokeOpacity="0.4"
              />
              <rect x="49.709" y="50.593" width="123.582" height="123.582" rx="20" fill="#D9D9D9" />
              <rect x="49.709" y="184.767" width="123.582" height="123.582" rx="20" fill="#000000" />
              <rect x="184.383" y="51.093" width="259.405" height="55.495" rx="12" fill="white" fillOpacity="0.1" />
              <rect x="184.883" y="51.593" width="258.405" height="54.495" rx="11.5" stroke="white" strokeOpacity="0.4" />
              <rect x="184.383" y="118.18" width="259.405" height="55.495" rx="12" fill="white" fillOpacity="0.1" />
              <rect x="184.883" y="118.68" width="258.405" height="54.495" rx="11.5" stroke="white" strokeOpacity="0.4" />
              <rect x="184.383" y="185.267" width="259.405" height="122.582" rx="12" fill="white" fillOpacity="0.1" />
              <rect x="184.883" y="185.767" width="258.405" height="121.582" rx="11.5" stroke="white" strokeOpacity="0.4" />
            </g>
            <defs>
              <filter
                id="filter0_d_447_671"
                x="0"
                y="0"
                width="494"
                height="359"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="13.4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_447_671" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_447_671" result="shape" />
              </filter>
            </defs>
          </svg>
        ) : (
          <svg width="414" height="279" viewBox="0 0 414 279" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.499023"
              y="278.442"
              width="277.942"
              height="412.999"
              rx="19.5"
              transform="rotate(-90 0.499023 278.442)"
              stroke="white"
              strokeOpacity="0.4"
            />
            <rect x="9.70898" y="10.5925" width="123.582" height="123.582" rx="20" stroke="white" strokeOpacity="0.4" />
            <rect x="9.70898" y="144.767" width="123.582" height="123.582" rx="20" stroke="white" strokeOpacity="0.4" />
            <rect x="144.383" y="11.0925" width="259.405" height="55.4946" rx="11.5" stroke="white" strokeOpacity="0.4" />
            <rect x="144.383" y="78.1798" width="259.405" height="55.4946" rx="11.5" stroke="white" strokeOpacity="0.4" />
            <rect x="144.383" y="145.267" width="259.405" height="122.582" rx="11.5" stroke="white" strokeOpacity="0.4" />
          </svg>
        )}
      </div>

      <div className="authors_info_blok1">
        <p className="authors_name_in_blok" style={{ color: isHovered ? '#FFFFFF' : '#5F5F5F' }}>JANE DOE</p>
        <p className="authors_name_in_blok2" style={{ color: isHovered ? '#FFFFFF' : '#5F5F5F' }}>10 изделий</p>
      </div>

      <div className="authors_info_blok2">
        <p className="authors_name_in_blok3" style={{ color: isHovered ? '#FFFFFF' : '#5F5F5F' }}>jane_doe@mail.com</p>
        <p className="authors_name_in_blok4" style={{ color: isHovered ? '#FFFFFF' : '#5F5F5F' }}>+7(914)111-22-33</p>
      </div>

      <div className="authors_info_blok3">
        <p className="authors_name_in_blok5" style={{ color: isHovered ? '#FFFFFF' : '#5F5F5F' }}>
          "Вдохновленное хрустальной чистотой арктических пейзажей, это кольцо воплощает холодное великолепие зимы"
        </p>
      </div>

      <div className="authors_image">
        <img
          src={isHovered ? "/img/image_author_new.png" : "/img/image_author.png"}
          alt=""
          className="image_author_do"
        />
      </div>

      <div className="authors_image2">
        <img src="/img/rhb4.png" alt="" className="image_author_do2" />
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose }) => {

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
      onClick={handleOverlayClick}
    >
      <div className="modal_overlay1" style={{
        transform: 'scale(0.8)',
        transformOrigin: 'center'
      }}>
        <img src="/img/bg_input.png" alt="background" className="modal_bg" />

        <div className='navbar_model'>
          <svg width="1280" height="52" viewBox="0 0 1280 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20C0 8.9543 8.95431 0 20 0H1260C1271.05 0 1280 8.95431 1280 20V52H0V20Z" fill="white" fillOpacity="0.2" />
          </svg>
        </div>

        <button className='button_close_model' onClick={onClose}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H4V4H0V0ZM8 8H4V4H8V8ZM12 12H8V8H12V12ZM16 12H12V16H8V20H4V24H0V28H4V24H8V20H12V16H16V20H20V24H24V28H28V24H24V20H20V16H16V12ZM20 8V12H16V8H20ZM24 4V8H20V4H24ZM24 4V0H28V4H24Z" fill="white" />
          </svg>
        </button>

        <div className='model_vector_img'>
          <svg width="343" height="388" viewBox="0 0 343 388" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dii_452_1350)">
              <path d="M114.075 31H51.9539C47.5356 31 43.9539 34.5817 43.9539 39V65.9455C43.9539 68.0708 43.1082 70.1087 41.6035 71.6096L33.3504 79.8416C31.8457 81.3425 31 83.3804 31 85.5057V320.385C31 322.51 31.8457 324.548 33.3504 326.049L62.0393 354.664C63.539 356.16 65.5707 357 67.6889 357H242.428C244.546 357 246.578 356.16 248.078 354.664L268.795 334C270.3 332.499 271.145 330.461 271.145 328.336V194.322C271.145 191.461 272.674 188.818 275.153 187.39L307.992 168.479C310.472 167.051 312 164.407 312 161.546V40.2831C312 38.1578 311.154 36.1199 309.65 34.619L308.363 33.3359C306.863 31.84 304.832 31 302.714 31H174.12C171.265 31 168.626 32.5214 167.196 34.9923L161.355 45.0833C159.925 47.5542 157.286 49.0756 154.431 49.0756H133.764C130.909 49.0756 128.27 47.5542 126.84 45.0833L120.999 34.9923C119.569 32.5214 116.93 31 114.075 31Z" fill="#5F5F5F" shapeRendering="crispEdges" />
              <path d="M114.075 31H51.9539C47.5356 31 43.9539 34.5817 43.9539 39V65.9455C43.9539 68.0708 43.1082 70.1087 41.6035 71.6096L33.3504 79.8416C31.8457 81.3425 31 83.3804 31 85.5057V320.385C31 322.51 31.8457 324.548 33.3504 326.049L62.0393 354.664C63.539 356.16 65.5707 357 67.6889 357H242.428C244.546 357 246.578 356.16 248.078 354.664L268.795 334C270.3 332.499 271.145 330.461 271.145 328.336V194.322C271.145 191.461 272.674 188.818 275.153 187.39L307.992 168.479C310.472 167.051 312 164.407 312 161.546V40.2831C312 38.1578 311.154 36.1199 309.65 34.619L308.363 33.3359C306.863 31.84 304.832 31 302.714 31H174.12C171.265 31 168.626 32.5214 167.196 34.9923L161.355 45.0833C159.925 47.5542 157.286 49.0756 154.431 49.0756H133.764C130.909 49.0756 128.27 47.5542 126.84 45.0833L120.999 34.9923C119.569 32.5214 116.93 31 114.075 31Z" stroke="black" strokeOpacity="0.4" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter id="filter0_dii_452_1350" x="0.5" y="0.5" width="342" height="387" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_452_1350" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_452_1350" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-4" dy="-4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_452_1350" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-3" dy="3" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
                <feBlend mode="normal" in2="effect2_innerShadow_452_1350" result="effect3_innerShadow_452_1350" />
              </filter>
            </defs>
          </svg>
        </div>

        <p className='text_artist'>ARTIST</p>

        <div className='model_vector_img2'>
          <svg width="244" height="326" viewBox="0 0 244 326" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="backgroundImage" patternUnits="userSpaceOnUse" width="244" height="326">
                <image href="/img/bg_vector.png" x="0" y="0" width="244" height="326" preserveAspectRatio="xMidYMid slice" />
              </pattern>

              <path id="shape" d="M77.1938 12.5H37.3595C32.9412 12.5 29.3595 16.0817 29.3595 20.5V32.2016C29.3595 34.3143 28.5238 36.3412 27.0348 37.8399L10.3246 54.6601C8.83567 56.1588 8 58.1857 8 60.2984V99.1795C8 102.029 9.5162 104.664 11.9803 106.096L16.438 108.687C18.9021 110.119 20.4183 112.754 20.4183 115.604V191.702C20.4183 193.814 19.5826 195.841 18.0937 197.34L10.3246 205.16C8.83567 206.659 8 208.686 8 210.798V284.202C8 286.314 8.83567 288.341 10.3246 289.84L18.072 297.638C19.5738 299.15 21.6166 300 23.7474 300H41.7214C44.5877 300 47.2349 301.533 48.6609 304.02L54.3742 313.98C55.8002 316.467 58.4474 318 61.3137 318H113.952C116.083 318 118.126 317.15 119.627 315.638L132.817 302.362C134.319 300.85 136.362 300 138.492 300H219.059C223.477 300 227.059 296.418 227.059 292V145.298C227.059 143.186 227.894 141.159 229.383 139.66L233.675 135.34C235.164 133.841 236 131.814 236 129.702V16C236 11.5817 232.418 8 228 8H173.76C171.63 8 169.587 8.85007 168.085 10.3617L155.889 22.6383C154.387 24.1499 152.344 25 150.213 25H96.2703C94.1394 25 92.0967 24.1499 90.5949 22.6383L82.8692 14.8617C81.3674 13.3501 79.3246 12.5 77.1938 12.5Z" />
            </defs>

            <g filter="url(#filter0_di_452_1351)">
              <use href="#shape" fill="url(#backgroundImage)" />
            </g>

            <defs>
              <filter id="filter0_di_452_1351" x="0" y="0" width="244" height="326" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_452_1351" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_452_1351" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_452_1351" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className='text_info_for_author'>
          <p className='text1_aa'>JANE DOE</p>
          <p className='text1_aa1'>Изделий: 10</p>
          <p className='text1_aa2'>Коллекций: 4</p>
          <p className='text1_aa3'>"Мне важно, чтобы каждое украшение рассказывало историю — нежную, как шёпот ветра, или страстную, как пламя. Я вдохновляюсь природой: изгибами ветвей, игрой света на воде, таинственным мерцанием звёзд. Но ещё больше — людьми. Их характером, эмоциями, тем, что скрыто за улыбкой или взглядом."</p>
        </div>

        <div className='info_for_jewelry_model'>
          <div className='vector_rectangle'>
            <svg width="520" height="326" viewBox="0 0 520 326" fill="none" xmlns="http://www.w3.org/2000/svg">
              <foreignObject x="-30" y="-30" width="580" height="386">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    backdropFilter: 'blur(15px)',
                    clipPath: 'url(#bgblur_0_452_1364_clip_path)',
                    height: '100%',
                    width: '100%'
                  }}
                />
              </foreignObject>

              <g data-figma-bg-blur-radius="30">
                <rect width="520" height="326" fill="black" />
                <rect
                  x="1"
                  y="1"
                  width="518"
                  height="324"
                  stroke="white"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                />
              </g>

              <defs>
                <clipPath
                  id="bgblur_0_452_1364_clip_path"
                  transform="translate(30 30)"
                >
                  <rect width="520" height="326" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <button className="author_jewelry_button">
            <p className="Author1">ПЕРЕЙТИ</p>
            <div className="line_button">
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white" />
              </svg>
            </div>
          </button>

          <div className='vector_for_color'>
            <svg width="110" height="55" viewBox="0 0 110 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="110" height="55" fill="white" fillOpacity="0.2" />
              <rect x="0.5" y="0.5" width="109" height="54" stroke="white" strokeOpacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(4.37113e-08 1 1 -4.37113e-08 101.75 8.25)" stroke="white" strokeOpacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(-1 0 0 1 101.75 8.9375)" stroke="white" strokeOpacity="0.4" />
              <line x1="101.25" y1="46.75" x2="101.25" y2="35.75" stroke="white" strokeOpacity="0.4" />
              <line x1="101.75" y1="46.5625" x2="90.75" y2="46.5625" stroke="white" strokeOpacity="0.4" />
              <line x1="8.75" y1="8.25" x2="8.75" y2="19.25" stroke="white" strokeOpacity="0.4" />
              <line x1="8.25" y1="8.4375" x2="19.25" y2="8.4375" stroke="white" strokeOpacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(-4.37113e-08 -1 -1 4.37113e-08 8.25 46.75)" stroke="white" strokeOpacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(1 0 0 -1 8.25 46.0625)" stroke="white" strokeOpacity="0.4" />
            </svg>
            <p className='name_for_blok'>ONE SIZE</p>
          </div>

          <div className='vector_for_size'>
            <svg width="110" height="55" viewBox="0 0 110 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="110" height="55" fill="white" fill-opacity="0.2" />
              <rect x="0.5" y="0.5" width="109" height="54" stroke="white" stroke-opacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(4.37113e-08 1 1 -4.37113e-08 101.75 8.25)" stroke="white" stroke-opacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(-1 0 0 1 101.75 8.9375)" stroke="white" stroke-opacity="0.4" />
              <line x1="101.25" y1="46.75" x2="101.25" y2="35.75" stroke="white" stroke-opacity="0.4" />
              <line x1="101.75" y1="46.5625" x2="90.75" y2="46.5625" stroke="white" stroke-opacity="0.4" />
              <line x1="8.75" y1="8.25" x2="8.75" y2="19.25" stroke="white" stroke-opacity="0.4" />
              <line x1="8.25" y1="8.4375" x2="19.25" y2="8.4375" stroke="white" stroke-opacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(-4.37113e-08 -1 -1 4.37113e-08 8.25 46.75)" stroke="white" stroke-opacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(1 0 0 -1 8.25 46.0625)" stroke="white" stroke-opacity="0.4" />
            </svg>

            <p className='name_for_blok'>ONE SIZE</p>

          </div>

          <div className='vector_for_type'>
            <svg width="110" height="55" viewBox="0 0 110 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="110" height="55" fill="white" fillOpacity="0.2" />
              <rect x="0.5" y="0.5" width="109" height="54" stroke="white" strokeOpacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(4.37113e-08 1 1 -4.37113e-08 101.75 8.25)" stroke="white" strokeOpacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(-1 0 0 1 101.75 8.9375)" stroke="white" strokeOpacity="0.4" />
              <line x1="101.25" y1="46.75" x2="101.25" y2="35.75" stroke="white" strokeOpacity="0.4" />
              <line x1="101.75" y1="46.5625" x2="90.75" y2="46.5625" stroke="white" strokeOpacity="0.4" />
              <line x1="8.75" y1="8.25" x2="8.75" y2="19.25" stroke="white" strokeOpacity="0.4" />
              <line x1="8.25" y1="8.4375" x2="19.25" y2="8.4375" stroke="white" strokeOpacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(-4.37113e-08 -1 -1 4.37113e-08 8.25 46.75)" stroke="white" strokeOpacity="0.4" />
              <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(1 0 0 -1 8.25 46.0625)" stroke="white" strokeOpacity="0.4" />
            </svg>
            <p className='name_for_blok'>EARRINGS</p>
          </div>

          <img src="/img/jewel_coll.png" alt="jewelry collection" className="X_jewel_coll" />

          <p className='number_for_jewel'>Number:</p>
          <p className='num_for_jewel'>01</p>
        </div>

        <div className='info_for_coll_model'>
          <svg width="506" height="424" viewBox="0 0 506 424" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dii_454_127)">
              <path d="M471.502 30.2705C473.987 30.2706 476.002 32.2853 476.002 34.7705V339.56C476.002 340.26 475.838 340.949 475.526 341.572L475.384 341.835L449.228 386.465C448.42 387.843 446.942 388.689 445.345 388.689H279.936C277.789 388.689 275.952 387.176 275.527 385.091L275.49 384.888L274.355 377.663C274.088 375.961 272.622 374.706 270.898 374.706H208.981C207.817 374.706 206.734 375.285 206.086 376.24L205.962 376.437L197.134 391.499C196.326 392.877 194.848 393.724 193.251 393.724H35.3057C32.8205 393.724 30.8057 391.709 30.8057 389.224V355.155C30.8057 354.356 31.0185 353.57 31.4229 352.88L38.1934 341.329L38.3037 341.125C38.5462 340.64 38.6738 340.104 38.6738 339.56V198.569C38.6738 197.69 38.3426 196.846 37.751 196.202L37.6299 196.076L32.1475 190.676C31.289 189.83 30.8057 188.675 30.8057 187.47V139.25C30.8057 138.45 31.0186 137.665 31.4229 136.975L78.8887 55.9873L79.0469 55.7354C79.8785 54.508 81.261 53.7628 82.7598 53.7627H295.237C296.319 53.7626 297.306 53.2611 297.972 52.3936L313.601 32.0303L313.766 31.8281C314.617 30.8425 315.859 30.2706 317.17 30.2705H471.502ZM314.121 47.6104C312.87 47.6104 311.679 48.1313 310.83 49.041L310.665 49.2285L300.935 60.8945C300.27 61.6917 299.284 62.1533 298.246 62.1533H181.688C179.831 62.1535 178.325 63.6593 178.325 65.5166C178.325 67.3737 179.831 68.8798 181.688 68.8799H300.122C301.364 68.8801 302.514 69.5379 303.142 70.6094L312.953 87.3506L313.112 87.6025C313.946 88.8307 315.338 89.5752 316.835 89.5752H449.181C451.8 89.5754 453.461 92.3306 452.319 94.624L452.2 94.8447L448.693 100.828C448.065 101.9 446.916 102.558 445.674 102.559H434.197C433.336 102.559 432.506 102.241 431.866 101.67L431.741 101.552L428.832 98.6855C427.99 97.8563 426.855 97.3916 425.674 97.3916H400.757C399.26 97.3916 397.868 98.136 397.034 99.3643L396.875 99.6162L390.014 111.323C389.386 112.395 388.236 113.054 386.994 113.054H316.835C315.671 113.054 314.588 112.475 313.939 111.52L313.815 111.323L304.004 94.582C303.196 93.2043 301.719 92.3576 300.122 92.3574H168.185C165.669 92.3574 163.975 89.7838 164.97 87.4736L171.964 71.2295L172.074 70.9502C173.106 68.0558 170.964 64.9504 167.831 64.9502H158.579C156.77 64.9502 155.15 66.031 154.445 67.6719L154.316 68.0078L145.179 95.0137C144.698 96.4349 143.364 97.3914 141.863 97.3916H136.053C133.657 97.3915 131.97 95.0386 132.737 92.7695L140.141 70.8926L140.224 70.6182C140.991 67.7884 138.862 64.9504 135.878 64.9502H132.025C130.217 64.9503 128.597 66.031 127.892 67.6719L127.763 68.0078L118.625 95.0137C118.144 96.435 116.81 97.3915 115.31 97.3916H99.9824C97.5871 97.3914 95.8994 95.0386 96.667 92.7695L100.475 81.5195L100.558 81.2461C101.325 78.4163 99.1955 75.5774 96.2119 75.5771H84.083C82.5856 75.5771 81.193 76.3214 80.3594 77.5498L80.2002 77.8018L42.8975 141.449C42.4931 142.139 42.2803 142.925 42.2803 143.725V181.601C42.2804 182.805 42.7638 183.96 43.6221 184.806L44.8428 186.008L44.9639 186.134C45.5555 186.778 45.8867 187.623 45.8867 188.502V319.424C45.8867 319.968 45.7591 320.504 45.5166 320.989L45.4062 321.193L42.8975 325.473C42.4931 326.163 42.2803 326.948 42.2803 327.748V373.562C42.2805 376.048 44.2951 378.062 46.7803 378.062H187.023C188.621 378.062 190.099 377.216 190.906 375.838L199.734 360.775L199.857 360.579C200.506 359.623 201.589 359.045 202.754 359.045H307.006C308.248 359.045 309.397 359.704 310.025 360.775L315.903 370.804L316.062 371.056C316.896 372.284 318.288 373.028 319.785 373.028H435.512C437.109 373.028 438.586 372.181 439.394 370.804L464.567 327.852L464.71 327.589C465.022 326.965 465.185 326.276 465.185 325.576V299.222C465.185 298.522 465.021 297.833 464.71 297.21L464.567 296.946L462.059 292.667C461.744 292.13 461.578 291.519 461.578 290.897V236.017C461.578 235.395 461.744 234.783 462.059 234.246L464.567 229.967L464.71 229.704C465.022 229.081 465.185 228.391 465.185 227.691V209.168C465.185 208.468 465.022 207.779 464.71 207.155L464.567 206.893L460.092 199.257C459.777 198.72 459.611 198.109 459.611 197.487V165.539C459.611 164.839 459.448 164.151 459.137 163.527L458.994 163.264L453.535 153.95C453.221 153.414 453.056 152.803 453.056 152.181V131.979C453.056 131.357 453.221 130.746 453.535 130.209L458.994 120.896L459.137 120.633C459.449 120.009 459.611 119.32 459.611 118.62V52.1104C459.611 49.6251 457.597 47.6104 455.111 47.6104H314.121Z" fill="#5F5F5F" />
            </g>
            <defs>
              <filter id="filter0_dii_454_127" x="0.805664" y="0.270508" width="505.196" height="423.453" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_454_127" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_454_127" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-4" dy="-4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_454_127" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-3" dy="3" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
                <feBlend mode="normal" in2="effect2_innerShadow_454_127" result="effect3_innerShadow_454_127" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className='info_for_coll_model2'>
          <svg width="785" height="422" viewBox="0 0 785 422" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dii_452_1483)">
              <path d="M750.104 30.0029C752.589 30.003 754.603 32.0178 754.604 34.5029V337.524C754.603 338.611 754.211 339.66 753.501 340.477L753.354 340.637L710.311 385.595C709.462 386.481 708.287 386.983 707.06 386.983H433.456C431.466 386.983 429.72 385.677 429.148 383.786L429.097 383.602L427.066 375.687C426.669 374.139 425.274 373.056 423.676 373.056H318.454C317.559 373.056 316.701 373.399 316.053 374.01L315.926 374.136L300.154 390.608C299.305 391.495 298.131 391.997 296.903 391.997H35.3965C32.9113 391.997 30.8966 389.982 30.8965 387.497V354.106C30.8966 352.947 31.3447 351.833 32.1465 350.995L42.7256 339.944L42.8389 339.82C43.391 339.185 43.6972 338.37 43.6973 337.524V198.218C43.6972 197.068 43.1325 195.996 42.1963 195.345L42.0049 195.22L33.0723 189.834C31.7219 189.02 30.8965 187.557 30.8965 185.98V139.07C30.8965 137.911 31.3446 136.796 32.1465 135.958L109.858 54.7891L110.019 54.6289C110.831 53.8512 111.839 53.4004 113.003 53.4004H462.591C463.379 53.4004 464.113 53.1341 464.736 52.6367L491.883 30.9854L492.035 30.8691C492.804 30.3075 493.734 30.0029 494.689 30.0029H750.104ZM489.8 47.2725C488.962 47.2725 488.142 47.5064 487.434 47.9443L487.137 48.1445L469.516 61.0781C468.915 61.5188 468.189 61.7568 467.444 61.7568H274.262C272.411 61.7569 270.91 63.2576 270.91 65.1084C270.91 66.9594 272.411 68.4599 274.262 68.46H470.78C471.735 68.4601 472.648 68.8506 473.309 69.54L490.681 87.6846L490.843 87.8457C491.676 88.6315 492.78 89.0722 493.931 89.0723H713.269C716.253 89.0727 717.827 92.54 715.985 94.7803L715.797 94.9932L710.122 100.92C709.462 101.609 708.548 102 707.594 102H685.347C684.789 102 684.241 101.867 683.747 101.613L683.539 101.497L676.911 97.5C676.21 97.0771 675.406 96.8536 674.587 96.8535H630.472C629.321 96.8535 628.217 97.2944 627.384 98.0801L627.222 98.2412L614.649 111.372C613.989 112.062 613.076 112.452 612.121 112.452H493.931C493.036 112.452 492.177 112.109 491.529 111.498L491.402 111.372L474.03 93.2275C473.182 92.3412 472.007 91.84 470.78 91.8398H251.913C249.078 91.8398 247.419 88.6451 249.05 86.3262L259.387 71.6309L259.57 71.3486C261.348 68.3972 259.237 64.5425 255.706 64.542H236.16C234.625 64.542 233.204 65.3243 232.379 66.6025L232.222 66.8652L216.645 95.0469C216.028 96.1615 214.855 96.8534 213.581 96.8535H199.528C196.863 96.8535 195.175 93.9929 196.465 91.6602L207.764 71.2188L207.908 70.9365C209.285 67.9942 207.145 64.5422 203.825 64.542H192.958C191.423 64.542 190 65.3241 189.176 66.6025L189.02 66.8652L173.441 95.0469C172.825 96.1613 171.652 96.8533 170.379 96.8535H140.842C138.176 96.8535 136.489 93.9929 137.778 91.6602L143.227 81.8037L143.371 81.5205C144.747 78.5783 142.607 75.1272 139.288 75.127H115.243C114.093 75.127 112.988 75.568 112.155 76.3535L111.992 76.5146L50.8145 140.415C50.0127 141.252 49.5646 142.367 49.5645 143.526V180.134C49.5645 181.711 50.3899 183.173 51.7402 183.987L53.7393 185.192L53.9307 185.316C54.8668 185.968 55.4315 187.039 55.4316 188.189V317.469C55.4316 318.314 55.1252 319.129 54.5732 319.765L54.46 319.89L50.8145 323.697C50.0127 324.535 49.5647 325.649 49.5645 326.809V371.898C49.5647 374.384 51.5793 376.398 54.0645 376.398H286.77C287.997 376.398 289.172 375.896 290.021 375.01L305.792 358.536L305.919 358.411C306.567 357.8 307.425 357.457 308.32 357.457H481.98C482.935 357.457 483.849 357.847 484.509 358.536L495.48 369.996L495.644 370.158C496.476 370.944 497.581 371.385 498.731 371.385H691.06C692.287 371.385 693.461 370.883 694.31 369.996L735.754 326.709L735.899 326.549C736.609 325.732 737.003 324.684 737.003 323.597V298.397C737.003 297.31 736.609 296.262 735.899 295.445L735.754 295.285L732.108 291.478C731.485 290.826 731.136 289.959 731.136 289.058V235.446C731.136 234.545 731.485 233.678 732.108 233.026L735.754 229.218L735.899 229.058C736.609 228.241 737.003 227.193 737.003 226.106V208.706C737.003 207.619 736.609 206.571 735.899 205.754L735.754 205.594L728.908 198.443C728.285 197.792 727.936 196.925 727.936 196.023V165.253C727.935 164.166 727.543 163.118 726.833 162.302L726.687 162.142L718.24 153.319C717.617 152.668 717.269 151.801 717.269 150.899V131.828C717.269 130.926 717.617 130.059 718.24 129.407L726.687 120.586L726.833 120.426C727.543 119.609 727.936 118.561 727.936 117.474V51.7725C727.935 49.2875 725.921 47.2727 723.436 47.2725H489.8Z" fill="#5F5F5F" />
            </g>
            <defs>
              <filter id="filter0_dii_452_1483" x="0.896484" y="0.00292969" width="783.707" height="421.994" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_452_1483" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_452_1483" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-4" dy="-4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_452_1483" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-3" dy="3" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
                <feBlend mode="normal" in2="effect2_innerShadow_452_1483" result="effect3_innerShadow_452_1483" />
              </filter>
            </defs>
          </svg>
        </div>

        <p className='text_collect100'>COLLECTIONS</p>
        <p className='text_collect200'>COLD WINTER</p>

        <div className='block01'>
          <p className='number_block'>01</p>
          <p className='name_block'>COLD WINTER</p>
        </div>
        <div className='block02'>
          <p className='number_block'>02</p>
          <p className='name_block'>WARM SUMMER</p>
        </div>
        <div className='block03'>
          <p className='number_block'>03</p>
          <p className='name_block'>OHUOR</p>
        </div>
        <div className='block04'>
          <p className='number_block'>04</p>
          <p className='name_block'>WORLDWIDE</p>
        </div>

        <div className='block001'>
          <p className='number_block'>01</p>
          <p className='name_block1'>Серьги "Номер Один"</p>
        </div>
        <div className='block002'>
          <p className='number_block'>02</p>
          <p className='name_block1'>Серьги "Номер Один"</p>
        </div>
        <div className='block003'>
          <p className='number_block'>03</p>
          <p className='name_block1'>Кольцо "Номер Один"</p>
        </div>
        <div className='block004'>
          <p className='number_block'>04</p>
          <p className='name_block1'>Колье "Номер Один"</p>
        </div>
        <div className='block005'>
          <p className='number_block'>05</p>
          <p className='name_block1'>Серьги "Номер Один"</p>
        </div>
        <div className='block006'>
          <p className='number_block'>06</p>
          <p className='name_block1'>Серьги "Номер Один"</p>
        </div>
        <div className='block007'>
          <p className='number_block'>07</p>
          <p className='name_block1'>Кольцо "Номер Один"</p>
        </div>
        <div className='block008'>
          <p className='number_block'>08</p>
          <p className='name_block1'>Колье "Номер Один"</p>
        </div>
      </div>
    </div>
  );
};
const Collections = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [authors, setAuthors] = useState([]);
  const [filteredAuthors, setFilteredAuthors] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredBlock, setHoveredBlock] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const AUTHORS_PER_SLIDE = 6;
  const totalSlides = Math.ceil(filteredAuthors.length / AUTHORS_PER_SLIDE);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/authors');
        setAuthors(response.data);
        setFilteredAuthors(response.data);
      } catch (error) {
        console.error('Ошибка загрузки авторов:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredAuthors(authors);
      setCurrentSlide(0);
      return;
    }

    const filtered = authors.filter(author =>
      author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      author.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredAuthors(filtered);
    setCurrentSlide(0);
  }, [searchQuery, authors]);

  // const getCurrentSlideAuthors = () => {
  //   const start = currentSlide * AUTHORS_PER_SLIDE;
  //   const end = start + AUTHORS_PER_SLIDE;
  //   return filteredAuthors.slice(start, end);
  // };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div style={{backgroundColor: 'black'}}>
      <div className="CollBody">
        <div className="slide1_coll">
          <img src="/img/bg_coll.png" alt="" className="bg_coll" />
          {/* <div className="navbar_collections">
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
          </div> */}
          <Navbar />
          <img src="/img/tetya.png" alt="" className="coll_image" />

          <p className="collections_txt">COLLECTIONS</p>
          <p className="Catalog_txt">HOME / COLLECTIONS</p>

          <div className="blok1_coll">
            <svg width="415" height="118" viewBox="0 0 415 118" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M189.492 68.8438L121.898 1.25H95.3438L162.938 68.8438H189.492Z" fill="white" stroke="white" strokeOpacity="0.5" />
              <path d="M142.82 68.8438L75.2266 1.25H48.6719L116.266 68.8438H142.82Z" fill="white" stroke="white" strokeOpacity="0.5" />
              <path d="M96.1484 68.8438L28.5547 1.25H2L69.5938 68.8438H96.1484Z" fill="white" stroke="white" strokeOpacity="0.5" />
              <path d="M414 117.125V113.102H334.336L330.312 117.125H414Z" fill="white" stroke="white" strokeOpacity="0.5" />
              <foreignObject x="66.8945" y="-19.25" width="367.605" height="156.875">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    backdropFilter: 'blur(10px)',
                    clipPath: 'url(#bgblur_0_444_176_clip_path)',
                    height: '100%',
                    width: '100%'
                  }}
                />
              </foreignObject>
              <g data-figma-bg-blur-radius="20">
                <path d="M210.414 68.8438L142.82 1.25H401.93L414 13.3203V68.8438H210.414Z" fill="white" fillOpacity="0.1" />
                <path d="M88.1016 84.9375H414V100.227H326.289L309.391 117.125H120.289L88.1016 84.9375Z" fill="white" fillOpacity="0.1" />
                <path d="M210.414 68.8438L142.82 1.25H401.93L414 13.3203V68.8438H210.414Z" stroke="white" strokeOpacity="0.4" />
                <path d="M88.1016 84.9375H414V100.227H326.289L309.391 117.125H120.289L88.1016 84.9375Z" stroke="white" strokeOpacity="0.4" />
              </g>
              <defs>
                <clipPath id="bgblur_0_444_176_clip_path" transform="translate(-66.8945 19.25)">
                  <path d="M210.414 68.8438L142.82 1.25H401.93L414 13.3203V68.8438H210.414Z" />
                  <path d="M88.1016 84.9375H414V100.227H326.289L309.391 117.125H120.289L88.1016 84.9375Z" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <p className="text_to_blok1">WELCOME</p>
          <p className="text2_to_blok1">TO DIGITAL</p>
          <p className="text3_to_blok1">GALLERY</p>

          <div className="line_coll1">
            <svg width="315" height="6" viewBox="0 0 315 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3V3.5H316V3V2.5H3V3Z" fill="white" />
            </svg>
          </div>

          <p className="text_coll1">
            это цифровая галерея коллекций, здесь вы можете познакомиться с миром авторов и выбрать тех, чья история изделий отражает ваш внутренний мир
          </p>

          <div className="group_coll_text1">
            <p className="text_to_group">AUTHORS' HISTORY</p>
            <p className="text_to_group2">история авторов, запечатленная в коллекциях</p>
            <div className="line_to_group">
              <svg width="316" height="6" viewBox="0 0 316 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M310.333 3C310.333 4.47276 311.527 5.66667 313 5.66667C314.473 5.66667 315.667 4.47276 315.667 3C315.667 1.52724 314.473 0.333333 313 0.333333C311.527 0.333333 310.333 1.52724 310.333 3ZM0 3V3.5H313V3V2.5H0V3Z" fill="white" fillOpacity="0.4" />
              </svg>
            </div>
          </div>

          <div className="group_coll_text2">
            <p className="text_to_group">UNIQUENESS</p>
            <p className="text_to_group2">уникальность изделий и поиск своего стиля</p>
            <div className="line_to_group">
              <svg width="316" height="6" viewBox="0 0 316 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M310.333 3C310.333 4.47276 311.527 5.66667 313 5.66667C314.473 5.66667 315.667 4.47276 315.667 3C315.667 1.52724 314.473 0.333333 313 0.333333C311.527 0.333333 310.333 1.52724 310.333 3ZM0 3V3.5H313V3V2.5H0V3Z" fill="white" fillOpacity="0.4" />
              </svg>
            </div>
          </div>

          <img src="/img/object_coll1.png" alt="" className="coll_object1" />
          <img src="/img/object_coll2.png" alt="" className="coll_object2" />
        </div>

        <div className="slide2_coll">
          <div className="vector_coll1">
            <svg width="710" height="24" viewBox="0 0 710 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M699.033 7.47059L708 12.6471H676.843L667.876 7.47059H699.033Z" fill="white" />
              <path d="M40.1243 23L29.7697 12.6471H220.037L230.391 23H40.1243Z" fill="white" />
              <path d="M0 12.6471H29.7697M543.62 7.47059L538.442 12.6471H220.037M530.676 7.47059L537.148 1H612.219L618.691 7.47059M608.336 7.47059L613.514 12.6471H676.843M676.843 12.6471H708L699.033 7.47059H667.876L676.843 12.6471ZM29.7697 12.6471L40.1243 23H230.391L220.037 12.6471M29.7697 12.6471H220.037" stroke="white" strokeLinecap="round" />
            </svg>
          </div>

          <p className="text_slide2_coll">НАШИ АВТОРЫ</p>

          <div className="vector_coll2">
            <svg width="482" height="100" viewBox="0 0 482 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50.8548 1L1 38.0777V95H253.415L276.372 77.9223H470.583L481 70.1748V1H379.657L362.543 8.3486H320.873L283.759 1H50.8548Z" fill="white" fillOpacity="0.3" stroke="white" strokeOpacity="0.4" />
              <path d="M351.123 89.9533L341.784 84H326.374L320.304 87.8696H275.944L282.014 84H326.374H341.784L351.123 89.9533H407.623L416.962 84H428.169H473.93L480 87.8696H434.239L428.169 84H416.962L407.623 89.9533L416.962 95.9066H443.111H449.181L451.983 99H445.913L443.111 95.9066H416.962L407.623 89.9533H351.123Z" fill="white" />
              <path d="M458.52 99L455.719 95.9066H462.256L465.058 99H458.52Z" fill="white" />
              <path d="M407.623 89.9533H351.123L341.784 84L326.374 84M407.623 89.9533L416.962 84H428.169M407.623 89.9533L416.962 95.9066H443.111M428.169 84H473.93L480 87.8696H434.239L428.169 84ZM443.111 95.9066H449.181L451.983 99H445.913L443.111 95.9066ZM320.304 87.8696H275.944L282.014 84L326.374 84M320.304 87.8696L326.374 84M320.304 87.8696L310.965 93.8229H268M455.719 95.9066L458.52 99H465.058L462.256 95.9066H455.719Z" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="vector_coll3">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6877 12.6877C13.3235 12.052 13.8278 11.2972 14.1719 10.4666C14.516 9.63592 14.693 8.74562 14.693 7.84652C14.693 6.94743 14.516 6.05713 14.1719 5.22647C13.8278 4.39581 13.3235 3.64106 12.6877 3.0053C12.052 2.36954 11.2972 1.86523 10.4666 1.52116C9.63592 1.17709 8.74562 1 7.84652 1C6.94743 1 6.05713 1.17709 5.22647 1.52116C4.39581 1.86523 3.64106 2.36954 3.0053 3.0053C1.72133 4.28927 1 6.03071 1 7.84652C1 9.66234 1.72133 11.4038 3.0053 12.6877C4.28927 13.9717 6.03071 14.693 7.84652 14.693C9.66234 14.693 11.4038 13.9717 12.6877 12.6877ZM12.6877 12.6877L17 17" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="vector_coll4">
            <svg width="400" height="1" viewBox="0 0 400 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="400" y2="0.5" stroke="#939393" />
            </svg>
          </div>

          <div className="search_container">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск автора или коллекции"
              className="search_input"
            />
          </div>

          <div className="search_authors_container">
            <div className={`slide-${currentSlide}`}>
              {[[1, 2, 3], [4, 5, 6]].map((row, rowIndex) => (
                <div key={rowIndex} className="search_authors_total">
                  {row.map((index) => {
                    const blockKey = `${rowIndex}-${index}`;
                    return (
                      <AuthorBlock
                        key={blockKey}
                        index={index}
                        isHovered={hoveredBlock === blockKey}
                        onMouseEnter={() => {
                          console.log(`Hovered block: ${blockKey}`);
                          setHoveredBlock(blockKey);
                        }}
                        onMouseLeave={() => {
                          console.log('Left block');
                          setHoveredBlock(null);
                        }}
                        onClick={handleOpenModal}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>


          <div className="pagination-buttons1">
            <button className="prev-slide" onClick={prevSlide}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" stroke="white" />
                <path d="M24.5 10L15 19.5L24.5 29" stroke="white" />
              </svg>
            </button>

            <p className="slide-counter">{currentSlide}/{totalSlides}</p>

            <button className="next-slide" onClick={nextSlide}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" stroke="white" />
                <path d="M16 10L25 19.5L16 29" stroke="white" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative w-full min-h-[713px] bg-[#0A0A0A] flex flex-col md:flex-col lg:flex-row items-center py-16 px-4 md:px-8 lg:px-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start mb-4 md:mb-4 lg:mb-0">
            <p className="text-white font-jura text-3xl md:text-5xl lg:text-[64px] neon-text">ПОПУЛЯРНЫЕ< br/>    КОЛЛЕКЦИИ</p>
            <p className="text-[#5F5F5F] font-gajraj text-xl md:text-2xl lg:text-3xl mt-8">FUTURE WITH AI</p>
            <img
              src="img/Group 10.png"
              alt="Collections"
              className="w-full md:max-w-full md:max-h-[400px] lg:max-w-[500px] lg:max-h-none h-auto mt-6 object-cover"
            />
            <p className="text-white font-jura text-sm md:text-base lg:text-lg mt-6 pr-0 max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
              Каждое украшение, представленное на нашем сайте, вы можете примерить не выходя из дома'
            </p>
            <Link to='/EarTracker'>
              <button
                className="mt-6 flex items-center space-x-2 border border-white rounded-full text-white px-3 py-1 md:px-6 md:py-2 lg:w-[183px] lg:px-8 lg:py-3 self-start md:self-start lg:self-start sm:self-end hover:bg-white hover:text-black transition duration-300"
              >
                <span className="text-xs md:text-sm font-jura">TRY NOW</span>
                <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white hover:fill-black">
                  <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" />
                </svg>
              </button>
            </Link>
          </div>
          <div className="w-full md:w-full lg:w-1/2 flex flex-col mt-4 md:mt-0 space-y-4">
            {['COLD WINTER', 'COLD WINTER', 'COLD WINTER', 'COLD WINTER', 'COLD WINTER'].map((collection, index) => (
              <div key={index} className="flex flex-row items-center h-[178px] text-white transition-all duration-300 hover:bg-white hover:text-black px-4">
                <div className="flex-1">
                  <p className="font-gajraj text-xl md:text-2xl lg:text-3xl">“{collection}”</p>
                  <p className="font-jura text-sm md:text-base lg:text-lg mt-2">
                    Авторская коллекция от ИМЯ ФАМИЛИЯ посвященная долгой якутской зиме
                  </p>
                </div>
                <div className="flex space-x-4">
                  <div className="relative">
                    <img src="img/object (1).png" alt="Item 1" className="w-[60px] md:w-[80px] lg:w-[100px] h-auto" />
                    <p className="font-jura text-xs md:text-sm absolute bottom-[-20px] left-0">/001_name</p>
                  </div>
                  <div className="relative">
                    <img src="img/object (1).png" alt="Item 2" className="w-[60px] md:w-[80px] lg:w-[100px] h-auto" />
                    <p className="font-jura text-xs md:text-sm absolute bottom-[-20px] left-0">/002_name</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='slide5_forcoll'>
          <img src="/img/bg_slide5.png" alt="" className="bg_slide5" />
          <div className='for_slide5_disc'>
            <p className='text_slidde5'>Откройте миру своё искусство</p>
            <p className='text2_slidde5'>Мы создали пространство, где ваши работы не потеряются в шуме мира. Где каждая линия, каждый изгиб, каждая вложенная вами эмоция — найдет того, кто почувствует ее сердцем.</p>
            <button className="log_in_author_coll">
              <p className="Author">Я АВТОР</p>
              <div className="line_button">
                <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="copyrigth2">
          <p className="txt_cop">copyright</p>
        </div>

      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Collections;