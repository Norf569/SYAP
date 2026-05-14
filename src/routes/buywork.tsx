import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./buywork.css";
import "./buywork.adaptive.css";

const Buywork = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <>
        <Header />
        <main className="buywork">
          <h1 style={{ fontSize: "32px", marginTop: "40px" }}>
            No artwork selected
          </h1>
          <p style={{ marginTop: "10px", fontSize: "18px" }}>
            Please choose an artwork from the catalogue.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  const { img, title, author, price } = state;

  return (
    <>
      <Header />

      <main className="buywork">
        <div className="buywork__decor buywork__decor--red"></div>
        <div className="buywork__decor buywork__decor--blue"></div>

        <div className="buywork__inner">

          {/* LEFT — IMAGE */}
          <div className="buywork__gallery">
            <img src={img} alt={title} className="buywork__image" />
          </div>

          {/* RIGHT — INFO */}
          <div className="buywork__info">

            <p className="buywork__note">
              A digital version is a high-resolution file uploaded by the author of the work
              or his/her authorized representative. The price also includes the right to
              reproduce the image once in digital or printed form.
            </p>

            <div className="buywork__head">
              <h1 className="buywork__title">{title}</h1>
              <span className="buywork__price">€{price}</span>
            </div>

            <h2 className="buywork__author">{author}</h2>

            <p className="buywork__description">
              "Spring" is a celebrated artwork by Czech Art Nouveau artist Alphonse Mucha,
              created in 1896 as part of his series "The Seasons." This piece features a young
              woman surrounded by blooming flowers and lush greenery, symbolizing renewal and
              the vitality of nature. Mucha's signature style is evident in the intricate
              details, flowing lines, and ornamental patterns that characterize the work.
              The soft, vibrant color palette evokes the warmth and liveliness of the season.
            </p>

            <div className="buywork__specs">
              <p className="buywork__specs-price">€{price}</p>
              <ul className="buywork__specs-list">
                <li>Digital Version: 346.9 kB</li>
                <li>965 × 1868 px • JPEG</li>
                <li>26.2 × 50 cm • 94 dpi</li>
                <li>16.3 × 31.6 cm • 150 dpi</li>
                <li>8.2 × 15.8 cm • 300 dpi</li>
              </ul>
            </div>

            <div className="buywork__actions">
              <button className="buywork__btn buywork__btn--primary">
                Digital version
              </button>

              <button className="buywork__btn buywork__btn--outline">
                Add to the cart
              </button>
            </div>

            <div className="buywork__digital" id="digitalInfo" hidden>
              <p>Digital file is ready for download after purchase.</p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Buywork;
