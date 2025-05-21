import './Collections.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

const Collections = () => {
    const [hoveredDisc, setHoveredDisc] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [authors, setAuthors] = useState([]);
    const [filteredAuthors, setFilteredAuthors] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const AUTHORS_PER_SLIDE = 6;
    const totalSlides = Math.ceil(filteredAuthors.length / AUTHORS_PER_SLIDE);

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

    const getCurrentSlideAuthors = () => {
      const start = currentSlide * AUTHORS_PER_SLIDE;
      const end = start + AUTHORS_PER_SLIDE;
      return filteredAuthors.slice(start, end);
    };
  
    if (isLoading) return <div>Загрузка...</div>;


    return (
    <div>
      <div className='CollBody'>
        <div className="slide1_coll">
          <img src="/img/bg_coll.png" alt="" className="bg_coll" />
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
          
          <img src="/img/tetya.png" alt="" className="coll_image" />

          <p className='collections_txt'>COLLECTIONS</p>
          <p className="Catalog_txt">HOME / COLLECTIONS</p>

          <div className='blok1_coll'>
            <svg width="415" height="118" viewBox="0 0 415 118" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M189.492 68.8438L121.898 1.25H95.3438L162.938 68.8438H189.492Z" 
                fill="white" 
                stroke="white" 
                strokeOpacity="0.5"
              />
              <path 
                d="M142.82 68.8438L75.2266 1.25H48.6719L116.266 68.8438H142.82Z" 
                fill="white" 
                stroke="white" 
                strokeOpacity="0.5"
              />
              <path 
                d="M96.1484 68.8438L28.5547 1.25H2L69.5938 68.8438H96.1484Z" 
                fill="white" 
                stroke="white" 
                strokeOpacity="0.5"
              />
              <path 
                d="M414 117.125V113.102H334.336L330.312 117.125H414Z" 
                fill="white" 
                stroke="white" 
                strokeOpacity="0.5"
              />
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
                <path 
                  d="M210.414 68.8438L142.82 1.25H401.93L414 13.3203V68.8438H210.414Z" 
                  fill="white" 
                  fillOpacity="0.1"
                />
                <path 
                  d="M88.1016 84.9375H414V100.227H326.289L309.391 117.125H120.289L88.1016 84.9375Z" 
                  fill="white" 
                  fillOpacity="0.1"
                />
                <path 
                  d="M210.414 68.8438L142.82 1.25H401.93L414 13.3203V68.8438H210.414Z" 
                  stroke="white" 
                  strokeOpacity="0.4"
                />
                <path 
                  d="M88.1016 84.9375H414V100.227H326.289L309.391 117.125H120.289L88.1016 84.9375Z" 
                  stroke="white" 
                  strokeOpacity="0.4"
                />
              </g>
              <defs>
                <clipPath id="bgblur_0_444_176_clip_path" transform="translate(-66.8945 19.25)">
                  <path d="M210.414 68.8438L142.82 1.25H401.93L414 13.3203V68.8438H210.414Z"/>
                  <path d="M88.1016 84.9375H414V100.227H326.289L309.391 117.125H120.289L88.1016 84.9375Z"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          <p className='text_to_blok1'>WELCOME</p>
          <p className='text2_to_blok1'>TO DIGITAL</p>
          <p className='text3_to_blok1'>GALLERY</p>

          <div className='line_coll1'>
            <svg width="315" height="6" viewBox="0 0 315 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3V3.5H316V3V2.5H3V3Z" fill="white"/>
            </svg>
          </div>

          <p className='text_coll1'>
          это цифровая галерея коллекций, здесь вы можете познакомиться с миром авторов и выбрать тех, чья история изделий отражает ваш внутренний мир
          </p>

          <div className='group_coll_text1'>
            <p className='text_to_group'>AUTHORS’ HISTORY</p>
            <p className='text_to_group2'>история авторов, запечатленная в коллекциях</p>
            <div className='line_to_group'>
              <svg width="316" height="6" viewBox="0 0 316 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M310.333 3C310.333 4.47276 311.527 5.66667 313 5.66667C314.473 5.66667 315.667 4.47276 315.667 3C315.667 1.52724 314.473 0.333333 313 0.333333C311.527 0.333333 310.333 1.52724 310.333 3ZM0 3V3.5H313V3V2.5H0V3Z" fill="white" fill-opacity="0.4"/>
              </svg>
            </div>
          </div>

          <div className='group_coll_text2'>
            <p className='text_to_group'>UNIQUENESS</p>
            <p className='text_to_group2'>уникальность изделий и поиск своего стиля</p>
            <div className='line_to_group'>
              <svg width="316" height="6" viewBox="0 0 316 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M310.333 3C310.333 4.47276 311.527 5.66667 313 5.66667C314.473 5.66667 315.667 4.47276 315.667 3C315.667 1.52724 314.473 0.333333 313 0.333333C311.527 0.333333 310.333 1.52724 310.333 3ZM0 3V3.5H313V3V2.5H0V3Z" fill="white" fill-opacity="0.4"/>
              </svg>
            </div>
          </div>

          <img src="/img/object_coll1.png" alt="" className="coll_object1" />
          <img src="/img/object_coll2.png" alt="" className="coll_object2" />
          </div>

          <div className="slide2_coll">
            <div className='vector_coll1'>
              <svg width="710" height="24" viewBox="0 0 710 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M699.033 7.47059L708 12.6471H676.843L667.876 7.47059H699.033Z" fill="white"/>
                <path d="M40.1243 23L29.7697 12.6471H220.037L230.391 23H40.1243Z" fill="white"/>
                <path d="M0 12.6471H29.7697M543.62 7.47059L538.442 12.6471H220.037M530.676 7.47059L537.148 1H612.219L618.691 7.47059M608.336 7.47059L613.514 12.6471H676.843M676.843 12.6471H708L699.033 7.47059H667.876L676.843 12.6471ZM29.7697 12.6471L40.1243 23H230.391L220.037 12.6471M29.7697 12.6471H220.037" stroke="white" stroke-linecap="round"/>
              </svg>
            </div>

            <p className='text_slide2_coll'>НАШИ АВТОРЫ</p>

            <div className='vector_coll2'>
              <svg width="482" height="100" viewBox="0 0 482 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.8548 1L1 38.0777V95H253.415L276.372 77.9223H470.583L481 70.1748V1H379.657L362.543 8.3486H320.873L283.759 1H50.8548Z" fill="white" fill-opacity="0.3" stroke="white" stroke-opacity="0.4"/>
                <path d="M351.123 89.9533L341.784 84H326.374L320.304 87.8696H275.944L282.014 84H326.374H341.784L351.123 89.9533H407.623L416.962 84H428.169H473.93L480 87.8696H434.239L428.169 84H416.962L407.623 89.9533L416.962 95.9066H443.111H449.181L451.983 99H445.913L443.111 95.9066H416.962L407.623 89.9533H351.123Z" fill="white"/>
                <path d="M458.52 99L455.719 95.9066H462.256L465.058 99H458.52Z" fill="white"/>
                <path d="M407.623 89.9533H351.123L341.784 84L326.374 84M407.623 89.9533L416.962 84H428.169M407.623 89.9533L416.962 95.9066H443.111M428.169 84H473.93L480 87.8696H434.239L428.169 84ZM443.111 95.9066H449.181L451.983 99H445.913L443.111 95.9066ZM320.304 87.8696H275.944L282.014 84L326.374 84M320.304 87.8696L326.374 84M320.304 87.8696L310.965 93.8229H268M455.719 95.9066L458.52 99H465.058L462.256 95.9066H455.719Z" stroke="white" stroke-width="0.5"/>
              </svg>
            </div>

            <div className='vector_coll3'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6877 12.6877C13.3235 12.052 13.8278 11.2972 14.1719 10.4666C14.516 9.63592 14.693 8.74562 14.693 7.84652C14.693 6.94743 14.516 6.05713 14.1719 5.22647C13.8278 4.39581 13.3235 3.64106 12.6877 3.0053C12.052 2.36954 11.2972 1.86523 10.4666 1.52116C9.63592 1.17709 8.74562 1 7.84652 1C6.94743 1 6.05713 1.17709 5.22647 1.52116C4.39581 1.86523 3.64106 2.36954 3.0053 3.0053C1.72133 4.28927 1 6.03071 1 7.84652C1 9.66234 1.72133 11.4038 3.0053 12.6877C4.28927 13.9717 6.03071 14.693 7.84652 14.693C9.66234 14.693 11.4038 13.9717 12.6877 12.6877ZM12.6877 12.6877L17 17" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className='vector_coll4'>
              <svg width="400" height="1" viewBox="0 0 400 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="400" y2="0.5" stroke="#939393"/>
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
                    {row.map((index) => (
                      <div key={`${rowIndex}-${index}`} className={`search_authors_blok${index}`}>
                        <div className="rectangle_svg_coll">
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
                            <rect x="9.70898" y="10.5925" width="123.582" height="123.582" rx="20" fill="#D9D9D9" />
                            <rect x="9.70898" y="144.767" width="123.582" height="123.582" rx="20" fill="#D9D9D9" />
                            <rect x="144.383" y="11.0925" width="259.405" height="55.4946" rx="11.5" stroke="white" strokeOpacity="0.4" />
                            <rect x="144.383" y="78.1798" width="259.405" height="55.4946" rx="11.5" stroke="white" strokeOpacity="0.4" />
                            <rect x="144.383" y="145.267" width="259.405" height="122.582" rx="11.5" stroke="white" strokeOpacity="0.4" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>






            <div className="authors-carousel">
        {filteredAuthors.length === 0 ? (
          <div className="no-results">Авторы не найдены</div>
        ) : (
          <>
            <div className="authors-grid">
              {getCurrentSlideAuthors().map(author => (
                <div key={author.id} className="author-card">
                  <h3>{author.name}</h3>
                  <p>{author.email}</p>
                  <p>{author.phone}</p>
                  <blockquote>"{author.quote}"</blockquote>
                </div>
              ))}
            </div>

            {totalSlides > 1 && (
              <div className="carousel-controls">
                <button 
                  onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
                  disabled={currentSlide === 0}
                >
                  Назад
                </button>
                <span>Слайд {currentSlide + 1} из {totalSlides}</span>
                <button 
                  onClick={() => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1))}
                  disabled={currentSlide === totalSlides - 1}
                >
                  Вперед
                </button>
                  </div>
                )}
              </>
            )}
           </div>
          </div>
        </div>
    </div>
  );
};

export default Collections;