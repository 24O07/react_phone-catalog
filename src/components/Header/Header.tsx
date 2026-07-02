import React from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import styles from './Header.module.scss';
import { translations } from '../../locales';

export const Header: React.FC = () => {
  const { theme, toggleTheme, language, changeLanguage, cart, favorites } =
    useApp();

  const favoritesCount = favorites.length;

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.header}>
      {/* Контейнер для розміщення навігацій*/}
      <div className={styles.container}>
        {/*Лого */}
        <NavLink to="/" className={styles.logo}>
          <img
            src={theme === 'dark' ? 'logo.dark.svg' : 'logo.svg'}
            alt="Nice Gadgets Logo"
          />
        </NavLink>

        {/* Навігація*/}

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/" className={styles.navLink}>
                {translations.header.home[language]}
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink to="/phones" className={styles.navLink}>
                {translations.header.phones[language]}
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink to="/tablets" className={styles.navLink}>
                {translations.header.tablets[language]}
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink to="/accessories" className={styles.navLink}>
                {translations.header.accessories[language]}
              </NavLink>
            </li>
          </ul>
        </nav>

        {/*Блок для розміщення кнопок*/}
        <div className={styles.actions}>
          {/*Блок для теми */}
          <div className={styles.themeToggle} onClick={toggleTheme}>
            <input
              type="checkbox"
              checked={theme === 'dark'}
              className={styles.themeInput}
              readOnly
            />
            <span className={styles.themeSlider}>
              <span className={styles.themeIcon}>
                {theme === 'light' ? '☀️' : '🌙'}
              </span>
            </span>
          </div>
          {/*Кнопка для зміни мов */}
          <button
            type="button"
            className={styles.actionBtn}
            onClick={() => changeLanguage(language === 'eng' ? 'ukr' : 'eng')}
          >
            {language === 'eng' ? 'ENG' : 'UKR'}
          </button>
          {/*Лінк для товару що сподобався */}
          <NavLink to="/favorites" className={styles.iconLink}>
            <img
              src="favorites.svg"
              alt="Favorites"
              className={styles.iconImg}
            />
            {favoritesCount > 0 && (
              <span className={styles.badge}>{favoritesCount}</span>
            )}
          </NavLink>
          {/*Лінк для кошика */}
          <NavLink to="/cart" className={styles.iconLink}>
            <img src="cart.svg" alt="Cart" className={styles.iconImg} />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </NavLink>
        </div>
      </div>
    </header>
  );
};
