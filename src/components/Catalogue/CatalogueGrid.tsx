import { useState, useMemo } from "react";
import ArtCard from "./ArtCard";
import "./CatalogueGrid.css";

interface Props {
  search: string;
  sort: string;
  price: number;
  priceRange: [number, number] | null;
}

const data = [
  { img: "/img/Grid 2.png", title: "Parallel Silence", author: "Robert Paul", price: 10800 },
  { img: "/img/grid 1.png", title: "Beyond the visible", author: "Mia Kuro", price: 1923 },
  { img: "/img/Cat1.png", title: "Night Geometry", author: "Liam Voss", price: 1030 },
  { img: "/img/Grid 8.png", title: "Synthetic Bloom", author: "Elara Wynn", price: 2120 },
  { img: "/img/Grid 3.png", title: "Echoes of Light", author: "Dante Rho", price: 150 },
  { img: "/img/Grid 7.png", title: "Urban Mirage", author: "Sora Hale", price: 800 },
  { img: "/img/Grid 5.png", title: "Golden Static", author: "Kai Mercer", price: 590 },
  { img: "/img/Grid 4.png", title: "Blue Pulse", author: "Nova Elen", price: 170 },
  { img: "/img/grid 1.png", title: "Glass Garden", author: "Rin Sol", price: 1320 },
  { img: "/img/Grid 2.png", title: "Crimson Echo", author: "Aiden Crow", price: 1540 },
  { img: "/img/Grid 6.png", title: "Fragments of Time", author: "Vera Lune", price: 5000 },
  { img: "/img/Grid 4.png", title: "Neon Dreams", author: "Theo Mare", price: 1440 },
  { img: "/img/Grid 8.png", title: "Silent Horizon", author: "Lera Cloud", price: 1670 },
  { img: "/img/Grid 7.png", title: "Todays day", author: "Tanya Slaw", price: 1780 },
  { img: "/img/Grid 5.png", title: "Night", author: "Gregor Zamza", price: 100 },
  { img: "/img/Grid 3.png", title: "Revolution", author: "Robert Paul", price: 400 },
];

const ITEMS_PER_PAGE = 16;
const TOTAL_PAGES = 5;

const CatalogueGrid = ({ search, sort, price, priceRange }: Props) => {
  const [page, setPage] = useState(1);

  // создаём 5 страниц по 16 карточек
  const extended = useMemo(() => {
    return Array(TOTAL_PAGES)
      .fill(null)
      .flatMap(() => [...data].sort(() => Math.random() - 0.5));
  }, []);

  let items = [...extended];

  if (search.trim()) {
    items = items.filter((i) =>
      i.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  items = items.filter((i) => i.price <= price);

  if (priceRange) {
    const [min, max] = priceRange;
    items = items.filter((i) => i.price >= min && i.price <= max);
  }

  if (sort === "az") items.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "za") items.sort((a, b) => b.title.localeCompare(a.title));
  if (sort === "priceAsc") items.sort((a, b) => a.price - b.price);
  if (sort === "priceDesc") items.sort((a, b) => b.price - a.price);

  const randomized = useMemo(() => {
    return [...items].sort(() => Math.random() - 0.5);
  }, [page, items]);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = randomized.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className="catalogue-cards">
      <div className="catalogue-cards__grid">
        {visible.map((item, i) => (
          <ArtCard
            key={`${page}-${i}-${item.title}`}
            img={item.img}
            title={item.title}
            author={item.author}
            price={item.price}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          className="pagination__arrow"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          ←
        </button>

        {[...Array(TOTAL_PAGES)].map((_, i) => {
          const num = i + 1;
          return (
            <span
              key={num}
              className={`pagination__num ${page === num ? "active" : ""}`}
              onClick={() => setPage(num)}
            >
              {num}
            </span>
          );
        })}

        <button
          className="pagination__arrow"
          onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default CatalogueGrid;
