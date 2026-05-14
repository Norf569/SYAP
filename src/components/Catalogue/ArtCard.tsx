import "./ArtCard.css";
import "./ArtCard.adaptive.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useFavourites } from "../../context/FavoritesContext";

interface ArtCardProps {
  img: string;
  title: string;
  author: string;
  price: number;
}

const ArtCard = ({ img, title, author, price }: ArtCardProps) => {
  const { addToCart } = useCart();
  const { toggleFavourite, isFavourite } = useFavourites();

  const [clickedHeart, setClickedHeart] = useState(false);
  const [clickedBasket, setClickedBasket] = useState(false);
  const [inCart, setInCart] = useState(false);

  const id = title.length + price;

  const handleHeart = () => {
    toggleFavourite({ id, img, title, author, price });
    setClickedHeart(true);
    setTimeout(() => setClickedHeart(false), 350);
  };

  const handleBasket = () => {
    addToCart({ id: Date.now(), img, title, author, price });
    setInCart(true);
    setClickedBasket(true);
    setTimeout(() => setClickedBasket(false), 350);
  };

  return (
    <article className={`art-card ${inCart ? "art-card--in-cart" : ""}`}>
      <img src={img} alt={title} className="art-card__image" />

      <div className="art-card__content">
        <div className="art-card__title-row">
          <h3 className="art-card__title">{title}</h3>

          <span className="art-card__icon">
            {/* ❤️ ИЗБРАННОЕ */}
            <img
              src={
                isFavourite(id)
                  ? "/img/line-md_heart_filled.png"
                  : "/img/line-md_heart.svg"
              }
              alt=""
              className={`art-card__heart ${clickedHeart ? "icon-bounce" : ""}`}
              onClick={handleHeart}
              style={{ cursor: "pointer" }}
            />

            {/* 🛒 КОРЗИНА */}
            <img
              src="/img/Property 1=Basket_alt_3.svg"
              alt=""
              className={`art-card__basket ${clickedBasket ? "icon-bounce" : ""}`}
              onClick={handleBasket}
              style={{ cursor: "pointer" }}
            />
          </span>
        </div>

        <p className="art-card__author">{author}</p>

        <div className="art-card__row">
          <span className="art-card__price">From {price}$</span>

          <Link
            to="/buywork"
            state={{ img, title, author, price }}
            className="art-card__btn"
          >
            Buy now
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArtCard;
