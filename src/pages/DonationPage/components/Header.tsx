import { useDonationContext } from "../../../context/DonationContext";
import "../../../styles/header.css";
import AddIcon from "@mui/icons-material/Add";
import SwapVertIcon from "@mui/icons-material/SwapVert";

export default function Header() {
  const { category, setCategory, sort, setSort, search, setSearch } =
    useDonationContext();

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
            {!category ? "Filter" : category}
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
            Urutkan <SwapVertIcon />
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
      <div className="add">
        <button className="btn">
          <AddIcon />
          Tambah
        </button>
      </div>
    </div>
  );
}
