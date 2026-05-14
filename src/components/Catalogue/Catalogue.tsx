import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CatalogueFilters from "./CatalogueFilters";
import CatalogueGrid from "./CatalogueGrid";
import "./Catalogue.css";

const Catalogue = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [price, setPrice] = useState(10000);

  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);

  return (
    <>
      <Header />

      <section className="catalogue">
        <div className="catalogue__inner">
          <h2 className="catalogue__title">CATALOGUE</h2>

          <p className="catalogue__text">
            Here you can view, appreciate and purchase the main masterpieces of contemporary art.The paintings have been collected here for many years, after making 
            a purchase you can contact the artist for information
          </p>

          <CatalogueFilters
            search={search}
            setSearch={setSearch}
            sort={sort}
            setSort={setSort}
            price={price}
            setPrice={setPrice}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
      </section>

      <CatalogueGrid
        search={search}
        sort={sort}
        price={price}
        priceRange={priceRange}
      />

      <Footer />
    </>
  );
};

export default Catalogue;
