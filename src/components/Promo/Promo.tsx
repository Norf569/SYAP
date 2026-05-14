import { FC } from "react";
import "./Promo.css";

export const Promo: FC = () => {
  return (
    <section className="promo">
      <div className="promo__container">

        <div className="promo__content">
          <h1 className="promo__title">Your path to art</h1>

          <p className="promo__text">
            Curated artworks from emerging and established artists. Discover original paintings,
            sculptures, and limited editions — each piece chosen for its quality and story.
            Find art that speaks to you.
          </p>

          <a href="/about" className="promo__btn">About us</a>
        </div>

        <div className="promo__image-block">
          <img
            src="/img/Vector.png"
            alt="Art composition"
            className="promo__image"
          />
        </div>

      </div>
    </section>
  );
};

export default Promo;
