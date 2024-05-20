import { Grid } from "@mui/material";
import Popup from "../../../components/Popup";
import { useDonationContext } from "../../../context/DonationContext";
import "../../../styles/addDonation.css";
import { TCategory } from "../../../types/TCategory";
import { useState } from "react";
import { formatCurrency } from "../../../utils";

export default function AddDonation() {
  const { onTogglePopup, selectedDonation, setDonations } =
    useDonationContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState<TCategory>("Kesehatan");
  const [target, setTarget] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submitted");

    setDonations((prev) => [
      {
        title,
        description,
        image,
        category,
        target,
        raised: 0,
      },
      ...prev,
    ]);

    onTogglePopup();
  }

  if (selectedDonation) return null;

  return (
    <Popup onTogglePopup={onTogglePopup}>
      <div className="add-donation">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <h3>Add Donation</h3>
          <hr />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="description">Deskripsi singkat</label>
              <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="file"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="category">Kategori</label>
              {/* <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as TCategory)}
              >
                <option value="Kesehatan">Kesehatan</option>
                <option value="Sembako">Sembako</option>
                <option value="Pendidikan">Pendidikan</option>
                <option value="Hunian Layak">Hunian Layak</option>
              </select> */}
              <div className="category-radio">
                <span>
                  <input
                    type="radio"
                    name="categoryRadio"
                    value="Kesehatan"
                    id="kesehatan"
                    checked={category === "Kesehatan"}
                    onChange={(e) => setCategory(e.target.value as TCategory)}
                  />
                  <label htmlFor="kesehatan">Kesehatan</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="categoryRadio"
                    value="Sembako"
                    id="sembako"
                    checked={category === "Sembako"}
                    onChange={(e) => setCategory(e.target.value as TCategory)}
                  />
                  <label htmlFor="sembako">Sembako</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="categoryRadio"
                    value="Pendidikan"
                    id="pendidikan"
                    checked={category === "Pendidikan"}
                    onChange={(e) => setCategory(e.target.value as TCategory)}
                  />
                  <label htmlFor="pendidikan">Pendidikan</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="categoryRadio"
                    value="Hunian Layak"
                    id="hunian-layak"
                    checked={category === "Hunian Layak"}
                    onChange={(e) => setCategory(e.target.value as TCategory)}
                  />
                  <label htmlFor="hunian-layak">Hunian Layak</label>
                </span>
              </div>
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="target">Target</label>
              <input
                id="target"
                type="number"
                value={target || ""}
                onChange={(e) => setTarget(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <h3 className="donation-target">{formatCurrency(target)}</h3>
            </Grid>
          </Grid>
          <div className="add-donation-btn">
            <button>Tambah donasi</button>
          </div>
        </form>
      </div>
    </Popup>
  );
}
