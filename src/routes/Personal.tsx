import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useFavourites } from "../context/FavoritesContext";
import ArtCard from "../components/Catalogue/ArtCard";
import { useState } from "react";
import SettingsModal from "../components/SettingsModal/SettingsModal";

import "./personal.css";

const Personal = () => {
  const { favourites } = useFavourites();
  const [showSettings, setShowSettings] = useState(false);

  // Достаём данные пользователя
  const userName = localStorage.getItem("userName") || "Guest";
  const userEmail = localStorage.getItem("userEmail") || "No email";

  // ВАЖНО: если аватар не выбран → ставим person.png
  const userAvatar =
    localStorage.getItem("userAvatar") || "/img/person.png";

  return (
    <>
      <Header />

      {/* PROFILE HEADER */}
      <header className="profile">
        <div className="profile__inner">

          {/* АВАТАР */}
          <div className="profile__avatar" aria-label="Avatar">
            <span className="profile__avatar-icon">
              <img src={userAvatar} alt="avatar" />
            </span>
          </div>

          {/* ИМЯ */}
          <h1 className="profile__name">{userName}</h1>

          {/* EMAIL */}
          <p className="profile__phone">{userEmail}</p>

          {/* МЕНЮ */}
          <nav className="profile__menu">
            <button className="profile__item" type="button">
              <span className="profile__icon">
                <img src="/img/info.png" alt="info" />
              </span>
              <span className="profile__label">Information</span>
            </button>

            <button className="profile__item" type="button">
              <span className="profile__icon">
                <img src="/img/payment.png" alt="payment" />
              </span>
              <span className="profile__label">Payment</span>
            </button>

            <button
              className="profile__item"
              type="button"
              onClick={() => setShowSettings(true)}
            >
              <span className="profile__icon">
                <img src="/img/settings.png" alt="settings" />
              </span>
              <span className="profile__label">Settings</span>
            </button>
          </nav>

        </div>
      </header>

      {/* MAIN */}
      <main className="personal">

        {/* FAVOURITES */}
        <section className="favourites">
          <h2 className="favourites__title">Favourites:</h2>

          {favourites.length === 0 ? (
            <div className="favourites__empty">
              <div className="favourites__empty-icon">(ಥ﹏ಥ)</div>
            Nothing has been added to favourites yet
            </div>
          ) : (
            <div className="favourites__grid">
              {favourites.map((item) => (
                <ArtCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                />
              ))}
            </div>
          )}
        </section>

        {/* YOU MIGHT LIKE */}
        <section className="suggest">
          <h2 className="suggest__title">You might like:</h2>

          <div className="suggest__grid">
            <ArtCard img="/img/Grid 8.png" title="Beyond the visible" author="Robert Paul" price={1200} />
            <ArtCard img="/img/grid 1.png" title="Silent Horizon" author="Anna Keller" price={900} />
            <ArtCard img="/img/Grid 3.png" title="Dream Sequence" author="Liam Hart" price={1500} />
            <ArtCard img="/img/Grid 5.png" title="Fragments of Light" author="Elena Moore" price={1800} />
          </div>
        </section>

      </main>

      <Footer />

      {/* SETTINGS MODAL */}
      {showSettings && <SettingsModal close={() => setShowSettings(false)} />}
    </>
  );
};

export default Personal;
