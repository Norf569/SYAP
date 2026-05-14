import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useCart } from "../context/CartContext";
import ArtCard from "../components/Catalogue/ArtCard";

import "./Cart.css";
import "./Cart.adaptive.css";

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <>
      <Header />

      <main className="cart">
        <div className="cart__inner">
          <h1 className="cart__title">Cart</h1>

          <p className="cart__amount">
            Amount of works: <span>{cart.length}</span>
          </p>

          <ul className="cart__list">
            {cart.map((item) => (
              <li className="cart-item" key={item.id}>
                <div className="cart-item__image">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="cart-item__info">
                  <h2 className="cart-item__title">{item.title}</h2>
                  <p className="cart-item__author">Author: {item.author}</p>
                  <p className="cart-item__desc">
                    Any description for such an artwork will be fine, I just need to sell it,
                    I don't really care how exactly I will do it.
                  </p>
                </div>

                <div className="cart-item__side">
                  <button
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </button>

                  <span className="cart-item__price">{item.price}$</span>

                  <button className="cart-item__btn">Order</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart__summary">
            <span className="cart__summary-label">Summary:</span>
            <span className="cart__summary-value">{total}$</span>
          </div>
        </div>
        <section className="suggest">
  <h2 className="suggest__title">You might like:</h2>

  <div className="suggest__grid">
    <ArtCard
      img="/img/Grid 8.png"
      title="Beyond the visible"
      author="Robert Paul"
      price={1200}
    />

    <ArtCard
      img="/img/grid 1.png"
      title="Silent Horizon"
      author="Anna Keller"
      price={900}
    />

    <ArtCard
      img="/img/Grid 3.png"
      title="Dream Sequence"
      author="Liam Hart"
      price={1500}
    />

    <ArtCard
      img="/img/Grid 5.png"
      title="Fragments of Light"
      author="Elena Moore"
      price={1800}
    />
  </div>
</section>

      </main>

      <Footer />
    </>
  );
};

export default Cart;
