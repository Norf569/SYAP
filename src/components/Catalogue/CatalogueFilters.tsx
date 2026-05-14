import "./CatalogueFilters.css";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  sort: string;
  setSort: (v: string) => void;
  price: number;
  setPrice: (v: number) => void;

  priceRange: [number, number] | null;
  setPriceRange: (v: [number, number] | null) => void;
}

const CatalogueFilters = ({
  search,
  setSearch,
  sort,
  setSort,
  price,
  setPrice,
  priceRange,
  setPriceRange,
}: Props) => {
  return (
    <div className="filters">

      {/* Линия 1 — Search + кнопка Search + Default + Price */}
      <div className="filters__top">

        <div className="filters__search-block">
          <input
            type="text"
            className="filters__search-input"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="filters__search-btn"
            onClick={() => {}}
          >
            Search
          </button>
        </div>

        <select
          className="filters__select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="az">A–Z</option>
          <option value="za">Z–A</option>
          <option value="priceAsc">Price ↑</option>
          <option value="priceDesc">Price ↓</option>
        </select>

        <select
          className="filters__select"
          onChange={(e) => {
            const value = e.target.value;

            if (value === "") return setPriceRange(null);

            const [min, max] = value.split("-").map(Number);
            setPriceRange([min, max]);
          }}
        >
          <option value="">Price</option>
          <option value="100-500">100–500</option>
          <option value="500-1000">500–1000</option>
          <option value="1000-2000">1000–2000</option>
          <option value="2000-5000">2000–5000</option>
        </select>
      </div>

      {/* Линия 2 — ползунок */}
      <div className="filters__bottom">
        <label className="filters__label">Max price: {price}$</label>

        <input
          type="range"
          min={0}
          max={10000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="filters__range"
        />
      </div>
    </div>
  );
};

export default CatalogueFilters;
