import { TCategory } from "..";
import "../../../styles/header.css";

type THeader = {
  category: TCategory | null;
  setCategory: (category: TCategory) => void;
  sort: boolean;
  setSort: (sort: boolean) => void;
  search: string;
  setSearch: (search: string) => void;
};

export default function Header({
  category,
  setCategory,
  sort,
  setSort,
  search,
  setSearch,
}: THeader) {
  return (
    <div className="header-form">
      <div className="dropdown-sort">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {!category ? "Filter Kategori" : category}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("Kesehatan")}
              >
                Kesehatan
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("Sembako")}
              >
                Sembako
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("Pendidikan")}
              >
                Pendidikan
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("Hunian Layak")}
              >
                Hunian Layak
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={() => setCategory("None")}>
                None
              </a>
            </li>
          </ul>
        </div>
        <div className="sorting">
          <button className="btn" onClick={() => setSort(!sort)}>
            Urutkan {sort ? "Terlama" : "Terbaru"}
          </button>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          className="form-control"
          placeholder="Cari donasi"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
