import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const MainMenu = ({ lang = 'ru' }) => {
  const [hoveredDisc, setHoveredDisc] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Мультиязычные тексты
  const texts = {
    ru: {
      title: 'APROTAG - Авторские ювелирные изделия',
      description: 'Платформа APROTAG: уникальные ювелирные изделия с 3D-визуализацией. Купите серьги, кольца и авторские коллекции.',
      keywords: 'ювелирные изделия, авторские украшения, серьги, кольца, 3D-визуализация',
      siteName: 'APROTAG',
      navAboutUs: 'О НАС',
      navCatalog: 'КАТАЛОГ',
      navCollections: 'КОЛЛЕКЦИИ',
      navAuthor: 'Я АВТОР',
      breadcrumbHome: 'Главная',
      breadcrumbCatalog: 'Каталог',
      breadcrumbCollections: 'Коллекции',
    },
    en: {
      title: 'APROTAG - Handmade Jewelry',
      description: 'APROTAG platform: unique jewelry with 3D visualization. Buy earrings, rings, and exclusive collections.',
      keywords: 'jewelry, handmade jewelry, earrings, rings, 3D visualization',
      siteName: 'APROTAG',
      navAboutUs: 'ABOUT US',
      navCatalog: 'CATALOG',
      navCollections: 'COLLECTIONS',
      navAuthor: 'I AM AN AUTHOR',
      breadcrumbHome: 'Home',
      breadcrumbCatalog: 'Catalog',
      breadcrumbCollections: 'Collections',
    },
  };

  const t = texts[lang] || texts.ru; // Fallback на русский

  // JSON-LD для WebSite
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: t.siteName,
    description: t.description,
    url: `http://localhost:3000${lang === 'en' ? '/en' : ''}/`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `http://localhost:3000${lang === 'en' ? '/en' : ''}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  // JSON-LD для BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t.breadcrumbHome,
        item: `http://localhost:3000${lang === 'en' ? '/en' : ''}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t.breadcrumbCatalog,
        item: `http://localhost:3000${lang === 'en' ? '/en' : ''}/Catalog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: t.breadcrumbCollections,
        item: `http://localhost:3000${lang === 'en' ? '/en' : ''}/Collections`,
      },
    ],
  };

  return (
    <div className="w-full overflow-x-hidden overflow-y-auto bg-black font-jura">
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:image" content="/img/Remove-bg.ai_1731065735842 1.png" />
        <meta property="og:url" content={`http://localhost:3000${lang === 'en' ? '/en' : ''}/`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.description} />
        <meta name="twitter:image" content="/img/Remove-bg.ai_1731065735842 1.png" />
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="relative w-full min-h-[80px] flex flex-col items-center">
        <img src="img/bg (3).png" alt="Фон главной страницы" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <nav className="relative w-full flex justify-between items-center px-4 py-6 md:px-8 lg:px-20">
          <div className="text-white text-sm font-oi md:block hidden" data-testid="logo">apro__<br />___tag.</div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl focus:outline-none">
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          <div className="hidden md:flex space-x-16 border border-white rounded-full px-28 py-2">
            <Link to={lang === 'en' ? '/en/AboutUs' : '/AboutUs'}>
              <button data-testid="nav-about-us-desktop" className="text-white font-light text-sm hover:underline">{t.navAboutUs}</button>
            </Link>
            <Link to={lang === 'en' ? '/en/Catalog' : '/Catalog'}>
              <button data-testid="nav-catalog-desktop" className="text-white font-light text-sm hover:underline">{t.navCatalog}</button>
            </Link>
            <Link to={lang === 'en' ? '/en/Collections' : '/Collections'}>
              <button data-testid="nav-collections-desktop" className="text-white font-light text-sm hover:underline">{t.navCollections}</button>
            </Link>
          </div>
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center space-y-4 py-4 md:hidden z-50">
              <Link to={lang === 'en' ? '/en/AboutUs' : '/AboutUs'} onClick={() => setIsMenuOpen(false)}>
                <button data-testid="nav-about-us-mobile" className="text-white font-light text-sm hover:underline">
                  {lang === 'en' ? 'ABOUT US' : 'О НАС'}
                </button>
              </Link>
              <Link to={lang === 'en' ? '/en/Catalog' : '/Catalog'} onClick={() => setIsMenuOpen(false)}>
                <button data-testid="nav-catalog-mobile" className="text-white font-light text-sm hover:underline">
                  {lang === 'en' ? 'CATALOG' : 'КАТАЛОГ'}
                </button>
              </Link>
              <Link to={lang === 'en' ? '/en/Collections' : '/Collections'} onClick={() => setIsMenuOpen(false)}>
                <button data-testid="nav-collections-mobile" className="text-white font-light text-sm hover:underline">
                  {lang === 'en' ? 'COLLECTIONS' : 'КОЛЛЕКЦИИ'}
                </button>
              </Link>
            </div>
          )}
          <Link to="/LogInAuthor">
            <button className="flex items-center space-x-2 bg-white text-black rounded-full px-7 py-3 hover:bg-gray-200">
              <span className="text-sm font-semibold">{t.navAuthor}</span>
              <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="black" />
              </svg>
            </button>
          </Link>
        </nav>
        {/* <Navbar/> */}
        <div className="relative w-full flex items-center justify-center py-8 px-4 md:px-8 lg:px-16 min-h-[500px] md:min-h-[600px] lg:min-h-[800px]">
          <h1 className="absolute top-10 md:top-16 lg:top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-stalinist text-[48px] md:text-[96px] lg:text-[128px] z-10">
            APROTAG
          </h1>
          <img
            src="img/Remove-bg.ai_1731065735842 1.png"
            alt="Ювелирное изделие на главной странице"
            className="absolute bottom-[24%] md:bottom-0 lg:bottom-0 w-full max-w-[761px] md:max-w-[600px] lg:max-w-[761px] h-auto z-20"
            loading="lazy"
          />
          <div className="absolute left-4 md:left-8 lg:left-40 top-[16%] md:top-[25%] lg:top-[40%] flex flex-col space-y-2 text-white z-30">
            <div className="flex space-x-2">
              <span className="font-gajraj text-xs md:text-xl lg:text-2xl">/001</span>
              <span className="font-gajraj text-xs md:text-xl lg:text-2xl">{lang === 'en' ? 'RINGS' : 'RINGS'}</span>
            </div>
            <div className="flex space-x-2">
              <span className="font-gajraj text-xs md:text-xl lg:text-2xl text-gray-500">/002</span>
              <span className="font-gajraj text-xs md:text-xl lg:text-2xl text-gray-500">{lang === 'en' ? 'EARRINGS' : 'EARRINGS'}</span>
            </div>
            <div className="flex space-x-2">
              <span className="font-gajraj text-xs md:text-xl lg:text-2xl text-gray-500">/003</span>
              <span className="font-gajraj text-xs md:text-xl lg:text-2xl text-gray-500">{lang === 'en' ? 'CHAINS' : 'CHAINS'}</span>
            </div>
            <div className="flex space-x-2">
              <span className="font-gajraj text-xs md:text-xl lg:text-2xl text-gray-500">/004</span>
              <span className="font-gajraj text-xs md:text-xl lg:text-2xl text-gray-500">{lang === 'en' ? 'OTHER' : 'OTHER'}</span>
            </div>
          </div>
          <div className="absolute right-4 md:right-8 lg:right-40 top-[30%] md:top-[25%] lg:top-[35%] flex flex-col items-center z-30">
            <img src="img/Group 4.png" alt="Цитата" className="w-48 md:w-64 lg:w-[313px] h-auto" loading="lazy" />
            <p className="absolute text-white text-right text-xs sm:text-sm md:text-base text-center mt-8 sm:mt-16">
              {lang === 'en' ? 'simple vision of future elements create your individuality' : 'простое видение будущих элементов создаёт вашу индивидуальность'}
            </p>
          </div>
          <div className="absolute bottom-[4%] md:bottom-[4%] lg:bottom-[4%] w-full flex flex-col md:flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 px-4 md:px-8 lg:px-16 z-20">
            <div
              className={`relative w-full lg:w-1/2 min-h-24 bg-white/10 backdrop-blur-lg border border-white rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-none`}
              onMouseEnter={() => setHoveredDisc(1)}
              onMouseLeave={() => setHoveredDisc(null)}
            >
              <div className="p-4">
                <p className={`text-xl sm:text-2xl font-bold underline ${hoveredDisc === 1 ? 'text-black' : 'text-white'}`}>
                  {lang === 'en' ? 'BECOME AN AUTHOR' : 'СТАТЬ АВТОРОМ'}
                </p>
                <p className={`text-xs sm:text-sm mt-2 ${hoveredDisc === 1 ? 'text-black' : 'text-white'}`}>
                  {lang === 'en' ? 'Give your jewelry an eternal story — start here.' : 'Подарите своим украшениям вечную историю — начните здесь.'}
                </p>
                {hoveredDisc === 1 && (
                  <Link to="/LogInAuthor">
                    <button className="absolute right-4 top-4 flex items-center space-x-2 bg-gray-500 text-white rounded-full px-4 py-2">
                      <span>{lang === 'en' ? 'GO TO' : 'ПЕРЕЙТИ'}</span>
                      <img src="img/Arrow2.png" alt="Стрелка" className="w-8 h-2" loading="lazy" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div
              className={`relative w-full lg:w-1/2 min-h-24 bg-white/10 backdrop-blur-lg border border-white rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-none`}
              onMouseEnter={() => setHoveredDisc(2)}
              onMouseLeave={() => setHoveredDisc(null)}
            >
              <div className="p-4">
                <p className={`text-xl sm:text-2xl font-bold underline ${hoveredDisc === 2 ? 'text-black' : 'text-white'}`}>
                  {lang === 'en' ? 'WHY CHOOSE US?' : 'ПОЧЕМУ ИМЕННО МЫ?'}
                </p>
                <p className={`text-xs sm:text-sm mt-2 ${hoveredDisc === 2 ? 'text-black' : 'text-white'}`}>
                  {lang === 'en' ? 'Only a conscious love for art — no coincidences.' : 'Только осознанная любовь к искусству — никаких случайностей.'}
                </p>
                {hoveredDisc === 2 && (
                  <Link to={lang === 'en' ? '/en/AboutUs' : '/AboutUs'}>
                    <button className="absolute right-4 top-4 flex items-center space-x-2 bg-gray-500 text-white rounded-full px-4 py-2">
                      <span>{lang === 'en' ? 'GO TO' : 'ПЕРЕЙТИ'}</span>
                      <img src="img/Arrow2.png" alt="Стрелка" className="w-8 h-2" loading="lazy" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative w-full max-h-[713px] bg-[#0A0A0A] flex flex-col md:flex-row items-center mt-32 py-0 px-4 lg:py-16 px-8 lg:px-16">
        <div className="w-full md:w-1/2 flex flex-col relative">
          <div className="relative w-full mb-8 md:mb-16">
            <h2 className="text-right md:right-16 lg:right-32 text-white font-jura text-3xl md:text-5xl lg:text-[64px] neon-text">OUR<br />PHILOSOPHY</h2>
            <img src="img/Line 2.png" alt="Line" className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 h-auto absolute top-0 left-0 z-0 max-w-[240px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px]" />
            <img src="img/tl(6) 5.png" alt="Element 1" className="hidden sm:block absolute top-0 left-0 w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/2 h-auto z-0 max-w-[200px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[200px]" />
            <img src="img/tl(6) 5.png" alt="Element 2" className="absolute top-[-40px] md:top-[-40px] lg:top-[-80px] right-0 w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/3 h-auto z-0 max-w-[136px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[136px]" />
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl">
            <div className="flex flex-col space-y-4 w-full md:w-1/2 pr-4 text-left">
              <p className="text-white font-bold text-xl font-jura">{lang === 'en' ? 'CREATIVITY' : 'CREATIVITY.'}</p>
              <p className="text-white text-sm font-jura">
                {lang === 'en' ? 'We believe that true art is not just decor, but a dialogue.' : 'Мы верим, что очевидное искусство — это не просто декор, а диалог.'}
              </p>
            </div>
            <div className="flex flex-col space-y-4 w-full md:w-1/2 pl-4 mt-8 md:mt-0 text-right md:text-left">
              <p className="text-white font-bold text-xl font-jura">{lang === 'en' ? 'COLLABORATION' : 'COLLABORATION.'}</p>
              <p className="text-white text-sm font-jura">
                {lang === 'en' ? 'Our platform is a bridge between the artist and someone’s inspiration and happiness.' : 'Наша платформа — мост между художником и чьим-то вдохновением и чьим-то счастьем.'}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0">
          <img src="img/Group 2.png" alt="Slide 2" className="w-full md:w-4/5 lg:w-2/3 max-w-[600px] h-auto" />
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative w-full min-h-[1000px] bg-[#0A0A0A] flex flex-col items-center py-8 px-4 md:px-8 lg:px-16">
        <div className="flex w-full justify-end">
          <h2 className="md:right-16 lg:right-32 text-white font-jura text-3xl md:text-5xl lg:text-[64px] neon-text">{t.navCatalog}</h2>
        </div>
        <div className="w-full max-w-8xl mt-8 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0">
            <div className="border border-white border-opacity-50 p-4 lg:p-6 relative bg-transparent flex flex-col items-center">
              <img src="img/acc1.png" alt={lang === 'en' ? 'Necklace' : 'Ожерелье'} className="w-full max-w-[200px] h-auto object-contain mx-auto" />
              <button className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex items-center space-x-2 border border-white rounded-full text-white px-3 py-1 lg:px-4 lg:py-2 hover:bg-white hover:text-black">
                <span className="text-xs md:text-sm font-jura">{lang === 'en' ? 'GO TO' : 'ПЕРЕЙТИ'}</span>
                <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon group-hover:fill-black">
                  <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" />
                </svg>
              </button>
            </div>
            <div className="border border-white border-opacity-50 p-4 lg:p-6 flex items-center justify-center bg-transparent">
              <p className="text-center text-[#5F5F5F] font-gajraj text-sm md:text-lg lg:text-xl">WITH CARING<br className="md:hidden" /> ABOUT YOUR<br className="md:hidden" /> FASHION</p>
            </div>
            <div className="border border-white border-opacity-50 flex flex-col h-auto bg-transparent lg:col-span-1 md:block md:col-span-2">
              {["КОЛЬЦА", "СЕРЬГИ", "СЕРЬГИ", "СЕРЬГИ", "СЕРЬГИ"].slice(0, window.innerWidth < 1020 ? 3 : 4).map((item, index) => (
                <div key={index} className="border border-white border-opacity-50 p-3 lg:p-4 flex justify-between items-center flex-1">
                  <span className="text-white font-jura text-sm lg:text-base">{lang === 'en' ? item.replace('КОЛЬЦА', 'RINGS').replace('СЕРЬГИ', 'EARRINGS') : item}</span>
                  <button className="flex items-center space-x-2 border border-white rounded-full text-white px-3 py-1 lg:px-4 lg:py-2 hover:bg-white hover:text-black">
                    <span className="text-xs md:text-sm font-jura">{lang === 'en' ? 'GO TO' : 'ПЕРЕЙТИ'}</span>
                    <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon group-hover:fill-black">
                      <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-0 mt-0">
            <div className="border border-white border-opacity-50 p-4 lg:p-6 relative flex flex-col justify-center items-center text-center bg-transparent">
              <h3 className="text-white font-gajraj text-xl md:text-2xl lg:text-4xl mb-2 lg:mb-4 neon-text">“Y2K SAKHA”</h3>
              <p className="text-white text-sm md:text-base font-jura mb-4">
                {lang === 'en' ? 'Next generation of Yakutian jewelry. Modern works by our local artisans.' : 'Новое поколение якутских украшений. Авторские работы наших местных мастеров в современный лад.'}
              </p>
              <button className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex items-center space-x-2 border border-white rounded-full text-white px-3 py-1 lg:px-4 lg:py-2 hover:bg-white hover:text-black">
                <span className="text-xs md:text-sm font-jura">{lang === 'en' ? 'GO TO' : 'ПЕРЕЙТИ'}</span>
                <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon group-hover:fill-black">
                  <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" />
                </svg>
              </button>
            </div>
            <div className="border border-white border-opacity-50 p-4 lg:p-6 relative bg-transparent flex flex-col items-center">
              <img src="img/rhb.png" alt={lang === 'en' ? 'Pendant' : 'Подвеска'} className="w-full max-w-[200px] h-auto object-contain mx-auto" />
              <button className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex items-center space-x-2 border border-white rounded-full text-white px-3 py-1 lg:px-4 lg:py-2 hover:bg-white hover:text-black">
                <span className="text-xs md:text-sm font-jura">{lang === 'en' ? 'GO TO' : 'ПЕРЕЙТИ'}</span>
                <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon group-hover:fill-black">
                  <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0 mt-0">
            <div className="border border-white border-opacity-50 p-4 lg:p-6 relative bg-transparent flex flex-col items-center">
              <img src="img/rhb2.png" alt={lang === 'en' ? 'Earrings' : 'Серьги'} className="w-full max-w-[200px] h-auto object-contain mx-auto" />
              <button className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex items-center space-x-2 border border-white rounded-full text-white px-3 py-1 lg:px-4 lg:py-2 hover:bg-white hover:text-black">
                <span className="text-xs md:text-sm font-jura">{lang === 'en' ? 'GO TO' : 'ПЕРЕЙТИ'}</span>
                <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon group-hover:fill-black">
                  <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" />
                </svg>
              </button>
            </div>
            <div className="border border-white border-opacity-50 p-4 lg:p-6 relative bg-transparent flex flex-col items-center">
              <img src="img/rhb3.png" alt={lang === 'en' ? 'Ring' : 'Кольцо'} className="w-full max-w-[200px] h-auto object-contain mx-auto" />
              <button className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex items-center space-x-2 border border-white rounded-full text-white px-3 py-1 lg:px-4 lg:py-2 hover:bg-white hover:text-black">
                <span className="text-xs md:text-sm font-jura">{lang === 'en' ? 'GO TO' : 'ПЕРЕЙТИ'}</span>
                <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon group-hover:fill-black">
                  <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" />
                </svg>
              </button>
            </div>
            <div className="border border-white border-opacity-50 p-4 lg:p-6 flex items-center justify-center bg-transparent hidden md:hidden lg:flex">
              <p className="text-center text-[#5F5F5F] font-gajraj text-sm md:text-lg lg:text-xl">
                CREATORS<br />&<br />ART
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 4 */}
      <div className="relative w-full min-h-[713px] bg-[#0A0A0A] flex flex-col md:flex-col lg:flex-row items-center py-16 px-4 md:px-8 lg:px-16">
        <div className="w-full lg:w-1/2 flex flex-col items-start mb-4 md:mb-4 lg:mb-0">
          <p className="text-white font-jura text-3xl md:text-5xl lg:text-[64px] neon-text">{t.navCollections}</p>
          <p className="text-[#5F5F5F] font-gajraj text-xl md:text-2xl lg:text-3xl mt-8">FUTURE WITH AI</p>
          <img
            src="img/Group 10.png"
            alt="Collections"
            className="w-full md:max-w-full md:max-h-[400px] lg:max-w-[500px] lg:max-h-none h-auto mt-6 object-cover"
          />
          <p className="text-white font-jura text-sm md:text-base lg:text-lg mt-6 pr-0 max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
            {lang === 'en' ? 'Every piece of jewelry on our site can be tried on from the comfort of your home.' : 'каждое украшение, представленное на нашем сайте, вы можете примерить не выходя из дома'}
          </p>
          <Link to={lang === 'en' ? '/en/EarTracker' : '/EarTracker'}>
            <button
              className="mt-6 flex items-center space-x-2 border border-white rounded-full text-white px-3 py-1 md:px-6 md:py-2 lg:w-[183px] lg:px-8 lg:py-3 self-start md:self-start lg:self-start sm:self-end hover:bg-white hover:text-black transition duration-300"
            >
              <span className="text-xs md:text-sm font-jura">{lang === 'en' ? 'TRY NOW' : 'TRY NOW'}</span>
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
                  {lang === 'en' ? 'Author collection by NAME SURNAME dedicated to the long Yakutian winter' : 'авторская коллекция от ИМЯ ФАМИЛИЯ посвященная долгой якутской зиме'}
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

      {/* Slide 5 */}
      <div className="relative w-full min-h-[401px] flex items-center justify-center">
        <img src="img/bg.png" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <p className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">{lang === 'en' ? 'copyright' : 'copyright'}</p>
      </div>
    </div>
  );
};

export default MainMenu;