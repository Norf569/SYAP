import { FC } from "react";
import "./ArtistsGrid.css";
import "./ArtistsGrid.adaptive.css";

const ArtistsGrid: FC = () => {
  return (
    <section className="artists">
      <div className="artists__container">

        <h2 className="artists__title">Artists</h2>

        <div className="artists__grid">

          <img src="/img/grid 1.png" className="artists__item artists__item--1" alt="Artwork 1" />
          <img src="/img/Grid 2.png" className="artists__item artists__item--2" alt="Artwork 2" />
          <img src="/img/Grid 3.png" className="artists__item artists__item--3" alt="Artwork 3" />
          <img src="/img/Grid 5.png" className="artists__item" alt="Artwork 4" />
          <img src="/img/Grid 4.png" className="artists__item artists__item--5" alt="Artwork 5" />
          <img src="/img/Grid 6.png" className="artists__item" alt="Artwork 6" />
          <img src="/img/Grid 8.png" className="artists__item" alt="Artwork 7" />
          <img src="/img/Grid 7.png" className="artists__item" alt="Artwork 8" />

          <p className="artists__text">
            Art is something special, and it's different for everyone. Here you can
            find something that's right for you. We all come to art sooner or later.
            Become part of our community.
          </p>

          <a className="artists__btn" href="/catalogue">
            <span className="artists__arrow">→</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default ArtistsGrid;
