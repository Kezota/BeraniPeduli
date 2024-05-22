import { Grid } from "@mui/material";
import Popup from "../../../components/Popup";
import { useDonationContext } from "../../../context/DonationContext";
import "../../../styles/addDonation.css";
import { TCategory } from "../../../types/TCategory";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../../utils";

export default function AddDonation() {
  const { onTogglePopup, selectedDonation, setDonations, openPopup } =
    useDonationContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState<TCategory>("Kesehatan");
  const [target, setTarget] = useState(0);

  useEffect(() => {
    if (!openPopup) {
      setTitle("");
      setDescription("");
      setImage("");
      setCategory("Kesehatan");
      setTarget(0);
    }
  }, [openPopup]);

  if (selectedDonation) return null;

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

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const imageBlob = e.target.files[0];
    const imageURL = URL.createObjectURL(imageBlob);
    setImage(imageURL);
  };

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
              <input id="image" type="file" onChange={onChangeImage} />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="category">Kategori</label>
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
