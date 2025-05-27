import './LogInAuthor.css';
import StatusComponent from './StatusComponent';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useRef } from 'react';

const CustomInput = ({ label, placeholder, placeholderColor = "#999999", type = 'text', ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (val) => {
    setValue(type === 'uppercase' ? val.toUpperCase() : val);
  };

  return (
    <div className="input_box">
      {label && <label className="input_label">{label}</label>}
      <input
        type={type}
        className="input_style"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};


const ButtonGroup = () => {
  // Изменяем состояние на массив выбранных индексов
  const [activeButtons, setActiveButtons] = useState([]);

  const buttons = ['/001_RINGS', '/002_EARRINGS', '/003_CHAINS', '/004_OTHER'];

  const toggleButton = (index) => {
    setActiveButtons(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index) // Удаляем индекс, если уже выбран
        : [...prev, index] // Добавляем индекс, если не выбран
    );
  };

  return (
    <div className="button_group">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`button_categorie ${activeButtons.includes(index) ? 'active' : ''}`}
          onClick={() => toggleButton(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};
const UploadButtonGroup = () => {
  const [activeButton, setActiveButton] = useState(null);
  const fileInputRef = useRef(null);

  const buttons = [
    {
      icon: <img src='/img/file_upload_icon.png' alt="file_uploading" width={20} height={24} />,
      type: 'file'
    },
    {
      icon: <img src='/img/url_upload_icon.png' alt="url_uploading" width={28} height={13} />,
      type: 'url'
    }
  ];

  const handleButtonClick = (index, type) => {
    setActiveButton(index);
    if (type === 'file') {
      fileInputRef.current.click();
    } else {
      // Логика для URL загрузки
      console.log('URL upload selected');
      // Можно открыть модальное окно для ввода URL
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log('Выбранные файлы:', files);
      // Обработка файлов
    }
  };

  return (
    <div className="upload_group">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`upload_categorie ${activeButton === index ? 'active' : ''}`}
          onClick={() => handleButtonClick(index, button.type)}
        >
          {button.icon}
        </button>
      ))}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        multiple
      />
    </div>
  );
};


const App = () => {

  return (
    <div>
      <div className="LogInAuthorBody">
        <div className="slide1">
          <img src="/img/bg_loginauthor.png" alt="" className="bg_LogInAuthor" />
          <div className="navbar">
            <div className="menu">
              <Link to="/AboutUs">
                <button className="menu_1">О НАС</button>
              </Link>
              <Link to="/Catalog">
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
                  <path d="M40.3491 4.10794C40.5468 3.91514 40.5508 3.59858 40.3579 3.40089L37.216 0.17939C37.0232 -0.0182978 36.7066 -0.0222547 36.5089 0.170552C36.3112 0.363358 36.3073 0.679916 36.5001 0.877603L39.2929 3.74116L36.4294 6.53402C36.2317 6.72682 36.2277 7.04338 36.4205 7.24107C36.6134 7.43875 36.9299 7.44271 37.1276 7.24991L40.3491 4.10794ZM-0.00624951 3.74996L39.9937 4.24996L40.0062 3.25004L0.00624951 2.75004L-0.00624951 3.74996Z" fill="white" />
                </svg>
              </div>
            </button>
          </div>

          <p className="LogInAuthor_txt">HOME / AUTHORS_SPACE</p>
          <img src="/img/element_1.png" alt="" className="element_1" />
          <div className='main-content'>
            <div className='left-section'>
              <p className='title'>AUTHORS SPACE</p>
              <p className='subtitle'>Платформа, где искусство встречает ценителей. Разместите свои работы на цифровой витрине будущего.</p>
            </div>
            <img src="/img/element_welcome.png" alt="" className="element_welcome" />
          </div>
          <div className='profile_div'>
            <img src="/img/profile_bg.png" alt="" className="profile_bg" />
            <div className='profile_content'>
              <div className='col_1'>
                <div className='status_container'>
                  <img src="/img/status_bg.png" alt="" className="status_bg" />
                  <p className='status_txt'>STATUS</p>
                  <div className='checklist_container'>
                    <div className='checklist_row'>
                      <img src="/img/rhomb.png" alt="" className="rhomb" />
                      <p className='checklist_txt'>Заполните данные</p>
                    </div>
                    <div className='checklist_row'>
                      <img src="/img/rhomb.png" alt="" className="rhomb" />
                      <p className='checklist_txt'>Выберите категории</p>
                    </div>
                    <div className='checklist_row'>
                      <img src="/img/rhomb.png" alt="" className="rhomb" />
                      <p className='checklist_txt'>Загрузите портфолио</p>
                    </div>
                    <div className='checklist_row'>
                      <img src="/img/rhomb.png" alt="" className="rhomb" />
                      <p className='checklist_txt'>Загрузите изображения</p>
                    </div>

                  </div>
                  <img src="/img/loading_img.png" alt="" className="loading_img" />
                </div>
                <div className='author_photo'>
                  <img src="/img/photo_frame.png" alt="" className="photo_frame" />
                  {/* <img src="/img/bg_frame.png" alt="" className="bg_frame"/> */}

                </div>
              </div>
              <div className='col_2'>
                <img src="/img/profile_form.png" alt="" className="profile_form_bg" />
                <div className='form_container'>
                  <div style={{ width: "351px" }}><CustomInput type='text' placeholder="Фамилия Имя" /></div>
                  <CustomInput placeholder="+7(111)222-33-44" />
                  <CustomInput placeholder="example@mail.com" />
                  <div className='categories_container'>
                    <ButtonGroup />
                  </div>
                  <div className='upload_container'>
                    <UploadButtonGroup />

                  </div>
                </div>
              </div>

              <div className='col_3'>
                <img src="/img/profile_example_bg.png" alt="" className="profile_example_bg" />
                <p className='example_txt'>EXAMPLE</p>
                <img src="/img/example_jewelry.png" alt="" className="example_jewelry" />
              </div>

            </div>


          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <div className='send_button_container'>
              {/* <img src="/img/send_button.png" alt="" className="send_button_bg" /> */}

              <img src="/img/send_button.png" alt="Send" className='send_button_bg' />
              <button
                type="button"
                aria-label="Отправить сообщение"
                title="Кнопка отправки"
                className="send_button"
              >
                ОТПРАВИТЬ

              </button>
            </div>
          </div>


          <img src="/img/element_2.png" alt="" className="element_2" />
        </div>
        <div className='slide2'>
        </div>
      </div>
    </div>
  );

};

export default App;
