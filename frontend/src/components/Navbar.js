import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ lang = 'ru' }) => {
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
    return (
        <nav className="relative w-full flex justify-between items-center px-4 py-6 md:px-8 lg:px-20">
            <div className="text-white text-sm font-oi md:block hidden">apro__<br/>___tag.</div>
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


    );
};

export default Navbar;