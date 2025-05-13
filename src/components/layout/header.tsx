import { useState, useRef, useEffect } from 'react';
import Logo from '/assets/images/logo.svg'

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('uz'); // ⬅️ Default til: uz
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__logo">
          <a href=""><img src={Logo} alt="logo" /></a>
        </div>
        <nav className="header__nav">
          <a href="#home" className="header__link">Главная</a>
          <a href="#about" className="header__link">O нас</a>
          <div className="header__dropdown " ref={dropdownRef}>
            <button
              className="header__link header__dropdown-btn no-animate"
              onClick={() => setDropdownOpen(open => !open)}
            >
              Курсы ▼
            </button>
            {dropdownOpen && (
              <div className="header__dropdown-menu">
                <a href="#" className="header__dropdown-item">робототехника</a>
                <a href="#" className="header__dropdown-item">Английский</a>
                <a href="#" className="header__dropdown-item">Живопись для детей</a>
                <a href="#" className="header__dropdown-item">Живопись для взрослых</a>
              </div>
            )}
          </div>
          <a href="#contact" className="header__link">Контакты</a>
        </nav>

        <div className="header__actions">
          <a href="#call">
            <button className="header__call-btn">ПОЗВОНИТЬ</button>
          </a>
          <div className="header__lang">
            <button
              className={`header__lang-btn ${language === 'ru' ? 'header__lang-btn--active' : ''}`}
              onClick={() => setLanguage('ru')}
            >
              RU
            </button>
            <button
              className={`header__lang-btn ${language === 'uz' ? 'header__lang-btn--active' : ''}`}
              onClick={() => setLanguage('uz')}
            >
              UZ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
