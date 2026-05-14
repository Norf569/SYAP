import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "./Header.adaptive.css";
import AuthModal from "../AuthModal/AuthModal";

export const Header = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Загружаем тему при старте
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link className="header__logo" to="/">GALERIA</Link>

          <nav className="header__nav">
            <Link className="header__link" to="/catalogue">Catalogue</Link>
            <Link className="header__link" to="/about">About us</Link>
            <Link className="header__link" to="/cart">Cart</Link>
            <Link className="header__link" to="/">Main</Link>
          </nav>

          <div className="header__actions">

            {/* ТЕМА */}
            <button
              className="header__btn header__btn--theme"
              onClick={toggleTheme}
            >
              <img
  src={document.body.classList.contains("dark") ? "/img/moon.png" : "/img/sun.png"}
  alt="Theme icon"
  className="header__icon"
/>

            </button>

            {/* ПРОФИЛЬ */}
            <button
              className="header__btn header__btn--profile"
              onClick={() => setShowAuth(true)}
            >
              <img src="/img/home.png" alt="profile" />
            </button>
          </div>
        </div>
      </header>

      {showAuth && <AuthModal close={() => setShowAuth(false)} />}
    </>
  );
};

export default Header;
